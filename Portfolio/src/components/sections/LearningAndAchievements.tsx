'use client';

import { portfolioData } from "@/data/portfolio";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import * as LucideIcons from "lucide-react";
import { Icons } from "@/components/ui/icons";

// Animated Counter Hook
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(v).toString() + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, suffix]);

  return <span ref={nodeRef}>0{suffix}</span>;
}

// Timeline Component
function LearningJourneyTimeline() {
  const { learningJourney } = portfolioData;

  return (
    <div className="relative mx-auto max-w-4xl pt-12 pb-24">
      <div className="absolute left-8 top-0 h-full w-[2px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:left-1/2 md:-ml-[1px]" />

      <div className="space-y-12 md:space-y-24">
        {learningJourney.map((milestone, idx) => {
          const isEven = idx % 2 === 0;
          const Icon = (LucideIcons as any)[milestone.icon] || LucideIcons.CheckCircle;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className={`relative flex items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Connector Dot */}
              <div className="absolute left-8 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-background bg-primary/50 shadow-[0_0_10px_rgba(212,175,55,0.2)] md:left-1/2 z-10 transition-all duration-500 group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]" />

              {/* Content Card */}
              <div className={`ml-16 w-full md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 hover:border-foreground/20 hover:bg-muted hover:shadow-[0_15px_40px_-15px_rgba(212,175,55,0.1)]">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-primary/80 transition-colors group-hover:text-primary">
                      {milestone.year}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors duration-500 group-hover:bg-primary/20 group-hover:text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">{milestone.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{milestone.description}</p>
                  <div className="mt-6 inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    {milestone.techBadge}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// Achievements Component
function AchievementsGrid() {
  const { achievements } = portfolioData;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 py-16">
      {achievements.map((item, idx) => {
        const Icon = item.icon === "Github" ? Icons.github : ((LucideIcons as any)[item.icon] || LucideIcons.CheckCircle);

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-card to-background p-8 text-center transition-all hover:-translate-y-2 hover:border-foreground/20 hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors group-hover:bg-primary/20 group-hover:text-primary">
              <Icon className="h-8 w-8" />
            </div>
            
            <h4 className="mb-2 text-5xl font-extrabold tracking-tight text-foreground">
              <AnimatedCounter value={item.count} suffix={item.suffix} />
            </h4>
            
            <p className="mb-1 text-sm font-bold uppercase tracking-widest text-primary/80">{item.title}</p>
            <p className="text-xs text-muted-foreground/50">{item.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

// Tech Growth Component
function TechGrowthGrid() {
  const { techGrowth } = portfolioData;
  const categories = Object.keys(techGrowth);

  // Helper to color code maturity levels
  const getMaturityColor = (maturity: string) => {
    switch(maturity) {
      case "Production Ready": return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "Advanced": return "bg-blue-500/10 text-blue-400 border-blue-500/20";
      case "Intermediate": return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      default: return "bg-muted text-muted-foreground border-border"; // Currently Learning
    }
  };

  return (
    <div className="py-16">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            className="group rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:bg-muted hover:shadow-lg"
          >
            <h3 className="mb-8 flex items-center text-lg font-bold tracking-widest uppercase text-foreground">
              {category}
            </h3>
            
            <div className="space-y-4">
              {techGrowth[category as keyof typeof techGrowth].map((tech, i) => (
                <div key={i} className="flex items-center justify-between rounded-xl border border-border bg-background/40 p-4 transition-colors hover:border-foreground/20">
                  <span className="font-medium text-foreground">{tech.name}</span>
                  <span className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${getMaturityColor(tech.maturity)}`}>
                    {tech.maturity}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Personal Philosophy Component
function PersonalPhilosophy() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mx-auto mt-24 mb-12 max-w-4xl overflow-hidden rounded-[2rem] border border-primary/20 bg-primary/5 p-12 text-center md:p-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]" />
      <div className="relative z-10">
        <LucideIcons.Quote className="mx-auto mb-8 h-12 w-12 text-primary/40" />
        <h3 className="text-2xl font-bold leading-relaxed text-foreground md:text-4xl md:leading-snug">
          "I don't learn technologies to collect certificates. <br className="hidden md:block" />
          <span className="text-primary">I learn by building real products that solve real-world problems.</span>"
        </h3>
      </div>
    </motion.div>
  );
}

export function LearningAndAchievements() {
  return (
    <section id="journey" className="relative border-t border-border/40 bg-background py-24 overflow-hidden">
      {/* Background Gradients & Noise */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.03)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="mb-20 space-y-6 text-center md:mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-primary"
          >
            Growth & Impact
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl lg:text-6xl"
          >
            Learning Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-muted-foreground"
          >
            A continuous path of engineering evolution, driven by curiosity and a commitment to building production-grade systems.
          </motion.p>
        </div>

        <AchievementsGrid />
        
        <div className="my-32 flex items-center justify-center">
          <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <LearningJourneyTimeline />

        <div className="my-32 flex items-center justify-center">
          <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-foreground">Technology Stack</h2>
          <p className="text-muted-foreground">Organized by proficiency and production readiness.</p>
        </div>
        <TechGrowthGrid />

        <PersonalPhilosophy />
      </div>
    </section>
  );
}
