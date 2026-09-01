# Graph Report - Nexus-OS  (2026-09-01)

## Corpus Check
- 459 files · ~261,292 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 2811 nodes · 5776 edges · 200 communities (165 shown, 35 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 89 edges (avg confidence: 0.63)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `be86052c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- content.ts
- employees.ts
- scripts
- tenant_intake_mapping.test.mjs
- multi_channel_normalizer.js
- Reply Generation Prompt (GPT-4o)
- callback/handler.ts
- fail
- social/helpers.ts
- compilerOptions
- autopilot_send.test.ts
- PipelineFlow.tsx
- webhook/route.ts
- plans.ts
- build_n8n_workflow_exports.js
- approval/page.tsx
- 12. Partitions (copy-paste prompts)
- settings/route.ts
- cn
- inbound-events.ts
- audit.test.ts
- analyst-context.ts
- gmail/status/route.ts
- EmployeesList.tsx
- test-imap/route.ts
- utils.ts
- inbox/page.tsx
- sync.ts
- meta/callback/route.ts
- components.json
- TenantScope.tsx
- supabase_auth_email_config.js
- login/page.tsx
- report/page.tsx
- dashboardData.ts
- local-dev-signup/route.ts
- readJsonObjectWithLimit
- posts/types.ts
- chat_analyst.test.ts
- customers/page.tsx
- index.ts
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
- ChartBlock.tsx
- InviteManager.tsx
- employees/[id]/route.ts
- Nexus OS — Operating Layer & People Intelligence
- launch_workspace_rpc.test.mjs
- report-summary.ts
- data.ts
- seed_demo_inbox.ts
- useRealtimeData.ts
- AppWindow.tsx
- StepAccount.tsx
- SettingsView.tsx
- member4_classification_tests.js
- test-buy-back-report.mjs
- appearance-prefs.ts
- check_signup_backend.js
- graphify in Nexus OS (and any repo)
- CaptionSection.tsx
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
- BrandAssetPicker.tsx
- Gmail integration test results
- channel-sender.ts
- inbound_replay.test.ts
- New Gmail Implementation
- devDependencies
- send_reply.test.ts
- next.config.mjs
- Channel Sender — Approval-to-Send Contract
- Tenant model unification ADR
- employees/route.ts
- gmail-backfill/route.ts
- Nexus OS — Revenue Command Center
- Navy Blue + Green Accent Palette
- gmail_backfill.test.ts
- gmail_sync.test.ts
- n8n environment variables
- postcss.config.mjs
- Configuration
- audit.ts
- app/layout.tsx
- Section.tsx
- AppShell.tsx
- AuthGuard.tsx
- Build checklist
- PricingSection.tsx
- ProtocolStepper.tsx
- leads/route.ts
- signup/page.tsx
- tailwind.config.ts
- 2. Verdict on the incoming 12-phase plan
- people_schema.test.ts
- StepGmail.tsx
- chat/route.ts
- timeseries.ts
- 3. Repository truth (Phase 0 — already done)
- 5. People domain model (minimal, extensible)
- followups_drain.test.ts
- StepWorkspace.tsx
- signup/types.ts
- daily_report_route.test.ts
- e2e_live_hop.ts
- Test Results — Classification Prompt v1
- Getting Started
- Usage
- Development Guide
- package.json
- Features
- Deployment
- api/conversations/route.ts
- social_oauth_state.test.ts
- app/page.tsx
- settings/page.tsx
- ai_usage.test.ts
- wf2_tenant_contract.test.ts
- inbound_record.test.ts
- Migration notes — drift sync (Task 3.1, Member 3)
- AppTopBar.tsx
- approval/route.ts
- store.ts
- mailbox_sync.test.ts
- ai_classify_route.test.ts
- social_post_route.test.ts
- createSupabaseBrowserClient
- Classification Prompt v1 Test Results (5/5 PASS)
- AuthSplitLayout.tsx
- n8n_job_tokens.test.ts
- SessionGate.tsx
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
- draft.ts
- n8n workflow exports
- tenant_routing_e2e.test.ts
- pdf-parse.d.ts
- migration_order.test.mjs
- Nexus OS — Launch-Readiness Report (2026-07-15)
- rate_limit_durable.test.ts
- Manual actions — what the founder/operator must do by hand
- match_embeddings_route.test.ts
- chat_prompt_injection.test.ts
- clean_n8n_export.js
- gmail-sync/handler.ts
- api-security.ts
- generate-favicons.mjs
- approval_route.test.ts
- Launch activation runbook
- route_reference.test.mjs
- chat/page.tsx
- workflow_logs_route.test.ts
- prepare_n8n_deploy_payload.mjs
- internal_leads.test.ts
- draft/route.ts
- ai.ts

## God Nodes (most connected - your core abstractions)
1. `cn()` - 124 edges
2. `rateLimit()` - 93 edges
3. `readJsonObjectWithLimit()` - 79 edges
4. `createServerClient()` - 73 edges
5. `scripts` - 63 edges
6. `requireApiTenantContext()` - 52 edges
7. `jsonError()` - 46 edges
8. `createSupabaseBrowserClient()` - 42 edges
9. `parseWorkspaceId()` - 41 edges
10. `JSON_LIMITS` - 39 edges

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

## Communities (200 total, 35 thin omitted)

### Community 0 - "content.ts"
Cohesion: 0.13
Nodes (13): FeatureBento(), ICONS, ACCENT_SOFT, CHANNELS, FAQ_SECTION, FeatureCard, FEATURES, FINAL_CTA (+5 more)

### Community 1 - "employees.ts"
Cohesion: 0.15
Nodes (14): AUDIT_DIFF_KEYS, auditSnapshot(), CREATE_FIELDS, createEmployee(), EmployeeListOk, EmployeeOk, isIsoDate(), isUniqueEmailConflict() (+6 more)

### Community 2 - "scripts"
Cohesion: 0.03
Nodes (63): scripts, build, check:auth-email, check:signup-backend, dev, fix:auth-email, graphify, graphify:ensure (+55 more)

### Community 3 - "tenant_intake_mapping.test.mjs"
Cohesion: 0.06
Nodes (39): buildLookupPath(), buildLookupUrl(), isUuid(), requireTeamId(), detectMetaMessagingPlatformFromBody(), extractBearerFromHeaders(), extractFacebookPageId(), extractGmailDestinationMailbox() (+31 more)

### Community 4 - "multi_channel_normalizer.js"
Cohesion: 0.08
Nodes (40): attachTenant(), detectMetaMessagingPlatform(), detectSource(), isUuid(), looksLikeMetaMessaging(), looksLikeMetaWhatsapp(), metaMessagingObject(), normalizeItem() (+32 more)

### Community 5 - "Reply Generation Prompt (GPT-4o)"
Cohesion: 0.67
Nodes (3): Classification Prompt (GPT-4o), Reply Generation Prompt (GPT-4o), WF2 AI Classification Workflow

### Community 6 - "callback/handler.ts"
Cohesion: 0.07
Nodes (43): absoluteRedirect(), defaultGmailCallbackDeps, errorRedirect(), GmailCallbackDeps, GoogleTokenResponse, GoogleUserInfo, handleGmailOAuthCallback(), logStageError() (+35 more)

### Community 7 - "fail"
Cohesion: 0.44
Nodes (11): boundedString(), extraFieldsError(), fail(), isErr(), parseCreateBody(), parseEmploymentStatus(), parseOptionalDate(), parseOptionalEmail() (+3 more)

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
Cohesion: 0.14
Nodes (21): ExtractedMessage, extractMessages(), verifyMetaSignature(), WebhookPlatform, dynamic, GET(), POST(), runtime (+13 more)

### Community 13 - "plans.ts"
Cohesion: 0.16
Nodes (14): TierCard(), PricingFAQ(), PricingTierCard(), PricingTierCardProps, planTitle(), StepPayment(), StepPaymentProps, StepPlan() (+6 more)

### Community 14 - "build_n8n_workflow_exports.js"
Cohesion: 0.07
Nodes (23): buildInboundFinalizePayloadJs, connGmail, dedupDecision, dedupLookupQuery, emailTrigger, fs, gmailWebhook, ifKeepNode() (+15 more)

### Community 15 - "approval/page.tsx"
Cohesion: 0.10
Nodes (24): ApprovalFilter, ApprovalPage(), DraftItem, fallbackConversation(), FILTERS, intentLabel(), mergeDraftsWithConversations(), MiniCard() (+16 more)

### Community 16 - "12. Partitions (copy-paste prompts)"
Cohesion: 0.10
Nodes (20): 12. Partitions (copy-paste prompts), A1 — Append-only audit log, A2 — People schema + RLS, B1 — Employee service + API, B2 — Employee UI + nav, B3 — Shared CSV parser (pure), B4 — Employee CSV import/export, C1 — Jobs API + UI (+12 more)

### Community 17 - "settings/route.ts"
Cohesion: 0.09
Nodes (31): applyChannelPatch(), APPROVAL_MODES, billingPeriodBounds(), CHANNEL_ACTIONS, CHANNEL_TARGETS, ChannelPatch, COMMON_TIMEZONES, dynamic (+23 more)

### Community 18 - "cn"
Cohesion: 0.13
Nodes (19): appNav, AppSidebar(), isNavActive(), SidebarBrand(), SidebarChrome(), SidebarFooter(), SidebarHeader(), SidebarNav() (+11 more)

### Community 19 - "inbound-events.ts"
Cohesion: 0.16
Nodes (18): clampInt(), dynamic, POST(), runtime, applyReplayOutcome(), fetchStuckInboundEvents(), FetchStuckInboundEventsOptions, InboundEventStatus (+10 more)

### Community 20 - "audit.test.ts"
Cohesion: 0.15
Nodes (9): auditFile, baseEvent, fakeClient, inserted, migrationFiles, migrationsDir, moduleWithLoad, Row (+1 more)

### Community 21 - "analyst-context.ts"
Cohesion: 0.11
Nodes (26): aggregateSnapshot(), AnalystContext, AnalystSnapshot, buildAnalystContext(), BusinessContext, BusinessRow, ConversationRow, DraftRow (+18 more)

### Community 22 - "gmail/status/route.ts"
Cohesion: 0.50
Nodes (3): dynamic, GET(), runtime

### Community 23 - "EmployeesList.tsx"
Cohesion: 0.08
Nodes (32): dynamic, dynamic, dynamic, ConfirmDialog(), EmployeeCreate(), EmployeeDetail(), EmployeeForm(), EmployeeFormProps (+24 more)

### Community 24 - "test-imap/route.ts"
Cohesion: 0.29
Nodes (9): Body, dynamic, MailboxSettings, POST(), readImapSettings(), readSmtpSettings(), runtime, testImap() (+1 more)

### Community 25 - "utils.ts"
Cohesion: 0.09
Nodes (28): churnDraftTag(), DashboardPage(), hotLeadDraftTag(), isDraftPipelineReady(), TIMESERIES_RANGES, urgencyBadgeLabel(), ZERO_METRICS, formatAxisValue() (+20 more)

### Community 26 - "inbox/page.tsx"
Cohesion: 0.16
Nodes (17): InboxFilterGroups(), InboxPageContent(), INTENT_OPTIONS, intentBadgeLabel(), IntentFilter, sourceIcon(), sourceLabel(), timelineCompletion() (+9 more)

### Community 27 - "sync.ts"
Cohesion: 0.08
Nodes (26): dynamic, POST(), runtime, RFC-5322, MailboxCredentialError, MailboxCredentialResult, MailboxEndpoint, MailboxRow (+18 more)

### Community 28 - "meta/callback/route.ts"
Cohesion: 0.07
Nodes (43): dynamic, GET(), absoluteRedirect(), dynamic, errorRedirect(), exchangeCodeForToken(), exchangeLongLivedToken(), fetchPageAccounts() (+35 more)

### Community 29 - "components.json"
Cohesion: 0.11
Nodes (17): aliases, components, hooks, lib, ui, utils, iconLibrary, rsc (+9 more)

### Community 30 - "TenantScope.tsx"
Cohesion: 0.29
Nodes (8): readSessionContext(), TenantScopeContext, TenantScopeGate(), TenantScopeValue, TenantSessionContext, useTenantQueryTeamId(), useTenantScope(), TenantScopeErrorBanner()

### Community 31 - "supabase_auth_email_config.js"
Cohesion: 0.31
Nodes (16): analyzeConfig(), buildPatchPayload(), check(), expectedRedirects(), main(), managementRequest(), normalizeOrigin(), parseBoolEnv() (+8 more)

### Community 32 - "login/page.tsx"
Cohesion: 0.14
Nodes (19): dynamic, isValidEmail(), normalizeEmail(), POST(), runtime, dynamic, GET(), isRateLimitError() (+11 more)

### Community 33 - "report/page.tsx"
Cohesion: 0.11
Nodes (24): formatTimestamp(), LogsPage(), RESULT_FILTERS, resultTone(), actionTaken(), AiUsageCard(), csvEscape(), formatReportDate() (+16 more)

### Community 34 - "dashboardData.ts"
Cohesion: 0.14
Nodes (10): ConversationRow, DailyReportRow, DashboardSnapshot, emptyDashboardSnapshot, errorMessages(), fetchDashboardSnapshot(), FollowupRow, LeadRow (+2 more)

### Community 35 - "local-dev-signup/route.ts"
Cohesion: 0.13
Nodes (23): dynamic, isValidEmail(), normalizeEmail(), POST(), runtime, dynamic, ExistingUser, findUserByEmail() (+15 more)

### Community 36 - "readJsonObjectWithLimit"
Cohesion: 0.09
Nodes (52): dynamic, POST(), runtime, boundedString(), dynamic, optionalTokenCount(), POST(), runtime (+44 more)

### Community 37 - "posts/types.ts"
Cohesion: 0.14
Nodes (17): CaptionSectionProps, Filter, PostStatusBoard(), PostStatusBoardProps, ReviewSubmitProps, accentClasses, FilterChip(), FilterChipProps (+9 more)

### Community 38 - "chat_analyst.test.ts"
Cohesion: 0.14
Nodes (5): fakeTokens, Filter, moduleWithLoad, Row, Store

### Community 39 - "customers/page.tsx"
Cohesion: 0.14
Nodes (18): CustomersPage(), initialsOf(), DocLink, DocSection, quickStart, sections, changelog, faqs (+10 more)

### Community 40 - "index.ts"
Cohesion: 0.09
Nodes (25): dynamic, GET(), RouteContext, dynamic, GET(), APPROVAL_STATUSES, dynamic, GET() (+17 more)

### Community 41 - "people_employees_api.test.ts"
Cohesion: 0.14
Nodes (7): auditEventsTable, AuthMode, check(), employeesTable, moduleWithLoad, resetState(), Row

### Community 42 - "dependencies"
Cohesion: 0.04
Nodes (45): clsx, date-fns, dotenv, framer-motion, imap, imapflow, lucide-react, mailparser (+37 more)

### Community 43 - "provider.ts"
Cohesion: 0.14
Nodes (18): dynamic, GET(), LOADING, AiOperation, clientCache, ClientPurpose, isMockMode(), isOpenAiConfigured() (+10 more)

### Community 44 - "workflow_2_classification.js"
Cohesion: 0.47
Nodes (5): classifyViaApp(), getAppUrl(), getIngestToken(), items, out

### Community 45 - "workflow_3_agent.js"
Cohesion: 0.38
Nodes (5): draftViaApp(), getAppUrl(), getIngestToken(), items, out

### Community 46 - "rateLimit"
Cohesion: 0.14
Nodes (27): dynamic, GET(), UsageRow, DELETE(), dynamic, GET(), POST(), safeFileName() (+19 more)

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

### Community 52 - "ChartBlock.tsx"
Cohesion: 0.11
Nodes (21): AssistantBody(), BarChart(), ChartBlock(), DONUT_COLORS, DonutChart(), formatValue(), LineChart(), niceMax() (+13 more)

### Community 53 - "InviteManager.tsx"
Cohesion: 0.19
Nodes (13): dynamic, CopyLinkButton(), InviteManager(), STATUS_STYLES, StatusPill(), buildInviteLink(), createInvite(), Invite (+5 more)

### Community 54 - "employees/[id]/route.ts"
Cohesion: 0.27
Nodes (10): dynamic, fromService(), GET(), PATCH(), RouteContext, auditDiff(), EmployeeErr, getEmployee() (+2 more)

### Community 55 - "Nexus OS — Operating Layer & People Intelligence"
Cohesion: 0.12
Nodes (16): 10. Partition tracker, 11. Shared agent contract (paste at the top of every partition), 13. Future partitions (do not run until Wave 1 is done), 14. Testing strategy, 15. Human actions (not agent), 16. Locked decisions (do not re-ask), 1. Product thesis (keep this), 4. Target architecture (fits this repo) (+8 more)

### Community 56 - "launch_workspace_rpc.test.mjs"
Cohesion: 0.25
Nodes (6): canonicalMigration, __dirname, guardMigration, onboarding, root, stepWorkspace

### Community 57 - "report-summary.ts"
Cohesion: 0.18
Nodes (14): cache, loadPrompt(), resolvePromptDir(), buildFallbackSummary(), pick(), ReportSummaryParams, ReportSummaryResponse, ReportSummaryStyle (+6 more)

### Community 58 - "data.ts"
Cohesion: 0.20
Nodes (17): ReviewSubmit(), composeCaptionWithHashtags(), scheduledPostApprovalFields(), buildStoragePath(), captionsFromText(), createPost(), deletePost(), extensionOf() (+9 more)

### Community 59 - "seed_demo_inbox.ts"
Cohesion: 0.39
Nodes (7): DEMO_ROWS, DemoRow, fail(), leadIntentFromDemo(), leadRiskScore(), leadUrgency(), main()

### Community 60 - "useRealtimeData.ts"
Cohesion: 0.48
Nodes (5): CommandCenter(), RealtimeConversation, RealtimeLead, useRealtimeConversations(), useRealtimeLeads()

### Community 61 - "AppWindow.tsx"
Cohesion: 0.12
Nodes (10): AppPanel(), AppWindowFrame(), inboxRows, nav, NAV_FOR_STOP, PANELS, reportStats, trend (+2 more)

### Community 62 - "StepAccount.tsx"
Cohesion: 0.22
Nodes (13): canUseLocalDevSignupFallback(), isEmailDeliveryError(), isRateLimitError(), LocalDevSignupResponse, logSupabaseAuthEmailError(), mapSignUpError(), normalizeSignupEmail(), StepAccount() (+5 more)

### Community 63 - "SettingsView.tsx"
Cohesion: 0.10
Nodes (37): dynamic, ChatUsageToolbar(), formatTokens(), VisualToggle(), META_LABELS, planPricingCopy(), planTitle(), SettingsView() (+29 more)

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

### Community 69 - "CaptionSection.tsx"
Cohesion: 0.17
Nodes (21): BrandAssetThumb(), Busy, ConfirmPublishDialog(), defaultLocalDateTime(), ScheduleDialog(), captionExcerpt(), PostCard(), Busy (+13 more)

### Community 70 - "middleware.ts"
Cohesion: 0.50
Nodes (4): config, isProtectedPath(), middleware(), PROTECTED_PREFIXES

### Community 71 - "meta-credentials/route.ts"
Cohesion: 0.08
Nodes (41): CredentialRow, dynamic, GET(), GoogleTokenResponse, refreshAccessToken(), tokenNeedsRefresh(), CredentialRow, dynamic (+33 more)

### Community 72 - "smoke_classification_openai.js"
Cohesion: 0.50
Nodes (4): fs, loadEnvLocal(), main(), path

### Community 73 - "CreateWithAiPath.tsx"
Cohesion: 0.24
Nodes (15): CaptionSection(), CreateWithAiPath(), CreateWithAiPathProps, CurrentGen, getGeneration(), listConnectedPlatforms(), signStoragePath(), editImage() (+7 more)

### Community 74 - "extends"
Cohesion: 0.50
Nodes (3): extends, next/core-web-vitals, next/typescript

### Community 82 - "BrandAssetPicker.tsx"
Cohesion: 0.39
Nodes (7): BrandAssetPicker(), BrandAssetPickerProps, BRAND_ASSETS_BUCKET, deleteBrandAsset(), listBrandAssets(), uploadBrandAsset(), BrandAsset

### Community 87 - "Gmail integration test results"
Cohesion: 0.10
Nodes (19): 10. How to re-run (manual), 1. Preflight, 2. TC1 — New lead (webhook / Gmail-shaped payload), 3. TC2 — Real Gmail / IMAP, 4. TC3 — Existing lead append, 5. TC4 — Noise drop (short pleasantry), 6. TC5 — Edge payload (HTML-only + bare `from` email), 7. Post–Gmail Warning Fix verification (2026-05-16) (+11 more)

### Community 88 - "channel-sender.ts"
Cohesion: 0.09
Nodes (31): RFC-822, AutopilotInput, autopilotSend(), BusinessProfileRow, ConversationRow, deriveSubject(), DraftRow, err() (+23 more)

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

### Community 96 - "employees/route.ts"
Cohesion: 0.33
Nodes (8): dynamic, fromService(), GET(), POST(), escapeIlikeTerm(), isEmploymentStatus(), listEmployees(), parseListQuery()

### Community 97 - "gmail-backfill/route.ts"
Cohesion: 0.12
Nodes (18): dynamic, POST(), runtime, boundedString(), dynamic, FinalizeEventInput, INBOUND_PLATFORMS, runtime (+10 more)

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

### Community 105 - "audit.ts"
Cohesion: 0.36
Nodes (7): AuditEventInput, AuditTenantContext, AuditWriteResult, boundId(), boundLabel(), boundMetadata(), writeAuditEvent()

### Community 106 - "app/layout.tsx"
Cohesion: 0.20
Nodes (8): geistMono, geistSans, inter, metadata, sourceSans3, viewport, QueryProvider(), ThemeProvider()

### Community 107 - "Section.tsx"
Cohesion: 0.19
Nodes (10): Section(), SectionProps, initialsOf(), TestimonialSection(), TrustSection(), TESTIMONIAL_SECTION, TRUST, TODO: replace with real, permissioned quotes before launch. (+2 more)

### Community 108 - "AppShell.tsx"
Cohesion: 0.24
Nodes (10): ScrollProgressRail(), AppShell(), isAuthShellRoute(), isLightShellRoute(), isMarketingShellRoute(), LIGHT_SHELL_PREFIXES, SiteFooter(), marketingLinks (+2 more)

### Community 109 - "AuthGuard.tsx"
Cohesion: 0.33
Nodes (5): AuthGuard(), AuthGuardContext, AuthGuardContextValue, isPublicAuthPath(), PUBLIC_AUTH_PATHS

### Community 110 - "Build checklist"
Cohesion: 0.33
Nodes (6): Build checklist, Human (not agent), Wave 0 — already complete, Wave 1 — build in this order, Wave 1 complete, Wave 2 — do not start until W1 is ticked

### Community 111 - "PricingSection.tsx"
Cohesion: 0.24
Nodes (12): Hero(), PipelineFlow(), AnimatedHeadingProps, Eyebrow(), RevealProps, HERO, DURATION, EASE (+4 more)

### Community 112 - "ProtocolStepper.tsx"
Cohesion: 0.12
Nodes (6): ProtocolStepper(), DiagramProps, STEP_DIAGRAMS, ACCENT_VAR, NexusAccent, PROTOCOL

### Community 113 - "leads/route.ts"
Cohesion: 0.16
Nodes (16): boundedString(), CONVERSATION_SOURCES, dynamic, pickAllowed(), POST(), POST_STATUSES, boundedString(), dynamic (+8 more)

### Community 114 - "signup/page.tsx"
Cohesion: 0.22
Nodes (12): hasSignupProgress(), SignupPage(), STEP_FROM_PARAM, STEP_LABELS, stepFromParam(), ProgressBar(), ProgressBarProps, saveSignupSnapshot() (+4 more)

### Community 116 - "2. Verdict on the incoming 12-phase plan"
Cohesion: 0.50
Nodes (4): 2. Verdict on the incoming 12-phase plan, Accept (non-negotiable), One important change to Claude’s “don’t build HR yet”, Reject or defer (do not implement in this program)

### Community 117 - "people_schema.test.ts"
Cohesion: 0.25
Nodes (5): migrationFiles, migrationsDir, peopleFile, sql, tables

### Community 118 - "StepGmail.tsx"
Cohesion: 0.22
Nodes (10): authPrimaryButton, authSecondaryButton, planLabel(), StepDone(), StepDoneProps, GMAIL_ERROR_MESSAGES, StepGmail(), StepGmailProps (+2 more)

### Community 119 - "chat/route.ts"
Cohesion: 0.23
Nodes (13): dynamic, generateSessionTitle(), MessageRow, POST(), sessionTitle(), summarizeSession(), dynamic, POST() (+5 more)

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
Cohesion: 0.19
Nodes (11): FormInput(), FormInputProps, FormSelect(), COMPANY_SIZES, LaunchWorkspaceResponse, parseWorkspaceId(), StepWorkspace(), StepWorkspaceProps (+3 more)

### Community 125 - "signup/types.ts"
Cohesion: 0.19
Nodes (13): LandingBillingToggle(), BillingToggle(), BillingToggleProps, PricingCard(), PricingCardProps, StepPlanProps, BillingCycle, defaultSignupSnapshot() (+5 more)

### Community 126 - "daily_report_route.test.ts"
Cohesion: 0.29
Nodes (6): assert(), fakeClient, main(), moduleWithLoad, Row, store

### Community 127 - "e2e_live_hop.ts"
Cohesion: 0.32
Nodes (6): assert(), ids, insert(), main(), supabase, WEBHOOK_BASE

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

### Community 138 - "app/page.tsx"
Cohesion: 0.16
Nodes (8): ChannelMarquee(), FaqSection(), IntegrationsSection(), PricingSection(), DIGITS, Odometer(), StakesSection(), STAKES

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

### Community 144 - "AppTopBar.tsx"
Cohesion: 0.25
Nodes (8): AppChromeSearchContext, AppChromeSearchContextValue, AppChromeSearchProvider(), useAppChromeSearch(), AppTopBar(), LANGUAGE_OPTIONS, profileInitial(), showsChromeSearch()

### Community 145 - "approval/route.ts"
Cohesion: 0.16
Nodes (15): ApprovalBody, approvalWebhookUrl(), dynamic, PATCH(), dynamic, markPublishFailed(), maxDuration, POST() (+7 more)

### Community 146 - "store.ts"
Cohesion: 0.27
Nodes (13): embedBatch(), embedText(), mockVector(), resolveModel(), chunkText(), deleteSummaryForSource(), EmbeddingKind, KIND_WEIGHTS (+5 more)

### Community 147 - "mailbox_sync.test.ts"
Cohesion: 0.36
Nodes (7): CredRow, fakeSupabase(), GOOD_CRED, messageFixture(), moduleWithLoad, ok(), run()

### Community 149 - "social_post_route.test.ts"
Cohesion: 0.40
Nodes (5): assert(), fakeClient, main(), moduleWithLoad, postRow

### Community 150 - "createSupabaseBrowserClient"
Cohesion: 0.17
Nodes (12): dynamic, Composer(), ComposerProps, Step, PostsWorkspace(), View, UploadMediaPath(), useOrganization() (+4 more)

### Community 152 - "AuthSplitLayout.tsx"
Cohesion: 0.18
Nodes (10): AuthAmbientField(), AuthBrandPanel(), AuthMode, AuthModeToggle(), AuthSplitLayout(), AuthSplitLayoutProps, AuthBrandCopy, LOGIN_BRAND (+2 more)

### Community 153 - "n8n_job_tokens.test.ts"
Cohesion: 0.22
Nodes (4): fakeClient, moduleWithLoad, rows, TokenRow

### Community 154 - "SessionGate.tsx"
Cohesion: 0.47
Nodes (3): SessionGate(), SessionRouter, waitForServerSession()

### Community 174 - "draft.ts"
Cohesion: 0.09
Nodes (25): buildUserPayload(), ClassificationResult, classifyMessage(), ClassifyMessageParams, ClassifyMessageResponse, MOCK_CLASSIFICATION, parseClassification(), buildUserPayload() (+17 more)

### Community 175 - "n8n workflow exports"
Cohesion: 0.40
Nodes (4): n8n auth hardening (2026-07-17), n8n workflow exports, Notes, Social posting: publish + schedule contract (2026-07-15)

### Community 179 - "tenant_routing_e2e.test.ts"
Cohesion: 0.80
Nodes (4): assert(), liveGmailSmoke(), run(), runScript()

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

### Community 213 - "clean_n8n_export.js"
Cohesion: 0.33
Nodes (4): exportDoc, fs, payload, [rawPath, outPath, liveIdArg]

### Community 216 - "gmail-sync/handler.ts"
Cohesion: 0.12
Nodes (21): defaultGmailSyncDeps, GmailSyncDeps, runGmailSync(), SyncCredentialRow, WorkspaceSyncOutcome, dynamic, POST(), runtime (+13 more)

### Community 219 - "api-security.ts"
Cohesion: 0.12
Nodes (23): dynamic, OutboundJobRow, POST(), ApiAuthResult, ApiOrgContextResult, ApiTenantContextResult, bearerToken(), clientKey() (+15 more)

### Community 225 - "approval_route.test.ts"
Cohesion: 0.18
Nodes (5): conversationsTable, draftsTable, moduleWithLoad, outboundJobsTable, Row

### Community 226 - "Launch activation runbook"
Cohesion: 0.20
Nodes (9): 1. Pre-secret gate (no production credentials), 2. Supabase migrations, 3. App host environment variables, 4. n8n variables and credential cleanup, 5. OpenAI activation, 6. Google Gmail (live send), 7. Meta (after App Review), Launch activation runbook (+1 more)

### Community 227 - "route_reference.test.mjs"
Cohesion: 0.20
Nodes (7): apiRoutes, __dirname, middlewareSrc, root, settingsSrc, uiPages, watchedDirs

### Community 228 - "chat/page.tsx"
Cohesion: 0.17
Nodes (15): ChatMessage, ChatPage(), ChatRole, decodeSourcesHeader(), KnowledgeSource, SOURCE_KIND_LABEL, SUGGESTIONS, useAiStatus() (+7 more)

### Community 232 - "workflow_logs_route.test.ts"
Cohesion: 0.22
Nodes (3): moduleWithLoad, Row, store

### Community 233 - "prepare_n8n_deploy_payload.mjs"
Cohesion: 0.22
Nodes (7): __dirname, exportsDir, LIVE_IDS, payload, raw, root, SUPABASE_CRED

### Community 235 - "internal_leads.test.ts"
Cohesion: 0.25
Nodes (3): moduleWithLoad, Row, store

### Community 238 - "draft/route.ts"
Cohesion: 0.23
Nodes (11): boundedString(), dynamic, POST(), runtime, boundedString(), dynamic, normalizeClassification(), POST() (+3 more)

### Community 245 - "ai.ts"
Cohesion: 0.13
Nodes (23): dynamic, maxDuration, POST(), dynamic, maxDuration, dynamic, maxDuration, dynamic (+15 more)

## Knowledge Gaps
- **1122 isolated node(s):** `next/core-web-vitals`, `next/typescript`, `dynamic`, `UsageRow`, `dynamic` (+1117 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **35 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `cn` to `content.ts`, `app/page.tsx`, `plans.ts`, `approval/page.tsx`, `AppTopBar.tsx`, `EmployeesList.tsx`, `AuthSplitLayout.tsx`, `utils.ts`, `inbox/page.tsx`, `login/page.tsx`, `report/page.tsx`, `posts/types.ts`, `customers/page.tsx`, `ChartBlock.tsx`, `InviteManager.tsx`, `data.ts`, `SettingsView.tsx`, `appearance-prefs.ts`, `CaptionSection.tsx`, `CreateWithAiPath.tsx`, `BrandAssetPicker.tsx`, `chat/page.tsx`, `Section.tsx`, `AppShell.tsx`, `PricingSection.tsx`, `signup/page.tsx`, `StepGmail.tsx`, `StepWorkspace.tsx`, `signup/types.ts`?**
  _High betweenness centrality (0.080) - this node is a cross-community bridge._
- **Why does `rateLimit()` connect `rateLimit` to `callback/handler.ts`, `api/conversations/route.ts`, `social/helpers.ts`, `webhook/route.ts`, `approval/route.ts`, `settings/route.ts`, `inbound-events.ts`, `test-imap/route.ts`, `sync.ts`, `meta/callback/route.ts`, `login/page.tsx`, `local-dev-signup/route.ts`, `readJsonObjectWithLimit`, `provider.ts`, `employees/[id]/route.ts`, `gmail-sync/handler.ts`, `api-security.ts`, `employees/route.ts`, `gmail-backfill/route.ts`, `leads/route.ts`, `ai.ts`, `chat/route.ts`, `timeseries.ts`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **Why does `createServerClient()` connect `readJsonObjectWithLimit` to `gmail-backfill/route.ts`, `callback/handler.ts`, `meta-credentials/route.ts`, `sync.ts`, `seed_demo_inbox.ts`, `channel-sender.ts`, `webhook/route.ts`, `wf2_tenant_contract.test.ts`, `draft/route.ts`, `approval/route.ts`, `leads/route.ts`, `inbound-events.ts`, `gmail-sync/handler.ts`, `api-security.ts`, `meta/callback/route.ts`, `e2e_live_hop.ts`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `createServerClient()` (e.g. with `callback/handler.ts` and `gmail-sync/handler.ts`) actually correct?**
  _`createServerClient()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `next/core-web-vitals`, `next/typescript`, `dynamic` to the rest of the system?**
  _1122 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `content.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.1286549707602339 - nodes in this community are weakly interconnected._
- **Should `scripts` be split into smaller, more focused modules?**
  _Cohesion score 0.031746031746031744 - nodes in this community are weakly interconnected._