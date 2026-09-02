# Graph Report - workspace  (2026-09-02)

## Corpus Check
- 502 files · ~286,530 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 3280 nodes · 7003 edges · 209 communities (160 shown, 40 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 95 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5b826849`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- stepDiagrams.tsx
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
- signup/types.ts
- build_n8n_workflow_exports.js
- content.ts
- 12. Partitions (copy-paste prompts)
- settings/route.ts
- TestimonialSection.tsx
- gmail/helpers.ts
- employee-csv.ts
- analyst-context.ts
- chat/page.tsx
- Spinner.tsx
- api-security.ts
- utils.ts
- writeAuditEvent
- sync.ts
- meta/helpers.ts
- components.json
- useTenantScope
- supabase_auth_email_config.js
- createSupabaseBrowserClient
- report/page.tsx
- dashboardData.ts
- local-dev-signup/route.ts
- ChartBlock.tsx
- posts/types.ts
- chat_analyst.test.ts
- customers/page.tsx
- types/index.ts
- people_employees_api.test.ts
- dependencies
- provider.ts
- workflow_2_classification.js
- workflow_3_agent.js
- rateLimit
- workflow_4_buy_back_report.js
- Revenue Growth Motif
- noise_filter.js
- inbound_events_idempotency.test.ts
- meta_send.test.ts
- visuals.ts
- InviteManager.tsx
- approval-policy.ts
- Nexus OS — Operating Layer & People Intelligence
- launch_workspace_rpc.test.mjs
- business-docs/route.ts
- social_posts_unit.test.ts
- seed_demo_inbox.ts
- useRealtimeData.ts
- AppWindow.tsx
- cn
- fetchers.ts
- member4_classification_tests.js
- test-buy-back-report.mjs
- AppShell.tsx
- check_signup_backend.js
- graphify in Nexus OS (and any repo)
- CaptionSection.tsx
- middleware.ts
- callback/handler.ts
- smoke_classification_openai.js
- CreateWithAiPath.tsx
- extends
- ensure-graphify.sh
- privacy/page.tsx
- terms/page.tsx
- conversations-query.ts
- graphify.sh
- Buy-Back Report Prompt
- data.ts
- Gmail integration test results
- channel-sender.ts
- inbound_replay.test.ts
- New Gmail Implementation
- devDependencies
- send_reply.test.ts
- next.config.mjs
- Channel Sender — Approval-to-Send Contract
- Tenant model unification ADR
- CaptionSection
- status.ts
- Nexus OS — Revenue Command Center
- Navy Blue + Green Accent Palette
- gmail_backfill.test.ts
- gmail_sync.test.ts
- n8n environment variables
- postcss.config.mjs
- Configuration
- csv/parse.ts
- resend-confirmation/route.ts
- UploadMediaPath.tsx
- StepAccount.tsx
- meta/callback/route.ts
- Build checklist
- PricingSection.tsx
- people_employees_csv.test.ts
- ReviewSubmit
- jobs.ts
- tailwind.config.ts
- 2. Verdict on the incoming 12-phase plan
- people_schema.test.ts
- signup/page.tsx
- StepGmail.tsx
- timeseries.ts
- 3. Repository truth (Phase 0 — already done)
- 5. People domain model (minimal, extensible)
- followups_drain.test.ts
- StepWorkspace.tsx
- n8n_job_tokens.test.ts
- daily_report_route.test.ts
- csv_engine.test.ts
- Test Results — Classification Prompt v1
- Getting Started
- Usage
- Development Guide
- package.json
- Features
- Deployment
- api/conversations/route.ts
- social_oauth_state.test.ts
- meta/connect/route.ts
- settings/page.tsx
- ai_usage.test.ts
- wf2_tenant_contract.test.ts
- inbound_record.test.ts
- Migration notes — drift sync (Task 3.1, Member 3)
- reply-drafts/route.ts
- publish/route.ts
- store.ts
- n8n-job-tokens.ts
- ai_classify_route.test.ts
- social-post/route.ts
- EmployeeDetail
- Classification Prompt v1 Test Results (5/5 PASS)
- AuthModeToggle.tsx
- EmployeesList
- app/page.tsx
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
- StakesSection.tsx
- n8n workflow exports
- chat_prompt_injection.test.ts
- report/route.ts
- conversations/[id]/route.ts
- tenant_routing_e2e.test.ts
- gmail/status/route.ts
- pdf-parse.d.ts
- posts/page.tsx
- candidates/[id]/page.tsx
- requireN8nBootstrapToken
- jobs/[id]/page.tsx
- migration_order.test.mjs
- next-env.d.ts
- Nexus OS — Launch-Readiness Report (2026-07-15)
- rate_limit_durable.test.ts
- Manual actions — what the founder/operator must do by hand
- match_embeddings_route.test.ts
- system-prompt.ts
- clean_n8n_export.js
- gmail-backfill/route.ts
- readJsonObjectWithLimit
- generate-favicons.mjs
- approval_route.test.ts
- Launch activation runbook
- route_reference.test.mjs
- EmployeeCsvImport.tsx
- workflow_logs_route.test.ts
- prepare_n8n_deploy_payload.mjs
- internal_leads.test.ts
- leads/route.ts
- ai.ts

## God Nodes (most connected - your core abstractions)
1. `cn()` - 136 edges
2. `rateLimit()` - 111 edges
3. `readJsonObjectWithLimit()` - 91 edges
4. `createServerClient()` - 73 edges
5. `requireApiTenantContext()` - 70 edges
6. `scripts` - 67 edges
7. `jsonError()` - 60 edges
8. `createSupabaseBrowserClient()` - 46 edges
9. `JSON_LIMITS` - 45 edges
10. `authenticatedFetch()` - 45 edges

## Surprising Connections (you probably didn't know these)
- `GET()` --calls--> `requireApiTenantContext()`  [EXTRACTED]
  app/api/conversations/[id]/route.ts → lib/api-security.ts
- `GET()` --calls--> `requireApiTenantContext()`  [EXTRACTED]
  app/api/conversations/route.ts → lib/api-security.ts
- `GET()` --calls--> `requireApiTenantContext()`  [EXTRACTED]
  app/api/gmail/status/route.ts → lib/api-security.ts
- `GET()` --calls--> `requireApiTenantContext()`  [EXTRACTED]
  app/api/meta/status/route.ts → lib/api-security.ts
- `SocialOAuthState` --references--> `Platform`  [EXTRACTED]
  app/api/social/helpers.ts → lib/posts/types.ts

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Nexus OS Core Message Pipeline (Intake → Approval)** — readme_wf0a_gmail_intake, readme_noise_filter, readme_wf2_ai_classification, readme_wf3_reply_agent, readme_founder_approval_queue [EXTRACTED 1.00]
- **Gmail Integration Lifecycle (OAuth/IMAP → Testing → Add-on Pivot)** — readme_gmail_imap_integration, docs_gmail_integration_test_results_gmail_integration_test_results, docs_gmail_validation_warnings_classification_warning_impact_classification, docs_gmail_new_implementation_gmail_addon_flow [INFERRED 0.85]

## Communities (209 total, 40 thin omitted)

### Community 1 - "employees.ts"
Cohesion: 0.12
Nodes (37): dynamic, fromService(), GET(), POST(), AUDIT_DIFF_KEYS, auditDiff(), auditSnapshot(), boundedString() (+29 more)

### Community 2 - "scripts"
Cohesion: 0.03
Nodes (67): scripts, build, check:auth-email, check:signup-backend, dev, fix:auth-email, graphify, graphify:ensure (+59 more)

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
Cohesion: 0.07
Nodes (50): dynamic, fromService(), GET(), PATCH(), RouteContext, dynamic, fromService(), GET() (+42 more)

### Community 7 - "csv/index.ts"
Cohesion: 0.11
Nodes (36): applyUnmappedDefaults(), CoerceErr, coerceField(), CoerceOk, collectRowErrors(), countSummary(), CsvColumnMapping, CsvImportFileError (+28 more)

### Community 8 - "social/helpers.ts"
Cohesion: 0.15
Nodes (24): appUrl(), dynamic, exchangeCode(), GET(), runtime, settingsRedirect(), TokenResult, dynamic (+16 more)

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
Cohesion: 0.07
Nodes (46): boundedString(), dynamic, INBOUND_PLATFORMS, POST(), runtime, clampInt(), dynamic, POST() (+38 more)

### Community 13 - "signup/types.ts"
Cohesion: 0.10
Nodes (26): LandingBillingToggle(), TierCard(), BillingToggle(), BillingToggleProps, PricingFAQ(), PricingTierCard(), PricingTierCardProps, PricingCard() (+18 more)

### Community 14 - "build_n8n_workflow_exports.js"
Cohesion: 0.07
Nodes (23): buildInboundFinalizePayloadJs, connGmail, dedupDecision, dedupLookupQuery, emailTrigger, fs, gmailWebhook, ifKeepNode() (+15 more)

### Community 15 - "content.ts"
Cohesion: 0.13
Nodes (14): ChannelMarquee(), ICONS, ACCENT_SOFT, ACCENT_VAR, CHANNELS, FAQ_SECTION, FeatureCard, FEATURES (+6 more)

### Community 16 - "12. Partitions (copy-paste prompts)"
Cohesion: 0.10
Nodes (20): 12. Partitions (copy-paste prompts), A1 — Append-only audit log, A2 — People schema + RLS, B1 — Employee service + API, B2 — Employee UI + nav, B3 — Shared CSV parser (pure), B4 — Employee CSV import/export, C1 — Jobs API + UI (+12 more)

### Community 17 - "settings/route.ts"
Cohesion: 0.16
Nodes (20): applyChannelPatch(), APPROVAL_MODES, billingPeriodBounds(), CHANNEL_ACTIONS, CHANNEL_TARGETS, ChannelPatch, COMMON_TIMEZONES, dynamic (+12 more)

### Community 18 - "TestimonialSection.tsx"
Cohesion: 0.32
Nodes (6): initialsOf(), TestimonialSection(), TESTIMONIAL_SECTION, TODO: replace with real, permissioned quotes before launch., Testimonial, TESTIMONIALS

### Community 19 - "gmail/helpers.ts"
Cohesion: 0.09
Nodes (33): absoluteRedirect(), errorRedirect(), handleGmailOAuthCallback(), logStageError(), successRedirect(), dynamic, GET(), runtime (+25 more)

### Community 20 - "employee-csv.ts"
Cohesion: 0.12
Nodes (32): utf8ByteLength(), CSV_IMPORT_MAX_ROWS, CsvImportSummary, formatCsvImportSummary(), PlannedCsvRow, applyPlannedRow(), bodyFromPlannedRow(), collectErrors() (+24 more)

### Community 21 - "analyst-context.ts"
Cohesion: 0.17
Nodes (16): aggregateSnapshot(), AnalystSnapshot, buildAnalystContext(), BusinessContext, BusinessRow, ConversationRow, DraftRow, emptySnapshot() (+8 more)

### Community 22 - "chat/page.tsx"
Cohesion: 0.19
Nodes (12): ChatMessage, ChatPage(), ChatRole, decodeSourcesHeader(), KnowledgeSource, SOURCE_KIND_LABEL, SUGGESTIONS, useAiStatus() (+4 more)

### Community 23 - "Spinner.tsx"
Cohesion: 0.08
Nodes (46): CandidateConsentPill(), STATUS_STYLES, CandidateForm(), buildBody(), handleSubmit(), save(), CandidateFormProps, emptyToNull() (+38 more)

### Community 24 - "api-security.ts"
Cohesion: 0.12
Nodes (23): dynamic, GET(), Body, dynamic, MailboxSettings, POST(), readImapSettings(), readSmtpSettings() (+15 more)

### Community 25 - "utils.ts"
Cohesion: 0.05
Nodes (70): ApprovalFilter, ApprovalPage(), handleApprove(), handleReject(), optimisticallyMoveDraft(), DraftItem, fallbackConversation(), FILTERS (+62 more)

### Community 26 - "writeAuditEvent"
Cohesion: 0.11
Nodes (16): AuditEventInput, AuditTenantContext, AuditWriteResult, boundId(), boundLabel(), boundMetadata(), writeAuditEvent(), auditFile (+8 more)

### Community 27 - "sync.ts"
Cohesion: 0.13
Nodes (18): RFC-5322, asStringArray(), EmailIntakePayload, fetchMailboxMessages(), MailboxMessage, mailboxMessageToIntakePayload(), stripAngle(), defaultMailboxSyncDeps (+10 more)

### Community 28 - "meta/helpers.ts"
Cohesion: 0.16
Nodes (14): decodeOAuthState(), encodeOAuthState(), isUuid(), META_GRAPH_VERSION, META_PLATFORMS, MetaOAuthState, MetaPlatform, OAUTH_STATE_MAX_AGE_MS (+6 more)

### Community 29 - "components.json"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 30 - "useTenantScope"
Cohesion: 0.09
Nodes (20): dynamic, dynamic, dynamic, CandidateCreate(), handleSubmit(), EmployeeCreate(), handleSubmit(), JobCreate() (+12 more)

### Community 31 - "supabase_auth_email_config.js"
Cohesion: 0.31
Nodes (16): analyzeConfig(), buildPatchPayload(), check(), expectedRedirects(), main(), managementRequest(), normalizeOrigin(), parseBoolEnv() (+8 more)

### Community 32 - "createSupabaseBrowserClient"
Cohesion: 0.13
Nodes (20): AuthLikeError, backoffSeconds(), isRateLimitError(), LoginForm(), sendMagicLink(), signInWithPassword(), PASSWORD_BACKOFF_SECONDS, resolvePostLoginPath() (+12 more)

### Community 33 - "report/page.tsx"
Cohesion: 0.11
Nodes (20): formatTimestamp(), LogsPage(), RESULT_FILTERS, resultTone(), actionTaken(), AiUsageCard(), csvEscape(), formatReportDate() (+12 more)

### Community 34 - "dashboardData.ts"
Cohesion: 0.14
Nodes (10): ConversationRow, DailyReportRow, DashboardSnapshot, emptyDashboardSnapshot, errorMessages(), fetchDashboardSnapshot(), FollowupRow, LeadRow (+2 more)

### Community 35 - "local-dev-signup/route.ts"
Cohesion: 0.13
Nodes (23): dynamic, isValidEmail(), normalizeEmail(), POST(), runtime, dynamic, ExistingUser, findUserByEmail() (+15 more)

### Community 36 - "ChartBlock.tsx"
Cohesion: 0.24
Nodes (11): BarChart(), ChartBlock(), DONUT_COLORS, DonutChart(), formatValue(), LineChart(), niceMax(), PAD (+3 more)

### Community 37 - "posts/types.ts"
Cohesion: 0.15
Nodes (20): CaptionSectionProps, captionExcerpt(), PostCard(), Filter, PostStatusBoard(), PostStatusBoardProps, ReviewSubmitProps, PLATFORM_ICONS (+12 more)

### Community 38 - "chat_analyst.test.ts"
Cohesion: 0.16
Nodes (10): cmp(), fakeTokens, Filter, makeFakeClient(), exec(), matches(), moduleWithLoad, pick() (+2 more)

### Community 39 - "customers/page.tsx"
Cohesion: 0.14
Nodes (18): CustomersPage(), initialsOf(), DocLink, DocSection, quickStart, sections, changelog, faqs (+10 more)

### Community 40 - "types/index.ts"
Cohesion: 0.07
Nodes (36): dynamic, dynamic, JOB_STATUS_LABELS, REMOTE_POLICY_LABELS, SCORING_WEIGHT_LABELS, FIELD_LIMITS, JobFormProps, JobsList() (+28 more)

### Community 41 - "people_employees_api.test.ts"
Cohesion: 0.14
Nodes (7): auditEventsTable, AuthMode, check(), employeesTable, moduleWithLoad, resetState(), Row

### Community 42 - "dependencies"
Cohesion: 0.04
Nodes (45): clsx, date-fns, dotenv, framer-motion, imap, imapflow, lucide-react, mailparser (+37 more)

### Community 43 - "provider.ts"
Cohesion: 0.06
Nodes (58): generateSessionTitle(), buildUserPayload(), ClassificationResult, classifyMessage(), ClassifyMessageParams, ClassifyMessageResponse, MOCK_CLASSIFICATION, parseClassification() (+50 more)

### Community 44 - "workflow_2_classification.js"
Cohesion: 0.47
Nodes (5): classifyViaApp(), getAppUrl(), getIngestToken(), items, out

### Community 45 - "workflow_3_agent.js"
Cohesion: 0.38
Nodes (5): draftViaApp(), getAppUrl(), getIngestToken(), items, out

### Community 46 - "rateLimit"
Cohesion: 0.10
Nodes (41): dynamic, GET(), UsageRow, DELETE(), GET(), DELETE(), dynamic, GET() (+33 more)

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

### Community 51 - "meta_send.test.ts"
Cohesion: 0.07
Nodes (30): ResolvedMetaCredential, buildMetaSendRequest(), GraphSendResponse, graphUrl(), isMetaSendEnabled(), MetaSendAuth, MetaSendError, MetaSendParams (+22 more)

### Community 52 - "visuals.ts"
Cohesion: 0.20
Nodes (10): AssistantBody(), AssistantSegment, CHART_FENCE_TAG, isPoint(), NexusChartPoint, NexusChartSeries, NexusChartSpec, parseAssistantContent() (+2 more)

### Community 53 - "InviteManager.tsx"
Cohesion: 0.15
Nodes (17): dynamic, CopyLinkButton(), copy(), InviteManager(), submit(), STATUS_STYLES, StatusPill(), useOrganization() (+9 more)

### Community 54 - "approval-policy.ts"
Cohesion: 0.22
Nodes (9): ApprovalMode, AUTO_SEND_MIN_CONFIDENCE, AutoSendDecision, AutoSendInput, decideAutoSend(), HIGH_RISK_SCORE, HIGH_VALUE_THRESHOLD, num() (+1 more)

### Community 55 - "Nexus OS — Operating Layer & People Intelligence"
Cohesion: 0.12
Nodes (16): 10. Partition tracker, 11. Shared agent contract (paste at the top of every partition), 13. Future partitions (do not run until Wave 1 is done), 14. Testing strategy, 15. Human actions (not agent), 16. Locked decisions (do not re-ask), 1. Product thesis (keep this), 4. Target architecture (fits this repo) (+8 more)

### Community 56 - "launch_workspace_rpc.test.mjs"
Cohesion: 0.25
Nodes (6): canonicalMigration, __dirname, guardMigration, onboarding, root, stepWorkspace

### Community 57 - "business-docs/route.ts"
Cohesion: 0.31
Nodes (8): dynamic, POST(), safeFileName(), ACCEPTED_DOC_EXTENSIONS, ACCEPTED_DOC_MIME_TYPES, extensionOf(), extractText(), isSupportedDoc()

### Community 58 - "social_posts_unit.test.ts"
Cohesion: 0.42
Nodes (7): composeCaptionWithHashtags(), scheduledPostApprovalFields(), buildStoragePath(), captionsFromText(), extensionOf(), assert(), main()

### Community 59 - "seed_demo_inbox.ts"
Cohesion: 0.39
Nodes (7): DEMO_ROWS, DemoRow, fail(), leadIntentFromDemo(), leadRiskScore(), leadUrgency(), main()

### Community 60 - "useRealtimeData.ts"
Cohesion: 0.48
Nodes (5): CommandCenter(), RealtimeConversation, RealtimeLead, useRealtimeConversations(), useRealtimeLeads()

### Community 61 - "AppWindow.tsx"
Cohesion: 0.12
Nodes (10): AppPanel(), AppWindowFrame(), inboxRows, nav, NAV_FOR_STOP, PANELS, reportStats, trend (+2 more)

### Community 62 - "cn"
Cohesion: 0.05
Nodes (37): MiniCard(), InboxFilterGroups(), dynamic, dynamic, VisualToggle(), appNav, AppSidebar(), isNavActive() (+29 more)

### Community 63 - "fetchers.ts"
Cohesion: 0.07
Nodes (59): ChatUsageToolbar(), formatTokens(), CandidateDetail(), handleSubmit(), patchArchived(), JobDetail(), handleSubmit(), patchArchived() (+51 more)

### Community 64 - "member4_classification_tests.js"
Cohesion: 0.38
Nodes (6): classify(), fs, loadEnvLocal(), main(), path, TESTS

### Community 65 - "test-buy-back-report.mjs"
Cohesion: 0.29
Nodes (5): client, demoMetrics, __dirname, reportPrompt, root

### Community 66 - "AppShell.tsx"
Cohesion: 0.05
Nodes (47): geistMono, geistSans, inter, metadata, sourceSans3, viewport, SessionGate(), ScrollProgressRail() (+39 more)

### Community 67 - "check_signup_backend.js"
Cohesion: 0.40
Nodes (5): { createClient }, fail(), main(), REQUIRED_COLUMNS, REQUIRED_RPC_PATHS

### Community 68 - "graphify in Nexus OS (and any repo)"
Cohesion: 0.33
Nodes (5): Commands (use the wrapper in agents), graphify in Nexus OS (and any repo), Install CLI (once per machine), New repo checklist, Per-repo bootstrap

### Community 69 - "CaptionSection.tsx"
Cohesion: 0.26
Nodes (10): Busy, ConfirmPublishDialog(), defaultLocalDateTime(), DialogShell(), ScheduleDialog(), Busy, PlatformIcon(), PRIMARY_BTN (+2 more)

### Community 70 - "middleware.ts"
Cohesion: 0.50
Nodes (4): config, isProtectedPath(), middleware(), PROTECTED_PREFIXES

### Community 71 - "callback/handler.ts"
Cohesion: 0.06
Nodes (45): defaultGmailCallbackDeps, GmailCallbackDeps, GoogleTokenResponse, GoogleUserInfo, Stage, CredentialRow, dynamic, GET() (+37 more)

### Community 72 - "smoke_classification_openai.js"
Cohesion: 0.50
Nodes (4): fs, loadEnvLocal(), main(), path

### Community 73 - "CreateWithAiPath.tsx"
Cohesion: 0.19
Nodes (17): runAi(), CreateWithAiPath(), edit(), runGenerate(), undo(), CreateWithAiPathProps, CurrentGen, getGeneration() (+9 more)

### Community 74 - "extends"
Cohesion: 0.50
Nodes (3): extends, next/core-web-vitals, next/typescript

### Community 82 - "data.ts"
Cohesion: 0.21
Nodes (14): BrandAssetPicker(), handleRemove(), handleUpload(), BrandAssetPickerProps, BrandAssetThumb(), BRAND_ASSETS_BUCKET, deleteBrandAsset(), listBrandAssets() (+6 more)

### Community 87 - "Gmail integration test results"
Cohesion: 0.10
Nodes (19): 10. How to re-run (manual), 1. Preflight, 2. TC1 — New lead (webhook / Gmail-shaped payload), 3. TC2 — Real Gmail / IMAP, 4. TC3 — Existing lead append, 5. TC4 — Noise drop (short pleasantry), 6. TC5 — Edge payload (HTML-only + bare `from` email), 7. Post–Gmail Warning Fix verification (2026-05-16) (+11 more)

### Community 88 - "channel-sender.ts"
Cohesion: 0.06
Nodes (45): ApprovalBody, approvalWebhookUrl(), dynamic, PATCH(), RFC-822, AutopilotInput, BusinessProfileRow, ConversationRow (+37 more)

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

### Community 96 - "CaptionSection"
Cohesion: 0.36
Nodes (9): CaptionSection(), confirmSchedule(), confirmUpload(), openAction(), resolveCaptions(), saveDraft(), validate(), createPost() (+1 more)

### Community 97 - "status.ts"
Cohesion: 0.31
Nodes (6): dynamic, GET(), LOADING, AiFeatureStatus, AiStatus, getAiStatus()

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

### Community 105 - "csv/parse.ts"
Cohesion: 0.18
Nodes (16): alignRow(), CSV_DELIMITERS, CsvDelimiter, CsvParseErr, CsvParseOk, CsvParseResult, detectDelimiter(), headerError() (+8 more)

### Community 106 - "resend-confirmation/route.ts"
Cohesion: 0.23
Nodes (12): dynamic, isValidEmail(), normalizeEmail(), POST(), runtime, dynamic, GET(), isRateLimitError() (+4 more)

### Community 107 - "UploadMediaPath.tsx"
Cohesion: 0.22
Nodes (8): Composer(), ComposerProps, Step, UploadMediaPath(), handleFile(), UploadMediaPathProps, POST_MEDIA_BUCKET, uploadToBucket()

### Community 108 - "StepAccount.tsx"
Cohesion: 0.19
Nodes (15): canUseLocalDevSignupFallback(), isEmailDeliveryError(), isRateLimitError(), LocalDevSignupResponse, logSupabaseAuthEmailError(), mapSignUpError(), normalizeSignupEmail(), StepAccount() (+7 more)

### Community 109 - "meta/callback/route.ts"
Cohesion: 0.22
Nodes (16): absoluteRedirect(), dynamic, errorRedirect(), exchangeCodeForToken(), exchangeLongLivedToken(), fetchPageAccounts(), fetchWaPhoneNumberId(), GET() (+8 more)

### Community 110 - "Build checklist"
Cohesion: 0.33
Nodes (6): Build checklist, Human (not agent), Wave 0 — already complete, Wave 1 — build in this order, Wave 1 complete, Wave 2 — do not start until W1 is ticked

### Community 111 - "PricingSection.tsx"
Cohesion: 0.23
Nodes (11): Hero(), PipelineFlow(), AnimatedHeadingProps, RevealProps, HERO, DURATION, EASE, EASE_IN (+3 more)

### Community 112 - "people_employees_csv.test.ts"
Cohesion: 0.17
Nodes (7): auditEventsTable, AuthMode, check(), employeesTable, moduleWithLoad, resetState(), Row

### Community 113 - "ReviewSubmit"
Cohesion: 0.25
Nodes (9): ReviewSubmit(), doDelete(), doPublish(), doSchedule(), doUnschedule(), deletePost(), schedulePost(), unschedulePost() (+1 more)

### Community 114 - "jobs.ts"
Cohesion: 0.05
Nodes (70): dynamic, fromService(), GET(), PATCH(), RouteContext, dynamic, fromService(), GET() (+62 more)

### Community 116 - "2. Verdict on the incoming 12-phase plan"
Cohesion: 0.50
Nodes (4): 2. Verdict on the incoming 12-phase plan, Accept (non-negotiable), One important change to Claude’s “don’t build HR yet”, Reject or defer (do not implement in this program)

### Community 117 - "people_schema.test.ts"
Cohesion: 0.25
Nodes (5): migrationFiles, migrationsDir, peopleFile, sql, tables

### Community 118 - "signup/page.tsx"
Cohesion: 0.11
Nodes (19): hasSignupProgress(), SignupPage(), STEP_FROM_PARAM, STEP_LABELS, stepFromParam(), AuthAmbientField(), AuthBrandPanel(), AuthSplitLayout() (+11 more)

### Community 119 - "StepGmail.tsx"
Cohesion: 0.17
Nodes (10): authPrimaryButton, authSecondaryButton, planLabel(), StepDone(), StepDoneProps, GMAIL_ERROR_MESSAGES, StepGmail(), StepGmailProps (+2 more)

### Community 120 - "timeseries.ts"
Cohesion: 0.17
Nodes (18): dynamic, GET(), buildDailyTimeseries(), contributesRevenueAtRisk(), ConversationTimeseriesRow, downsampleWeekly(), emptyBucket(), isChurnRisk() (+10 more)

### Community 121 - "3. Repository truth (Phase 0 — already done)"
Cohesion: 0.50
Nodes (4): 3. Repository truth (Phase 0 — already done), Architectural risks to respect (do not “fix” inside a People partition), Patterns new People code MUST reuse, Stack (from code, not marketing copy)

### Community 122 - "5. People domain model (minimal, extensible)"
Cohesion: 0.50
Nodes (4): 5. People domain model (minimal, extensible), Compliance (from the old hiring blueprint — stronger than the incoming plan), Default scoring weights (stored on the job, versioned), Tables (A2 — do not add more in A2)

### Community 123 - "followups_drain.test.ts"
Cohesion: 0.25
Nodes (6): assert(), fakeClient, main(), moduleWithLoad, Row, store

### Community 124 - "StepWorkspace.tsx"
Cohesion: 0.13
Nodes (13): FormInput(), FormInputProps, FormSelect(), COMPANY_SIZES, LaunchWorkspaceResponse, parseWorkspaceId(), StepWorkspace(), onSubmit() (+5 more)

### Community 125 - "n8n_job_tokens.test.ts"
Cohesion: 0.22
Nodes (4): fakeClient, moduleWithLoad, rows, TokenRow

### Community 126 - "daily_report_route.test.ts"
Cohesion: 0.14
Nodes (8): assert(), countApi(), b, fakeClient, main(), moduleWithLoad, Row, store

### Community 127 - "csv_engine.test.ts"
Cohesion: 0.29
Nodes (8): CSV_DEFAULT_MAX_BYTES, isCsvFormulaInjection(), cellToString(), escapeCsvCell(), serializeCsv(), RFC-4180, assert(), csvModulesMustStayPure()

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

### Community 138 - "meta/connect/route.ts"
Cohesion: 0.36
Nodes (7): dynamic, GET(), runtime, isMetaPlatform(), META_SCOPES, metaConfigError(), metaOAuthRedirectUri()

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

### Community 144 - "reply-drafts/route.ts"
Cohesion: 0.38
Nodes (6): APPROVAL_STATUSES, dynamic, GET(), isRelationshipEmbedError(), mapRowsToReplyDraftWithConversation(), ReplyDraftRow

### Community 145 - "publish/route.ts"
Cohesion: 0.43
Nodes (6): dynamic, markPublishFailed(), maxDuration, POST(), publishWebhookUrl(), n8nWebhookAuthHeaders()

### Community 146 - "store.ts"
Cohesion: 0.29
Nodes (11): summarizeSession(), embedText(), chunkText(), deleteSummaryForSource(), EmbeddingKind, KIND_WEIGHTS, matchKnowledge(), minSimilarity() (+3 more)

### Community 147 - "n8n-job-tokens.ts"
Cohesion: 0.29
Nodes (11): consumeN8nJobToken(), ConsumeN8nJobTokenResult, ConsumeRpcRow, hashToken(), issueN8nJobToken(), IssueN8nJobTokenOptions, N8nJobTokenBindings, N8nJobTokenClaims (+3 more)

### Community 149 - "social-post/route.ts"
Cohesion: 0.21
Nodes (10): dynamic, GET(), dynamic, GET(), signPostMediaUrl(), assert(), fakeClient, main() (+2 more)

### Community 150 - "EmployeeDetail"
Cohesion: 0.33
Nodes (5): dynamic, EmployeeDetail(), handleSubmit(), patchArchived(), updateEmployeeMutation()

### Community 152 - "AuthModeToggle.tsx"
Cohesion: 0.40
Nodes (3): AuthMode, AuthModeToggle(), SPRING

### Community 153 - "EmployeesList"
Cohesion: 0.29
Nodes (4): dynamic, EmployeesList(), onExport(), formatIsoDate()

### Community 154 - "app/page.tsx"
Cohesion: 0.16
Nodes (12): FaqSection(), FeatureBento(), IntegrationsSection(), PricingSection(), Eyebrow(), Section(), SectionProps, ProtocolStepper() (+4 more)

### Community 174 - "StakesSection.tsx"
Cohesion: 0.33
Nodes (4): DIGITS, Odometer(), StakesSection(), STAKES

### Community 175 - "n8n workflow exports"
Cohesion: 0.40
Nodes (4): n8n auth hardening (2026-07-17), n8n workflow exports, Notes, Social posting: publish + schedule contract (2026-07-15)

### Community 177 - "report/route.ts"
Cohesion: 0.50
Nodes (4): DailyReportRow, dynamic, GET(), mapDailyReport()

### Community 178 - "conversations/[id]/route.ts"
Cohesion: 0.50
Nodes (3): dynamic, GET(), RouteContext

### Community 179 - "tenant_routing_e2e.test.ts"
Cohesion: 0.80
Nodes (4): assert(), liveGmailSmoke(), run(), runScript()

### Community 180 - "gmail/status/route.ts"
Cohesion: 0.50
Nodes (3): dynamic, GET(), runtime

### Community 184 - "requireN8nBootstrapToken"
Cohesion: 0.14
Nodes (17): boundedString(), dynamic, FinalizeEventInput, INBOUND_PLATFORMS, POST(), runtime, dynamic, POST() (+9 more)

### Community 186 - "migration_order.test.mjs"
Cohesion: 0.17
Nodes (10): bridgeSql, dailyIdx, __dirname, foundationIdx, foundationSql, migrationFiles, migrationsDir, notes (+2 more)

### Community 193 - "Nexus OS — Launch-Readiness Report (2026-07-15)"
Cohesion: 0.20
Nodes (9): A. Security audit, B. Vector DB & RAG pipeline, C. Project review, D. Repo cleanup (done in this pass), Fixed in this pass (app code — verified by lint, build, and OAuth-state tests), Nexus OS — Launch-Readiness Report (2026-07-15), Reported — recommended, NOT changed (database / architecture), Verdict: CONDITIONAL GO (+1 more)

### Community 197 - "rate_limit_durable.test.ts"
Cohesion: 0.22
Nodes (5): fakeClient, moduleWithLoad, RpcCall, rpcCalls, rpcResponse

### Community 199 - "Manual actions — what the founder/operator must do by hand"
Cohesion: 0.20
Nodes (7): 1. Environment variables (Vercel / hosting), 2. Supabase — already applied via MCP (verify only), 3. n8n (instance `knurdz3o.app.n8n.cloud`), 4. Meta — the only real blocker for outbound send, 5. Product/architecture decisions waiting on you, 6. New features shipped in this pass (nothing to do — just awareness), Manual actions — what the founder/operator must do by hand

### Community 200 - "match_embeddings_route.test.ts"
Cohesion: 0.29
Nodes (3): fakeClient, moduleWithLoad, rpcRows

### Community 201 - "system-prompt.ts"
Cohesion: 0.22
Nodes (10): AnalystContext, DEFAULT_ANALYST_PERSONA, buildAnalystSystemPrompt(), formatBusiness(), formatKnowledge(), formatSnapshot(), RULES, chartPromptAddendum() (+2 more)

### Community 213 - "clean_n8n_export.js"
Cohesion: 0.33
Nodes (4): exportDoc, fs, payload, [rawPath, outPath, liveIdArg]

### Community 216 - "gmail-backfill/route.ts"
Cohesion: 0.09
Nodes (32): dynamic, POST(), runtime, defaultGmailSyncDeps, GmailSyncDeps, runGmailSync(), SyncCredentialRow, WorkspaceSyncOutcome (+24 more)

### Community 219 - "readJsonObjectWithLimit"
Cohesion: 0.07
Nodes (67): boundedString(), dynamic, POST(), runtime, boundedString(), dynamic, normalizeClassification(), POST() (+59 more)

### Community 225 - "approval_route.test.ts"
Cohesion: 0.18
Nodes (5): conversationsTable, draftsTable, moduleWithLoad, outboundJobsTable, Row

### Community 226 - "Launch activation runbook"
Cohesion: 0.20
Nodes (9): 1. Pre-secret gate (no production credentials), 2. Supabase migrations, 3. App host environment variables, 4. n8n variables and credential cleanup, 5. OpenAI activation, 6. Google Gmail (live send), 7. Meta (after App Review), Launch activation runbook (+1 more)

### Community 227 - "route_reference.test.mjs"
Cohesion: 0.20
Nodes (7): apiRoutes, __dirname, middlewareSrc, root, settingsSrc, uiPages, watchedDirs

### Community 228 - "EmployeeCsvImport.tsx"
Cohesion: 0.22
Nodes (12): ACTION_STYLES, displayValue(), EmployeeCsvImport(), close(), onFile(), onImport(), onRefreshPreview(), reset() (+4 more)

### Community 232 - "workflow_logs_route.test.ts"
Cohesion: 0.22
Nodes (3): moduleWithLoad, Row, store

### Community 233 - "prepare_n8n_deploy_payload.mjs"
Cohesion: 0.22
Nodes (7): __dirname, exportsDir, LIVE_IDS, payload, raw, root, SUPABASE_CRED

### Community 235 - "internal_leads.test.ts"
Cohesion: 0.25
Nodes (3): moduleWithLoad, Row, store

### Community 238 - "leads/route.ts"
Cohesion: 0.16
Nodes (16): boundedString(), CONVERSATION_SOURCES, dynamic, pickAllowed(), POST(), POST_STATUSES, boundedString(), dynamic (+8 more)

### Community 245 - "ai.ts"
Cohesion: 0.13
Nodes (25): dynamic, maxDuration, POST(), dynamic, maxDuration, POST(), dynamic, maxDuration (+17 more)

## Knowledge Gaps
- **1203 isolated node(s):** `next/core-web-vitals`, `next/typescript`, `dynamic`, `UsageRow`, `dynamic` (+1198 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 1506 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **40 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `signup/types.ts`, `content.ts`, `chat/page.tsx`, `Spinner.tsx`, `AuthModeToggle.tsx`, `EmployeesList`, `utils.ts`, `app/page.tsx`, `createSupabaseBrowserClient`, `report/page.tsx`, `ChartBlock.tsx`, `posts/types.ts`, `customers/page.tsx`, `types/index.ts`, `StakesSection.tsx`, `InviteManager.tsx`, `fetchers.ts`, `AppShell.tsx`, `CaptionSection.tsx`, `data.ts`, `CaptionSection`, `EmployeeCsvImport.tsx`, `PricingSection.tsx`, `ReviewSubmit`, `signup/page.tsx`, `StepGmail.tsx`, `StepWorkspace.tsx`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._
- **Why does `rateLimit()` connect `rateLimit` to `employees.ts`, `candidates.ts`, `api/conversations/route.ts`, `social/helpers.ts`, `meta/connect/route.ts`, `webhook/route.ts`, `publish/route.ts`, `settings/route.ts`, `gmail/helpers.ts`, `api-security.ts`, `local-dev-signup/route.ts`, `requireN8nBootstrapToken`, `business-docs/route.ts`, `channel-sender.ts`, `gmail-backfill/route.ts`, `readJsonObjectWithLimit`, `status.ts`, `resend-confirmation/route.ts`, `leads/route.ts`, `jobs.ts`, `ai.ts`, `timeseries.ts`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **Why does `createServerClient()` connect `readJsonObjectWithLimit` to `callback/handler.ts`, `seed_demo_inbox.ts`, `webhook/route.ts`, `meta/callback/route.ts`, `leads/route.ts`, `wf2_tenant_contract.test.ts`, `n8n-job-tokens.ts`, `social-post/route.ts`, `channel-sender.ts`, `api-security.ts`, `sync.ts`, `requireN8nBootstrapToken`, `gmail-backfill/route.ts`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `createServerClient()` (e.g. with `callback/handler.ts` and `gmail-sync/handler.ts`) actually correct?**
  _`createServerClient()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `next/core-web-vitals`, `next/typescript`, `dynamic` to the rest of the system?**
  _1203 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `employees.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.12280701754385964 - nodes in this community are weakly interconnected._
- **Should `scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.029850746268656716 - nodes in this community are weakly interconnected._