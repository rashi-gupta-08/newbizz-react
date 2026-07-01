# Newbizz — Full-Stack Business Landing & Admin Platform

A modern, production-ready full-stack web application built with Next.js, React, TypeScript, PostgreSQL, and Prisma. Features a beautiful landing page with multi-page routing, a working contact form with database persistence, Cal.com booking integration, and a password-protected admin dashboard to view submissions.

**Live Demo:** [newbizz-react.vercel.app](https://newbizz-react.vercel.app)

---

## 🎯 Project Overview

Newbizz is a business landing page platform that showcases a services/SaaS company's offerings and captures leads. It combines a polished, animated frontend with a real backend infrastructure — making it a complete portfolio piece demonstrating full-stack web development skills.

### Key Highlights

- **Real Database**: PostgreSQL via Neon — contact submissions are persisted and queryable
- **Authentication**: Cookie-based session auth (no external service required)
- **Admin Dashboard**: Server-rendered page showing all submissions, stats, and filtering
- **Mobile-First**: Responsive design with hamburger menu and touch-optimized interactions
- **Production-Ready**: Deployed on Vercel with proper environment management and build optimization
- **Animations**: Framer Motion for scroll reveals, page transitions, and interactive elements

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** — React framework with App Router, server/client components
- **React 18.3** — UI component library
- **TypeScript** — Type-safe code across the stack
- **Tailwind CSS** — Utility-first styling with custom design tokens
- **Framer Motion** — Declarative animations (scroll reveals, micro-interactions, transitions)

### Backend
- **Next.js API Routes** — Serverless API endpoints for contact form & admin auth
- **PostgreSQL 15** — Relational database (hosted on Neon)
- **Prisma 5** — Type-safe ORM with auto-generated client
- **Node.js crypto** — Session token generation and HMAC signing (no external auth library)

### Database & ORM
- **Neon PostgreSQL** — Free serverless PostgreSQL with auto-scaling
- **Prisma Migrate** — Schema management and migrations
- **Prisma Studio** — Visual database explorer

### Deployment & DevOps
- **Vercel** — Edge-optimized hosting for Next.js applications
- **GitHub** — Source control with auto-deploy on push
- **dotenv** — Environment variable management

### Additional Integrations
- **Cal.com** — Embedded booking calendar for scheduling calls
- **Node.js** — Server runtime for API routes and build processes

---

## ✨ Features

### Landing Pages
- **Home** — Hero section with animated gradient orb, scroll-reveal sections, social proof stats
- **Services** — Tiered service offerings with descriptions and durations
- **Pricing** — Three pricing tiers with feature comparisons (Starter, Growth, Scale)
- **Book a Call** — Embedded Cal.com calendar for scheduling 30-minute intro calls
- **Contact** — Full-featured contact form with real-time validation and database persistence
- **Admin Login** — Password-protected entry point to submissions dashboard

### Contact Form (`/contact`)
- Client-side form validation (email format, message length, etc.)
- Server-side validation (defense-in-depth, no trusting client input)
- Real-time error messaging with smooth animations
- Success confirmation with animated checkmark
- Data persists to PostgreSQL database

### Admin Dashboard (`/admin/dashboard`)
- Password-protected (HTTP-only cookie session token)
- Real-time stats: total submissions, last 7 days, unique companies
- Sortable table view of all contact submissions
- Displays name, email, company, message, and received date
- Server-rendered for security (auth happens server-side)
- Log out functionality that clears session cookie

### Navigation & UX
- Sticky header with scroll-aware background blur
- Desktop nav bar with animated active-link underline
- Mobile hamburger menu (three-line icon → ✕ animation)
- Auto-closing menu on route change
- Focus-ring keyboard accessibility on all buttons/links
- Dark theme with accent orange (#ED834E)

### Performance & Accessibility
- Next.js Turbopack for fast dev builds
- Image optimization (lazy loading, srcset)
- Semantic HTML with ARIA labels
- Keyboard navigation support
- Respects `prefers-reduced-motion` for accessibility
- Mobile-responsive breakpoints (sm: 640px, md: 768px, lg: 1024px)

---

## 📂 Project Structure

```
newbizz-react/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with fonts & providers
│   │   ├── page.tsx                # Home page
│   │   ├── globals.css             # Global styles
│   │   ├── services/
│   │   │   └── page.tsx            # Services page
│   │   ├── pricing/
│   │   │   └── page.tsx            # Pricing page
│   │   ├── book/
│   │   │   └── page.tsx            # Cal.com booking page
│   │   ├── contact/
│   │   │   └── page.tsx            # Contact form page
│   │   ├── admin/
│   │   │   ├── login/
│   │   │   │   └── page.tsx        # Admin login form
│   │   │   └── dashboard/
│   │   │       └── page.tsx        # Admin submissions dashboard
│   │   └── api/
│   │       ├── contact/
│   │       │   └── route.ts        # Contact form API endpoint
│   │       └── admin/
│   │           ├── login/
│   │           │   └── route.ts    # Admin login API endpoint
│   │           └── logout/
│   │               └── route.ts    # Admin logout API endpoint
│   ├── lib/
│   │   ├── prisma.ts               # Prisma client singleton
│   │   └── auth.ts                 # Session token & password auth
│   ├── components/
│   │   ├── Nav.tsx                 # Navigation with mobile menu
│   │   ├── Footer.tsx              # Footer
│   │   ├── Hero.tsx                # Hero section
│   │   ├── Reveal.tsx              # Scroll-reveal animation wrapper
│   │   ├── ContactForm.tsx         # Contact form component
│   │   └── LogoutButton.tsx        # Logout button for admin
│   └── middleware.ts               # Edge middleware for auth guard
├── prisma/
│   └── schema.prisma               # Database schema & models
├── public/                         # Static assets
├── .env                            # Environment variables (gitignored)
├── .env.example                    # Template for env vars
├── .gitignore                      # Git exclusions
├── package.json                    # Dependencies & scripts
├── tsconfig.json                   # TypeScript configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── next.config.js                  # Next.js configuration
├── vercel.json                     # Vercel build configuration
└── README.md                       # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ (check with `node --version`)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository** (or download from GitHub):
   ```bash
   git clone https://github.com/rashi-gupta-08/newbizz-react.git
   cd newbizz-react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Fill in the three required values:
     - `DATABASE_URL` — PostgreSQL connection string from Neon
     - `ADMIN_PASSWORD` — Password you'll use to log into the admin panel
     - `SESSION_SECRET` — Long random string (generate with `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`)

4. **Run the database migration** (creates tables):
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start the dev server:**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Development Commands

```bash
npm run dev          # Start dev server (with hot reload)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run db:migrate   # Create a new migration
npm run db:studio    # Open Prisma Studio (visual database editor)
```

---

## 🗄️ Database Setup

### Using Neon (Recommended)

1. Go to [neon.tech](https://neon.tech) and sign up (GitHub login is fastest)
2. Create a new project
3. Copy your connection string (labeled "Pooled connection")
4. Paste it as `DATABASE_URL` in your `.env` file
5. Run `npx prisma migrate dev` to create tables

### Running Migrations

Every time you update `prisma/schema.prisma`, create a migration:

```bash
npx prisma migrate dev --name describe_your_change
```

This generates a SQL migration file and applies it to your database.

### Viewing Data

Open Prisma Studio to browse/edit data visually:

```bash
npm run db:studio
```

---

## 🔐 Environment Variables

Create a `.env` file in the project root (see `.env.example`):

```env
# PostgreSQL connection string from Neon
# Format: postgresql://user:password@host/dbname?sslmode=require
DATABASE_URL=postgresql://neondb_owner:...

# Password to log into /admin/login
ADMIN_PASSWORD=YourStrongPasswordHere

# Long random string for signing session tokens
# Generate: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
SESSION_SECRET=a3f8c2d1e9b7...64_random_characters...
```

**Important:** Never commit `.env` to Git. It contains your database password and should stay local only.

---

## 🚢 Deployment

### Deploy to Vercel

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

2. **Import project on Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import" next to your GitHub repository
   - Vercel auto-detects Next.js — leave build settings as-is
   - Click **Deploy**

3. **Set environment variables on Vercel:**
   - In your project dashboard, go to **Settings** → **Environment Variables**
   - Add `DATABASE_URL`, `ADMIN_PASSWORD`, and `SESSION_SECRET`
   - Vercel will redeploy automatically

4. **Your site is live!**
   - Vercel assigns a URL like `newbizz-react-yourname.vercel.app`
   - Every `git push` triggers an automatic redeploy

### Production Checklist

- ✅ `.env` is in `.gitignore` (secrets never pushed)
- ✅ Environment variables set on Vercel
- ✅ Database is live and connected
- ✅ Form submissions persist to database
- ✅ Admin dashboard is password-protected
- ✅ SSL/HTTPS enabled (Vercel does this automatically)

---

## 📊 Database Schema

### ContactSubmission Table

```prisma
model ContactSubmission {
  id        String   @id @default(cuid())
  name      String
  email     String
  company   String?
  message   String
  createdAt DateTime @default(now())

  @@index([createdAt])
}
```

| Field | Type | Notes |
|-------|------|-------|
| `id` | String | Unique identifier (CUID) |
| `name` | String | Contact's full name |
| `email` | String | Contact's email address |
| `company` | String? | Contact's company (optional) |
| `message` | String | Message body |
| `createdAt` | DateTime | Submission timestamp (auto-set) |

---

## 🔐 Authentication & Security

### Admin Login Flow

1. User visits `/admin/login` and enters password
2. POST to `/api/admin/login` with password
3. Server validates against `ADMIN_PASSWORD` env var
4. On success, server generates a signed session token:
   - Token = `<timestamp>.<hmacSignature>`
   - Signature is HMAC-SHA256 of timestamp using `SESSION_SECRET`
5. Token stored in HTTP-only secure cookie
6. Subsequent requests to `/admin/dashboard` check cookie validity
7. Session expires after 7 days

### Form Validation

- **Client-side**: Real-time error feedback as user types
- **Server-side**: Double-checks all inputs before database write
- Prevents malformed data and SQL injection attacks

---

## 🎨 Design & Branding

### Color Palette
- **Background**: `#0A0A0C` (near-black)
- **Surface**: `#131316` (slightly lighter)
- **Accent**: `#ED834E` (warm orange)
- **Text**: `#F5F3EF` (off-white)
- **Muted**: `#8A8782` (gray for secondary text)

### Typography
- **Display**: Space Grotesk (headings, brand)
- **Body**: Inter (paragraph text, form labels)

### Animations
- Scroll reveals on sections (fade + slide up)
- Drifting gradient orb behind hero
- Animated hamburger menu (☰ → ✕)
- Micro-interactions on buttons and links
- Respects `prefers-reduced-motion` for accessibility

---

## 📈 Performance Metrics

- **Core Web Vitals**: Optimized for Largest Contentful Paint, First Input Delay, Cumulative Layout Shift
- **Turbopack**: Next.js 16 uses Turbopack for ~3x faster builds
- **Database**: Neon's auto-scaling handles traffic spikes
- **CDN**: Vercel's global edge network serves content from closest region
- **Caching**: Automatic caching of static pages and assets

---


## 📝 License

This project is open source and available under the MIT License — feel free to use it as a template for your own projects.

---

## 💬 Questions?

This README documents the architecture, setup, and deployment of a full-stack web application suitable for production use. For questions or issues:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [Prisma docs](https://www.prisma.io/docs)
3. See [Vercel deployment guide](https://vercel.com/docs)

---

**Built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, PostgreSQL, Prisma, and deployed on Vercel.**

Live: [newbizz-react.vercel.app](https://newbizz-react.vercel.app)
