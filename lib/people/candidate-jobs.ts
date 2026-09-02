import "server-only";

import { writeAuditEvent } from "@/lib/audit";
import type { PeopleTenantContext } from "@/lib/people/employees";
import { getJob } from "@/lib/people/jobs";
import type {
  CandidateJob,
  JobCandidateCandidateSummary,
  JobCandidateListItem,
} from "@/types";

const NOTES_PREVIEW_MAX = 200;
const OVERRIDE_MIN = 1;
const OVERRIDE_MAX = 999;

const PATCH_FIELDS = ["manual_rank_override"] as const;

const FORBIDDEN_PATCH_KEYS = [
  "match_score",
  "match_components",
  "match_weights_used",
  "scoring_version",
  "data_quality",
  "insufficient_reason",
  "ai_explanation",
  "ai_model",
  "ai_prompt_version",
  "stage",
  "assigned_to",
  "candidate_id",
  "job_id",
  "team_id",
  "workspace_id",
] as const;

export type CandidateJobErr = { ok: false; status: number; error: string };
export type CandidateJobOk<T> = { ok: true; data: T };

export type { JobCandidateListItem, JobCandidateCandidateSummary };

export type ListJobCandidatesQuery = {
  ok: true;
  limit: number;
  offset: number;
};

export type ListJobCandidatesOk = {
  ok: true;
  data: JobCandidateListItem[];
  count: number;
};

type CandidateJoinRow = {
  id: string;
  full_name: string;
  headline: string | null;
  current_role: string | null;
  location: string | null;
  source: string | null;
  source_url: string | null;
  consent_status: JobCandidateCandidateSummary["consent_status"];
  notes: string | null;
  archived_at: string | null;
};

type CandidateJobJoinRow = {
  id: string;
  candidate_id: string;
  job_id: string;
  stage: JobCandidateListItem["stage"];
  match_score: number | null;
  match_components: unknown;
  match_weights_used: JobCandidateListItem["match_weights_used"];
  scoring_version: string | null;
  data_quality: JobCandidateListItem["data_quality"];
  insufficient_reason: string | null;
  ai_explanation: JobCandidateListItem["ai_explanation"];
  ai_model: string | null;
  ai_prompt_version: string | null;
  manual_rank_override: number | null;
  assigned_to: string | null;
  created_at: string;
  updated_at: string;
  candidates: CandidateJoinRow | CandidateJoinRow[] | null;
};

function fail(status: number, error: string): CandidateJobErr {
  return { ok: false, status, error };
}

function unknownKeys(
  body: Record<string, unknown>,
  allowed: readonly string[],
): string[] {
  return Object.keys(body).filter((key) => !allowed.includes(key));
}

function notesPreview(notes: string | null): string | null {
  if (!notes) return null;
  const trimmed = notes.trim();
  if (!trimmed) return null;
  if (trimmed.length <= NOTES_PREVIEW_MAX) return trimmed;
  return `${trimmed.slice(0, NOTES_PREVIEW_MAX)}…`;
}

function parseComponents(
  value: unknown,
): JobCandidateListItem["match_components"] {
  if (!Array.isArray(value)) return null;
  return value as JobCandidateListItem["match_components"];
}

function mapRow(row: CandidateJobJoinRow): JobCandidateListItem | null {
  const rawCandidate = row.candidates;
  const candidate = Array.isArray(rawCandidate)
    ? rawCandidate[0]
    : rawCandidate;
  if (!candidate || candidate.archived_at) return null;

  return {
    id: row.id,
    candidate_id: row.candidate_id,
    job_id: row.job_id,
    stage: row.stage,
    match_score:
      typeof row.match_score === "number"
        ? row.match_score
        : row.match_score != null
          ? Number(row.match_score)
          : null,
    match_components: parseComponents(row.match_components),
    match_weights_used: row.match_weights_used,
    scoring_version: row.scoring_version,
    data_quality: row.data_quality,
    insufficient_reason: row.insufficient_reason,
    ai_explanation: row.ai_explanation,
    ai_model: row.ai_model,
    ai_prompt_version: row.ai_prompt_version,
    manual_rank_override: row.manual_rank_override,
    assigned_to: row.assigned_to,
    created_at: row.created_at,
    updated_at: row.updated_at,
    candidate: {
      id: candidate.id,
      full_name: candidate.full_name,
      headline: candidate.headline,
      current_role: candidate.current_role,
      location: candidate.location,
      source: candidate.source,
      source_url: candidate.source_url,
      consent_status: candidate.consent_status,
      notes_preview: notesPreview(candidate.notes),
    },
  };
}

export function parseListJobCandidatesQuery(
  searchParams: URLSearchParams,
): ListJobCandidatesQuery | CandidateJobErr {
  const limitParam = searchParams.get("limit");
  const offsetParam = searchParams.get("offset");
  const limit =
    limitParam === null || limitParam === ""
      ? 50
      : Number.parseInt(limitParam, 10);
  const offset =
    offsetParam === null || offsetParam === ""
      ? 0
      : Number.parseInt(offsetParam, 10);

  if (!Number.isFinite(limit) || limit < 1) {
    return fail(400, "limit must be a positive integer");
  }
  if (limit > 100) return fail(400, "limit must not exceed 100");
  if (!Number.isFinite(offset) || offset < 0) {
    return fail(400, "offset must be a non-negative integer");
  }

  return { ok: true, limit, offset };
}

export async function listJobCandidates(
  ctx: PeopleTenantContext,
  jobId: string,
  query: ListJobCandidatesQuery,
): Promise<ListJobCandidatesOk | CandidateJobErr> {
  const job = await getJob(ctx, jobId);
  if (!job.ok) return job;

  const db = ctx.supabase
    .from("candidate_jobs")
    .select(
      `
      id,
      candidate_id,
      job_id,
      stage,
      match_score,
      match_components,
      match_weights_used,
      scoring_version,
      data_quality,
      insufficient_reason,
      ai_explanation,
      ai_model,
      ai_prompt_version,
      manual_rank_override,
      assigned_to,
      created_at,
      updated_at,
      candidates!inner (
        id,
        full_name,
        headline,
        current_role,
        location,
        source,
        source_url,
        consent_status,
        notes,
        archived_at
      )
    `,
      { count: "exact" },
    )
    .eq("job_id", job.data.id)
    .eq("team_id", ctx.teamId)
    .is("candidates.archived_at", null)
    .order("manual_rank_override", { ascending: true, nullsFirst: false })
    .order("match_score", { ascending: false, nullsFirst: false })
    .order("id", { ascending: true });

  const rangeEnd = query.offset + query.limit - 1;
  const { data, error, count } = await db.range(query.offset, rangeEnd);

  if (error) return fail(500, error.message);

  const rows = ((data ?? []) as CandidateJobJoinRow[])
    .map(mapRow)
    .filter((row): row is JobCandidateListItem => row !== null);

  return { ok: true, data: rows, count: count ?? rows.length };
}

function parseOverrideBody(
  body: Record<string, unknown>,
): { ok: true; value: number | null } | CandidateJobErr {
  const extra = unknownKeys(body, PATCH_FIELDS);
  if (extra.length > 0) {
    return fail(400, `Unexpected fields: ${extra.join(", ")}`);
  }
  for (const forbidden of FORBIDDEN_PATCH_KEYS) {
    if (Object.prototype.hasOwnProperty.call(body, forbidden)) {
      return fail(400, `Field ${forbidden} cannot be updated via this endpoint`);
    }
  }
  if (!Object.prototype.hasOwnProperty.call(body, "manual_rank_override")) {
    return fail(400, "manual_rank_override is required");
  }

  const raw = body.manual_rank_override;
  if (raw === null) return { ok: true, value: null };
  const n = typeof raw === "number" ? raw : typeof raw === "string" ? Number(raw) : NaN;
  if (!Number.isInteger(n)) {
    return fail(400, "manual_rank_override must be an integer or null");
  }
  if (n < OVERRIDE_MIN || n > OVERRIDE_MAX) {
    return fail(
      400,
      `manual_rank_override must be between ${OVERRIDE_MIN} and ${OVERRIDE_MAX}, or null`,
    );
  }
  return { ok: true, value: n };
}

export async function getCandidateJob(
  ctx: PeopleTenantContext,
  id: string,
): Promise<CandidateJobOk<CandidateJob> | CandidateJobErr> {
  const trimmed = id.trim();
  if (!trimmed) return fail(400, "Missing candidate job id");

  const { data, error } = await ctx.supabase
    .from("candidate_jobs")
    .select("*")
    .eq("id", trimmed)
    .eq("team_id", ctx.teamId)
    .maybeSingle();

  if (error) return fail(500, error.message);
  if (!data) return fail(404, "Application not found");
  return { ok: true, data: data as CandidateJob };
}

export async function updateCandidateJobOverride(
  ctx: PeopleTenantContext,
  id: string,
  body: Record<string, unknown>,
): Promise<CandidateJobOk<JobCandidateListItem> | CandidateJobErr> {
  const existing = await getCandidateJob(ctx, id);
  if (!existing.ok) return existing;

  const parsed = parseOverrideBody(body);
  if (!parsed.ok) return parsed;

  const { data, error } = await ctx.supabase
    .from("candidate_jobs")
    .update({ manual_rank_override: parsed.value })
    .eq("id", existing.data.id)
    .eq("team_id", ctx.teamId)
    .select(
      `
      id,
      candidate_id,
      job_id,
      stage,
      match_score,
      match_components,
      match_weights_used,
      scoring_version,
      data_quality,
      insufficient_reason,
      ai_explanation,
      ai_model,
      ai_prompt_version,
      manual_rank_override,
      assigned_to,
      created_at,
      updated_at,
      candidates!inner (
        id,
        full_name,
        headline,
        current_role,
        location,
        source,
        source_url,
        consent_status,
        notes,
        archived_at
      )
    `,
    )
    .maybeSingle();

  if (error) return fail(500, error.message);
  if (!data) return fail(404, "Application not found");

  const mapped = mapRow(data as CandidateJobJoinRow);
  if (!mapped) return fail(404, "Application not found");

  const audit = await writeAuditEvent(ctx, {
    domain: "people",
    action: "rank_override",
    entityType: "candidate_job",
    entityId: existing.data.id,
    prevState: {
      manual_rank_override: existing.data.manual_rank_override,
    },
    nextState: {
      manual_rank_override: parsed.value,
    },
  });
  if (!audit.ok) return fail(500, audit.error);

  return { ok: true, data: mapped };
}
