# Santhosh K — Portfolio Website

A modern, high-performance personal portfolio built with **Next.js (Pages Router)**, **Tailwind CSS**, and **EmailJS**.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (Pages Router)
- **Styling:** Tailwind CSS 3 (Midnight Teal Design System with Zero-Flash Theme Toggle)
- **Typography:** Next Font Google (Inter + JetBrains Mono)
- **Icons:** Lucide React
- **Contact:** EmailJS + Next.js API Route fallback
- **Hosting / Deployment:** Vercel

## 📁 Project Structure

```
├── public/               # Static assets (images, PDF resume, sitemap)
│   ├── certificates/    # Verified Coursera certificates
│   ├── projects/        # Project screenshots
│   ├── Santhosh_K_Resume.pdf
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── layout/      # Header, Footer, MobileMenu, Layout
│   │   ├── sections/    # Hero, AboutSnapshot, FeaturedProjects, Skills, Experience, Certifications, ContactCTA
│   │   └── ui/          # Button, Card, Badge, Container, SectionHeading, Input, Textarea
│   ├── data/            # Single source of truth (personal, projects, skills, experience, education, certifications)
│   ├── hooks/           # useTheme (dark/light toggle)
│   ├── pages/           # index, about, projects, projects/[slug], contact, 404, api/contact
│   └── styles/          # Tailwind globals with CSS variables
├── PROGRESS.md          # Multi-session execution tracker
└── tailwind.config.js   # Custom color tokens & animations
```

## 🛠️ Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build and test production:
   ```bash
   npm run build
   npm run start
   ```

## 🚢 Deploying to Vercel

1. Push your repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Framework preset will automatically detect **Next.js**.
4. Click **Deploy**.
