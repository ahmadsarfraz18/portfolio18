'use client';

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ExternalLink, ImageIcon, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Icons } from "@/components/ui/icons";
import { ProjectModal } from "@/components/ui/ProjectModal";

const GitHub = Icons.github;

export function FlagshipProject() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const project = portfolioData.projects.find(p => p.id === "physical-ai-textbook");
  
  if (!project) return null;

  return (
    <section id="flagship" className="py-16 sm:py-24 md:py-32 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        
        <motion.div 
          className="flex flex-col items-center mb-16 text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Flagship Project
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
            {project.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* IMAGE / VISUAL */}
          <motion.div 
            className="lg:col-span-7 w-full"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-[0_0_50px_-15px_rgba(212,175,55,0.1)] group">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="flex flex-col items-center justify-center w-full h-full text-muted-foreground/40 gap-3">
                   <ImageIcon className="h-16 w-16 opacity-30" />
                   <span className="text-sm tracking-widest uppercase font-medium">[ Premium Visual Placeholder ]</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div 
            className="lg:col-span-5 flex flex-col space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Overview
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground">Key Highlights</h4>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex items-center gap-4 pt-4 mt-auto">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-primary/90 hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.4)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background group/btn"
              >
                View Full Case Study
                <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-1" />
              </button>
              
              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <Link 
                    href={project.githubUrl} 
                    target="_blank"
                    rel="noreferrer"
                    title="Source Code"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-foreground hover:border-foreground/20 active:scale-95"
                  >
                    <GitHub className="h-5 w-5" />
                  </Link>
                )}
                {project.liveUrl && (
                  <Link 
                    href={project.liveUrl} 
                    target="_blank"
                    rel="noreferrer"
                    title="Live Demo"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-foreground hover:border-foreground/20 active:scale-95"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                )}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
      <ProjectModal 
        project={project} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
