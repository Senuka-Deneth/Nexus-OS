# Nexus OS — Operating Layer & People Intelligence

Canonical build plan. Grounded against the repository on **2026-09-01**.

Read this with `.cursor/rules/nexus.mdc`. If this file and the README disagree, **this file and the migrations win**.

Do not open a second “HR architecture” document. `docs/full_new_implementation_blueprint.md` was retired.

---

## How to use this file

1. One Cursor conversation implements **one partition** (A1, B1, …).
2. Paste the **Shared agent contract**, then that partition’s prompt. Do not paste two partitions.
3. The agent must inspect current code, reuse it, and refuse scope creep.
4. Check the partition off in the tracker when verification passes.

This is not a license to rewrite Revenue, Chat, n8n, or Social.

---

## 1. Product thesis (keep this)

Nexus OS is not “an HR module bolted onto a CRM.”

It is an **AI operating layer for a small business**, where the founder stays the highest-authority decision maker and Nexus does repetitive analysis and operational prep underneath them.

Positioning (external): **“Give every founder an AI operating team.”**
Do not market “replace your managers.” The work still exists; the extra headcount does not.

```text
                         FOUNDER / OWNER
                    Strategic decisions
                    Final approvals
                    Exceptions
                              │
                 ┌────────────▼────────────┐
                 │       NEXUS OS          │
                 │   Operating layer       │
                 └────────────┬────────────┘
                              │
        ┌─────────────────────┼──────────────────────┐
        ▼                     ▼                      ▼
   Revenue (live)         People (this plan)     Marketing (live studio)
   Inbox / leads          Employees              Social posts
   Classification         Candidates             Captions / images
   Approval-gated send    Jobs / matching        Approval / schedule
```

**Rule:** AI proposes, drafts, ranks, and executes *approved* operational work. The founder controls authority. The backend enforces that — not the prompt.

---

## 2. Verdict on the incoming 12-phase plan

The incoming plan is directionally right and operationally too large. It would recreate primitives this repo already has, and it would violate the architecture that already works for revenue.

### Accept (non-negotiable)

| Idea | Why it stays |
|------|----------------|
| Founder = authority; Nexus = operating layer | This is the product. |
| Deterministic score, then LLM explanation | LLM-as-score is unauditable and unstable. |
| No evidence → no claim | Stops hallucinated hiring narratives. |
| Sparse data → `insufficient_data`, not a fake 47/100 | Honesty is the feature. |
| Human confirmation for outbound and employment-status changes | Matches existing approval philosophy. |
| Backend enforces confirmation; prompts do not | Same as `lib/approval-policy.ts` for replies. |
| Domain-scoped tools if/when an agent exists | No mega-agent with 30 tools. |
| People Intelligence, not an ATS-only schema | Employees + candidates + jobs, room to grow. |
| Minimal schema first | Additive migrations only. |
| CSV with row-level errors and partial success | Founders live in spreadsheets. |
| Structured UI controls, not the model parsing “yes” | Required for any later chat mutations. |
| Send email ≠ mutate employee | Separate confirmations. |
| n8n orchestrates; Nexus owns business logic | Current n8n contract already works this way. |
| Small partitions, schema → service → API → UI → AI | How this repo actually ships. |
| RLS + `team_id` / `workspace_id` from day one | Existing tenant model. |
| No LinkedIn scrape; no mass outreach | Legal / ToS / consent. |

### Reject or defer (do not implement in this program)

| Incoming idea | Decision | Reason |
|---------------|----------|--------|
| Phase 1 “platform foundation” before any People UI | **Reject as a block** | Over-abstracts for imaginary consumers. Extract primitives when the first feature needs them (audit now; jobs when matching; action registry when email send exists). |
| Rebuild AI usage tracking | **Reject** | `ai_usage` + `recordAiUsage()` already exist (`20260714190000_ai_usage.sql`, `lib/ai/provider.ts`). |
| New confirmation product that competes with `/approval` | **Reject** | Extend the *idea* of founder approval. People UI uses in-page confirm + audit. People email uses a **draft then explicit send** (same shape as `reply_drafts`). Do not add a second approval inbox. |
| Five domain agents + Nexus Router now | **Defer** | Chat is a high-quality **read-only** analyst (`lib/chat/system-prompt.ts`). A router+tools rewrite is the riskiest change in the repo. Revenue pipeline must stay functions. |
| Trigger.dev as the job runner | **Reject unless a human chooses it** | `trigger.config.ts` exists; `src/trigger/` does not; `@trigger.dev/sdk` is not in `package.json`. Use a `background_jobs` table modeled on `gmail_backfill_jobs`. |
| Generic ETL “Data Import Engine” as a platform | **Narrow** | One shared CSV parser used by employees then candidates. Not a universal ingest product. |
| GitHub / public candidate discovery | **Defer (Wave 2+)** | ToS, missing emails, consent, and it is not how most small businesses hire. v1 is founder-owned data (CSV + manual). |
| Resume PDF parsing as v1 | **Defer** | `pdf-parse` exists for knowledge docs. Add CV parse after CSV matching works. |
| Leave, payroll, performance, org chart, onboarding suites | **Out of scope** | Schema must not block them; do not build them. |
| OpenRouter migration / `organizations` as People tenant root | **Reject** | App AI is OpenAI via `lib/ai/*`. People rows use `team_id` + `workspace_id` like `conversations` / `leads`. Social keeps `organization_id` until a later unification. |
| Cross-domain CEO agent, automation, production-hardening *phases* as People prerequisites | **Defer** | Those are sequels. Knowledge RAG already exists. |
| Wrapping Posts Studio in a Marketing Agent | **Defer** | Studio already ships. |

### One important change to Claude’s “don’t build HR yet”

That is good *startup sequencing* if Nexus had no users and no second domain. The goal here is explicitly: **help startups run without hiring extra managers.** People is the second operating domain (Revenue is first). Build a **thin, honest wedge**, not 37 HR features and not a 12-phase OS rewrite.

**Wedge (must be demoable):**

1. Employee roster (replaces the founder’s spreadsheet).
2. Job + uploaded candidates + explainable ranking (replaces first-pass screening).
3. Nothing leaves the building (email) without an explicit founder send.

---

## 3. Repository truth (Phase 0 — already done)

Do not spend a conversation re-deriving this. Re-inspect files you will *edit*; do not reinvent tenant/AI/approval architecture.

### Stack (from code, not marketing copy)

| Layer | Actual |
|-------|--------|
| App | Next.js 14 App Router (`package.json`: `next@^14.2.35`) |
| DB | Supabase Postgres + RLS. Latest local migration at time of writing: `20260718120000_generic_mailbox_credentials.sql` |
| AI | OpenAI via `lib/ai/provider.ts` (gpt-4o / gpt-4o-mini / embeddings). n8n calls `/api/internal/n8n/ai/*` — it does not hold `OPENAI_API_KEY` |
| Orchestration | n8n Cloud + `n8n_logic/`. Business rules stay in Next.js/`lib/` |
| Chat | Read-only Revenue Analyst at `/chat` (`app/api/chat/route.ts`, `lib/chat/*`) |
| Knowledge | One `embeddings` table, `kind` in (`business_doc`, `conversation`, `summary`) |
| Approval | `lib/approval-policy.ts` + `/approval` + `reply_drafts` |
| Tenancy | Pipeline: `teams` → `workspaces` → `team_id` / `workspace_id`. Social: `organizations`. Bridge: `teams.organization_id` (`20260717120000_teams_organization_id_bridge.sql`) |
| API auth | `requireApiTenantContext()` in `lib/api-security.ts` (user + `profiles.team_id` + first workspace). Rate limits on routes |
| Nav | `components/layout/AppSidebar.tsx` — `/dashboard` `/inbox` `/approval` `/report` `/posts` `/chat` `/team` `/profile` |
| `/team` | **Nexus workspace invites** (`app/team/page.tsx` → `InviteManager`). **Not company employees.** People UI must be `/people` |
| UI kit | Hand-built `components/ui/*` (Button, Card, Badge, EmptyState, FilterChip, Spinner, …). shadcn is configured, not installed |
| Data UI | React Query + `lib/queries/fetchers.ts` + `lib/queries/keys.ts` + `authenticatedFetch` |
| Jobs today | `gmail_backfill_jobs` (domain-specific). No generic queue. Trigger.dev is unused |
| Observability | `workflow_logs` (n8n steps, not an audit log). `ai_usage` (token accounting) |
| Tests | `scripts/*.test.ts` via `tsx` + `npm run test:gate` |

### Patterns new People code MUST reuse

- Mutations: `requireApiTenantContext()` then filter by `teamId`. Never trust client-supplied `team_id`.
- RLS: `team_id = (select private.current_team_id())`, enable RLS on create, revoke anon.
- Team stamp: `trg_chat_set_team_from_workspace()` / equivalent on insert of `workspace_id`.
- Uploads: `app/api/business-docs/route.ts` (size cap, safe file name, private bucket, tenant path).
- AI: only `lib/ai/*` + `recordAiUsage()`. New operations are extra `workflow_name` strings, not a new usage table.
- Outbound: generate draft → persist → human act → send executor. Classifiers/drafters never send.
- Pure policy in `lib/` with `scripts/*_policy.test.ts` (copy `scripts/approval_policy.test.ts`).
- Additive numbered SQL under `supabase/migrations/`. Never edit old migrations. Next timestamp must sort **after** `20260718120000`.
- iCloud hazard: never read/edit/import `* 2.ext`.

### Architectural risks to respect (do not “fix” inside a People partition)

1. Dual tenant IDs (`team_id` vs `organization_id`) — People uses pipeline tenancy only.
2. Chat is read-only by construction — do not add tools in early partitions.
3. n8n production URL vs missing internal routes on some branches — out of scope.
4. `trigger.config.ts` orphan — do not build on it.
5. Graphify CLI may be missing locally; `graphify-out/` still exists.

---

## 4. Target architecture (fits this repo)

Keep the **layering** from the incoming plan. Do not invent a parallel runtime.

```text
┌──────────────────────────┐
│  AI layer                │  interpretation, explanation, draft text
│  lib/ai/*  + prompts     │  NEVER authorization, NEVER final numeric score
└────────────┬─────────────┘
             ▼
┌──────────────────────────┐
│  Nexus services          │  validation, scoring, CSV, state transitions
│  lib/people/*            │  deterministic; unit-tested
└────────────┬─────────────┘
             ▼
┌──────────────────────────┐
│  HTTP + policy           │  requireApiTenantContext, rateLimit,
│  app/api/people/*        │  draft-vs-send, confirm employment-status
└────────────┬─────────────┘
             ▼
┌──────────────────────────┐
│  Postgres + RLS          │  team_id / workspace_id on every row
└──────────────────────────┘
```

Chat stays the Revenue Analyst. After People data exists, **G1** may add a **read-only People snapshot** to `buildAnalystContext` (same pattern as leads). That is not a router.

People email is a **dedicated composer** (form + structured pickers + editable draft), not a widget-chat OS, until G1 proves read-only Q&A is not enough.

---

## 5. People domain model (minimal, extensible)

Internal name: **People**. Routes: `/people/*`. Nav label: **People**. Never collide with `/team`.

```text
People
├── Employees     (roster; no AI in CRUD)
├── Jobs          (requirements + versioned weights)
├── Candidates    (founder-owned; source provenance)
├── Applications  (candidate_jobs: stage + score + explanation)
├── Imports       (CSV; shared parser)
└── Audit         (append-only; also feeds activity UI)
```

### Tables (A2 — do not add more in A2)

`employees` — identity + role_title + employment_status + dates + location + notes + `archived_at`. Unique `(team_id, lower(email))` where email present and not archived.

`jobs` — title, description, status (`draft|open|closed`), required/preferred skills (`jsonb` string arrays), experience min/max, seniority, location, remote_policy, `scoring_weights jsonb`, `scoring_weights_version int`.

`candidates` — identity, headline, current_role, experience_years, skills `jsonb`, location, `source`, `source_url`, `source_metadata jsonb`, `consent_status` (`owner_imported|candidate_applied|unknown`), notes, `archived_at`. Unique `(team_id, lower(email))` where email present and not archived.

`candidate_jobs` — `(candidate_id, job_id)` unique. `stage` (`new|shortlisted|contacted|decision`). Nullable scoring columns: `match_score`, `match_components`, `match_weights_used`, `scoring_version`, `data_quality` (`pending|sufficient|insufficient`), `insufficient_reason`, `ai_explanation jsonb`, `ai_model`, `ai_prompt_version`, `manual_rank_override`. `assigned_to` uuid nullable (auth user).

`background_jobs` — generic, **new rows only** (do not migrate `gmail_backfill_jobs` in this program). `kind`, `status` (`queued|running|completed|failed|cancelled`), `payload jsonb`, `progress jsonb`, `error`, `idempotency_key`, `attempts`, `run_after`, lock columns. Tenant scoped.

`import_rows` optional: prefer storing row errors on `background_jobs.progress` / a small `import_row_errors` table if needed for UI. Do not overbuild.

**Do not create** `people_activity` if `audit_events` can serve the activity timeline (DRY).

### Default scoring weights (stored on the job, versioned)

Must sum to `1.0` (validate on write):

```text
technical_fit     0.40
experience_fit    0.25
seniority_fit     0.15
location_fit      0.05
nice_to_have      0.10
data_quality      0.05
```

Changing weights increments `scoring_weights_version` and does not rewrite old `candidate_jobs` scores until a re-run.

### Compliance (from the old hiring blueprint — stronger than the incoming plan)

- Store only data needed to contact and evaluate against a job.
- `consent_status` on every candidate.
- No inferred protected attributes (age, gender, marital status, religion, health, ethnicity, etc.).
- No fabricated emails, salaries, or GitHub-less contact data.
- CSV: reject spreadsheet formula injection (`=`, `+`, `-`, `@` at cell start) by treating those cells as text or failing the row.
- PII: do not put full candidate payloads in `workflow_logs`. Audit prev/next state may store field-level diffs; avoid dumping entire CVs into logs.
- Archive over hard delete in v1; add a real deletion/export path before public launch (called out in G1 notes / later hardening).

---

## 6. Scoring contract (D2–D4)

```text
Candidate facts + job requirements
        → deterministic features
        → weighted score OR insufficient_data
        → LLM explanation of the *already computed* evidence
        → human ranking / stage / override
```

LLM output shape (validate; discard malformed):

```json
{
  "summary": "…",
  "strengths": [],
  "gaps": [],
  "evidence": [],
  "concerns": [],
  "recommendation": "strong_match | possible_match | weak_match | insufficient_data"
}
```

`recommendation` means **recommended for human review**, never hire/reject.

Prompt must forbid em dash / en dash in generated *letters* (F1). Scoring explanations should also avoid inventing punctuation-as-style that hides missing evidence.

---

## 7. Background work

When candidate matching or large candidate CSV needs more than a short request:

1. Insert `background_jobs` (`queued`, idempotency key).
2. Process in batches inside `app/api/internal/people/jobs/run` (or similar), token-auth **or** authenticated founder poll + server cron later.
3. **n8n may trigger the run endpoint.** n8n must not compute scores.
4. UI polls job status. Never loop 100 LLM calls in one user request.

Until D1, employee CSV may be **synchronous with a hard row cap** (e.g. 500) so B4 stays small.

---

## 8. What “done” looks like for this program (Wave 1)

A founder can:

- Import/export employees and maintain the roster without AI.
- Define a job with skills and weights.
- Import candidates from CSV, see row-level failures.
- Get a ranked list with breakdown, evidence, and an advisory AI summary.
- Move people through New → Shortlisted → Contacted → Decision.
- Draft and **explicitly send** an email; optionally confirm a follow-up status change.
- Ask Chat read-only questions that use a People snapshot (G1).

A founder cannot:

- Have Nexus hire, reject, or terminate anyone.
- Have Nexus email without pressing send on a stored draft.
- Have Nexus change employment status as a side effect of sending.

---

## 9. Deferred (Wave 2+) — do not sneak into Wave 1 partitions

- Candidate source adapters (`CandidateSource`) and GitHub discovery.
- Nexus Router and Marketing/Customer/Operations agents.
- Conversational tool-calling People Agent (after G1).
- n8n “when shortlisted, draft email” automations.
- CV PDF parse, leave, payroll, performance.
- Unifying `organizations` vs `teams`.
- Migrating `gmail_backfill_jobs` onto `background_jobs`.

---

## 10. Partition tracker

| ID | Name | Depends | Status |
|----|------|---------|--------|
| A1 | Append-only audit log | — | pending |
| A2 | People schema + RLS | — | pending |
| B1 | Employee service + API | A2, A1 | pending |
| B2 | Employee UI + `/people` nav | B1 | pending |
| B3 | Shared CSV parser (pure) | — | pending |
| B4 | Employee CSV import/export | B2, B3 | pending |
| C1 | Jobs API + create/edit UI | A2 | pending |
| C2 | Candidate CRUD API + UI | A2 | pending |
| C3 | Candidate CSV into a job | B3, B4, C1, C2 | pending |
| D1 | `background_jobs` + match worker skeleton | C3 | pending |
| D2 | Deterministic scoring engine | — | pending |
| D3 | Wire scoring into worker | D1, D2 | pending |
| D4 | AI explanation layer | D3 | pending |
| D5 | Ranking UI | D4 | pending |
| D6 | Four-stage pipeline | D5 | pending |
| F1 | Generic email draft service | — | pending |
| F2 | Composer + explicit send | F1, A1, C2 or B1 | pending |
| F3 | Post-send follow-up confirmation | F2 | pending |
| G1 | Read-only People snapshot in Chat | B1, C1, C2 | pending |

Suggested conversation order: **A1 → A2 → B1 → B2 → B3 → B4 → C1 → C2 → C3 → D2 (can overlap D1) → D1 → D3 → D4 → D5 → D6 → F1 → F2 → F3 → G1**.

---

## 11. Shared agent contract (paste at the top of every partition)

```text
You are implementing ONE numbered partition from docs/NEXUS_OPERATING_LAYER_PLAN.md.

Read before any edit:
- .cursor/rules/nexus.mdc
- The partition section you were given (only)
- The existing files that partition lists under Reuse

Hard rules:
1. Inspect current code. Reuse patterns. Do not invent a parallel architecture.
2. Implement only this partition. If you need a missing primitive from an earlier partition, STOP.
3. Tenant isolation: team_id + workspace_id from requireApiTenantContext(). Never trust client tenant ids.
4. Do not use organization_id as the People tenant root.
5. Do not read, edit, or import files named "* 2.ext".
6. Additive migrations only. Next SQL filename must sort after the latest existing supabase/migrations/*.sql.
7. RLS on every new table from the first migration. Enable RLS + team policies + revoke anon.
8. No AI in CRUD partitions. No GitHub. No router. No mega-agent.
9. LLM never authorizes and never computes the official match score.
10. After implementation: re-read your diff, DRY, small functions, early returns, no dead code, no console.log, no nested if/else ladders.
11. Security: parameterized Supabase queries only; rateLimit on new routes; validate/limit payloads; CSV injection; no secret leakage; no user data in client-trusted filters.
12. Run the partition’s verify commands. Do not claim done if they fail.
13. End with the report-back block from .cursor/rules/nexus.mdc.
14. Never silently redesign unrelated features or global navigation (B2 may add ONE People item only).
```

---

## 12. Partitions (copy-paste prompts)

Each prompt is the full task. Do not combine them.

---

### A1 — Append-only audit log

**Goal:** Tenant-scoped, append-only `audit_events` + server writer. No People UI.

**Reuse:** `requireApiTenantContext()`, RLS style in `20260714190000_ai_usage.sql` (select for members, writes not for `authenticated` if you choose service/server-only inserts — prefer **authenticated insert with RLS** so the app user is the actor, but **revoke UPDATE and DELETE** from `authenticated` and `anon`). `lib/api-security.ts` for actor = `user.id`.

**In scope:** migration; `lib/audit.ts` `writeAuditEvent()` that ignores client actor/tenant and uses context; indexes `(team_id, created_at desc)`, `(team_id, entity_type, entity_id)`; tests for write, tenant isolation, update/delete denied.

**Out of scope:** People tables, UI, n8n, changing `workflow_logs`.

**Verify:** `npm run test:migration-order`, new `npm run test:audit` (add script), `npx tsc --noEmit` or `npm run lint`.

**Prompt:**

```text
Implement partition A1 only from docs/NEXUS_OPERATING_LAYER_PLAN.md.

Create public.audit_events:
- id uuid pk
- team_id uuid not null references teams
- workspace_id uuid references workspaces
- actor_user_id uuid references auth.users (nullable for system)
- domain text not null  -- e.g. people | revenue | system
- action text not null
- entity_type text not null
- entity_id uuid
- prev_state jsonb
- next_state jsonb
- metadata jsonb not null default '{}'
- created_at timestamptz default now()

RLS: members can SELECT their team. INSERT allowed for authenticated only when team_id = current_team_id() AND actor_user_id = auth.uid(). No UPDATE/DELETE policies. Revoke update/delete.

writeAuditEvent must take a server tenant context; never accept actor/team from the request body.

Add scripts/audit.test.ts covering: insert ok, cross-tenant cannot read, update rejected.

Do not build HR features.
```

---

### A2 — People schema + RLS

**Goal:** Minimum People tables. No API, no UI, no AI.

**Reuse:** `0001_initial_schema.sql` FKs; knowledge-layer RLS; `trg_chat_set_team_from_workspace` if still the canonical team-stamp trigger (inspect — do not duplicate a second stamp function if one exists).

**In scope:** `employees`, `jobs`, `candidates`, `candidate_jobs` as specified in §5. Check constraints for enums. Soft archive columns. Indexes for team list queries and `candidate_jobs (job_id, match_score desc)`. Comments on tables. Optional: do **not** add `background_jobs` here (D1).

**Out of scope:** scoring, CSV, routes, nav.

**Verify:** `npm run test:migration-order`; add `scripts/people_schema.test.ts` that reads the new SQL and asserts RLS enabled, tenant columns, and stage check include the four stages.

**Prompt:**

```text
Implement partition A2 only from docs/NEXUS_OPERATING_LAYER_PLAN.md §5.

Inspect private.current_team_id() and an existing tenant table’s RLS. Copy that pattern.

Follow the actual tenant model (teams/workspaces). Do not use organizations as the row owner.

Keep the schema minimal and extensible. No scoring worker, no GitHub columns, no nine ATS stages.

Unique emails per team for non-archived employees and candidates (case-insensitive).

Run migration-order tests and a new schema assertion test.
```

---

### B1 — Employee service + API

**Goal:** Server-side employee CRUD + search. Audit writes. No UI.

**Reuse:** `app/api/conversations/route.ts` (rateLimit, requireApiTenantContext, bounded strings); `writeAuditEvent`; types in `types/` if that is where Conversation lives — inspect and match.

**In scope:** `lib/people/employees.ts`; `GET/POST /api/people/employees`; `GET/PATCH /api/people/employees/[id]`; archive via `PATCH { archived: true }` or `POST .../archive` (pick one, document). Search q on name/email. employment_status allowlist. Never take team_id from body.

**Out of scope:** UI, CSV, AI. Do not allow `offboarded` / `resignation_pending` without the same validation as other statuses yet (allow the enum; F3 adds extra confirmation for chat/email). For API, require the field to be in the allowlist; UI will confirm.

**Verify:** `scripts/people_employees_api.test.ts` with mocked supabase like `scripts/approval_route.test.ts`. Cases: create, list scoped, reject extra fields, archive audited, unauthorized, missing tenant.

**Prompt:**

```text
Implement partition B1 only.

Employee API using A2 tables and A1 audit. Follow conversations route security patterns.

employment_status allowlist: active | onboarding | resignation_pending | offboarded.
Archive is soft (archived_at).

No UI. No CSV. No AI.
```

---

### B2 — Employee UI + nav

**Goal:** `/people` employees list/detail/create/edit/archive. One sidebar item.

**Reuse:** `AppSidebar.tsx` `appNav`; `inbox/page.tsx` FilterChip, EmptyState, Spinner, React Query; `lib/queries/keys.ts` + fetchers; `components/ui/*`. Do not install shadcn.

**In scope:** pages under `app/people/`; components under `components/people/`; fetcher + query keys; prefetch in `nav-prefetch.ts` for `/people`. Loading/empty/error. Responsive. Confirm dialog before archive.

**Out of scope:** Candidates, jobs, CSV, AI, redesigning other nav items. `/team` stays invites.

**Verify:** `npm run lint`, `npm run build`. Browser-check list/create/edit/empty if a server is available; otherwise state that limitation.

**Prompt:**

```text
Implement partition B2 only.

Employee management UI on /people (employees as default). Add a single "People" item to AppSidebar. Do not redesign navigation otherwise. Do not reuse /team.

Reuse existing UI components and React Query fetchers.

No AI. No CSV. Proper empty/loading/error states.
```

---

### B3 — Shared CSV parser (pure)

**Goal:** Parse, map columns, validate, detect duplicates in-memory. No HTTP.

**Reuse:** none required. Keep **zero** Next.js imports so tests stay pure.

**In scope:** `lib/csv/parse.ts` (or `lib/import/csv.ts`): delimiter detect, header row, mapping `{ sourceColumn → field }`, per-row errors, duplicate keys, formula-injection handling, summary `{ imported, updated, duplicates, failed }` as a **plan** object (no DB). Profiles: `employee` and `candidate` field dictionaries (required vs optional).

**Out of scope:** upload, storage, employees table writes.

**Verify:** `scripts/csv_engine.test.ts` — malformed CSV, missing required columns, duplicates, `=CMD` cells, large-ish string, quoted commas.

**Prompt:**

```text
Implement partition B3 only.

Reusable CSV engine for People. Support employee fields now and candidate fields in the dictionary so C3 does not fork a second parser.

Do not upload or write to the database. Pure functions + tests.
```

---

### B4 — Employee CSV import/export

**Goal:** Upload → map → preview → import with partial success; export current roster.

**Reuse:** B3; business-docs upload limits; B1 employee service (upsert by email); audit; private storage bucket `people-imports` if files must persist — otherwise parse in-memory under a size cap (1 MB) to stay small. Prefer **in-memory + cap** unless storage is clearly needed.

**In scope:** API + UI on employees page. Summary: `942 imported / 37 updated / 21 duplicates / 8 failed` with row errors. Export CSV of non-archived employees. Row cap 500.

**Out of scope:** Candidate import, AI, background_jobs, second parser.

**Verify:** tests for duplicate email upsert, over-cap rejection, mapping preview. lint + build.

**Prompt:**

```text
Implement partition B4 only.

Wire B3 into employee import/export. Tenant isolation. Show row-level failures. Partial success. No AI. No candidate import.
```

---

### C1 — Jobs API + UI

**Goal:** Create/edit jobs including skills, experience, location, remote, **versioned weights**.

**Reuse:** B1/B2 patterns. Validate weights sum to 1.0 ± epsilon.

**Out of scope:** matching, AI, candidates list.

**Verify:** unit test weight validation; API tests; lint.

**Prompt:**

```text
Implement partition C1 only from docs/NEXUS_OPERATING_LAYER_PLAN.md.

Job requirements foundation: fields in §5, configurable scoring weights stored on the job and versioned when changed.

No matching, no AI scoring, no candidate ranking UI.
```

---

### C2 — Candidate CRUD

**Goal:** Manual add/edit/list/detail candidates. Provenance fields. consent_status. No scores.

**Reuse:** employees UI patterns. Do not duplicate form primitives — extract a small shared People form field if B2 already copied too much (DRY).

**Out of scope:** CSV, scoring, GitHub.

**Prompt:**

```text
Implement partition C2 only.

Candidate CRUD, tenant isolated, audited mutations. Sparse records are valid. No AI. No scoring columns required on create.
```

---

### C3 — Candidate CSV for a job

**Goal:** Import candidates from CSV, upsert, attach `candidate_jobs` at stage `new`. No scores.

**Reuse:** B3, B4 UX, C1 job picker, C2 upsert. Idempotent: same file/email/job does not duplicate `candidate_jobs`.

**Out of scope:** LLM, deterministic scoring run (may enqueue later in D1 — **do not enqueue if D1 table missing**; just insert rows).

**Prompt:**

```text
Implement partition C3 only.

Candidate CSV ingestion + associate with selected job. Partial failures. Duplicate handling. Sparse candidates remain valid. No scores. No LLM.
```

---

### D1 — background_jobs + match worker skeleton

**Goal:** Persist jobs; run endpoint processes N `candidate_jobs` with `data_quality=pending` and **marks them running/completed without scoring** (no-op processor OR sets a `skipped_reason=not_implemented` only if that would confuse UI — better: processor is a stub that exits 0 rows until D3). Prefer: worker loop + progress + retry **with a `processKind` switch**; `people.match` case returns `not_implemented` only in tests… **Simplest:** implement state machine + `runNextBatch` that selects rows and calls `applyMatchToCandidateJob` from a module D3 will fill. In D1 export a stub `applyMatchToCandidateJob` that throws `not_implemented` **or** no-op. Cleaner: D1 only table + `claimJob` / `failJob` / `completeJob` helpers + HTTP run route that no-ops if kind has no handler.

**Reuse:** `gmail_backfill_jobs` status/lock ideas. Do not modify Gmail jobs.

**Prompt:**

```text
Implement partition D1 only.

Smallest production-safe background job table for People matching (and future CSV if needed). States: queued, running, completed, failed, cancelled. Retry, idempotency_key, progress jsonb, tenant RLS, lock/claim to survive interruption.

Do not implement scoring. Do not use Trigger.dev. Do not put logic in n8n. Document how a later cron or n8n webhook will POST the run endpoint.

Inspect gmail_backfill_jobs and copy the spirit, not the Gmail columns.
```

---

### D2 — Deterministic scoring (pure)

**Goal:** Score function + tests. No DB.

**Prompt:**

```text
Implement partition D2 only.

Deterministic candidate matching in lib/people/score.ts (name may vary).

Inputs: normalized candidate, job requirements, weights.
Outputs: component scores, weighted total 0-100 OR { data_quality: "insufficient", reason }.

Rules:
- Missing required-skill evidence is not a match for that skill (score 0 for that skill), not invented competence.
- If too little data to evaluate required skills AND experience, return insufficient instead of a number.
- Explainability: return why each component scored as it did (evidence refs).
- Store scoring_version string constant in code.
- Comprehensive tests: full match, partial, remote vs office, empty skills, weight changes.
- No LLM. No n8n. No UI.
```

---

### D3 — Wire scoring to worker

**Goal:** `people.match` handler writes scores onto `candidate_jobs`, copies weights used, version, components. Skip insufficient with null score.

**Prompt:**

```text
Implement partition D3 only.

Connect D1 worker to D2 scoring. Batch candidate_jobs for a job_id. Idempotent re-run overwrites scores for that scoring_version+weights_version. Audit a job-level event, not per-row PII dumps.

No LLM explanation yet. No ranking UI.
```

---

### D4 — AI explanation

**Goal:** After scores exist, LLM fills `ai_explanation` JSON. `lib/ai/*` + `recordAiUsage`. Validate schema.

**Prompt:**

```text
Implement partition D4 only.

AI explanation layer. Do not change D2 math.

Model receives job requirements, candidate evidence, component scores, data quality.
Returns JSON: summary, strengths, gaps, evidence, concerns, recommendation.
Rules in docs/NEXUS_OPERATING_LAYER_PLAN.md §6.
No evidence → no claim. Never hiring decision. Never protected attributes. Never invent salary.
Persist model + prompt version. Reject malformed output and store error on the row.

Use lib/ai/provider.ts. Do not import openai from the route.
```

---

### D5 — Ranking UI

**Goal:** Job dashboard: sort by score (nulls last), breakdown, AI summary, evidence, data quality, source links, override, notes, bulk select. Advisory labeling.

**Prompt:**

```text
Implement partition D5 only.

Smart Candidate Matching UI using existing Nexus UI components.

Make it obvious the score and AI text are advisory. Support manual rank override.

No email send. No extra ATS stages.
```

---

### D6 — Four-stage pipeline

**Goal:** Move stage New → Shortlisted → Contacted → Decision; history via audit; bulk move; assigned_to optional.

**Prompt:**

```text
Implement partition D6 only.

Hiring pipeline with exactly four stages. Every transition writes audit_events. No AI. No automated decision. Tenant isolation. Bulk actions.
```

---

### F1 — Generic email draft service

**Goal:** `lib/ai/draft-email.ts` (name as needed) — not HR-specific. No send.

**Reuse:** `lib/ai/draft.ts` reply generation. Separate prompt file under `ai_prompts/`.

**Prompt:**

```text
Implement partition F1 only.

Reusable email drafting service for candidates, employees, customers, leads later.

Input: recipient context, situation, optional tone/purpose, tenant business_profiles snippets.
Output: subject, body, metadata. Validate. recordAiUsage. Log prompt/model version.

Never send. Never invent facts. Preserve user-provided facts.
System prompt: no em dash, en dash, or standalone dash punctuation in generated letters; use commas, periods, colons, or semicolons.

No chat UI.
```

---

### F2 — Composer + explicit send

**Goal:** UI with **real** employee/candidate/date/tone selectors (HTML controls). Generate → edit → send stored draft only.

**Reuse:** Gmail/mailbox send path (`lib/gmail/send.ts` / channel sender). **Do not** send via Chat. Persist `people_message_drafts` (or similar) with status `draft|sent|discarded`. Send endpoint loads draft by id + team_id.

**Prompt:**

```text
Implement partition F2 only.

Conversational-feeling composer is allowed, but selections MUST be real UI controls, not LLM-interpreted "yes".

Flow: pick recipient from People data → collect missing fields via inputs → F1 generate → editable draft → explicit Send.

Sending requires confirmation in the UI and a separate API from generate.
Failed send does not change employee/candidate rows.
Audit generate and send.

Inspect existing mail send; reuse transports. Do not auto-send.
```

---

### F3 — Post-send follow-up

**Goal:** After successful send, propose e.g. “mark resignation pending” as a **structured confirm**, separate request.

**Prompt:**

```text
Implement partition F3 only.

Generic action chaining after a successful people email send. Follow-up mutations are opt-in, structured, audited, and must not run if send failed.

LLM cannot bypass. Employee record does not change because an email was sent.
```

---

### G1 — Read-only People snapshot in Chat

**Goal:** Extend `buildAnalystContext` with compact People stats + top open jobs + candidates awaiting review. Update system prompt: still **read-only**, no “I emailed them.” Cite that People numbers come from the snapshot.

**Prompt:**

```text
Implement partition G1 only.

Add a tenant-scoped People section to the existing Revenue Analyst snapshot. Keep the agent read-only. No tools, no router, no mutations.

Reuse lib/chat/analyst-context.ts and tests in scripts/chat_analyst.test.ts + scripts/chat_prompt_injection.test.ts (extend injection tests so a user cannot jailbreak “update the employee”).

If People tables are empty, say so. Do not fabricate employees.
```

---

## 13. Future partitions (do not run until Wave 1 is done)

These replace incoming Phases 6–12. Each must still be a **separate** conversation.

| ID | Name | Note |
|----|------|------|
| G2 | People read tools in Chat | Only if G1 Q&A is insufficient |
| G3 | Confirmation-gated People tools | Action metadata in code; never in the prompt |
| H1 | CandidateSource adapter | Interface only |
| H2 | One consented source | Not GitHub scrape-by-default; human picks the source |
| I1 | Mini-router | people vs revenue vs small-talk — still no mega-tools |
| J1 | Knowledge: embed People summaries | Only when a feature reads `kind` |
| K1 | n8n triggers calling Nexus APIs | Approval checkpoints stay in Nexus |
| L1 | Production hardening audit | RLS, CSV, prompt injection, retention, cost caps |

---

## 14. Testing strategy

- Pure: CSV, scoring, weight validation, approval-like people send policy.
- Route: mock Supabase like `approval_route.test.ts`.
- RLS: SQL assertions + at least one test that a second team_id cannot read.
- Chat: prompt-injection tests whenever Chat context grows.
- `npm run test:gate` before calling a wave done (build is included).

Add npm scripts for each new `scripts/*.test.ts` and append **fast** ones to `test:gate` when they do not need network.

---

## 15. Human actions (not agent)

- Apply new migrations on the hosted Supabase project.
- Create storage bucket if B4 uses one (`people-imports`, private, tenant-prefixed paths).
- Decide later: n8n cron vs Vercel cron for `background_jobs` run.
- Do not enable GitHub discovery without a consent/legal review.

---

## 16. Open questions (do not block Wave 1)

1. Who may see salary fields if they are added later? (Do not add salary in A2.)
2. Multi-workspace teams: APIs today pick the **first** workspace (`requireApiTenantContext`). People inherits that; do not invent workspace switchers in B2.
3. Whether People emails use the connected Gmail vs SMTP mailbox — F2 must inspect which transport the tenant actually has.

---

## DONE criteria for the *plan* work (this document)

- Incoming 12-phase mega-build is replaced by Wave 1 partitions above.
- Repo truth recorded so agents do not follow README fiction (`organizations` / OpenRouter as primary).
- Rules live in one file: `.cursor/rules/nexus.mdc`.
