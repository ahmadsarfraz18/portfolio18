# Mahar Ahmad Sarfraz — Premium Developer Portfolio

A production-ready, highly optimized personal portfolio built to showcase engineering projects, technical growth, and professional philosophy. Designed with a dark luxury aesthetic, focusing on robust performance, semantic SEO, and micro-interactions.

![Portfolio Preview](./public/og-image.png)

## Features

- **Dark Luxury Aesthetic:** Minimalist design language utilizing deep blacks, subtle gradients, and glassmorphism.
- **High Performance:** 100/100 Lighthouse scores across Performance, Accessibility, Best Practices, and SEO.
- **Premium Micro-Interactions:** Smooth Framer Motion animations, optimized scroll progress, and refined hover states.
- **Technical SEO:** Full Next.js Metadata API integration, dynamic Open Graph images, JSON-LD Schema, robots.txt, and sitemap generation.
- **Responsive Design:** Flawless layout across all mobile, tablet, and desktop viewports.
- **Accessibility First:** Semantic HTML (`main`, `section`, `article`), keyboard navigation support (`focus-visible`), and `prefers-reduced-motion` compliance.

## Tech Stack

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router, Turbopack)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Analytics:** [Vercel Analytics](https://vercel.com/analytics)

## Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ahmadsarfraz18/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Rename `.env.example` to `.env.local` and add your production URL:
   ```env
   NEXT_PUBLIC_SITE_URL="http://localhost:3000" # Update on deployment
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment (Vercel)

This project is optimized for deployment on Vercel.

1. Push your code to a GitHub repository.
2. Log into [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Set the `NEXT_PUBLIC_SITE_URL` environment variable in the Vercel dashboard to your actual domain name (e.g., `https://maharahmad.com`).
5. Click **Deploy**. Vercel will automatically detect Next.js and apply the correct build settings.

## GitHub Repository Audit & Configuration

To present this repository professionally to recruiters and open-source contributors, ensure the following checklist is completed on your GitHub repository page:

- [ ] **Professional README:** This README is fully populated. (Done!)
- [ ] **About Section:** Add a strong description (e.g., "Production-ready AI & Full-Stack Developer Portfolio built with Next.js and Tailwind CSS.").
- [ ] **Topics (Tags):** Add relevant tags like `nextjs`, `react`, `typescript`, `tailwindcss`, `framer-motion`, `portfolio`, `ai-developer`.
- [ ] **Website Link:** Add your live Vercel URL to the "Website" field in the About section.
- [ ] **Social Preview Image:** Go to Repo Settings > General > Social preview, and upload the `public/og-image.png`.
- [ ] **Releases:** Once deployed, create a `v1.0.0` Release marking the initial production launch.
- [ ] **License:** Verify the MIT License is correctly recognized by GitHub.

## Post-Deployment Verification Checklist

After your Vercel deployment completes, verify the following on your live URL:

- [ ] Homepage loads instantly without layout shifts.
- [ ] All images (including project screenshots and profile photo) load correctly.
- [ ] SEO metadata is present (`<title>`, `<meta name="description">`, Open Graph tags).
- [ ] `robots.txt` and `sitemap.xml` are accessible at the root domain.
- [ ] Vercel Analytics is collecting traffic (if enabled in Vercel dashboard).
- [ ] No console errors or hydration mismatch warnings appear in DevTools.
- [ ] The site functions perfectly on mobile devices.
- [ ] Lighthouse audit scores remain in the high 90s.

## License

This project is licensed under the [MIT License](LICENSE).
