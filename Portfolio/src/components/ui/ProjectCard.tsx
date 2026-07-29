'use client';

import { Project } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ExternalLink, ImageIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Icons } from "@/components/ui/icons";
import { ProjectModal } from "./ProjectModal";

const GitHub = Icons.github;

export function ProjectCard({ project }: { project: Project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/90 backdrop-blur-md shadow-lg transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-foreground/20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // smooth spring-like ease
      >
        {/* Animated Border Glow */}
        <div className="absolute -inset-px z-[-1] rounded-2xl bg-gradient-to-b from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-md" />
        <div className="relative aspect-video w-full overflow-hidden bg-muted/20 border-b border-border">
          {project.projectCategory && (
            <div className="absolute top-4 left-4 z-20">
              <span className="inline-flex items-center rounded-full border border-border bg-background/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-foreground shadow-sm">
                {project.projectCategory}
              </span>
            </div>
          )}
          
          {project.image ? (
            <>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 z-10 bg-background/10 transition-colors duration-500 ease-out group-hover:bg-background/40" />
              
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-all duration-500 ease-out group-hover:opacity-100">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 rounded-full border border-border bg-background/80 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-md shadow-2xl transition-all hover:scale-105 hover:bg-background hover:border-foreground/40 active:scale-95"
                >
                  View Case Study <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground/40 gap-2">
               <ImageIcon className="h-10 w-10 opacity-50" />
               <span className="text-xs tracking-widest uppercase font-medium">[ Placeholder ]</span>
            </div>
          )}
        </div>

        <div className="flex flex-col flex-1 p-6 sm:p-8 space-y-7">
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-[26px] font-extrabold tracking-tight text-foreground line-clamp-2 leading-tight">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed line-clamp-3 text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          <motion.div 
            className="flex flex-wrap gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
              hidden: {}
            }}
          >
            {project.techStack.map((tech, i) => (
              <motion.span 
                key={i} 
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
                }}
                className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {project.metadata && project.metadata.length > 0 && (
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
              {project.metadata.map((meta, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-border" />}
                  {meta}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between pt-5 mt-auto border-t border-border">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex h-10 items-center gap-2 rounded-full bg-primary/10 px-5 text-sm font-semibold text-primary transition-all duration-300 ease-out hover:scale-105 hover:bg-primary/20 hover:text-primary hover:shadow-[0_0_20px_-5px_rgba(212,175,55,0.3)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background group/btn"
            >
              View Case Study <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>
            
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <Link 
                  href={project.githubUrl} 
                  target="_blank"
                  rel="noreferrer"
                  title="Source Code"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-foreground hover:border-foreground/20 active:scale-95"
                >
                  <GitHub className="h-4 w-4" />
                </Link>
              )}
              {project.liveUrl && (
                <Link 
                  href={project.liveUrl} 
                  target="_blank"
                  rel="noreferrer"
                  title="Live Demo"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground transition-all duration-300 hover:scale-110 hover:bg-accent hover:text-foreground hover:border-foreground/20 active:scale-95"
                >
                  <ExternalLink className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <ProjectModal 
        project={project} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
