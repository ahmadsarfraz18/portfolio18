import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'), // TODO: Configure production domain after deployment
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.webmanifest',
  title: {
    default: `${portfolioData.hero.name} | ${portfolioData.hero.title}`,
    template: `%s | ${portfolioData.hero.name}`,
  },
  description: portfolioData.hero.subtitle,
  keywords: [
    "Mahar Ahmad Sarfraz",
    "AI Developer",
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js",
    "React",
    "Python",
    "AI Agents"
  ],
  authors: [{ name: portfolioData.hero.name, url: portfolioData.socials.linkedin }],
  creator: portfolioData.hero.name,
  publisher: portfolioData.hero.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    title: `${portfolioData.hero.name} | ${portfolioData.hero.title}`,
    description: portfolioData.hero.subtitle,
    siteName: portfolioData.hero.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${portfolioData.hero.name} Portfolio Open Graph Image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.hero.name} | ${portfolioData.hero.title}`,
    description: portfolioData.hero.subtitle,
    images: ["/og-image.png"],
    creator: "@ahmadsarfraz18",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolioData.hero.name,
  jobTitle: portfolioData.hero.title,
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  sameAs: [
    portfolioData.socials.github,
    portfolioData.socials.linkedin
  ],
  description: portfolioData.about.bio,
};

import { ClientEffects } from "@/components/layout/ClientEffects";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-transparent text-foreground overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <ClientEffects />
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
