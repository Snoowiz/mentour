# AGENTS.md — Authoritative Engineering & Agent Instructions

> **Project:** Alongside — Mentorship & Entrepreneurship Platform  
> **Repository Baseline:** Next.js 15+ (App Router), React 19, TypeScript, Tailwind CSS v4, Motion, Lucide React  
> **Status:** Phase 1 Master Architecture & Continuity Setup  
> **Target Audience:** Any AI coding agent, technical lead, software engineer, or QA specialist working on this repository.

---

## 1. Project Overview & Mission

**Alongside** is an executive mentorship and entrepreneurship platform that connects aspiring founders, operators, and early-stage entrepreneurs with vetted, high-caliber mentors and peers. The platform facilitates milestone-driven growth through 1-on-1 strategic sessions, group mentorship tracks, a curated community knowledge feed, and structured accountability.

### Core User Roles
1. **Member (Mentee):** Browses mentor directory, books 1-on-1 or group sessions, pays in GBP, joins video rooms via secure attendee details, shares milestone wins, and participates in the community feed.
2. **Mentor:** Sets availability schedules, accepts/declines mentorship requests, defines custom session formats (rates, durations, expectations), conducts calls, and tracks client progress. Mentor accounts require administrative review and approval.
3. **Platform Administrator:** Manages member/mentor account statuses (approval, rejection, suspension), oversees booking lifecycles, reviews content flags, audits referral attributions, and handles financial reconciliations.

---

## 2. Technical Stack & Repository Architecture

### 2.1 Current Stack
- **Framework:** Next.js 15.4.9 (App Router)
- **UI Library:** React 19.2.1
- **Language:** TypeScript 5.9.3 (Strict mode)
- **Styling:** Tailwind CSS 4.1.11 via `@tailwindcss/postcss`, `tw-animate-css`
- **Component Utilities:** `clsx`, `tailwind-merge`, `class-variance-authority`
- **Icons:** `lucide-react` (exclusive icon system; no custom inline SVG duplicates)
- **Animation:** `motion` (`motion/react` v12.23.24)
- **AI Integration (Server-Side):** `@google/genai` (Node.js runtime only via `process.env.GEMINI_API_KEY`)
- **Package Manager / Runtime:** npm / Node.js 20+

### 2.2 Directory Layout
```
/
├── app/
│   ├── globals.css          # Tailwind v4 import & CSS layer defaults
│   ├── layout.tsx           # Root layout, Plus Jakarta Sans font, SEO metadata
│   └── page.tsx             # Interactive root router managing high-fidelity screen views
├── components/
│   ├── AuthModal.tsx        # Sign-in / registration modal dialog
│   ├── AuthScreen.tsx       # Dedicated standalone login & signup page view
│   ├── CommunityScreen.tsx  # Chronological feed, discussion tabs, post composer, win badges
│   ├── Footer.tsx           # Global footer with platform links & newsletter opt-in
│   ├── Header.tsx           # Sticky glass navigation, mobile menu, search, user avatar dropdown
│   ├── HomeScreen.tsx       # Discovery hero, category filters, mentor catalog grid, track spotlights
│   ├── MobileNav.tsx        # Bottom mobile navigation bar
│   ├── Modals.tsx           # BookingModal, VideoRoomModal, MessageModal, MilestoneModal, JoinModal
│   ├── ProfileScreen.tsx    # Mentor deep-dive (experience timeline, reviews, session formats, booking trigger)
│   └── SettingsScreen.tsx   # User profile customization, calendar toggles, notification preferences
├── hooks/
│   └── use-mobile.ts        # Responsive breakpoint detection hook
├── lib/
│   ├── data.ts              # Data contracts, interfaces (Mentor, CommunityPost, UserCustomization), mock datasets
│   └── utils.ts             # Tailwind class merger (cn helper)
├── AGENTS.md                # THIS FILE: Authoritative AI instructions and development rules
├── PROJECT_STATUS.md        # Living progress tracker, milestone register, and verification log
├── metadata.json            # AI Studio applet metadata & server capabilities
├── next.config.ts           # Next.js configuration (remote image host rules)
├── package.json             # Scripts & production/dev dependencies
└── tsconfig.json            # Strict TypeScript configuration
```

---

## 3. The Single Source of Truth & Project Continuity

To ensure seamless handoff between different AI coding sessions and different AI models:

1. **`PROJECT_STATUS.md` is the living ground truth:** Every AI agent starting work MUST first inspect `PROJECT_STATUS.md` to identify what is completed, what is in progress, and what is currently blocked.
2. **Never rely on conversational memory alone:** Chat sessions are transient or subject to compaction. The filesystem state and `PROJECT_STATUS.md` represent the real state of the project.
3. **Mandatory Update Rule:** Every agent completing or modifying a task **MUST** update `PROJECT_STATUS.md` before concluding its turn.
4. **Strict Vocabulary:** When referencing status, agents must exclusively use the 9 canonical status terms defined below.

### Standard Status Definitions
- `NOT STARTED`: Task is defined in the milestone plan but no implementation work has begun.
- `IN PROGRESS`: Active implementation is underway.
- `IMPLEMENTED — VERIFICATION PENDING`: Code is written and basic compilation passes, but formal integration, automated tests, or visual validation has not yet been executed.
- `VERIFIED`: The feature is fully implemented and tested with concrete proof (passing unit/integration test, verified API response, or browser UI check).
- `PARTIALLY VERIFIED`: Core path is tested and verified, but certain edge cases, error states, or responsive viewports remain unverified.
- `BLOCKED`: Work cannot proceed due to an external dependency, missing API key, unconfirmed client decision, or technical defect.
- `DEFERRED`: Intentionally postponed to a later milestone or phase.
- `OUT OF SCOPE`: Explicitly excluded from Phase 1 by project governance.
- `NEEDS REVALIDATION`: A previously verified feature whose dependent code or schema was modified, requiring fresh verification.

---

## 4. Development Workflow & Operational Protocol

Every AI agent working on Alongside must follow this 6-step lifecycle:

```
[1. Read & Inspect] ──> [2. Scope Check] ──> [3. Implement] ──> [4. Verify Strictly] ──> [5. Update Tracker] ──> [6. Report]
```

1. **Step 1 — Read & Inspect:** Read `PROJECT_STATUS.md` and check the target files. Never assume a file exists or functions without viewing its actual contents.
2. **Step 2 — Scope Check:** Validate whether the requested work falls within the Phase 1 boundaries. If the request touches an excluded or unresolved area (e.g., automated crypto payouts, native mobile apps), pause and request clarification.
3. **Step 3 — Implement Cleanly:** Write clean, typed, modular code adhering to Next.js 15 App Router standards. Keep client components as leaf nodes.
4. **Step 4 — Verify Strictly:** Execute appropriate verification tools (`lint_applet`, `compile_applet`, automated tests, or browser checks).
5. **Step 5 — Update `PROJECT_STATUS.md`:** Record task progress, updated status, test execution results, date/timestamp, and any new decisions or blockers.
6. **Step 6 — Report Concisely:** Return a structured completion report following the format specified in Section 14.

---

## 5. Verification-First Rule

> **CRITICAL DIRECTIVE:** Generating code does NOT mean a feature is complete.

- **No Self-Proclaimed Verification:** Never mark a task as `VERIFIED` in `PROJECT_STATUS.md` or in conversation unless you have executed concrete verification during your session.
- **Proportional Verification Hierarchy:**
  1. *Type & Syntax Verification:* `lint_applet` / `npm run lint` must exit with 0 errors.
  2. *Compilation Verification:* `compile_applet` / `npm run build` must succeed without warnings or fatal errors.
  3. *Logic & Unit Verification:* Pure business logic (e.g., booking collision detection, fee calculation, discount codes) must have test coverage executed via `node --test` or runner.
  4. *Integration Verification:* Server routes (`/api/*`) must be tested with simulated requests verifying both 200 OK and error paths (400, 401, 403, 409).
  5. *UI / Viewport Verification:* Responsive components must be verified on desktop (1280px), tablet (768px), and mobile (375px) without horizontal overflow or overlapping tap targets.
- If a task cannot be verified in the current turn, mark it honestly as `IMPLEMENTED — VERIFICATION PENDING` and document the exact verification steps required.

---

## 6. Definition of Done (DoD)

A task or feature may only transition to `VERIFIED` when all of the following criteria are satisfied:
1. **Functional Completeness:** All acceptance criteria specified in the task definition are implemented.
2. **TypeScript Strictness:** Strict types applied throughout; zero `any` or loose casts (`as unknown as ...`).
3. **Responsive Execution:** Layout renders cleanly across mobile (375px), tablet (768px), and desktop (1280px+).
4. **Error & Edge Handling:** Loading spinners, empty states, network failure states, and validation errors are handled gracefully in UI.
5. **No Regressions:** Project compiles cleanly (`compile_applet` succeeds) and passes linter with 0 errors.
6. **Documentation Updated:** `PROJECT_STATUS.md` is updated with task status, verification proof, and updated next actions.

---

## 7. Code Quality & Architectural Standards

### 7.1 Next.js 15 App Router & Server/Client Boundaries
- Components are **Server Components by default**. Only mark with `'use client'` when browser APIs, event listeners, or React state hooks (`useState`, `useEffect`, `useReducer`) are required.
- Push client components down the tree to leaf positions. Wrap interactive widgets in server component containers.
- Avoid cascading re-renders in `useEffect`. Keep dependency arrays strictly primitive and stable.

### 7.2 Styling & Aesthetics: The Alongside Liquid-Glass Language
- **Base Colors:** Background `#faf8ff`, Deep Navy Slate `#131b2e`, Mint Accent `#85f8c4`, Forest Green `#00855d`, Gold/Amber `#fea619`.
- **Glassmorphism Discipline:** Use restrained, readable glass styling:
  - `bg-white/70 backdrop-blur-md border border-white/40 shadow-sm`
  - High contrast for typography: always ensure text over translucent backgrounds exceeds WCAG 2.1 AA contrast (minimum 4.5:1).
  - Never allow blur or opacity effects to degrade mobile performance or obscure form labels.
- **Zero-Pill Discipline:** Avoid nested pill badges. Use clean semantic layout hierarchies with subtle borders, generous whitespace (`p-4` to `p-8`), and distinct typographic scale.
- **Icons:** Exclusively import from `lucide-react`. Never use raw inline SVG strings or emoji iconography for system actions.

### 7.3 Data Architecture & Real vs Mock Data
- Current prototype utilizes typed mock structures in `lib/data.ts`.
- When backend database and API persistence are implemented, transition seamlessly by replacing simulated data loaders with real service layers without breaking frontend presentation contracts.
- **Never hardcode secrets** or sensitive mock passwords in test fixtures.

---

## 8. Security & Privacy Principles

1. **Zero Secret Leakage:** Never print, log, commit, or hardcode API keys, service account JSONs, or Stripe secret tokens. All secrets belong strictly in server-side runtime environments (`process.env.*`).
2. **Client-Side Secret Shield:** Never prefix sensitive tokens with `NEXT_PUBLIC_`.
3. **Role-Based Access Control (RBAC):** Every API endpoint and state mutation must enforce the caller's role:
   - `member`: Can only access their own bookings, profile, and community posts.
   - `mentor`: Can access their own mentor profile, manage their availability slots, and view client booking requests.
   - `admin`: Can view all records, approve/reject mentors, manage system moderation, and view billing logs.
4. **Financial Security:**
   - Webhook endpoints (e.g. Stripe) must cryptographically verify signatures before processing events.
   - Ensure idempotency on payment webhooks to prevent duplicate booking confirmations or double-charging.
5. **Input Sanitization:** Validate all incoming API request payloads with strict schemas (`zod` or similar) before writing to persistent storage.

---

## 9. Database Safety & Migration Protocol

When a persistent database (PostgreSQL via Cloud SQL or Firebase Firestore) is active:
1. **Never run destructive DDL/DML in production:** Never run `DROP TABLE`, `TRUNCATE`, or unindexed table scans.
2. **Additive Schema Changes:** Evolve schemas forward by adding nullable columns or creating migration scripts.
3. **Index Discipline:** Ensure all query paths (e.g., `mentor_id`, `status`, `start_time`, `created_at`) have supporting database indexes.
4. **Audit Logging:** Critical business actions (mentor approval, booking cancellation, refund issuance) must generate persistent audit logs with user ID and timestamp.

---

## 10. Third-Party Integrations Policy

### 10.1 Payments (Stripe)
- **Currency Baseline:** British Pounds (`GBP` / `£`).
- **Processing Flow:** Checkout sessions / PaymentIntents with server-side authorization.
- **Settlement & Payouts:** Mentor payouts follow agreed settlement rules; platform commission or fee structures require explicit client confirmation before automated transfers are coded.

### 10.2 Video & Conferencing
- Confirmed attendees receive private joining details (secure unique URL or room identifier).
- Do NOT build high-maintenance native WebRTC mesh networks in Phase 1; utilize verified video room links (Google Meet, Zoom, or managed service rooms) with private token access.

### 10.3 Communications & Emails
- Transactional notifications (booking confirmation, cancellation, reminder) must use an agreed transactional mail service. Email templates must match Alongside brand styling.

---

## 11. Scope Boundaries & Change Approval (Phase 1)

### Strictly IN-SCOPE for Phase 1
- Responsive Web Application (Desktop, Tablet, Mobile)
- Member & Mentor Accounts, Registration & Profiles
- Mentor Application & Admin Review/Approval Workflow
- Search & Filterable Mentor Directory
- 1-on-1 & Group Mentorship Booking Engine (Timezone-aware, collision-free)
- Secure Payment Processing in GBP
- Chronological Community Feed with Post Creation & Moderation
- Admin Portal (User management, booking monitoring, financial reporting)
- Basic Referral Links & Attribution Tracking

### Strictly OUT-OF-SCOPE for Phase 1 (Do Not Implement Without Approval)
- ❌ Native iOS or Android mobile applications
- ❌ Autonomous AI agent matching or unvetted algorithmic matching
- ❌ Jobs boards, angel syndicates, or investment funding portals
- ❌ Stories, ephemeral media, or short-form video reels
- ❌ Direct peer-to-peer unsolicited chat messaging (unrelated to booked sessions)
- ❌ Automated cash referral disbursements
- ❌ Custom cryptocurrency wallets or escrow protocols
- ❌ Unlimited raw video cloud storage

---

## 12. Git & Version Control Safety

1. **Non-Destructive Operations:** Never run `git reset --hard`, `git clean -fd`, or force-push without explicit user request.
2. **Clean Atomic Commits / Edits:** Make purposeful, surgical edits. Do not modify files outside the scope of the immediate task.
3. **Workspace Environment Note:** In sandboxed container environments where `.git` is uninitialized, treat all file modifications with extra care, performing linting and compilation before considering an edit finalized.

---

## 13. Cross-Model Handoff Protocol

When handing off to another agent session or a different LLM (e.g., Anthropic Claude, OpenAI GPT, Google Gemini):
1. **Orientation Sequence:**
   - Step 1: Read `AGENTS.md` (this file) to understand operational rules.
   - Step 2: Read `PROJECT_STATUS.md` to see the current state of all milestones and tasks.
   - Step 3: Inspect files referenced in the current task.
2. **Context Independence:** Never write summaries that depend on prior conversational context. Every entry in `PROJECT_STATUS.md` must be self-contained.
3. **Handoff Prompt:** Always leave the exact prompt for the next engineer in the `Next Actions` section of `PROJECT_STATUS.md`.

---

## 14. Required Agent Response Format

Every AI agent completing a turn on this project must respond using the following structured format:

```markdown
### 1. Task Objective & Scope
[Brief 1-2 sentence description of what was tackled and its milestone assignment]

### 2. Actions Completed
- [Detailed bullet of file created or updated]
- [Detailed bullet of architectural decision made]

### 3. Verification & Evidence
- [Exact command run, e.g. compile_applet, lint_applet, automated test]
- [Result and evidence summary: pass/fail, exit code, warnings]
- [Viewport or functional check performed]

### 4. Status Update (PROJECT_STATUS.md)
- [Summary of status changes made in PROJECT_STATUS.md]
- [Updated task IDs and their new canonical status]

### 5. Identified Blockers & Open Questions
- [Any technical dependency, missing credential, or client scope decision]

### 6. Recommended Next Action
- [Immediate next logical task with task ID from the register]
```
