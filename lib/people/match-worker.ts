import "server-only";

import type { SupabaseClient } from "@supabase/supabase-js";
import { writeSystemAuditEvent } from "@/lib/audit";
import {
  complete,
  fail,
  refreshLock,
  setProgress,
  type BackgroundJob,
} from "@/lib/people/background-jobs";
import {
  isScoreSufficient,
  scoreCandidate,
  SCORING_VERSION,
  type ScoreCandidateInput,
  type ScoreJobInput,
  type ScoreResult,
} from "@/lib/people/score";
import { parseStoredWeights } from "@/lib/people/scoring-weights";
import type { RemotePolicy, ScoringWeights } from "@/types";

export const MATCH_BATCH_SIZE = 100;

type CandidateScoreRow = {
  id: string;
  skills: unknown;
  experience_years: unknown;
  current_role: string | null;
  headline: string | null;
  location: string | null;
  archived_at: string | null;
};

type CandidateJobRow = {
  id: string;
  candidate_id: string;
};

type JobScoreRow = {
  id: string;
  required_skills: unknown;
  preferred_skills: unknown;
  experience_min_years: unknown;
  experience_max_years: unknown;
  seniority: string | null;
  location: string | null;
  remote_policy: RemotePolicy | null;
  scoring_weights: unknown;
  scoring_weights_version: number | null;
};

export type PeopleMatchProgress = {
  processed: number;
  scored: number;
  insufficient: number;
  skipped: number;
  total: number;
  scoring_version: string;
  scoring_weights_version: number;
};

function parsePeopleMatchJobId(payload: Record<string, unknown>): string | null {
  const jobId = payload.job_id;
  if (typeof jobId !== "string") return null;
  const trimmed = jobId.trim();
  return trimmed || null;
}

function coerceSkills(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === "string");
}

function coerceYears(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const n = Number(value);
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

function toScoreCandidateInput(candidate: CandidateScoreRow): ScoreCandidateInput {
  return {
    skills: coerceSkills(candidate.skills),
    experience_years: coerceYears(candidate.experience_years),
    current_role: candidate.current_role,
    headline: candidate.headline,
    location: candidate.location,
  };
}

function toScoreJobInput(job: JobScoreRow): ScoreJobInput {
  return {
    required_skills: coerceSkills(job.required_skills),
    preferred_skills: coerceSkills(job.preferred_skills),
    experience_min_years: coerceYears(job.experience_min_years),
    experience_max_years: coerceYears(job.experience_max_years),
    seniority: job.seniority,
    location: job.location,
    remote_policy: job.remote_policy,
  };
}

function buildCandidateJobPatch(
  result: ScoreResult,
  weightsVersion: number,
): Record<string, unknown> {
  const shared = {
    match_weights_used: {
      weights: result.weights,
      weights_version: weightsVersion,
    },
    scoring_version: SCORING_VERSION,
    ai_explanation: null,
    ai_model: null,
    ai_prompt_version: null,
  };

  if (isScoreSufficient(result)) {
    return {
      ...shared,
      match_score: result.score,
      match_components: result.components,
      data_quality: "sufficient",
      insufficient_reason: null,
    };
  }

  return {
    ...shared,
    match_score: null,
    match_components: null,
    data_quality: "insufficient",
    insufficient_reason: result.reason,
  };
}

function emptyProgress(weightsVersion: number, total = 0): PeopleMatchProgress {
  return {
    processed: 0,
    scored: 0,
    insufficient: 0,
    skipped: 0,
    total,
    scoring_version: SCORING_VERSION,
    scoring_weights_version: weightsVersion,
  };
}

export async function handlePeopleMatch(
  supabase: SupabaseClient,
  job: BackgroundJob,
): Promise<{ status: "completed" | "failed"; error?: string }> {
  const targetJobId = parsePeopleMatchJobId(job.payload);
  if (!targetJobId) {
    await fail(supabase, job.id, "invalid_payload");
    return { status: "failed", error: "invalid_payload" };
  }

  const teamId = job.teamId;

  const { data: jobRow, error: jobError } = await supabase
    .from("jobs")
    .select(
      "id, required_skills, preferred_skills, experience_min_years, experience_max_years, seniority, location, remote_policy, scoring_weights, scoring_weights_version",
    )
    .eq("id", targetJobId)
    .eq("team_id", teamId)
    .maybeSingle();

  if (jobError || !jobRow) {
    await fail(supabase, job.id, "job_not_found");
    return { status: "failed", error: "job_not_found" };
  }

  const peopleJob = jobRow as JobScoreRow;
  const weights = parseStoredWeights(peopleJob.scoring_weights);
  if (!weights) {
    await fail(supabase, job.id, "invalid_weights");
    return { status: "failed", error: "invalid_weights" };
  }

  const weightsVersion =
    typeof peopleJob.scoring_weights_version === "number"
      ? peopleJob.scoring_weights_version
      : 1;

  const { data: idRows, error: countError } = await supabase
    .from("candidate_jobs")
    .select("id")
    .eq("job_id", targetJobId)
    .eq("team_id", teamId);

  if (countError) {
    await fail(supabase, job.id, "match_write_failed");
    return { status: "failed", error: "match_write_failed" };
  }

  const total = (idRows ?? []).length;
  let processed = 0;
  let scored = 0;
  let insufficient = 0;
  let skipped = 0;
  let offset = 0;

  while (true) {
    const { data: applicationRows, error: batchError } = await supabase
      .from("candidate_jobs")
      .select("id, candidate_id")
      .eq("job_id", targetJobId)
      .eq("team_id", teamId)
      .order("id", { ascending: true })
      .range(offset, offset + MATCH_BATCH_SIZE - 1);

    if (batchError) {
      await fail(supabase, job.id, "match_write_failed");
      return { status: "failed", error: "match_write_failed" };
    }

    const rows = (applicationRows ?? []) as CandidateJobRow[];
    if (rows.length === 0) break;

    const candidateIds = [...new Set(rows.map((row) => row.candidate_id))];
    const { data: candidateRows, error: candidateError } = await supabase
      .from("candidates")
      .select(
        'id, skills, experience_years, "current_role", headline, location, archived_at',
      )
      .eq("team_id", teamId)
      .in("id", candidateIds);

    if (candidateError) {
      await fail(supabase, job.id, "match_write_failed");
      return { status: "failed", error: "match_write_failed" };
    }

    const candidateById = new Map(
      ((candidateRows ?? []) as CandidateScoreRow[]).map((candidate) => [
        candidate.id,
        candidate,
      ]),
    );

    for (const row of rows) {
      processed += 1;
      const candidate = candidateById.get(row.candidate_id);
      if (!candidate || candidate.archived_at) {
        skipped += 1;
        continue;
      }

      const result = scoreCandidate(
        toScoreCandidateInput(candidate),
        toScoreJobInput(peopleJob),
        weights,
      );
      const patch = buildCandidateJobPatch(result, weightsVersion);

      const { error: updateError } = await supabase
        .from("candidate_jobs")
        .update(patch)
        .eq("id", row.id)
        .eq("team_id", teamId);

      if (updateError) {
        await fail(supabase, job.id, "match_write_failed");
        return { status: "failed", error: "match_write_failed" };
      }

      if (isScoreSufficient(result)) scored += 1;
      else insufficient += 1;
    }

    const progress: PeopleMatchProgress = {
      processed,
      scored,
      insufficient,
      skipped,
      total,
      scoring_version: SCORING_VERSION,
      scoring_weights_version: weightsVersion,
    };
    await refreshLock(supabase, job.id, job.lockedBy ?? undefined);
    await setProgress(supabase, job.id, progress);

    if (rows.length < MATCH_BATCH_SIZE) break;
    offset += MATCH_BATCH_SIZE;
  }

  const finalProgress =
    total === 0
      ? emptyProgress(weightsVersion, 0)
      : ({
          processed,
          scored,
          insufficient,
          skipped,
          total,
          scoring_version: SCORING_VERSION,
          scoring_weights_version: weightsVersion,
        } satisfies PeopleMatchProgress);

  const audit = await writeSystemAuditEvent(
    {
      supabase,
      teamId,
      workspaceId: job.workspaceId,
    },
    {
      domain: "people",
      action: "match",
      entityType: "job",
      entityId: targetJobId,
      metadata: {
        background_job_id: job.id,
        processed: finalProgress.processed,
        scored: finalProgress.scored,
        insufficient: finalProgress.insufficient,
        skipped: finalProgress.skipped,
        total: finalProgress.total,
        scoring_version: SCORING_VERSION,
        scoring_weights_version: weightsVersion,
      },
    },
  );

  if (!audit.ok) {
    await fail(supabase, job.id, "audit_failed");
    return { status: "failed", error: "audit_failed" };
  }

  const ok = await complete(supabase, job.id, finalProgress);
  return ok ? { status: "completed" } : { status: "failed", error: "complete_failed" };
}
