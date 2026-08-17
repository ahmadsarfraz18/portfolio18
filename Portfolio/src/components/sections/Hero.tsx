'use client';

import { portfolioData } from "@/data/portfolio";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/components/ui/icons";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } }
};

export function Hero() {
  return (
    <section className="relative flex flex-col justify-center min-h-[90vh] py-20 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: ~55-60% width */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start space-y-6 lg:space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              variants={itemVariants} 
              className="inline-flex rounded-full border border-border bg-muted/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
            >
              GENERATIVE AI • FULL-STACK
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-foreground leading-[1.1] break-words">
                {portfolioData.hero.name}
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-muted-foreground">
                {portfolioData.hero.title}
              </h2>
            </motion.div>
            
            <motion.p variants={itemVariants} className="max-w-[42rem] text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground/80">
              {portfolioData.hero.subtitle}
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4">
              <Link 
                href="#flagship" 
                className="group inline-flex h-11 sm:h-12 items-center justify-center rounded-full bg-foreground px-6 sm:px-8 text-sm font-medium text-background transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-1 hover:bg-foreground/90 hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                Explore My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </Link>
              <Link 
                href="/resume"
                className="inline-flex h-11 sm:h-12 items-center justify-center rounded-full border border-border bg-background px-6 sm:px-8 text-sm font-medium transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-1 hover:bg-muted hover:shadow-md hover:border-foreground/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                Resume
              </Link>
              <Link 
                href="#contact" 
                className="inline-flex h-11 sm:h-12 items-center justify-center rounded-full border border-transparent bg-transparent px-4 text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                Let's Connect
              </Link>
              <div className="flex items-center gap-4 ml-2 sm:ml-4 sm:border-l border-border sm:pl-6">
                <Link href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Icons.github className="h-5 w-5"/>
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Icons.linkedin className="h-5 w-5"/>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          
          {/* RIGHT COLUMN: ~40-45% width */}
          <motion.div 
            className="lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
             <div className="relative w-full max-w-[240px] aspect-square sm:aspect-[4/5] lg:aspect-square rounded-[2.5rem] bg-muted/20 border border-border shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all duration-700 ease-out hover:-translate-y-2 overflow-hidden flex items-center justify-center">
                <Image
                  src="/profile.png"
                  alt="Mahar Ahmad Sarfraz"
                  fill
                  priority
                  className="object-cover"
                />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
