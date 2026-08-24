# ProPeak Website (Phase 1)

> **Build Skills. Earn Money. Create Impact.**
>
> ProPeak is a student-driven digital services company and managed talent network providing Website Development, AI & Machine Learning, Mobile App Development, Data Analytics, Video Editing, Graphic Design, Content Writing, Final Year Projects & Technical Mentorship, and Technical Consulting.

---

## 1. Project Overview

ProPeak Phase 1 is a high-performance, polished, responsive public marketing and service marketplace website. It is designed to convert visitors into project enquiries, potential clients, student talent/community members, and business partnerships.

All project requirements are collected via a configurable Google Form intake URL or direct email contact.

---

## 2. Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vite.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Toast Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Typography**: Outfit & Inter (Google Fonts)

---

## 3. Brand Identity & Color System

- **Deep Emerald**: `#0A4F3A`
- **Mid Green**: `#0D7A58`
- **Bright Green**: `#10A87A`
- **Mint Teal**: `#15D69C`
- **Aquamarine**: `#7FFFD4`
- **Page Background**: `#F0FDF8`
- **Card Background**: `#FFFFFF`
- **Border Theme**: `#D1FAE5`
- **Badge Background**: `#F7FEE7`
- **Primary Text**: `#052E20`
- **Secondary Text**: `#527A68`
- **Teal Accent**: `#0D9488`
- **Lime Accent**: `#84CC16`

---

## 4. Public Routes

- `/` - Home Landing Page (Hero with mock cards, horizontal ticker, 9 services grid, 4-step workflow, Why ProPeak, work showcase, tech stack, Meet The Builders, sample outcomes, FAQs, CTA banner).
- `/services` - Comprehensive service catalog with interactive category filtering.
- `/services/:slug` - Dynamic detailed service deep-dive pages (e.g. `/services/web-development`, `/services/ai-machine-learning`, `/services/content-writing`, etc.).
- `/about` - About ProPeak, mission, core values, managed execution model, and Meet The Builders.
- `/contact` - Direct contact channels (Email mailto, WhatsApp, social links, project scope submission).
- `/start-project` - Project requirement intake landing page explaining the review process and linking to the Google Form.
- `/privacy` - Privacy Policy.
- `/terms` - Terms of Service.
- `*` - Custom 404 Page.

---

## 5. Environment Variables Configuration

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

| Variable | Description | Default |
| :--- | :--- | :--- |
| `VITE_SITE_URL` | Canonical domain for SEO & OpenGraph | `https://propeak.in` |
| `VITE_GOOGLE_PROJECT_FORM_URL` | Google Form URL for project requirement submissions | `""` (Falls back to email intake) |
| `VITE_CONTACT_EMAIL` | Primary contact email address | `contact@propeak.in` |
| `VITE_LINKEDIN_URL` | LinkedIn company or profile URL | `https://www.linkedin.com/company/propeak-in/` |
| `VITE_INSTAGRAM_URL` | Instagram page URL | `""` |
| `VITE_GITHUB_URL` | GitHub organization URL | `""` |
| `VITE_YOUTUBE_URL` | YouTube channel URL | `""` |
| `VITE_WHATSAPP_URL` | WhatsApp direct contact link | `""` |
| `VITE_ANALYTICS_ID` | Google Analytics / Plausible tracking ID | `""` |

---

## 6. Installation & Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Typecheck and build production bundle
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 7. Deployment

This frontend builds as a 100% static single-page application (SPA) with zero backend dependencies.

### Deploying to Vercel
1. Import repository on [Vercel](https://vercel.com).
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.
5. Add Environment Variables from `.env.example`.

### Deploying to Netlify
1. Connect repository on [Netlify](https://netlify.com).
2. Build Command: `npm run build`.
3. Publish Directory: `dist`.
4. Add single page app redirect rewrite (`/* /index.html 200`).

---

## 8. Phase 2 Platform Roadmap

Detailed architecture plans for Phase 2 (Client Portal, Employee Portal, Admin Dashboard, Real-time Chat, Escrow Payments, and Backend Endpoints) are documented in:
- [`docs/future-platform-architecture.md`](docs/future-platform-architecture.md)
- [`docs/backend-env.md`](docs/backend-env.md)
