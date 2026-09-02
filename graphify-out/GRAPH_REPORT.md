# Graph Report - Nexus-OS  (2026-09-02)

## Corpus Check
- 524 files · ~309,962 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 3494 nodes · 7613 edges · 213 communities (178 shown, 35 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 92 edges (avg confidence: 0.63)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `41bd5508`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- match-worker.ts
- employees.ts
- scripts
- tenant_intake_mapping.test.mjs
- multi_channel_normalizer.js
- Reply Generation Prompt (GPT-4o)
- candidates.ts
- csv/index.ts
- social/helpers.ts
- compilerOptions
- autopilot_send.test.ts
- PipelineFlow.tsx
- webhook/route.ts
- StepAccount.tsx
- build_n8n_workflow_exports.js
- signup/page.tsx
- 12. Partitions (copy-paste prompts)
- settings/route.ts
- candidate-jobs.ts
- callback/handler.ts
- employee-csv.ts
- system-prompt.ts
- chat/page.tsx
- EmployeesList.tsx
- api-security.ts
- score.ts
- audit.test.ts
- sync.ts
- meta/helpers.ts
- components.json
- useTenantScope
- supabase_auth_email_config.js
- AuthGuard.tsx
- report/page.tsx
- dashboardData.ts
- local-dev-signup/route.ts
- people-explain.ts
- dashboard/page.tsx
- chat_analyst.test.ts
- app/page.tsx
- JobForm.tsx
- people_employees_api.test.ts
- dependencies
- customers/page.tsx
- workflow_2_classification.js
- workflow_3_agent.js
- rateLimit
- workflow_4_buy_back_report.js
- Revenue Growth Motif
- noise_filter.js
- inbound_events_idempotency.test.ts
- types/index.ts
- approval/page.tsx
- createSupabaseBrowserClient
- analyst-context.ts
- Nexus OS — Operating Layer & People Intelligence
- launch_workspace_rpc.test.mjs
- csv/parse.ts
- utils.ts
- seed_demo_inbox.ts
- useRealtimeData.ts
- content.ts
- cn
- fetchers.ts
- member4_classification_tests.js
- test-buy-back-report.mjs
- appearance-prefs.ts
- check_signup_backend.js
- graphify in Nexus OS (and any repo)
- meta/callback/route.ts
- middleware.ts
- meta-credentials/route.ts
- smoke_classification_openai.js
- CreateWithAiPath.tsx
- extends
- ensure-graphify.sh
- privacy/page.tsx
- terms/page.tsx
- conversations-query.ts
- graphify.sh
- Buy-Back Report Prompt
- people_jobs_api.test.ts
- Gmail integration test results
- channel-sender.ts
- inbound_replay.test.ts
- New Gmail Implementation
- devDependencies
- send_reply.test.ts
- next.config.mjs
- Channel Sender — Approval-to-Send Contract
- Tenant model unification ADR
- people_employees_csv.test.ts
- draft.ts
- Nexus OS — Revenue Command Center
- Navy Blue + Green Accent Palette
- gmail_backfill.test.ts
- gmail_sync.test.ts
- n8n environment variables
- postcss.config.mjs
- Configuration
- candidate-csv.ts
- inbound-replay/route.ts
- posts/types.ts
- data.ts
- resources/page.tsx
- Build checklist
- people_match_worker.test.ts
- meta_send.test.ts
- daily_report_route.test.ts
- jobs.ts
- tailwind.config.ts
- 2. Verdict on the incoming 12-phase plan
- people_schema.test.ts
- people_background_jobs.test.ts
- store.ts
- timeseries.ts
- 3. Repository truth (Phase 0 — already done)
- 5. People domain model (minimal, extensible)
- followups_drain.test.ts
- audit.ts
- ai_classify_route.test.ts
- people_candidates_csv.test.ts
- chat_prompt_injection.test.ts
- Test Results — Classification Prompt v1
- Getting Started
- Usage
- Development Guide
- package.json
- Features
- Deployment
- api/conversations/route.ts
- social_oauth_state.test.ts
- people_candidates_api.test.ts
- settings/page.tsx
- ai_usage.test.ts
- wf2_tenant_contract.test.ts
- inbound_record.test.ts
- Migration notes — drift sync (Task 3.1, Member 3)
- PricingSection.tsx
- CandidateForm.tsx
- leads/route.ts
- n8n-job-tokens.ts
- meta/send.ts
- social_post_route.test.ts
- provider.ts
- Classification Prompt v1 Test Results (5/5 PASS)
- motion.ts
- executeSendReply
- background-jobs.ts
- Gmail Add-on / Metadata-First Flow
- Google Restricted Scope Problem (gmail.readonly)
- n8n Validation Warning Impact Classification
- Meta Webhook (/api/meta/webhook)
- Tenant Route Resolution Order
- Chat Agent v1 (Structured-Data, Read-Only)
- Core Pipeline (Deterministic Functions + Approval Gate)
- Edge Tenant Resolution
- 60-90 Day Historical Backfill on Connect
- Durable inbound_events Ledger + Idempotency
- Knowledge Layer (pgvector embeddings) — Deferred
- Five-Stage Pipeline (Intake to Sync)
- Founder Approval Queue
- Gmail IMAP Integration
- Multi-Tenant Architecture (teams/workspaces)
- Zero-Cost Noise Filter
- Nexus OS Revenue Command Center
- WF0a Gmail Intake Workflow
- WF3 Reply Agent Workflow
- isOpenAiConfigured
- n8n workflow exports
- report-summary.ts
- AppWindow.tsx
- AppShell.tsx
- tenant_routing_e2e.test.ts
- JobCandidatesRank.tsx
- pdf-parse.d.ts
- approval-policy.ts
- workflow_logs_route.test.ts
- app/layout.tsx
- AppTopBar.tsx
- migration_order.test.mjs
- meta-tenant.ts
- people_score.test.ts
- gmail/send.ts
- smtp-send.ts
- mailbox_sync.test.ts
- inbound-events.ts
- Nexus OS — Launch-Readiness Report (2026-07-15)
- SessionGate.tsx
- meta/status/route.ts
- rate_limit_durable.test.ts
- Manual actions — what the founder/operator must do by hand
- match_embeddings_route.test.ts
- clean_n8n_export.js
- gmail-backfill/route.ts
- createServerClient
- generate-favicons.mjs
- approval_route.test.ts
- Launch activation runbook
- route_reference.test.mjs
- CandidateCsvImport.tsx
- prepare_n8n_deploy_payload.mjs
- internal_leads.test.ts
- readJsonObjectWithLimit

## God Nodes (most connected - your core abstractions)
1. `cn()` - 140 edges
2. `rateLimit()` - 121 edges
3. `readJsonObjectWithLimit()` - 99 edges
4. `requireApiTenantContext()` - 78 edges
5. `createServerClient()` - 75 edges
6. `scripts` - 73 edges
7. `jsonError()` - 70 edges
8. `JSON_LIMITS` - 49 edges
9. `authenticatedFetch()` - 49 edges
10. `useTenantScope()` - 42 edges

## Surprising Connections (you probably didn't know these)
- `GET()` --calls--> `requireApiTenantContext()`  [EXTRACTED]
  app/api/conversations/[id]/route.ts → lib/api-security.ts
- `GET()` --calls--> `requireApiTenantContext()`  [EXTRACTED]
  app/api/conversations/route.ts → lib/api-security.ts
- `GET()` --calls--> `requireApiTenantContext()`  [EXTRACTED]
  app/api/gmail/status/route.ts → lib/api-security.ts
- `GET()` --calls--> `requireApiTenantContext()`  [EXTRACTED]
  app/api/meta/status/route.ts → lib/api-security.ts
- `GET()` --calls--> `requireApiTenantContext()`  [EXTRACTED]
  app/api/metrics/route.ts → lib/api-security.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Nexus OS Core Message Pipeline (Intake → Approval)** — readme_wf0a_gmail_intake, readme_noise_filter, readme_wf2_ai_classification, readme_wf3_reply_agent, readme_founder_approval_queue [EXTRACTED 1.00]
- **Gmail Integration Lifecycle (OAuth/IMAP → Testing → Add-on Pivot)** — readme_gmail_imap_integration, docs_gmail_integration_test_results_gmail_integration_test_results, docs_gmail_validation_warnings_classification_warning_impact_classification, docs_gmail_new_implementation_gmail_addon_flow [INFERRED 0.85]

## Communities (213 total, 35 thin omitted)

### Community 0 - "match-worker.ts"
Cohesion: 0.14
Nodes (29): complete(), dispatchBackgroundJob(), fail(), refreshLock(), requeueExplainContinuation(), setProgress(), buildAiExplanationErrorPatch(), buildCandidateJobPatch() (+21 more)

### Community 1 - "employees.ts"
Cohesion: 0.14
Nodes (33): AUDIT_DIFF_KEYS, auditDiff(), auditSnapshot(), boundedString(), CREATE_FIELDS, createEmployee(), EmployeeListOk, EmployeeOk (+25 more)

### Community 2 - "scripts"
Cohesion: 0.03
Nodes (73): scripts, build, check:auth-email, check:signup-backend, dev, fix:auth-email, graphify, graphify:ensure (+65 more)

### Community 3 - "tenant_intake_mapping.test.mjs"
Cohesion: 0.06
Nodes (39): buildLookupPath(), buildLookupUrl(), isUuid(), requireTeamId(), detectMetaMessagingPlatformFromBody(), extractBearerFromHeaders(), extractFacebookPageId(), extractGmailDestinationMailbox() (+31 more)

### Community 4 - "multi_channel_normalizer.js"
Cohesion: 0.08
Nodes (40): attachTenant(), detectMetaMessagingPlatform(), detectSource(), isUuid(), looksLikeMetaMessaging(), looksLikeMetaWhatsapp(), metaMessagingObject(), normalizeItem() (+32 more)

### Community 5 - "Reply Generation Prompt (GPT-4o)"
Cohesion: 0.67
Nodes (3): Classification Prompt (GPT-4o), Reply Generation Prompt (GPT-4o), WF2 AI Classification Workflow

### Community 6 - "candidates.ts"
Cohesion: 0.15
Nodes (33): AUDIT_DIFF_KEYS, auditDiff(), auditSnapshot(), boundedString(), CandidateListOk, CandidateOk, CREATE_FIELDS, createCandidate() (+25 more)

### Community 7 - "csv/index.ts"
Cohesion: 0.10
Nodes (42): applyUnmappedDefaults(), CoerceErr, coerceField(), CoerceOk, collectRowErrors(), countSummary(), CsvImportFileError, CsvImportResult (+34 more)

### Community 8 - "social/helpers.ts"
Cohesion: 0.18
Nodes (22): appUrl(), dynamic, exchangeCode(), GET(), runtime, settingsRedirect(), TokenResult, dynamic (+14 more)

### Community 9 - "compilerOptions"
Cohesion: 0.06
Nodes (30): **/* 2.ts, **/* 2.tsx, dom, dom.iterable, esnext, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts (+22 more)

### Community 10 - "autopilot_send.test.ts"
Cohesion: 0.12
Nodes (7): credResult, fakeClient, GmailSendError, moduleWithLoad, Row, SeedOpts, store

### Community 11 - "PipelineFlow.tsx"
Cohesion: 0.15
Nodes (15): AnimatedChip(), Chip, CHIPS, HORIZONTAL, laneFor(), Layout, opacityAt(), Point (+7 more)

### Community 12 - "webhook/route.ts"
Cohesion: 0.27
Nodes (10): ExtractedMessage, extractMessages(), verifyMetaSignature(), WebhookPlatform, dynamic, POST(), runtime, recordInboundEvents() (+2 more)

### Community 13 - "StepAccount.tsx"
Cohesion: 0.11
Nodes (25): dynamic, isValidEmail(), normalizeEmail(), POST(), runtime, dynamic, GET(), isRateLimitError() (+17 more)

### Community 14 - "build_n8n_workflow_exports.js"
Cohesion: 0.07
Nodes (23): buildInboundFinalizePayloadJs, connGmail, dedupDecision, dedupLookupQuery, emailTrigger, fs, gmailWebhook, ifKeepNode() (+15 more)

### Community 15 - "signup/page.tsx"
Cohesion: 0.08
Nodes (40): hasSignupProgress(), SignupPage(), STEP_FROM_PARAM, STEP_LABELS, stepFromParam(), authPrimaryButton, authSecondaryButton, FormInput() (+32 more)

### Community 16 - "12. Partitions (copy-paste prompts)"
Cohesion: 0.10
Nodes (20): 12. Partitions (copy-paste prompts), A1 — Append-only audit log, A2 — People schema + RLS, B1 — Employee service + API, B2 — Employee UI + nav, B3 — Shared CSV parser (pure), B4 — Employee CSV import/export, C1 — Jobs API + UI (+12 more)

### Community 17 - "settings/route.ts"
Cohesion: 0.13
Nodes (23): applyChannelPatch(), APPROVAL_MODES, billingPeriodBounds(), CHANNEL_ACTIONS, CHANNEL_TARGETS, ChannelPatch, COMMON_TIMEZONES, dynamic (+15 more)

### Community 18 - "candidate-jobs.ts"
Cohesion: 0.06
Nodes (36): dynamic, fromService(), GET(), RouteContext, CandidateJobErr, CandidateJobJoinRow, CandidateJobOk, CandidateJoinRow (+28 more)

### Community 19 - "callback/handler.ts"
Cohesion: 0.07
Nodes (43): absoluteRedirect(), defaultGmailCallbackDeps, errorRedirect(), GmailCallbackDeps, GoogleTokenResponse, GoogleUserInfo, handleGmailOAuthCallback(), logStageError() (+35 more)

### Community 20 - "employee-csv.ts"
Cohesion: 0.14
Nodes (27): utf8ByteLength(), applyPlannedRow(), bodyFromPlannedRow(), collectErrors(), EMPLOYEE_CSV_MAX_ROWS, EmployeeCsvExportOk, EmployeeCsvImportOk, EmployeeCsvPreviewOk (+19 more)

### Community 21 - "system-prompt.ts"
Cohesion: 0.22
Nodes (10): AnalystContext, DEFAULT_ANALYST_PERSONA, buildAnalystSystemPrompt(), formatBusiness(), formatKnowledge(), formatSnapshot(), RULES, chartPromptAddendum() (+2 more)

### Community 22 - "chat/page.tsx"
Cohesion: 0.07
Nodes (33): AssistantBody(), ChatMessage, ChatPage(), ChatRole, decodeSourcesHeader(), KnowledgeSource, SOURCE_KIND_LABEL, SUGGESTIONS (+25 more)

### Community 23 - "EmployeesList.tsx"
Cohesion: 0.08
Nodes (30): dynamic, dynamic, dynamic, dynamic, dynamic, ConfirmDialog(), EmployeeCreate(), EmployeeForm() (+22 more)

### Community 24 - "api-security.ts"
Cohesion: 0.09
Nodes (25): dynamic, GET(), dynamic, GET(), runtime, dynamic, POST(), runtime (+17 more)

### Community 25 - "score.ts"
Cohesion: 0.13
Nodes (32): assertValidWeights(), buildComponent(), candidateHasSkill(), candidateSeniorityText(), clamp(), experienceUnevaluable(), insufficientReason(), jobHasExperienceBounds() (+24 more)

### Community 26 - "audit.test.ts"
Cohesion: 0.15
Nodes (9): auditFile, baseEvent, fakeClient, inserted, migrationFiles, migrationsDir, moduleWithLoad, Row (+1 more)

### Community 27 - "sync.ts"
Cohesion: 0.13
Nodes (17): RFC-5322, getWorkspaceMailboxCredential(), MailboxCredentialError, MailboxCredentialResult, MailboxRow, IMPORTANT: this only matches `credential_type='imap'` rows, so it NEVER…, ResolvedMailboxCredential, asStringArray() (+9 more)

### Community 28 - "meta/helpers.ts"
Cohesion: 0.18
Nodes (16): dynamic, GET(), runtime, decodeOAuthState(), encodeOAuthState(), isMetaPlatform(), isUuid(), META_GRAPH_VERSION (+8 more)

### Community 29 - "components.json"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 30 - "useTenantScope"
Cohesion: 0.12
Nodes (17): dynamic, dynamic, CandidateCreate(), JobCandidatesRank(), JobCreate(), readSessionContext(), TenantScopeContext, TenantScopeGate() (+9 more)

### Community 31 - "supabase_auth_email_config.js"
Cohesion: 0.31
Nodes (16): analyzeConfig(), buildPatchPayload(), check(), expectedRedirects(), main(), managementRequest(), normalizeOrigin(), parseBoolEnv() (+8 more)

### Community 32 - "AuthGuard.tsx"
Cohesion: 0.33
Nodes (5): AuthGuard(), AuthGuardContext, AuthGuardContextValue, isPublicAuthPath(), PUBLIC_AUTH_PATHS

### Community 33 - "report/page.tsx"
Cohesion: 0.10
Nodes (24): formatTimestamp(), LogsPage(), RESULT_FILTERS, resultTone(), actionTaken(), AiUsageCard(), csvEscape(), formatReportDate() (+16 more)

### Community 34 - "dashboardData.ts"
Cohesion: 0.14
Nodes (10): ConversationRow, DailyReportRow, DashboardSnapshot, emptyDashboardSnapshot, errorMessages(), fetchDashboardSnapshot(), FollowupRow, LeadRow (+2 more)

### Community 35 - "local-dev-signup/route.ts"
Cohesion: 0.13
Nodes (23): dynamic, isValidEmail(), normalizeEmail(), POST(), runtime, dynamic, ExistingUser, findUserByEmail() (+15 more)

### Community 36 - "people-explain.ts"
Cohesion: 0.10
Nodes (28): explainMatchScore(), ExplainMatchScoreFailure, ExplainMatchScoreParams, ExplainMatchScoreResult, ExplainMatchScoreSuccess, MOCK_EXPLANATION, parseModelJson(), AI_EXPLANATION_PATCH_KEYS (+20 more)

### Community 37 - "dashboard/page.tsx"
Cohesion: 0.14
Nodes (18): churnDraftTag(), DashboardPage(), hotLeadDraftTag(), isDraftPipelineReady(), TIMESERIES_RANGES, urgencyBadgeLabel(), ZERO_METRICS, formatAxisValue() (+10 more)

### Community 38 - "chat_analyst.test.ts"
Cohesion: 0.14
Nodes (5): fakeTokens, Filter, moduleWithLoad, Row, Store

### Community 39 - "app/page.tsx"
Cohesion: 0.23
Nodes (18): Hero(), IntegrationsSection(), AnimatedHeading(), AnimatedHeadingProps, Eyebrow(), Reveal(), RevealProps, Section() (+10 more)

### Community 40 - "JobForm.tsx"
Cohesion: 0.12
Nodes (27): JOB_STATUS_LABELS, REMOTE_POLICY_LABELS, SCORING_WEIGHT_LABELS, emptyToNull(), FIELD_LIMITS, initialWeights(), JobForm(), JobFormProps (+19 more)

### Community 41 - "people_employees_api.test.ts"
Cohesion: 0.14
Nodes (7): auditEventsTable, AuthMode, check(), employeesTable, moduleWithLoad, resetState(), Row

### Community 42 - "dependencies"
Cohesion: 0.04
Nodes (45): clsx, date-fns, dotenv, framer-motion, imap, imapflow, lucide-react, mailparser (+37 more)

### Community 43 - "customers/page.tsx"
Cohesion: 0.13
Nodes (12): CustomersPage(), initialsOf(), ChannelMarquee(), DIGITS, Odometer(), CHANNELS, MARQUEE, STAKES (+4 more)

### Community 44 - "workflow_2_classification.js"
Cohesion: 0.47
Nodes (5): classifyViaApp(), getAppUrl(), getIngestToken(), items, out

### Community 45 - "workflow_3_agent.js"
Cohesion: 0.38
Nodes (5): draftViaApp(), getAppUrl(), getIngestToken(), items, out

### Community 46 - "rateLimit"
Cohesion: 0.06
Nodes (61): dynamic, GET(), dynamic, GET(), UsageRow, DELETE(), DELETE(), dynamic (+53 more)

### Community 47 - "workflow_4_buy_back_report.js"
Cohesion: 0.38
Nodes (5): getAppUrl(), getIngestToken(), items, out, reportSummaryViaApp()

### Community 48 - "Revenue Growth Motif"
Cohesion: 0.67
Nodes (3): N-Shaped Growth Arrow Mark, Nexus OS Brand Identity, Revenue Growth Motif

### Community 49 - "noise_filter.js"
Cohesion: 0.31
Nodes (9): AUTOMATED_LOCAL, drop(), evaluateNoiseFilter(), hasQuestion(), keep(), normBody(), PLEASANTRY, SPAM_LEX (+1 more)

### Community 50 - "inbound_events_idempotency.test.ts"
Cohesion: 0.22
Nodes (6): fakeClient, moduleWithLoad, post(), Row, sign(), store

### Community 51 - "types/index.ts"
Cohesion: 0.06
Nodes (36): dynamic, GET(), RouteContext, dynamic, GET(), APPROVAL_STATUSES, dynamic, GET() (+28 more)

### Community 52 - "approval/page.tsx"
Cohesion: 0.07
Nodes (44): ApprovalFilter, ApprovalPage(), DraftItem, fallbackConversation(), FILTERS, intentLabel(), mergeDraftsWithConversations(), MiniCard() (+36 more)

### Community 53 - "createSupabaseBrowserClient"
Cohesion: 0.14
Nodes (19): dynamic, CopyLinkButton(), InviteManager(), STATUS_STYLES, StatusPill(), useOrganization(), buildInviteLink(), createInvite() (+11 more)

### Community 54 - "analyst-context.ts"
Cohesion: 0.17
Nodes (16): aggregateSnapshot(), AnalystSnapshot, buildAnalystContext(), BusinessContext, BusinessRow, ConversationRow, DraftRow, emptySnapshot() (+8 more)

### Community 55 - "Nexus OS — Operating Layer & People Intelligence"
Cohesion: 0.12
Nodes (16): 10. Partition tracker, 11. Shared agent contract (paste at the top of every partition), 13. Future partitions (do not run until Wave 1 is done), 14. Testing strategy, 15. Human actions (not agent), 16. Locked decisions (do not re-ask), 1. Product thesis (keep this), 4. Target architecture (fits this repo) (+8 more)

### Community 56 - "launch_workspace_rpc.test.mjs"
Cohesion: 0.25
Nodes (6): canonicalMigration, __dirname, guardMigration, onboarding, root, stepWorkspace

### Community 57 - "csv/parse.ts"
Cohesion: 0.16
Nodes (17): alignRow(), CSV_DEFAULT_MAX_BYTES, CSV_DELIMITERS, CsvDelimiter, CsvParseErr, CsvParseOk, CsvParseResult, detectDelimiter() (+9 more)

### Community 58 - "utils.ts"
Cohesion: 0.15
Nodes (23): ChatSessionList(), Preview, snippet(), Busy, ConfirmPublishDialog(), defaultLocalDateTime(), ScheduleDialog(), captionExcerpt() (+15 more)

### Community 59 - "seed_demo_inbox.ts"
Cohesion: 0.39
Nodes (7): DEMO_ROWS, DemoRow, fail(), leadIntentFromDemo(), leadRiskScore(), leadUrgency(), main()

### Community 60 - "useRealtimeData.ts"
Cohesion: 0.48
Nodes (5): CommandCenter(), RealtimeConversation, RealtimeLead, useRealtimeConversations(), useRealtimeLeads()

### Community 61 - "content.ts"
Cohesion: 0.08
Nodes (17): FeatureBento(), ICONS, DiagramProps, STEP_DIAGRAMS, ACCENT_SOFT, ACCENT_VAR, FAQ_SECTION, FeatureCard (+9 more)

### Community 62 - "cn"
Cohesion: 0.09
Nodes (22): appNav, isNavActive(), SidebarBrand(), SidebarChrome(), SidebarFooter(), SidebarHeader(), SidebarNav(), ITEMS (+14 more)

### Community 63 - "fetchers.ts"
Cohesion: 0.06
Nodes (66): dynamic, ChatUsageToolbar(), formatTokens(), VisualToggle(), CandidateDetail(), CandidatesList(), roleLine(), EmployeeDetail() (+58 more)

### Community 64 - "member4_classification_tests.js"
Cohesion: 0.38
Nodes (6): classify(), fs, loadEnvLocal(), main(), path, TESTS

### Community 65 - "test-buy-back-report.mjs"
Cohesion: 0.29
Nodes (5): client, demoMetrics, __dirname, reportPrompt, root

### Community 66 - "appearance-prefs.ts"
Cohesion: 0.21
Nodes (15): AppearanceSettings(), ThemeToggle(), applyFontScaleToDocument(), FONT_SCALE_OPTIONS, FONT_SCALE_STORAGE_KEY, FontScale, getAlternateTheme(), isAuroraTheme() (+7 more)

### Community 67 - "check_signup_backend.js"
Cohesion: 0.40
Nodes (5): { createClient }, fail(), main(), REQUIRED_COLUMNS, REQUIRED_RPC_PATHS

### Community 68 - "graphify in Nexus OS (and any repo)"
Cohesion: 0.33
Nodes (5): Commands (use the wrapper in agents), graphify in Nexus OS (and any repo), Install CLI (once per machine), New repo checklist, Per-repo bootstrap

### Community 69 - "meta/callback/route.ts"
Cohesion: 0.20
Nodes (17): absoluteRedirect(), dynamic, errorRedirect(), exchangeCodeForToken(), exchangeLongLivedToken(), fetchPageAccounts(), fetchWaPhoneNumberId(), GET() (+9 more)

### Community 70 - "middleware.ts"
Cohesion: 0.50
Nodes (4): config, isProtectedPath(), middleware(), PROTECTED_PREFIXES

### Community 71 - "meta-credentials/route.ts"
Cohesion: 0.07
Nodes (42): Body, dynamic, MailboxSettings, POST(), readImapSettings(), readSmtpSettings(), runtime, testImap() (+34 more)

### Community 72 - "smoke_classification_openai.js"
Cohesion: 0.50
Nodes (4): fs, loadEnvLocal(), main(), path

### Community 73 - "CreateWithAiPath.tsx"
Cohesion: 0.24
Nodes (15): CaptionSection(), CreateWithAiPath(), CreateWithAiPathProps, CurrentGen, getGeneration(), listConnectedPlatforms(), signStoragePath(), editImage() (+7 more)

### Community 74 - "extends"
Cohesion: 0.50
Nodes (3): extends, next/core-web-vitals, next/typescript

### Community 82 - "people_jobs_api.test.ts"
Cohesion: 0.13
Nodes (8): auditEventsTable, AuthMode, backgroundJobsTable, check(), jobsTable, moduleWithLoad, resetState(), Row

### Community 87 - "Gmail integration test results"
Cohesion: 0.10
Nodes (19): 10. How to re-run (manual), 1. Preflight, 2. TC1 — New lead (webhook / Gmail-shaped payload), 3. TC2 — Real Gmail / IMAP, 4. TC3 — Existing lead append, 5. TC4 — Noise drop (short pleasantry), 6. TC5 — Edge payload (HTML-only + bare `from` email), 7. Post–Gmail Warning Fix verification (2026-05-16) (+11 more)

### Community 88 - "channel-sender.ts"
Cohesion: 0.10
Nodes (22): AutopilotInput, BusinessProfileRow, ConversationRow, deriveSubject(), DraftRow, finalizeOutboundJob(), LeadRow, META_PLATFORMS (+14 more)

### Community 89 - "inbound_replay.test.ts"
Cohesion: 0.20
Nodes (4): forwards, moduleWithLoad, Row, store

### Community 90 - "New Gmail Implementation"
Cohesion: 0.13
Nodes (14): API Shape, Data Model, Flow, Gmail Implementation Note, Goals, n8n Compatibility, New Gmail Implementation, Problem With The Last Implementation (+6 more)

### Community 91 - "devDependencies"
Cohesion: 0.06
Nodes (31): autoprefixer, eslint, eslint-config-next, devDependencies, autoprefixer, eslint, eslint-config-next, postcss (+23 more)

### Community 92 - "send_reply.test.ts"
Cohesion: 0.13
Nodes (8): CredResult, fakeClient, GmailSendError, moduleWithLoad, resetStore(), Row, seed(), store

### Community 94 - "Channel Sender — Approval-to-Send Contract"
Cohesion: 0.05
Nodes (34): Autopilot entry point (task 1.5), Channel Sender — Approval-to-Send Contract, Components, Credential selection, Executor request contract, Flow, Follow-ups (not in 1.2), Idempotency (hard requirement — approving twice must not send twice) (+26 more)

### Community 95 - "Tenant model unification ADR"
Cohesion: 0.09
Nodes (20): 1. Target architecture (corrected), 2. Current build state (grounded in code), 3. Key tables (grep migrations to confirm columns; do not assume), 4. Build order (functions track — owned by Senuka), 5. Decisions & known deferrals (do not re-litigate without reason), Core pipeline (deterministic functions + one approval gate), Cross-cutting (applies to everything), Deferred (do not start yet) (+12 more)

### Community 96 - "people_employees_csv.test.ts"
Cohesion: 0.15
Nodes (8): CSV_IMPORT_MAX_ROWS, auditEventsTable, AuthMode, check(), employeesTable, moduleWithLoad, resetState(), Row

### Community 97 - "draft.ts"
Cohesion: 0.11
Nodes (26): buildUserPayload(), ClassificationResult, classifyMessage(), ClassifyMessageParams, ClassifyMessageResponse, MOCK_CLASSIFICATION, parseClassification(), buildUserPayload() (+18 more)

### Community 98 - "Nexus OS — Revenue Command Center"
Cohesion: 0.13
Nodes (15): Acknowledgments, Architecture, Contact & Support, Contributing, How It Works, Multi-tenant data model, Nexus OS — Revenue Command Center, Performance & Metrics (+7 more)

### Community 100 - "gmail_backfill.test.ts"
Cohesion: 0.28
Nodes (7): assert(), forwards, moduleWithLoad, post(), Row, run(), store

### Community 101 - "gmail_sync.test.ts"
Cohesion: 0.31
Nodes (8): CredRow, fakeSupabase(), GOOD_CRED, MESSAGE, messageFor(), moduleWithLoad, ok(), run()

### Community 102 - "n8n environment variables"
Cohesion: 0.25
Nodes (7): Auth hardening: three token types (2026-07-17), Channel Sender — Approval Trigger + WF3 Autopilot (calls into the Next.js app), n8n environment variables, Next.js internal ingest (`/api/internal/n8n/*`), Supabase credential, Tenant routing (WF0a export), WF8b Social Post Publishing (calls into the Next.js app)

### Community 104 - "Configuration"
Cohesion: 0.25
Nodes (8): Configuration, Email confirmation auto-login, `.env.local` reference, n8n environment (tenant routing), OpenAI, Supabase Auth email delivery, Supabase Auth rate limits, Supabase RLS

### Community 105 - "candidate-csv.ts"
Cohesion: 0.17
Nodes (25): applyPlannedRow(), bodyFromPlannedRow(), CANDIDATE_CSV_MAX_ROWS, CandidateCsvImportOk, CandidateCsvPreviewOk, collectErrors(), emptySummary(), ensureCandidateJobLink() (+17 more)

### Community 106 - "inbound-replay/route.ts"
Cohesion: 0.24
Nodes (12): clampInt(), dynamic, POST(), runtime, applyReplayOutcome(), fetchStuckInboundEvents(), reclaimStuckProcessingEvents(), channelForPlatform() (+4 more)

### Community 107 - "posts/types.ts"
Cohesion: 0.08
Nodes (25): dynamic, dynamic, dynamic, JobsList(), CaptionSectionProps, Filter, PostStatusBoard(), PostStatusBoardProps (+17 more)

### Community 108 - "data.ts"
Cohesion: 0.10
Nodes (31): BrandAssetPicker(), BrandAssetPickerProps, BrandAssetThumb(), Composer(), ComposerProps, Step, ReviewSubmit(), useSignedUrl() (+23 more)

### Community 109 - "resources/page.tsx"
Cohesion: 0.11
Nodes (17): DocLink, DocSection, quickStart, sections, changelog, faqs, groups, Resource (+9 more)

### Community 110 - "Build checklist"
Cohesion: 0.33
Nodes (6): Build checklist, Human (not agent), Wave 0 — already complete, Wave 1 — build in this order, Wave 1 complete, Wave 2 — do not start until W1 is ticked

### Community 111 - "people_match_worker.test.ts"
Cohesion: 0.11
Nodes (8): SCORING_VERSION, migrationFiles, migrationsDir, moduleWithLoad, Row, scoringVersionMigration, scoringVersionSql, tables

### Community 112 - "meta_send.test.ts"
Cohesion: 0.13
Nodes (9): fakeClient, FetchCall, fetchCalls, fetchResponse, GmailSendError, metaCredResult, moduleWithLoad, Row (+1 more)

### Community 113 - "daily_report_route.test.ts"
Cohesion: 0.29
Nodes (6): assert(), fakeClient, main(), moduleWithLoad, Row, store

### Community 114 - "jobs.ts"
Cohesion: 0.12
Nodes (40): dynamic, fromService(), GET(), POST(), AUDIT_DIFF_KEYS, auditDiff(), auditSnapshot(), boundedString() (+32 more)

### Community 116 - "2. Verdict on the incoming 12-phase plan"
Cohesion: 0.50
Nodes (4): 2. Verdict on the incoming 12-phase plan, Accept (non-negotiable), One important change to Claude’s “don’t build HR yet”, Reject or defer (do not implement in this program)

### Community 117 - "people_schema.test.ts"
Cohesion: 0.25
Nodes (5): migrationFiles, migrationsDir, peopleFile, sql, tables

### Community 118 - "people_background_jobs.test.ts"
Cohesion: 0.12
Nodes (8): backgroundJobsTable, bgMigration, migrationFiles, migrationsDir, migrationSql, moduleWithLoad, Row, tenantCtx

### Community 119 - "store.ts"
Cohesion: 0.24
Nodes (15): summarizeSession(), embedBatch(), embedText(), mockVector(), resolveModel(), chunkText(), deleteSummaryForSource(), EmbeddingKind (+7 more)

### Community 120 - "timeseries.ts"
Cohesion: 0.19
Nodes (15): buildDailyTimeseries(), contributesRevenueAtRisk(), ConversationTimeseriesRow, downsampleWeekly(), emptyBucket(), isChurnRisk(), isHotLead(), METRICS_TIMESERIES_RANGES (+7 more)

### Community 121 - "3. Repository truth (Phase 0 — already done)"
Cohesion: 0.50
Nodes (4): 3. Repository truth (Phase 0 — already done), Architectural risks to respect (do not “fix” inside a People partition), Patterns new People code MUST reuse, Stack (from code, not marketing copy)

### Community 122 - "5. People domain model (minimal, extensible)"
Cohesion: 0.50
Nodes (4): 5. People domain model (minimal, extensible), Compliance (from the old hiring blueprint — stronger than the incoming plan), Default scoring weights (stored on the job, versioned), Tables (A2 — do not add more in A2)

### Community 123 - "followups_drain.test.ts"
Cohesion: 0.25
Nodes (6): assert(), fakeClient, main(), moduleWithLoad, Row, store

### Community 124 - "audit.ts"
Cohesion: 0.33
Nodes (9): AuditEventInput, AuditTenantContext, AuditWriteResult, boundId(), boundLabel(), boundMetadata(), SystemAuditContext, writeAuditEvent() (+1 more)

### Community 126 - "people_candidates_csv.test.ts"
Cohesion: 0.11
Nodes (12): auditEventsTable, AuthMode, backgroundJobsTable, candidateJobsTable, candidatesTable, check(), jobsTable, moduleWithLoad (+4 more)

### Community 129 - "Test Results — Classification Prompt v1"
Cohesion: 0.25
Nodes (8): Handoff (Member 2), Summary, Test 1 — pricing / quote request, Test 2 — booking / schedule call, Test 3 — proposal follow-up, Test 4 — complaint / churn tone, Test 5 — support / CMS how-to, Test Results — Classification Prompt v1

### Community 130 - "Getting Started"
Cohesion: 0.25
Nodes (8): 1. Clone and install, 2. Environment variables, 3. Supabase database, 4. n8n workflows, 5. Run locally, Getting Started, Prerequisites, Troubleshooting

### Community 131 - "Usage"
Cohesion: 0.33
Nodes (6): Admin: approval queue, API & webhooks, Dashboard, Meta unified inbox, Quick start: first classified message, Usage

### Community 132 - "Development Guide"
Cohesion: 0.40
Nodes (5): Conventions, Development Guide, Extend the pipeline, Scripts, Testing approach

### Community 133 - "package.json"
Cohesion: 0.50
Nodes (3): name, private, version

### Community 134 - "Features"
Cohesion: 0.33
Nodes (6): 🛡️ Customer Retention, Features, 🧠 Knowledge Layer & Revenue Analyst *(new)*, ⚙️ Operational Efficiency, 💰 Revenue Protection, 📣 Social & Channels

### Community 135 - "Deployment"
Cohesion: 0.50
Nodes (4): Deployment, Production checklist, Recommended hosting, Scaling notes

### Community 136 - "api/conversations/route.ts"
Cohesion: 0.19
Nodes (15): boundedConfidence(), boundedNonNegativeNumber(), boundedRiskScore(), boundedString(), CONVERSATION_INTENTS, CONVERSATION_SOURCES, CONVERSATION_STATUSES, CONVERSATION_URGENCIES (+7 more)

### Community 137 - "social_oauth_state.test.ts"
Cohesion: 0.20
Nodes (8): decoded, {
  decodeState,
  encodeState,
  makePkce,
  OAUTH_STATE_MAX_AGE_MS,
  platformConfigured,
}, expected, Module, require, stale, token, { verifier, challenge }

### Community 138 - "people_candidates_api.test.ts"
Cohesion: 0.14
Nodes (7): auditEventsTable, AuthMode, candidatesTable, check(), moduleWithLoad, resetState(), Row

### Community 140 - "ai_usage.test.ts"
Cohesion: 0.29
Nodes (4): fakeClient, moduleWithLoad, Row, store

### Community 141 - "wf2_tenant_contract.test.ts"
Cohesion: 0.07
Nodes (29): assert(), authHeader, classify, classifyBody, Conn, conns, createBody, createFollowup (+21 more)

### Community 142 - "inbound_record.test.ts"
Cohesion: 0.29
Nodes (4): fakeClient, moduleWithLoad, Row, store

### Community 143 - "Migration notes — drift sync (Task 3.1, Member 3)"
Cohesion: 0.17
Nodes (11): 1. Remote-only migrations pulled into the repo (verbatim), 2. Local-only files — SUPERSEDED, do NOT apply, 3. Minor observation (for the human, not acted on), 4. Task 4.3 — social credential encryption (2026-07-13), 5. Organizations / user_profiles foundation (2026-07-17), 5. Schema remediation migrations (2026-07-17), 6. Wave 1 A1 — `audit_events` (2026-09-01), 7. Wave 1 A2 — People schema (2026-09-01) (+3 more)

### Community 144 - "PricingSection.tsx"
Cohesion: 0.17
Nodes (16): LandingBillingToggle(), TierCard(), PricingTierCard(), PricingTierCardProps, PricingCard(), PricingCardProps, StepPlan(), StepPlanProps (+8 more)

### Community 145 - "CandidateForm.tsx"
Cohesion: 0.14
Nodes (18): CandidateConsentPill(), STATUS_STYLES, CandidateForm(), CandidateFormProps, emptyToNull(), FIELD_LIMITS, parseYearsInput(), skillsToText() (+10 more)

### Community 146 - "leads/route.ts"
Cohesion: 0.27
Nodes (9): boundedString(), dynamic, INTENTS, NEXT_ACTIONS, numberOr(), pickAllowed(), POST(), RISK_TYPES (+1 more)

### Community 147 - "n8n-job-tokens.ts"
Cohesion: 0.13
Nodes (15): consumeN8nJobToken(), ConsumeN8nJobTokenResult, ConsumeRpcRow, hashToken(), issueN8nJobToken(), IssueN8nJobTokenOptions, N8nJobTokenBindings, N8nJobTokenClaims (+7 more)

### Community 148 - "meta/send.ts"
Cohesion: 0.14
Nodes (19): buildMetaSendRequest(), GraphSendResponse, graphUrl(), isMetaSendEnabled(), MetaSendAuth, MetaSendError, MetaSendParams, MetaSendRequest (+11 more)

### Community 149 - "social_post_route.test.ts"
Cohesion: 0.40
Nodes (5): assert(), fakeClient, main(), moduleWithLoad, postRow

### Community 150 - "provider.ts"
Cohesion: 0.16
Nodes (17): generateSessionTitle(), AiNotConfiguredError, AiOperation, clientCache, ClientPurpose, getOpenAiClient(), isMockMode(), normalizeOpenAiCompatibleBaseUrl() (+9 more)

### Community 152 - "motion.ts"
Cohesion: 0.10
Nodes (21): AuthLikeError, backoffSeconds(), isRateLimitError(), LoginForm(), PASSWORD_BACKOFF_SECONDS, resolvePostLoginPath(), SessionLike, AuthAmbientField() (+13 more)

### Community 153 - "executeSendReply"
Cohesion: 0.25
Nodes (12): autopilotSend(), err(), executeSendReply(), assert(), fetchConversation(), fetchDraft(), ids, insert() (+4 more)

### Community 154 - "background-jobs.ts"
Cohesion: 0.15
Nodes (18): BACKGROUND_JOB_KINDS, BackgroundJob, BackgroundJobErr, BackgroundJobKind, BackgroundJobOk, BackgroundJobStatus, claim(), DEFAULT_CLAIM_LIMIT (+10 more)

### Community 174 - "isOpenAiConfigured"
Cohesion: 0.18
Nodes (13): dynamic, GET(), POST(), safeFileName(), dynamic, POST(), isOpenAiConfigured(), ACCEPTED_DOC_EXTENSIONS (+5 more)

### Community 175 - "n8n workflow exports"
Cohesion: 0.40
Nodes (4): n8n auth hardening (2026-07-17), n8n workflow exports, Notes, Social posting: publish + schedule contract (2026-07-15)

### Community 176 - "report-summary.ts"
Cohesion: 0.16
Nodes (12): buildFallbackSummary(), pick(), ReportSummaryParams, ReportSummaryResponse, ReportSummaryStyle, summarizeReport(), DailyReportRunResult, reportDateInColombo() (+4 more)

### Community 177 - "AppWindow.tsx"
Cohesion: 0.12
Nodes (8): AppPanel(), AppWindowFrame(), inboxRows, nav, NAV_FOR_STOP, PANELS, reportStats, trend

### Community 178 - "AppShell.tsx"
Cohesion: 0.22
Nodes (11): ScrollProgressRail(), AppShell(), isAuthShellRoute(), isLightShellRoute(), isMarketingShellRoute(), LIGHT_SHELL_PREFIXES, AppSidebar(), SiteFooter() (+3 more)

### Community 179 - "tenant_routing_e2e.test.ts"
Cohesion: 0.80
Nodes (4): assert(), liveGmailSmoke(), run(), runScript()

### Community 180 - "JobCandidatesRank.tsx"
Cohesion: 0.28
Nodes (11): RankRow(), scoreLabel(), DATA_QUALITY_LABELS, isMatchExplanationError(), MATCH_RECOMMENDATION_LABELS, roleLine(), safeHttpUrl(), JOB_CANDIDATES_PAGE_SIZE (+3 more)

### Community 182 - "approval-policy.ts"
Cohesion: 0.22
Nodes (9): ApprovalMode, AUTO_SEND_MIN_CONFIDENCE, AutoSendDecision, AutoSendInput, decideAutoSend(), HIGH_RISK_SCORE, HIGH_VALUE_THRESHOLD, num() (+1 more)

### Community 183 - "workflow_logs_route.test.ts"
Cohesion: 0.22
Nodes (3): moduleWithLoad, Row, store

### Community 184 - "app/layout.tsx"
Cohesion: 0.20
Nodes (8): geistMono, geistSans, inter, metadata, sourceSans3, viewport, QueryProvider(), ThemeProvider()

### Community 185 - "AppTopBar.tsx"
Cohesion: 0.25
Nodes (8): AppChromeSearchContext, AppChromeSearchContextValue, AppChromeSearchProvider(), useAppChromeSearch(), AppTopBar(), LANGUAGE_OPTIONS, profileInitial(), showsChromeSearch()

### Community 186 - "migration_order.test.mjs"
Cohesion: 0.17
Nodes (10): bridgeSql, dailyIdx, __dirname, foundationIdx, foundationSql, migrationFiles, migrationsDir, notes (+2 more)

### Community 187 - "meta-tenant.ts"
Cohesion: 0.27
Nodes (9): asObject(), COLUMN_BY_PLATFORM, defaultLookup(), extractMetaRoute(), firstRecipientId(), MetaPlatform, MetaRoute, MetaTenant (+1 more)

### Community 188 - "people_score.test.ts"
Cohesion: 0.20
Nodes (7): componentRawByKey(), ScoreCandidateInput, ScoreJobInput, DEFAULT_SCORING_WEIGHTS, baseCandidate, baseJob, RemotePolicy

### Community 189 - "gmail/send.ts"
Cohesion: 0.28
Nodes (7): RFC-822, buildRawMessage(), GmailSendError, headerSafe(), SendEmailParams, SendEmailResult, sendGmailMessage()

### Community 190 - "smtp-send.ts"
Cohesion: 0.32
Nodes (6): MailboxEndpoint, headerSafe(), sendSmtpMessage(), SmtpSendError, SmtpSendParams, SmtpSendResult

### Community 191 - "mailbox_sync.test.ts"
Cohesion: 0.36
Nodes (7): CredRow, fakeSupabase(), GOOD_CRED, messageFixture(), moduleWithLoad, ok(), run()

### Community 192 - "inbound-events.ts"
Cohesion: 0.29
Nodes (6): FetchStuckInboundEventsOptions, InboundEventStatus, RecordInboundEventInput, RecordInboundEventResult, ReplayOutcomeInput, StuckInboundEvent

### Community 193 - "Nexus OS — Launch-Readiness Report (2026-07-15)"
Cohesion: 0.20
Nodes (9): A. Security audit, B. Vector DB & RAG pipeline, C. Project review, D. Repo cleanup (done in this pass), Fixed in this pass (app code — verified by lint, build, and OAuth-state tests), Nexus OS — Launch-Readiness Report (2026-07-15), Reported — recommended, NOT changed (database / architecture), Verdict: CONDITIONAL GO (+1 more)

### Community 194 - "SessionGate.tsx"
Cohesion: 0.47
Nodes (3): SessionGate(), SessionRouter, waitForServerSession()

### Community 195 - "meta/status/route.ts"
Cohesion: 0.40
Nodes (4): META_PLATFORMS, dynamic, GET(), runtime

### Community 197 - "rate_limit_durable.test.ts"
Cohesion: 0.22
Nodes (5): fakeClient, moduleWithLoad, RpcCall, rpcCalls, rpcResponse

### Community 199 - "Manual actions — what the founder/operator must do by hand"
Cohesion: 0.20
Nodes (7): 1. Environment variables (Vercel / hosting), 2. Supabase — already applied via MCP (verify only), 3. n8n (instance `knurdz3o.app.n8n.cloud`), 4. Meta — the only real blocker for outbound send, 5. Product/architecture decisions waiting on you, 6. New features shipped in this pass (nothing to do — just awareness), Manual actions — what the founder/operator must do by hand

### Community 200 - "match_embeddings_route.test.ts"
Cohesion: 0.29
Nodes (3): fakeClient, moduleWithLoad, rpcRows

### Community 213 - "clean_n8n_export.js"
Cohesion: 0.33
Nodes (4): exportDoc, fs, payload, [rawPath, outPath, liveIdArg]

### Community 216 - "gmail-backfill/route.ts"
Cohesion: 0.06
Nodes (49): dynamic, POST(), runtime, defaultGmailSyncDeps, GmailSyncDeps, runGmailSync(), SyncCredentialRow, WorkspaceSyncOutcome (+41 more)

### Community 219 - "createServerClient"
Cohesion: 0.06
Nodes (69): boundedString(), dynamic, POST(), runtime, boundedString(), dynamic, normalizeClassification(), POST() (+61 more)

### Community 225 - "approval_route.test.ts"
Cohesion: 0.18
Nodes (5): conversationsTable, draftsTable, moduleWithLoad, outboundJobsTable, Row

### Community 226 - "Launch activation runbook"
Cohesion: 0.20
Nodes (9): 1. Pre-secret gate (no production credentials), 2. Supabase migrations, 3. App host environment variables, 4. n8n variables and credential cleanup, 5. OpenAI activation, 6. Google Gmail (live send), 7. Meta (after App Review), Launch activation runbook (+1 more)

### Community 227 - "route_reference.test.mjs"
Cohesion: 0.20
Nodes (7): apiRoutes, __dirname, middlewareSrc, root, settingsSrc, uiPages, watchedDirs

### Community 228 - "CandidateCsvImport.tsx"
Cohesion: 0.15
Nodes (21): ACTION_STYLES, CandidateCsvImport(), displayValue(), FIELD_LABELS, JobOption, mappingFromPlan(), mappingPayload(), ACTION_STYLES (+13 more)

### Community 233 - "prepare_n8n_deploy_payload.mjs"
Cohesion: 0.22
Nodes (7): __dirname, exportsDir, LIVE_IDS, payload, raw, root, SUPABASE_CRED

### Community 238 - "internal_leads.test.ts"
Cohesion: 0.25
Nodes (3): moduleWithLoad, Row, store

### Community 245 - "readJsonObjectWithLimit"
Cohesion: 0.07
Nodes (52): ApprovalBody, approvalWebhookUrl(), dynamic, PATCH(), dynamic, maxDuration, POST(), runtime (+44 more)

## Knowledge Gaps
- **1305 isolated node(s):** `next/core-web-vitals`, `next/typescript`, `dynamic`, `UsageRow`, `dynamic` (+1300 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **35 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `signup/page.tsx`, `PricingSection.tsx`, `CandidateForm.tsx`, `chat/page.tsx`, `EmployeesList.tsx`, `motion.ts`, `report/page.tsx`, `dashboard/page.tsx`, `app/page.tsx`, `JobForm.tsx`, `customers/page.tsx`, `AppShell.tsx`, `approval/page.tsx`, `JobCandidatesRank.tsx`, `createSupabaseBrowserClient`, `AppTopBar.tsx`, `utils.ts`, `content.ts`, `fetchers.ts`, `appearance-prefs.ts`, `CreateWithAiPath.tsx`, `CandidateCsvImport.tsx`, `posts/types.ts`, `data.ts`, `resources/page.tsx`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Why does `rateLimit()` connect `rateLimit` to `local-dev-signup/route.ts`, `meta-credentials/route.ts`, `api/conversations/route.ts`, `social/helpers.ts`, `inbound-replay/route.ts`, `webhook/route.ts`, `StepAccount.tsx`, `isOpenAiConfigured`, `settings/route.ts`, `leads/route.ts`, `callback/handler.ts`, `candidate-jobs.ts`, `readJsonObjectWithLimit`, `jobs.ts`, `gmail-backfill/route.ts`, `api-security.ts`, `createServerClient`, `meta/helpers.ts`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **Why does `readJsonObjectWithLimit()` connect `readJsonObjectWithLimit` to `local-dev-signup/route.ts`, `meta-credentials/route.ts`, `api/conversations/route.ts`, `inbound-replay/route.ts`, `StepAccount.tsx`, `rateLimit`, `isOpenAiConfigured`, `settings/route.ts`, `leads/route.ts`, `jobs.ts`, `gmail-backfill/route.ts`, `api-security.ts`, `createServerClient`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `createServerClient()` (e.g. with `callback/handler.ts` and `gmail-sync/handler.ts`) actually correct?**
  _`createServerClient()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `next/core-web-vitals`, `next/typescript`, `dynamic` to the rest of the system?**
  _1305 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `match-worker.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.13793103448275862 - nodes in this community are weakly interconnected._
- **Should `employees.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1408199643493761 - nodes in this community are weakly interconnected._