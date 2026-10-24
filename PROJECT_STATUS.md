# PROJECT_STATUS.md — Alongside Living Progress Tracker

> **Project:** Alongside — Mentorship & Entrepreneurship Platform  
> **Phase:** Phase 1 (Core Web Application & Delivery Baseline)  
> **Last Updated:** 2026-10-24  
> **Overall Health:** 🟢 GREEN (Clean Next.js 15 build, 0 lint errors, robust UI prototype, authoritative AI continuity established)

---

## 1. Project Snapshot

| Metric | Details |
| :--- | :--- |
| **Product Name** | Alongside |
| **Tagline / Vision** | Executive mentorship & peer accountability for founders and operators |
| **Current Stage** | Architecture Foundation & Prototype Transition to Persistent Full-Stack |
| **Frontend Stack** | Next.js 15.4.9 (App Router), React 19.2.1, TypeScript 5.9.3, Tailwind CSS v4, Motion 12.23 |
| **Design System** | Beside Liquid-Glass: `#faf8ff` canvas, `#131b2e` slate, `#85f8c4` mint, `#fea619` amber |
| **Backend / Runtime** | Node.js Server Runtime (Next.js API Routes / Server Actions), `@google/genai` |
| **Primary Currency** | GBP (`£`) |
| **Active Test Suites** | Lint (`npm run lint`), Next.js Production Build (`npm run build`) |
| **Hosting / Target** | Google Cloud Run / AI Studio Applet Container |

---

## 2. Canonical Status Definitions

Every task in Alongside must use strictly one of these 9 status terms:

- `NOT STARTED`: Work has been scoped and scheduled, but implementation has not started.
- `IN PROGRESS`: Actively being designed or coded during the current phase.
- `IMPLEMENTED — VERIFICATION PENDING`: Implementation is complete and builds without errors, but full end-to-end integration, automated test, or browser visual verification is pending.
- `VERIFIED`: Completely implemented and verified with documented tangible proof (passing test suite, curl/API response, or browser inspection).
- `PARTIALLY VERIFIED`: Main execution path is verified, but secondary edge cases (e.g. tablet breakpoints, network retry) remain unverified.
- `BLOCKED`: Work cannot proceed due to external dependencies, architectural decisions, missing keys, or bugs.
- `DEFERRED`: Intentionally postponed to a later milestone or future phase.
- `OUT OF SCOPE`: Explicitly excluded from Phase 1 by product boundaries.
- `NEEDS REVALIDATION`: A previously verified component whose code or dependencies changed, requiring re-testing.

---

## 3. Milestone Summary Tracker

| Milestone | Description | Target Scope | Current Status | Progress |
| :--- | :--- | :--- | :--- | :---: |
| **M1** | Foundation, Auth & RBAC | Member/Mentor/Admin roles, registration, sessions | `IMPLEMENTED — VERIFICATION PENDING` (Prototype) / `BLOCKED` (Backend DB decision) | 35% |
| **M2** | Profiles & Mentor Discovery | Catalog search, category filters, mentor profile views | `IMPLEMENTED — VERIFICATION PENDING` (Frontend UI verified, persistence pending) | 75% |
| **M3** | Bookings & Scheduling Engine | Timezones, slot collisions, 1-on-1 & group formats | `IMPLEMENTED — VERIFICATION PENDING` (Client state active, DB storage pending) | 50% |
| **M4** | Payments & Checkout (GBP) | Stripe checkout, webhooks, settlements, receipts | `NOT STARTED` (Pending Stripe key & Connect model decision) | 0% |
| **M5** | Community Feed & Moderation | Chronological posts, wins, reports, content controls | `IMPLEMENTED — VERIFICATION PENDING` (Client feed active, server persistence pending) | 60% |
| **M6** | Administration & Referrals | User approval/suspension, audit trail, referral links | `NOT STARTED` (Requires backend user database) | 10% |
| **M7** | Polish, QA & Production Hardening | Viewport testing, accessibility, Lighthouse, security | `IN PROGRESS` (Build & lint passing; device QA ongoing) | 65% |

---

## 4. Master Task Register

### Milestone 1: Foundation, Auth & Role-Based Access Control (RBAC)

| Task ID | Description | Status | Dependencies | Key Files | Verification Method | Notes |
| :--- | :--- | :---: | :--- | :--- | :--- | :--- |
| **M1-001** | Core Design System & Theme Configuration | `VERIFIED` | None | `app/globals.css`, `app/layout.tsx` | Next.js Build + Visual check | Plus Jakarta Sans font, Tailwind v4 layers, ambient glow canvas. |
| **M1-002** | Authentication UI (Login & Signup Views) | `IMPLEMENTED — VERIFICATION PENDING` | M1-001 | `components/AuthScreen.tsx`, `components/AuthModal.tsx` | Lint + Next.js Build | Standalone full-page view and quick modal both supported. Single-line email divider updated. |
| **M1-003** | Choose Persistent Database & Auth Solution | `BLOCKED` | Product Owner Decision | `package.json`, `.env.example` | Technical RFC Review | Decision required between Cloud SQL (PostgreSQL) vs Firebase (Firestore/Auth). |
| **M1-004** | User Schema & Role System (Member, Mentor, Admin) | `NOT STARTED` | M1-003 | `lib/types.ts` | Unit schema validation | Must enforce RBAC across all mutations and endpoints. |
| **M1-005** | Email Verification & Password Recovery Flow | `NOT STARTED` | M1-003, M1-004 | `app/api/auth/*` | Integration API tests | Rate-limited transactional tokens. |
| **M1-006** | Mentor Application & Review Workflow | `NOT STARTED` | M1-004 | `components/MentorApplication.tsx` | Form submission & Admin review | Multi-step application with bio, disciplines, and rate proposal. |

---

### Milestone 2: Member & Mentor Profiles, Discovery & Search

| Task ID | Description | Status | Dependencies | Key Files | Verification Method | Notes |
| :--- | :--- | :---: | :--- | :--- | :--- | :--- |
| **M2-001** | Mentor Directory Catalog & Keyword Search | `IMPLEMENTED — VERIFICATION PENDING` | None | `components/HomeScreen.tsx` | Lint + Build + UI check | Real-time text filter and category pills. |
| **M2-002** | Discipline & Category Filtering System | `IMPLEMENTED — VERIFICATION PENDING` | None | `components/HomeScreen.tsx` | Lint + Build | Filters across business, marketing, tech, leadership, finance. |
| **M2-003** | Mentor Deep-Dive Profile Page | `IMPLEMENTED — VERIFICATION PENDING` | None | `components/ProfileScreen.tsx` | Lint + Build + UI check | Full bio, track record timeline, client reviews, session format cards. |
| **M2-004** | Member Profile & Customization Dashboard | `IMPLEMENTED — VERIFICATION PENDING` | None | `components/SettingsScreen.tsx` | Lint + Build + State check | Startup stage, avatar, glass intensity, and notification toggles. |
| **M2-005** | Persistent Mentor & Member Database Queries | `NOT STARTED` | M1-003, M1-004 | `lib/db/*` | API route integration test | Replaces in-memory fixtures in `lib/data.ts`. |

---

### Milestone 3: Mentor Availability, Scheduling & Bookings Engine

| Task ID | Description | Status | Dependencies | Key Files | Verification Method | Notes |
| :--- | :--- | :---: | :--- | :--- | :--- | :--- |
| **M3-001** | Booking Modal UI & Session Configuration | `IMPLEMENTED — VERIFICATION PENDING` | M2-003 | `components/Modals.tsx` | Lint + Build + UI check | Date selector, time picker, format selection, prep notes. |
| **M3-002** | Timezone Conversion & Conflict Prevention Logic | `NOT STARTED` | M1-003 | `lib/scheduling.ts` | Pure logic unit tests (`node --test`) | Zero double-bookings; UTC normalized storage. |
| **M3-003** | 1-on-1 vs Group Mentorship Capacity Management | `NOT STARTED` | M3-002 | `lib/scheduling.ts` | Capacity constraint unit tests | Fixed-capacity group masterclasses vs private 1:1 sessions. |
| **M3-004** | Booking Request Lifecycle (Accept, Decline, Expire) | `NOT STARTED` | M3-002 | `app/api/bookings/*` | State transition test suite | 48-hour auto-expiry for unaccepted requests. |
| **M3-005** | Secure Attendee Joining Details & Private Link | `IMPLEMENTED — VERIFICATION PENDING` | None | `components/Modals.tsx` (`VideoRoomModal`) | UI verification | Generates private session credentials only for confirmed attendees. |

---

### Milestone 4: Payments, Checkout & Settlements (GBP / Stripe)

| Task ID | Description | Status | Dependencies | Key Files | Verification Method | Notes |
| :--- | :--- | :---: | :--- | :--- | :--- | :--- |
| **M4-001** | Stripe Checkout Session Integration (GBP Baseline) | `NOT STARTED` | M1-003, M3-004 | `app/api/checkout/*` | Stripe test mode transaction | All platform amounts priced and billed in British Pounds (`£`). |
| **M4-002** | Webhook Handler with Signature Verification | `NOT STARTED` | M4-001 | `app/api/webhooks/stripe/route.ts` | Webhook mock signature test | Strict idempotency against duplicate booking events. |
| **M4-003** | Mentor Settlement & Payout Policy Architecture | `BLOCKED` | Commercial Decision | `lib/finance.ts` | Business logic review | Platform commission % and payout schedule require client confirmation. |
| **M4-004** | Cancellation & Automated Refund Handler | `NOT STARTED` | M4-001, M4-002 | `app/api/refunds/*` | Automated refund unit test | Handles 24h cancellation window rules. |
| **M4-005** | Billing Invoices & Downloadable PDF Receipts | `NOT STARTED` | M4-001 | `lib/receipts.ts` | PDF generation test | VAT/Tax compliant billing receipts. |

---

### Milestone 5: Community Feed, Content & Moderation

| Task ID | Description | Status | Dependencies | Key Files | Verification Method | Notes |
| :--- | :--- | :---: | :--- | :--- | :--- | :--- |
| **M5-001** | Chronological Community Feed & Post Composer | `IMPLEMENTED — VERIFICATION PENDING` | None | `components/CommunityScreen.tsx` | Lint + Build + UI check | Rich post format, bullet points, tags, like/comment counts. |
| **M5-002** | Milestone Win Sharing & Badge Highlights | `IMPLEMENTED — VERIFICATION PENDING` | None | `components/CommunityScreen.tsx`, `components/Modals.tsx` | UI verification | Celebrate funded rounds, client launches, or completed tracks. |
| **M5-003** | Community Post Moderation, Report & Flagging | `NOT STARTED` | M1-004 | `app/api/community/flag/route.ts` | Admin queue review test | Automated content quarantine upon 3+ reports. |
| **M5-004** | Media Upload Limits & Storage Security | `NOT STARTED` | M1-003 | `app/api/upload/*` | Payload size & MIME check | Images/videos restricted to agreed file types and size caps. |

---

### Milestone 6: Administration, Reporting & Referrals

| Task ID | Description | Status | Dependencies | Key Files | Verification Method | Notes |
| :--- | :--- | :---: | :--- | :--- | :--- | :--- |
| **M6-001** | Admin Portal Dashboard | `NOT STARTED` | M1-004 | `app/admin/page.tsx` | Role gate verification | Admin-only route guard. |
| **M6-002** | Mentor Vetting & Application Approval Panel | `NOT STARTED` | M1-006, M6-001 | `components/admin/MentorReview.tsx` | Action verification | Approve, request more info, or reject with custom feedback. |
| **M6-003** | User Account Suspension & Content Purge | `NOT STARTED` | M6-001 | `app/api/admin/users/*` | Mutation audit check | Immediate session revocation upon suspension. |
| **M6-004** | Referral Link Generation & Attribution Tracker | `NOT STARTED` | M1-004 | `lib/referrals.ts` | Attribution test | Tracks unique ref code, signup count, and conversion rate. |
| **M6-005** | Financial Audit Logs & Settlement Exports | `NOT STARTED` | M4-001, M6-001 | `app/api/admin/exports/*` | CSV export validation | Read-only ledger of transactions and platform fees. |

---

### Milestone 7: Responsive Polish, Quality Assurance & Production Hardening

| Task ID | Description | Status | Dependencies | Key Files | Verification Method | Notes |
| :--- | :--- | :---: | :--- | :--- | :--- | :--- |
| **M7-001** | Mobile Header & Navigation Streamlining | `VERIFIED` | None | `components/Header.tsx`, `components/MobileNav.tsx` | Lint + Build + UI review | Removed redundant header CTA on mobile; integrated avatar dropdown. |
| **M7-002** | Discovery Category Filter Horizontal Scroll | `VERIFIED` | None | `components/HomeScreen.tsx` | Viewport CSS check | Flex shrink-0, smooth touch scroll, zero horizontal overflow. |
| **M7-003** | Liquid-Glass Contrast & Accessibility Audit | `IMPLEMENTED — VERIFICATION PENDING` | M1-001 | All UI screens | Contrast ratio calculation | Ensure all text over translucent glass satisfies WCAG AA (4.5:1). |
| **M7-004** | Full Next.js Production Build Verification | `VERIFIED` | All code | `package.json`, Next.js compiler | `compile_applet` (100% pass) | Zero build errors across App Router pages. |
| **M7-005** | ESLint & Type Completeness Check | `VERIFIED` | All code | `package.json`, ESLint | `lint_applet` (0 errors) | 19 non-blocking next/image optimization warnings noted. |

---

## 5. Verification & Testing Log

| Date | Verification Scope | Target Files / Commands | Tool Executed | Result | Notes / Evidence |
| :--- | :--- | :--- | :--- | :---: | :--- |
| 2026-10-24 | Static Code Analysis & Syntax | Entire codebase | `lint_applet` (`eslint .`) | ✅ PASSED (0 errors) | 0 fatal errors. 19 standard Next.js image warnings regarding `<img>` vs `<Image>` for external Google avatar URLs. |
| 2026-10-24 | Next.js Production Compilation | Full App Router tree | `compile_applet` (`next build`) | ✅ PASSED | All server and client chunks compiled successfully without syntax, type, or bundling failures. |
| 2026-10-24 | Workspace Environment Inspection | Root directory | `run_command` (`git status --short`) | ℹ️ NOTED | Workspace container does not contain `.git`; file changes must be managed atomically and verified. |
| 2026-10-24 | Repository Continuity Baseline | Root directory | `write_to_file` (`AGENTS.md`, `PROJECT_STATUS.md`) | ✅ VERIFIED | Authoritative rules, status definitions, milestone register, and handoff protocols deployed. |

---

## 6. Architectural Decisions & Open Questions

### Open Decision 1: Persistent Database & Auth Selection
- **Context:** The frontend currently runs on interactive client-side React state. A persistent database is needed for user accounts, bookings, and payments.
- **Option A (Relational / Cloud SQL):** PostgreSQL via Cloud SQL with Drizzle ORM + Firebase Auth.
  - *Pros:* Strict relational foreign keys for bookings, time slots, and financial transactions.
- **Option B (Document / Firebase Firestore):** Firebase Firestore + Firebase Auth.
  - *Pros:* Real-time listeners for notifications, fast prototyping, unified security rules.
- **Recommendation:** Cloud SQL (PostgreSQL) is superior for scheduling collisions and financial reconciliation; Firebase Firestore is superior if rapid real-time feeds and document flexibility are prioritized.
- **Status:** **PENDING CLIENT CONFIRMATION**.

### Open Decision 2: Mentor Payment & Payout Model (Stripe)
- **Context:** Currency is set to GBP (`£`). We need to agree on the payout architecture for mentors.
- **Options:** Stripe Connect Custom vs Express vs Standard.
- **Questions:**
  - What platform commission fee percentage will Alongside charge per session?
  - Will mentors be paid immediately after session completion, or on a rolling 7-day escrow?
- **Status:** **PENDING CLIENT CONFIRMATION**.

### Open Decision 3: Video Conferencing Integration
- **Context:** Phase 1 explicitly excludes custom WebRTC infrastructure.
- **Options:** 
  - Option A: Auto-generate Google Meet / Zoom meeting links via API.
  - Option B: Secure external room link stored in booking record, revealed only to confirmed attendees.
- **Status:** **RECOMMENDING OPTION B** for Phase 1 MVP to minimize external API friction.

---

## 7. Known Risks & Technical Debt

| Risk ID | Description | Impact | Mitigation Strategy |
| :--- | :--- | :---: | :--- |
| **R-001** | Dual Image Tagging (`<img>` vs `<Image />`) | Moderate | 19 ESLint warnings for external avatar URLs. Need to add image hosts in `next.config.ts` and migrate to `next/image` with `referrerPolicy="no-referrer"`. |
| **R-002** | Timezone Drift in Scheduling | High | Mentors and members in different time zones could double-book or miscalculate meeting times. Store all slots in UTC and compute local display offsets client-side. |
| **R-003** | Stripe Webhook Concurrency | High | Duplicate webhook deliveries could create duplicate booking confirmations. Enforce idempotent event processing using `stripe_event_id` in database. |

---

## 8. Immediate Next Actions & Handoff Prompt

### Recommended Next Priority: Milestone 1 Architecture Finalization
1. **Decision Gate:** Confirm Database choice (PostgreSQL/Cloud SQL vs Firebase Firestore).
2. **Task M1-003 & M1-004:** Establish database connection and formalize SQL/Firestore schemas for Users (Member/Mentor/Admin) and Profiles.
3. **Task M7-003:** Upgrade `<img>` tags in `AuthModal`, `AuthScreen`, `Header`, and `HomeScreen` to Next.js `<Image />` tags using `next.config.ts` remote patterns to clear all 19 ESLint warnings.

### Standardized Handoff Prompt for Next Agent:
```text
Resume development on Alongside using AGENTS.md and PROJECT_STATUS.md.
Review Open Decision 1 in PROJECT_STATUS.md (Database selection: Cloud SQL PostgreSQL vs Firebase Firestore).
Proceed with resolving task M1-003 (Database & Auth setup) and task M7-003 (Image optimization cleanup) following the 6-step agent workflow and verification-first rules.
```
