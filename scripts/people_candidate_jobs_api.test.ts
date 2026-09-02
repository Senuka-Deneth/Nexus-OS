/**
 * Wave 1 D5 — Job candidate ranking API (mocked tenant + supabase).
 * Run: npx tsx scripts/people_candidate_jobs_api.test.ts
 */

import Module from "node:module";

function assert(cond: unknown, msg: string): void {
  if (!cond) throw new Error(`assertion failed: ${msg}`);
}

const TEAM_ID = "11111111-1111-4111-8111-111111111111";
const OTHER_TEAM_ID = "99999999-9999-4999-8999-999999999999";
const WORKSPACE_ID = "22222222-2222-4222-8222-222222222222";
const USER_ID = "user-1";
const JOB_ID = "job-1";
const OTHER_JOB_ID = "job-other-team";
const CAND_A = "cand-a";
const CAND_B = "cand-b";
const CAND_C = "cand-c";
const CAND_D = "cand-d";
const CAND_ARCHIVED = "cand-archived";
const CJ_HIGH = "cj-high";
const CJ_LOW = "cj-low";
const CJ_OVERRIDE = "cj-override";
const CJ_INSUFF = "cj-insuff";
const CJ_ARCHIVED = "cj-archived";

type Row = Record<string, unknown>;
type AuthMode = "ok" | "unauthorized" | "no_tenant";

const jobsTable: Row[] = [];
const candidatesTable: Row[] = [];
const candidateJobsTable: Row[] = [];
const auditEventsTable: Row[] = [];
let authMode: AuthMode = "ok";

function resetState(): void {
  jobsTable.length = 0;
  candidatesTable.length = 0;
  candidateJobsTable.length = 0;
  auditEventsTable.length = 0;
  authMode = "ok";

  jobsTable.push(
    {
      id: JOB_ID,
      team_id: TEAM_ID,
      workspace_id: WORKSPACE_ID,
      title: "Engineer",
      archived_at: null,
    },
    {
      id: OTHER_JOB_ID,
      team_id: OTHER_TEAM_ID,
      workspace_id: WORKSPACE_ID,
      title: "Other",
      archived_at: null,
    },
  );

  candidatesTable.push(
    {
      id: CAND_A,
      team_id: TEAM_ID,
      full_name: "Alex Alpha",
      headline: "Senior dev",
      current_role: null,
      location: "SF",
      source: "csv",
      source_url: null,
      consent_status: "owner_imported",
      notes: "Strong communicator with long notes that should be truncated in preview when over two hundred characters. ".repeat(
        5,
      ),
      archived_at: null,
    },
    {
      id: CAND_B,
      team_id: TEAM_ID,
      full_name: "Blake Beta",
      headline: "Engineer",
      current_role: null,
      location: null,
      source: null,
      source_url: null,
      consent_status: "owner_imported",
      notes: null,
      archived_at: null,
    },
    {
      id: CAND_C,
      team_id: TEAM_ID,
      full_name: "Casey Override",
      headline: "Lead",
      current_role: null,
      location: null,
      source: null,
      source_url: null,
      consent_status: "owner_imported",
      notes: null,
      archived_at: null,
    },
    {
      id: CAND_D,
      team_id: TEAM_ID,
      full_name: "Dana Sparse",
      headline: null,
      current_role: null,
      location: null,
      source: null,
      source_url: null,
      consent_status: "unknown",
      notes: null,
      archived_at: null,
    },
    {
      id: CAND_ARCHIVED,
      team_id: TEAM_ID,
      full_name: "Archived",
      headline: null,
      current_role: null,
      location: null,
      source: null,
      source_url: null,
      consent_status: "unknown",
      notes: null,
      archived_at: new Date().toISOString(),
    },
  );

  candidateJobsTable.push(
    {
      id: CJ_HIGH,
      team_id: TEAM_ID,
      job_id: JOB_ID,
      candidate_id: CAND_A,
      stage: "new",
      match_score: 90,
      match_components: [],
      match_weights_used: null,
      scoring_version: "people.match.v1",
      data_quality: "sufficient",
      insufficient_reason: null,
      ai_explanation: {
        summary: "Good fit",
        strengths: [],
        gaps: [],
        evidence: [],
        concerns: [],
        recommendation: "possible_match",
      },
      ai_model: "gpt-4o-mini",
      ai_prompt_version: "people.match.explain.v1",
      manual_rank_override: null,
      assigned_to: null,
      created_at: "2026-01-02T00:00:00Z",
      updated_at: "2026-01-02T00:00:00Z",
    },
    {
      id: CJ_LOW,
      team_id: TEAM_ID,
      job_id: JOB_ID,
      candidate_id: CAND_B,
      stage: "new",
      match_score: 40,
      match_components: [],
      match_weights_used: null,
      scoring_version: "people.match.v1",
      data_quality: "sufficient",
      insufficient_reason: null,
      ai_explanation: null,
      ai_model: null,
      ai_prompt_version: null,
      manual_rank_override: null,
      assigned_to: null,
      created_at: "2026-01-03T00:00:00Z",
      updated_at: "2026-01-03T00:00:00Z",
    },
    {
      id: CJ_OVERRIDE,
      team_id: TEAM_ID,
      job_id: JOB_ID,
      candidate_id: CAND_C,
      stage: "new",
      match_score: 95,
      match_components: [],
      match_weights_used: null,
      scoring_version: "people.match.v1",
      data_quality: "sufficient",
      insufficient_reason: null,
      ai_explanation: null,
      ai_model: null,
      ai_prompt_version: null,
      manual_rank_override: 1,
      assigned_to: null,
      created_at: "2026-01-04T00:00:00Z",
      updated_at: "2026-01-04T00:00:00Z",
    },
    {
      id: CJ_INSUFF,
      team_id: TEAM_ID,
      job_id: JOB_ID,
      candidate_id: CAND_D,
      stage: "new",
      match_score: null,
      match_components: null,
      match_weights_used: null,
      scoring_version: "people.match.v1",
      data_quality: "insufficient",
      insufficient_reason: "missing skills",
      ai_explanation: {
        summary: "Sparse",
        strengths: [],
        gaps: [],
        evidence: [],
        concerns: [],
        recommendation: "insufficient_data",
      },
      ai_model: null,
      ai_prompt_version: null,
      manual_rank_override: null,
      assigned_to: null,
      created_at: "2026-01-05T00:00:00Z",
      updated_at: "2026-01-05T00:00:00Z",
    },
    {
      id: CJ_ARCHIVED,
      team_id: TEAM_ID,
      job_id: JOB_ID,
      candidate_id: CAND_ARCHIVED,
      stage: "new",
      match_score: 80,
      match_components: [],
      match_weights_used: null,
      scoring_version: "people.match.v1",
      data_quality: "sufficient",
      insufficient_reason: null,
      ai_explanation: null,
      ai_model: null,
      ai_prompt_version: null,
      manual_rank_override: null,
      assigned_to: null,
      created_at: "2026-01-06T00:00:00Z",
      updated_at: "2026-01-06T00:00:00Z",
    },
  );
}

function storeFor(table: string): Row[] {
  if (table === "jobs") return jobsTable;
  if (table === "candidates") return candidatesTable;
  if (table === "candidate_jobs") return candidateJobsTable;
  if (table === "audit_events") return auditEventsTable;
  return [];
}

function attachCandidates(rows: Row[]): Row[] {
  return rows
    .map((row) => {
      const candidateId = row.candidate_id;
      const candidate = candidatesTable.find((c) => c.id === candidateId);
      if (!candidate || candidate.archived_at) return null;
      return { ...row, candidates: { ...candidate } };
    })
    .filter((row): row is Row => row !== null);
}

function sortCandidateJobs(rows: Row[]): Row[] {
  return [...rows].sort((a, b) => {
    const ao = a.manual_rank_override;
    const bo = b.manual_rank_override;
    const aNull = ao == null;
    const bNull = bo == null;
    if (aNull !== bNull) return aNull ? 1 : -1;
    if (!aNull && !bNull && ao !== bo) return Number(ao) - Number(bo);

    const as = a.match_score;
    const bs = b.match_score;
    const aScoreNull = as == null;
    const bScoreNull = bs == null;
    if (aScoreNull !== bScoreNull) return aScoreNull ? 1 : -1;
    if (!aScoreNull && !bScoreNull && as !== bs) return Number(bs) - Number(as);

    return String(a.id).localeCompare(String(b.id));
  });
}

function jsonResponse(error: string, status: number): Response {
  return new Response(JSON.stringify({ error }), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function tenantSupabase() {
  return {
    from(table: string) {
      const store = storeFor(table);
      const filters: Array<(r: Row) => boolean> = [];
      let insertRow: Row | null = null;
      let updatePatch: Row | null = null;
      let range: { from: number; to: number } | null = null;
      let isCandidateJobsJoin = false;

      const applyFilters = () => store.filter((r) => filters.every((f) => f(r)));

      const finishInsert = () => {
        if (!insertRow) return { data: null, error: null };
        const row = { ...insertRow, id: insertRow.id ?? `row-${store.length}` };
        store.push(row);
        return { data: { ...row }, error: null };
      };

      const finishUpdate = () => {
        const hit = store.find((r) => filters.every((f) => f(r)));
        if (!hit || !updatePatch) {
          return { data: null, error: { code: "PGRST116", message: "not found" } };
        }
        Object.assign(hit, updatePatch, { updated_at: new Date().toISOString() });
        const row = { ...hit };
        if (table === "candidate_jobs" && isCandidateJobsJoin) {
          const attached = attachCandidates([row])[0];
          return { data: attached ?? null, error: attached ? null : { message: "not found" } };
        }
        return { data: row, error: null };
      };

      const finishSelect = () => {
        let rows = applyFilters();
        if (table === "candidate_jobs" && isCandidateJobsJoin) {
          rows = attachCandidates(rows);
        }
        if (table === "candidate_jobs") {
          rows = sortCandidateJobs(rows);
        }
        const count = rows.length;
        if (range) rows = rows.slice(range.from, range.to + 1);
        return { data: rows.map((r) => ({ ...r })), error: null, count };
      };

      const chain: Record<string, unknown> = {};
      Object.assign(chain, {
        select(cols?: string, opts?: { count?: string }) {
          void opts;
          if (table === "candidate_jobs" && typeof cols === "string") {
            isCandidateJobsJoin = cols.includes("candidates");
          }
          return chain;
        },
        insert(row: Row) {
          insertRow = { ...row };
          return chain;
        },
        update(patch: Row) {
          updatePatch = { ...patch };
          return chain;
        },
        eq(col: string, val: unknown) {
          if (col.includes(".")) {
            const [tableName, field] = col.split(".");
            if (tableName === "candidates" && field === "archived_at" && val === null) {
              filters.push((r) => {
                const candidate = candidatesTable.find((c) => c.id === r.candidate_id);
                return candidate?.archived_at == null;
              });
            }
          } else {
            filters.push((r) => r[col] === val);
          }
          return chain;
        },
        is(col: string, val: unknown) {
          if (col.includes("candidates.archived_at")) {
            filters.push((r) => {
              const candidate = candidatesTable.find((c) => c.id === r.candidate_id);
              return val === null ? candidate?.archived_at == null : candidate?.archived_at === val;
            });
          } else {
            filters.push((r) => (val === null ? r[col] == null : r[col] === val));
          }
          return chain;
        },
        order() {
          return chain;
        },
        range(from: number, to: number) {
          range = { from, to };
          return chain;
        },
        maybeSingle() {
          if (insertRow) return Promise.resolve(finishInsert());
          if (updatePatch) return Promise.resolve(finishUpdate());
          const rows = applyFilters();
          const row = rows[0] ? { ...rows[0] } : null;
          if (row && table === "candidate_jobs" && isCandidateJobsJoin) {
            const attached = attachCandidates([row])[0] ?? null;
            return Promise.resolve({ data: attached, error: null });
          }
          return Promise.resolve({ data: row, error: null });
        },
        then(
          resolve: (v: unknown) => unknown,
          reject?: (e: unknown) => unknown,
        ) {
          if (insertRow) return Promise.resolve(finishInsert()).then(resolve, reject);
          if (updatePatch) return Promise.resolve(finishUpdate()).then(resolve, reject);
          return Promise.resolve(finishSelect()).then(resolve, reject);
        },
      });
      return chain;
    },
  };
}

const moduleWithLoad = Module as unknown as { _load: (...args: unknown[]) => unknown };
const origLoad = moduleWithLoad._load;
moduleWithLoad._load = function (this: unknown, ...args: unknown[]) {
  const request = args[0] as string;
  if (request === "server-only") return {};
  if (request === "@/lib/api-security") {
    return {
      JSON_LIMITS: { small: 16 * 1024, medium: 64 * 1024, ingest: 256 * 1024 },
      rateLimit: () => null,
      readJsonObjectWithLimit: async (req: Request) => ({
        ok: true,
        body: await req.json(),
      }),
      jsonError: (error: string, status: number) => jsonResponse(error, status),
      requireApiTenantContext: async () => {
        if (authMode === "unauthorized") {
          return { ok: false, response: jsonResponse("Unauthorized", 401) };
        }
        if (authMode === "no_tenant") {
          return {
            ok: false,
            response: jsonResponse("Complete workspace setup", 403),
          };
        }
        return {
          ok: true,
          user: { id: USER_ID },
          supabase: tenantSupabase(),
          teamId: TEAM_ID,
          workspaceId: WORKSPACE_ID,
        };
      },
    };
  }
  return origLoad.apply(this, args);
};

const tenantCtx = {
  supabase: tenantSupabase() as never,
  teamId: TEAM_ID,
  workspaceId: WORKSPACE_ID,
  user: { id: USER_ID },
};

let passed = 0;
async function check(name: string, fn: () => Promise<void>): Promise<void> {
  resetState();
  await fn();
  passed += 1;
  console.log(`  ok  ${name}`);
}

(async () => {
  const {
    listJobCandidates,
    updateCandidateJobOverride,
  } = await import("@/lib/people/candidate-jobs");

  await check("list sorts override before higher score; archived omitted", async () => {
    const result = await listJobCandidates(tenantCtx, JOB_ID, {
      ok: true,
      limit: 50,
      offset: 0,
    });
    assert(result.ok, "ok");
    if (!result.ok) return;
    assert(result.data.length === 4, `expected 4 rows, got ${result.data.length}`);
    assert(result.data[0].id === CJ_OVERRIDE, "override first");
    assert(result.data[0].manual_rank_override === 1, "override value");
    assert(
      !result.data.some((row) => row.id === CJ_ARCHIVED),
      "archived candidate omitted",
    );
    const ids = result.data.map((row) => row.id);
    assert(ids.includes(CJ_INSUFF), "insufficient row listed");
    assert(
      result.data.find((row) => row.id === CJ_INSUFF)?.match_score === null,
      "insufficient has null score",
    );
  });

  await check("list returns 404 for other team job", async () => {
    const result = await listJobCandidates(tenantCtx, OTHER_JOB_ID, {
      ok: true,
      limit: 50,
      offset: 0,
    });
    assert(!result.ok && result.status === 404, "404");
  });

  await check("list omits email from candidate summary; notes truncated", async () => {
    const result = await listJobCandidates(tenantCtx, JOB_ID, {
      ok: true,
      limit: 50,
      offset: 0,
    });
    assert(result.ok, "ok");
    if (!result.ok) return;
    const row = result.data.find((r) => r.candidate.id === CAND_A);
    assert(row, "row for Alex");
    assert(!("email" in row.candidate), "no email in summary");
    assert(
      row.candidate.notes_preview != null &&
        row.candidate.notes_preview.length <= 201,
      "notes preview bounded",
    );
  });

  await check("PATCH override persists and writes audit without email", async () => {
    const result = await updateCandidateJobOverride(tenantCtx, CJ_LOW, {
      manual_rank_override: 2,
    });
    assert(result.ok, "ok");
    if (!result.ok) return;
    assert(result.data.manual_rank_override === 2, "override saved");
    const stored = candidateJobsTable.find((r) => r.id === CJ_LOW);
    assert(stored?.manual_rank_override === 2, "db updated");
    assert(auditEventsTable.length === 1, "one audit");
    const audit = auditEventsTable[0];
    assert(audit.action === "rank_override", "action");
    assert(audit.actor_user_id === USER_ID, "actor");
    assert(!("email" in (audit.metadata as object)), "no email in metadata");
    const prev = audit.prev_state as { manual_rank_override: unknown };
    const next = audit.next_state as { manual_rank_override: unknown };
    assert(prev.manual_rank_override === null, "prev null");
    assert(next.manual_rank_override === 2, "next 2");
  });

  await check("PATCH rejects match_score and stage", async () => {
    const before = candidateJobsTable.find((r) => r.id === CJ_LOW)?.match_score;
    const scoreAttempt = await updateCandidateJobOverride(tenantCtx, CJ_LOW, {
      match_score: 100,
    } as Record<string, unknown>);
    assert(!scoreAttempt.ok && scoreAttempt.status === 400, "score rejected");
    const stageAttempt = await updateCandidateJobOverride(tenantCtx, CJ_LOW, {
      stage: "shortlisted",
    } as Record<string, unknown>);
    assert(!stageAttempt.ok && stageAttempt.status === 400, "stage rejected");
    const after = candidateJobsTable.find((r) => r.id === CJ_LOW)?.match_score;
    assert(after === before, "score unchanged");
  });

  await check("PATCH clear override with null", async () => {
    const result = await updateCandidateJobOverride(tenantCtx, CJ_OVERRIDE, {
      manual_rank_override: null,
    });
    assert(result.ok, "ok");
    if (!result.ok) return;
    assert(result.data.manual_rank_override === null, "cleared");
  });

  await check("GET route returns team-scoped list", async () => {
    const { GET } = await import("@/app/api/people/jobs/[id]/candidates/route");
    const res = await GET(
      new Request(`https://example.com/api/people/jobs/${JOB_ID}/candidates`),
      { params: { id: JOB_ID } },
    );
    assert(res.status === 200, `status ${res.status}`);
    const json = (await res.json()) as { data: unknown[]; count: number };
    assert(Array.isArray(json.data), "data array");
    assert(json.count >= 1, "count");
  });

  await check("PATCH route unauthorized returns 401", async () => {
    authMode = "unauthorized";
    const { PATCH } = await import(
      "@/app/api/people/candidate-jobs/[id]/route"
    );
    const res = await PATCH(
      new Request(`https://example.com/api/people/candidate-jobs/${CJ_LOW}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ manual_rank_override: 3 }),
      }),
      { params: { id: CJ_LOW } },
    );
    assert(res.status === 401, "401");
    authMode = "ok";
  });

  console.log(`\npeople-candidate-jobs: ${passed} checks passed`);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
