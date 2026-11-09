# Portfolio Revamp — Agent Prompt

> **How to use:**
> - **First session:** Paste this entire prompt. The agent creates `PROGRESS.md` before touching any code.
> - **After a session ends:** Open a new chat in the same project and send only `Resume from PROGRESS.md`. The agent reads the file and continues — no need to paste this again.
> - **Safety net:** Since the tracker is committed, `git log` shows where each session stopped even if the file gets messy.

---

## 1. GOAL

You are a senior frontend developer and designer. Redesign and rebuild my personal portfolio website from scratch using **Next.js (Pages Router)**, **Tailwind CSS**, and **Framer Motion**. The site must be modern, polished, fully responsive, performant (Lighthouse 95+), accessible (WCAG AA), and SEO-optimized. Deploy target: Vercel.

---

## 0. PROGRESS TRACKER (HIGHEST PRIORITY RULE)

My session can end, crash, or hit limits at any time. You must keep a persistent tracker file in the project root so any new session can resume exactly where the last one stopped.

**File:** `/PROGRESS.md` (create it BEFORE writing any other code, and commit it to the repo)

### Status legend (use only these three)
- ⬜ Pending
- 🟡 In Progress
- ✅ Completed

### Rules
1. At the very start of every session, READ `PROGRESS.md` first. Continue from the first task marked 🟡 In Progress; if none, pick the first ⬜ Pending task. Never restart completed work.
2. Before starting a task, mark it 🟡. Only ONE task may be 🟡 at a time.
3. Update the file immediately after finishing each task (mark ✅ with the date), not at the end of the session.
4. Never mark a task ✅ unless it actually works (builds, lints, renders correctly).
5. If you are interrupted mid-task, the 🟡 task must have a "Notes" line stating exactly what is done, what is left, and which files are touched.
6. Log decisions (palette, fonts, libraries chosen, deviations from the plan) in the "Decisions Log" so later sessions stay consistent.
7. Log blockers and anything I must supply (images, links, resume PDF) in "Needs From Me".
8. Keep the file short, scannable, and always accurate. Do not delete history; append to the Session Log.

### Resume command
When I start a new session, I will say: **"Resume from PROGRESS.md"**. On that command, read the tracker, give me a 3-line status summary (done / in progress / next), then continue the 🟡 task without asking questions.

---

## 2. ABOUT ME (use for all copy)

- **Name:** Santhosh K
- **Title:** Frontend Developer
- **Location:** India
- **Summary:** Passionate frontend developer specializing in building modern, responsive web applications with React, Next.js, and Tailwind CSS. Experienced in translating designs into pixel-perfect, accessible user interfaces.
- **Resume PDF:** `public/Santhosh_K_Resume.pdf` _(to be added)_

> _Update this section with details from the resume once I provide the final version._

---

## 3. PROJECTS (highlight these)

| Project | Stack | Description |
|---------|-------|-------------|
| **Collabon** | React, Node.js | Collaboration platform _(details TBD)_ |
| **eMagriGoat** | React, Firebase | Agriculture/goat management app _(details TBD)_ |
| **Venba** | React | _(details TBD)_ |

> _Add live links, repo links, and screenshots once I provide them._

---

## 4. EXISTING CODEBASE SUMMARY

| Aspect | Current |
|--------|---------|
| **Framework** | React 18 (CRA / react-scripts 5) |
| **Routing** | react-router-dom v6 |
| **Styling** | Bootstrap 5 + plain CSS files |
| **Animations** | Framer Motion + react-spring + react-simple-typewriter |
| **Email** | EmailJS (@emailjs/browser) |
| **Other** | ogl (WebGL), react-icons |
| **Deploy** | gh-pages |
| **Components** | Home, Nav, Skill, Project, Contact, Education, Certification, Footer, UpdatePage |
| **Assets** | SVG icons, project screenshots, certificate images |

---

## 5. DESIGN DIRECTION

- **Style:** Clean, minimal, modern — not flashy or over-animated.
- **Palette:** Dark theme primary, with a light theme toggle. Accent color TBD (suggest options in Phase 1).
- **Typography:** Modern sans-serif (Inter, or suggest alternatives). Clear hierarchy.
- **Animations:** Subtle, purposeful (section reveals, hover states, page transitions). No excessive motion.
- **Spacing:** Generous whitespace. Breathable layout.
- **Inspiration:** Linear, Vercel, Raycast-style portfolio sites.

---

## 6. TECH STACK (mandatory)

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14+ (Pages Router) |
| Styling | Tailwind CSS 3+ |
| Animations | Framer Motion |
| Icons | react-icons or lucide-react |
| Email | EmailJS (keep existing setup) or Resend |
| Fonts | next/font (Google Fonts) |
| Deployment | Vercel |
| Linting | ESLint + Prettier |

---

## 7. PAGES & SECTIONS

### Home Page (`/`)
1. **Hero** — Name, title, tagline, CTA buttons (View Projects, Download Resume)
2. **About snapshot** — Short bio + photo placeholder
3. **Featured projects** — Top 3 project cards with image, title, tags, link
4. **Skills** — Categorized skill badges (Frontend, Tools, etc.)
5. **Experience timeline** — Work/education timeline
6. **Certifications** — Cards or badges
7. **Contact CTA** — "Let's work together" section with links

### Inner Pages
- `/about` — Full bio, skills detail, education, certifications
- `/projects` — All projects grid with filters
- `/projects/[slug]` — Individual project case study (problem, solution, stack, screenshots, links)
- `/contact` — Contact form (EmailJS) + social links
- `404` — Custom not-found page

---

## 8. WORKFLOW

Follow the phases in PROGRESS.md in order. After each phase, update the tracker, run lint/build, and give me a short summary before moving on. Wait for my approval only at the end of Phase 1; after that, proceed continuously.

---

## 9. CODE QUALITY RULES

1. **TypeScript optional** — Use `.jsx` / `.js` unless I ask for TS.
2. **Component structure:** One component per file. Use named exports.
3. **Tailwind only** — No inline styles or CSS modules unless absolutely necessary.
4. **Responsive first** — Mobile-first breakpoints (`sm`, `md`, `lg`, `xl`).
5. **Accessible** — Semantic HTML, ARIA labels, focus management, keyboard navigation, color contrast ≥ 4.5:1.
6. **SEO** — `next/head` for meta tags, Open Graph, JSON-LD structured data, sitemap.xml, robots.txt.
7. **Performance** — `next/image` for all images, lazy loading, code splitting.
8. **No dead code** — Remove all unused imports, variables, and files after migration.
9. **Commit-ready** — Every change should build and lint cleanly.

---

## 10. FOLDER STRUCTURE (target)

```
portfolio/
├── public/
│   ├── images/          # Profile photo, OG image
│   ├── projects/        # Project screenshots
│   └── Santhosh_K_Resume.pdf
├── src/
│   ├── components/
│   │   ├── ui/          # Button, Card, Badge, Input, etc.
│   │   ├── layout/      # Header, Footer, Layout, MobileMenu
│   │   └── sections/    # Hero, About, Projects, Skills, etc.
│   ├── pages/
│   │   ├── index.js
│   │   ├── about.js
│   │   ├── projects/
│   │   │   ├── index.js
│   │   │   └── [slug].js
│   │   ├── contact.js
│   │   ├── 404.js
│   │   └── api/
│   │       └── contact.js
│   ├── data/            # Resume content, project data, skills list
│   ├── lib/             # Utilities, constants, helpers
│   ├── hooks/           # Custom React hooks
│   └── styles/
│       └── globals.css  # Tailwind directives + custom properties
├── PROGRESS.md
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

## PROGRESS.md Template Reference

> The template is defined in Section 0 above and has already been created at the project root. See `/PROGRESS.md`.
