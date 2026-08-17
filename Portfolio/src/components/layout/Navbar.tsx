'use client';

import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const NAV_LINKS = [
  { href: "#flagship", label: "Flagship" },
  { href: "#ai-projects", label: "AI Projects" },
  { href: "#web-work", label: "Web Work" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the visible section taking up the most space
        let maxIntersectionRatio = 0;
        let mostVisibleSection = "";
        
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
            maxIntersectionRatio = entry.intersectionRatio;
            mostVisibleSection = `#${entry.target.id}`;
          }
        });

        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection);
        }
      },
      { rootMargin: "-20% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    NAV_LINKS.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
      setActiveSection(href);
    }
  };

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link 
          href="/" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveSection("");
          }}
          className="flex items-center space-x-2 transition-transform hover:scale-105"
        >
          <span className="font-bold sm:inline-block tracking-tight text-foreground">
            {portfolioData.hero.name}
          </span>
        </Link>
        <div className="flex items-center justify-end">
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 transition-colors duration-300 ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground/80"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute left-0 bottom-0 h-[2px] w-full bg-primary"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>
          <div className="flex items-center ml-2 md:ml-4 md:border-l border-border md:pl-4">
            <Link
              href="/resume"
              className="relative px-4 py-2 text-sm font-medium transition-colors duration-300 text-muted-foreground hover:text-foreground/80"
            >
              Resume
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
