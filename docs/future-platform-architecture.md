# ProPeak Backend & Future Platform Architecture

This document preserves the Phase 2 roadmap, architecture specifications, API contracts, and database requirements for the future ProPeak platform.

---

## 1. Executive Summary

ProPeak Phase 1 is a static, deployable marketing and lead-generation website where clients explore services and submit requirements via Google Forms and direct contact channels.

In Phase 2, ProPeak will transition into a fully managed marketplace and platform with dedicated portals for clients, student talent (employees/freelancers), and internal administrators.

---

## 2. Platform Portals (Phase 2 Roadmap)

### 2.1. Client Portal
* **Project Dashboard**: View active, pending, and completed projects.
* **Milestone Management**: Track deliverables, inspect code repositories, and approve milestone releases.
* **Escrow Funding**: Secure payment deposits via Razorpay/Stripe, holding funds in escrow until milestones are accepted.
* **Direct Real-Time Chat**: Structured communication channel with assigned project leads and developers.
* **Invoicing & Receipts**: Automated tax invoice generation and transaction logs.

### 2.2. Talent / Student Portal
* **Skill Verification & Onboarding**: Skill tests, GitHub portfolio linking, challenge project submissions, and tier badges (Bronze, Silver, Gold, Elite).
* **Project Marketplace**: Browse open opportunities matched with verified skill domains.
* **Work Submission Pipeline**: Submit repository PRs, design deliverables, and documentation for internal QA review.
* **Earnings & Payouts**: Escrow release tracking, automated bank transfers / UPI payouts, and earnings analytics.
* **Mentorship Channels**: Direct access to senior architects and founders for code guidance.

### 2.3. Admin & Operations Dashboard
* **Project Ingestion & Matching**: Review client submissions, estimate effort/budget, and assign vetted student teams.
* **Quality Assurance Gates**: Review milestone deliverables before presenting them to clients.
* **Escrow & Dispute Resolution**: Arbitration tools for managing dispute gates and refunds.
* **Talent Management**: Manage student profiles, skill ratings, tier promotions, and performance metrics.
* **Platform Analytics**: Revenue, project turnaround times, client satisfaction, and talent retention.

---

## 3. Real-Time Communication & Chat

* **Protocol**: WebSockets via `Socket.IO` or AWS API Gateway WebSocket.
* **Rooms**:
  * Project Room (`project_{projectId}`): Client, Project Lead, Assigned Developers.
  * Internal Talent Room (`talent_{projectId}`): ProPeak mentors and student developers only.
  * Direct Support Room (`support_{ticketId}`): Direct helpdesk with Admin.
* **Features**: File attachment uploads (S3 pre-signed URLs), code snippet formatting, read receipts, and system activity notifications.

---

## 4. Payment & Escrow Architecture

```
[ Client ] ──( 1. Deposit Milestone Budget )──> [ Payment Gateway (Razorpay/Stripe) ]
                                                            │
                                                            ▼
                                                   [ Escrow Account ]
                                                            │
                              ┌─────────────────────────────┴─────────────────────────────┐
                              ▼                                                           ▼
                 ( 2a. Milestone Approved )                                  ( 2b. Dispute / Cancellation )
                              │                                                           │
                              ▼                                                           ▼
             [ Release to Student Talent ]                                     [ Full/Partial Refund ]
           (less ProPeak Platform Margin)
```

---

## 5. Future API Endpoints Specification

### Authentication (`/api/v1/auth`)
* `POST /register` - Multi-role registration (Client, Talent)
* `POST /login` - JWT + Refresh Token issuance
* `POST /forgot-password` - Password reset link dispatch
* `GET /me` - Current authenticated user session profile

### Projects (`/api/v1/projects`)
* `POST /` - Post a new project requirement (Client)
* `GET /` - List matched projects (Filter by status, category, budget)
* `GET /:id` - Project detail with milestones and team members
* `PATCH /:id/milestones/:milestoneId` - Submit/Approve milestone deliverable

### Payments & Escrow (`/api/v1/payments`)
* `POST /create-order` - Generate Razorpay/Stripe checkout session
* `POST /verify-signature` - Verify webhook signature and reserve escrow
* `POST /release-milestone` - Release funds from escrow to talent wallet

---

## 6. Target Database Schema (PostgreSQL + Prisma)

* **Users**: `id`, `name`, `email`, `password_hash`, `role` (CLIENT, TALENT, ADMIN), `tier`, `avatar_url`, `created_at`
* **Profiles**: `user_id`, `skills`, `bio`, `github_url`, `linkedin_url`, `hourly_rate`, `rating`
* **Projects**: `id`, `client_id`, `title`, `description`, `category`, `budget`, `status` (DRAFT, MATCHING, ACTIVE, COMPLETED, DISPUTED), `created_at`
* **Milestones**: `id`, `project_id`, `title`, `amount`, `status` (PENDING, FUNDED, SUBMITTED, APPROVED), `due_date`
* **Transactions**: `id`, `milestone_id`, `gateway_payment_id`, `amount`, `type` (DEPOSIT, RELEASE, REFUND), `status`
* **Messages**: `id`, `project_id`, `sender_id`, `content`, `attachments`, `created_at`
