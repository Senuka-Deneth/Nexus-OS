"use client";

import Link from "next/link";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Info,
  Users,
} from "lucide-react";
import { CandidateConsentPill } from "@/components/people/CandidateConsentPill";
import { SCORING_WEIGHT_LABELS } from "@/components/people/job-labels";
import {
  DATA_QUALITY_LABELS,
  isMatchExplanationError,
  MATCH_RECOMMENDATION_LABELS,
  roleLine,
  safeHttpUrl,
} from "@/components/people/ranking-labels";
import { useTenantScope } from "@/components/tenant/TenantScope";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { Spinner } from "@/components/ui/Spinner";
import {
  JOB_CANDIDATES_PAGE_SIZE,
  jobCandidatesQuery,
  updateCandidateJobOverrideMutation,
} from "@/lib/queries/fetchers";
import { queryKeys } from "@/lib/queries/keys";
import { cn } from "@/lib/utils";
import type { JobCandidateListItem } from "@/types";

function scoreLabel(row: JobCandidateListItem): string {
  if (row.data_quality === "pending") return "Pending";
  if (row.data_quality === "insufficient") return "Insufficient";
  if (typeof row.match_score === "number") return String(row.match_score);
  return "—";
}

function RankRow({
  row,
  rankIndex,
  selected,
  onToggleSelect,
  expanded,
  onToggleExpand,
  onOverrideSaved,
}: {
  row: JobCandidateListItem;
  rankIndex: number;
  selected: boolean;
  onToggleSelect: () => void;
  expanded: boolean;
  onToggleExpand: () => void;
  onOverrideSaved: (updated: JobCandidateListItem) => void;
}) {
  const [overrideInput, setOverrideInput] = useState(
    row.manual_rank_override != null ? String(row.manual_rank_override) : "",
  );
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  useEffect(() => {
    setOverrideInput(
      row.manual_rank_override != null ? String(row.manual_rank_override) : "",
    );
  }, [row.manual_rank_override, row.id]);

  const sourceUrl = safeHttpUrl(row.candidate.source_url);
  const explanation = row.ai_explanation;
  const hasExplanationError = isMatchExplanationError(explanation);

  async function saveOverride() {
    setSaving(true);
    setSaveError(null);
    const trimmed = overrideInput.trim();
    const value =
      trimmed === ""
        ? null
        : Number.parseInt(trimmed, 10);
    if (trimmed !== "" && (!Number.isInteger(value) || value! < 1 || value! > 999)) {
      setSaveError("Override must be 1–999 or empty to clear");
      setSaving(false);
      return;
    }
    try {
      const updated = await updateCandidateJobOverrideMutation(row.id, value);
      onOverrideSaved(updated);
      setOverrideInput(
        updated.manual_rank_override != null
          ? String(updated.manual_rank_override)
          : "",
      );
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : "Could not save override");
    } finally {
      setSaving(false);
    }
  }

  return (
    <article className="hairline-b px-4 py-4 last:border-b-0 sm:px-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 shrink-0 accent-nexus-intake"
            checked={selected}
            onChange={onToggleSelect}
            aria-label={`Select ${row.candidate.full_name}`}
          />
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border-strong bg-surface-muted text-sm font-semibold tabular-nums text-atmospheric-grey">
            {rankIndex}
          </div>
        </div>

        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <Link
                href={`/people/candidates/${row.candidate.id}`}
                className="font-medium text-atmospheric-grey hover:text-nexus-intake"
              >
                {row.candidate.full_name}
              </Link>
              <p className="mt-0.5 text-sm text-muted">
                {roleLine(row.candidate)}
                {row.candidate.location
                  ? ` · ${row.candidate.location}`
                  : null}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={cn(
                  "inline-flex min-h-[1.75rem] items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tabular-nums",
                  row.data_quality === "sufficient"
                    ? "border-nexus-intake-border bg-nexus-intake-soft text-nexus-intake"
                    : "border-border-strong bg-surface-muted text-muted",
                )}
              >
                Score: {scoreLabel(row)}
              </span>
              <CandidateConsentPill status={row.candidate.consent_status} />
            </div>
          </div>

          <p className="text-xs text-muted">
            Data quality: {DATA_QUALITY_LABELS[row.data_quality]}
            {row.insufficient_reason
              ? ` · ${row.insufficient_reason}`
              : null}
          </p>

          {row.candidate.source || sourceUrl ? (
            <p className="text-xs text-muted">
              Source:{" "}
              {sourceUrl ? (
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-nexus-intake hover:underline"
                >
                  {row.candidate.source ?? sourceUrl}
                </a>
              ) : (
                (row.candidate.source ?? "—")
              )}
            </p>
          ) : null}

          {row.candidate.notes_preview ? (
            <p className="text-xs leading-relaxed text-muted">
              Notes: {row.candidate.notes_preview}
            </p>
          ) : null}

          {!hasExplanationError && explanation && "summary" in explanation ? (
            <p className="text-sm leading-relaxed text-atmospheric-grey/90">
              {explanation.summary}
            </p>
          ) : hasExplanationError ? (
            <p className="text-sm text-muted">Explanation unavailable</p>
          ) : row.data_quality === "pending" ? (
            <p className="text-sm text-muted">
              Matching runs in the background. Scores appear when the worker
              finishes.
            </p>
          ) : null}

          <div className="flex flex-wrap items-end gap-2 pt-1">
            <label className="flex flex-col gap-1 text-xs text-muted">
              Manual rank override
              <input
                type="number"
                min={1}
                max={999}
                inputMode="numeric"
                value={overrideInput}
                onChange={(event) => setOverrideInput(event.target.value)}
                className="w-24 rounded-lg border border-border-strong bg-surface px-2 py-1.5 text-sm text-atmospheric-grey"
                placeholder="—"
              />
            </label>
            <Button
              variant="secondary"
              disabled={saving}
              onClick={() => void saveOverride()}
            >
              {saving ? <Spinner className="h-4 w-4" label="Saving" /> : null}
              Save override
            </Button>
            {saveError ? (
              <p role="alert" className="text-xs text-status-critical">
                {saveError}
              </p>
            ) : null}
          </div>

          <button
            type="button"
            onClick={onToggleExpand}
            className="inline-flex min-h-11 items-center gap-1 text-xs font-medium text-nexus-intake hover:text-atmospheric-grey"
          >
            {expanded ? (
              <>
                <ChevronUp className="h-3.5 w-3.5" aria-hidden />
                Hide breakdown
              </>
            ) : (
              <>
                <ChevronDown className="h-3.5 w-3.5" aria-hidden />
                Show breakdown & AI detail
              </>
            )}
          </button>

          {expanded ? (
            <div className="mt-2 space-y-4 rounded-lg border border-border/60 bg-surface-muted/40 p-3">
              {row.match_components && row.match_components.length > 0 ? (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Score breakdown
                  </h4>
                  <ul className="mt-2 space-y-2">
                    {row.match_components.map((component) => (
                      <li
                        key={component.key}
                        className="rounded-md border border-border/50 bg-surface px-3 py-2 text-xs"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 font-medium text-atmospheric-grey">
                          <span>{SCORING_WEIGHT_LABELS[component.key]}</span>
                          <span className="tabular-nums text-muted">
                            {component.contribution} pts (raw{" "}
                            {Math.round(component.raw * 100)}%)
                          </span>
                        </div>
                        {component.evidence.length > 0 ? (
                          <ul className="mt-1.5 space-y-0.5 text-muted">
                            {component.evidence.map((item, idx) => (
                              <li key={`${component.key}-${idx}`}>
                                {item.note}
                                {item.value ? ` (${item.value})` : null}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mt-1 text-muted">No evidence recorded</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-xs text-muted">No score components yet.</p>
              )}

              {!hasExplanationError && explanation && "summary" in explanation ? (
                <div className="space-y-2 text-xs">
                  <h4 className="font-semibold uppercase tracking-wide text-muted">
                    AI advisory detail
                  </h4>
                  <p className="text-muted">
                    Recommendation:{" "}
                    {MATCH_RECOMMENDATION_LABELS[explanation.recommendation]}
                  </p>
                  {explanation.strengths.length > 0 ? (
                    <div>
                      <p className="font-medium text-atmospheric-grey">
                        Strengths
                      </p>
                      <ul className="mt-1 list-disc pl-4 text-muted">
                        {explanation.strengths.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {explanation.gaps.length > 0 ? (
                    <div>
                      <p className="font-medium text-atmospheric-grey">Gaps</p>
                      <ul className="mt-1 list-disc pl-4 text-muted">
                        {explanation.gaps.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {explanation.evidence.length > 0 ? (
                    <div>
                      <p className="font-medium text-atmospheric-grey">
                        Evidence cited
                      </p>
                      <ul className="mt-1 list-disc pl-4 text-muted">
                        {explanation.evidence.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  {explanation.concerns.length > 0 ? (
                    <div>
                      <p className="font-medium text-atmospheric-grey">
                        Concerns
                      </p>
                      <ul className="mt-1 list-disc pl-4 text-muted">
                        {explanation.concerns.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function JobCandidatesRank({ jobId }: { jobId: string }) {
  const queryClient = useQueryClient();
  const tenant = useTenantScope();
  const teamId = tenant.teamId;
  const queriesEnabled = tenant.ready && teamId !== null && Boolean(jobId);

  const [offset, setOffset] = useState(0);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const { data, isPending, error } = useQuery({
    queryKey: queryKeys.jobCandidates(
      teamId,
      jobId,
      JOB_CANDIDATES_PAGE_SIZE,
      offset,
    ),
    queryFn: () =>
      jobCandidatesQuery(jobId, {
        limit: JOB_CANDIDATES_PAGE_SIZE,
        offset,
      }),
    enabled: queriesEnabled,
    staleTime: 15_000,
  });

  const rows = useMemo(() => data?.data ?? [], [data?.data]);
  const count = data?.count ?? 0;
  const hasPrev = offset > 0;
  const hasNext = offset + JOB_CANDIDATES_PAGE_SIZE < count;

  const allPending =
    rows.length > 0 && rows.every((row) => row.data_quality === "pending");

  const invalidate = useCallback(async () => {
    await queryClient.invalidateQueries({
      queryKey: [...queryKeys.root(teamId), "job-candidates", jobId],
    });
  }, [queryClient, teamId, jobId]);

  const onOverrideSaved = useCallback(async () => {
    await invalidate();
  }, [invalidate]);

  const selectedCount = selectedIds.size;

  const toggleSelect = useCallback((id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const pageRowIds = useMemo(() => rows.map((row) => row.id), [rows]);

  const allPageSelected =
    pageRowIds.length > 0 && pageRowIds.every((id) => selectedIds.has(id));

  function toggleSelectAllPage() {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (allPageSelected) {
        for (const id of pageRowIds) next.delete(id);
      } else {
        for (const id of pageRowIds) next.add(id);
      }
      return next;
    });
  }

  const errorMsg = error instanceof Error ? error.message : null;

  return (
    <section className="space-y-4">
      <div className="rounded-xl border border-nexus-approval-border bg-nexus-approval-soft/40 px-4 py-3">
        <div className="flex gap-3">
          <Info
            className="mt-0.5 h-4 w-4 shrink-0 text-nexus-approval"
            aria-hidden
          />
          <p className="text-sm leading-relaxed text-atmospheric-grey/90">
            <strong className="font-semibold">Advisory only.</strong> Match
            scores and AI summaries help you review candidates. They do not
            hire, reject, or change pipeline stage. You decide ranking and next
            steps.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="nexus-section-title text-atmospheric-grey">
          Ranked candidates
        </h2>
        {selectedCount > 0 ? (
          <span className="text-sm text-muted">{selectedCount} selected</span>
        ) : null}
      </div>

      {isPending ? (
        <div className="flex min-h-[12rem] items-center justify-center">
          <Spinner label="Loading candidates" />
        </div>
      ) : errorMsg ? (
        <EmptyState
          title="Could not load candidates"
          description={errorMsg}
          icon={<Users />}
          className="min-h-[12rem]"
        />
      ) : rows.length === 0 ? (
        <EmptyState
          title="No candidates on this job yet"
          description="Import candidates from CSV or add them manually, then matching runs in the background."
          icon={<Users />}
          className="min-h-[12rem]"
        />
      ) : (
        <div className="app-glass-card overflow-hidden rounded-xl">
          {allPending ? (
            <div className="border-b border-border/60 bg-surface-muted/50 px-4 py-3 text-sm text-muted sm:px-5">
              Matching runs in the background after import. Scores appear when
              the worker finishes.
            </div>
          ) : null}

          <div className="flex items-center gap-3 border-b border-border/60 px-4 py-2 sm:px-5">
            <input
              type="checkbox"
              className="h-4 w-4 accent-nexus-intake"
              checked={allPageSelected}
              onChange={toggleSelectAllPage}
              aria-label="Select all on this page"
            />
            <span className="text-xs text-muted">Select page</span>
          </div>

          <div>
            {rows.map((row, index) => (
              <RankRow
                key={row.id}
                row={row}
                rankIndex={offset + index + 1}
                selected={selectedIds.has(row.id)}
                onToggleSelect={() => toggleSelect(row.id)}
                expanded={expandedId === row.id}
                onToggleExpand={() =>
                  setExpandedId((current) =>
                    current === row.id ? null : row.id,
                  )
                }
                onOverrideSaved={onOverrideSaved}
              />
            ))}
          </div>

          <div className="flex flex-col gap-3 hairline-t px-4 py-3 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <span>
              {count === 0
                ? "No results"
                : `Showing ${offset + 1}–${Math.min(offset + JOB_CANDIDATES_PAGE_SIZE, count)} of ${count}`}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setOffset((value) =>
                    Math.max(0, value - JOB_CANDIDATES_PAGE_SIZE),
                  )
                }
                disabled={!hasPrev}
                className="inline-flex min-h-11 cursor-pointer items-center gap-1 rounded-lg border border-border-strong bg-surface-muted px-2.5 py-1 font-medium text-atmospheric-grey transition hover:bg-surface-elevated disabled:cursor-not-allowed disabled:opacity-50"
              >
                <ChevronLeft className="h-3.5 w-3.5" aria-hidden />
                Prev
              </button>
              <button
                type="button"
                onClick={() =>
                  setOffset((value) => value + JOB_CANDIDATES_PAGE_SIZE)
                }
                disabled={!hasNext}
                className="inline-flex min-h-11 cursor-pointer items-center gap-1 rounded-lg border border-border-strong bg-surface-muted px-2.5 py-1 font-medium text-atmospheric-grey transition hover:bg-surface-elevated disabled:cursor-not-allowed disabled:opacity-50"
              >
                Next
                <ChevronRight className="h-3.5 w-3.5" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
