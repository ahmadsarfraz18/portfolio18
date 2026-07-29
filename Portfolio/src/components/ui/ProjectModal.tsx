'use client';

import { Project } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, ArrowRight, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Icons } from "@/components/ui/icons";

const GitHub = Icons.github;

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-[2rem] border border-border bg-popover shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/50 text-muted-foreground backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-muted hover:text-foreground active:scale-95"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
              {/* Hero Section */}
              <div className="relative aspect-video max-h-[50vh] w-full bg-muted/20">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-popover via-popover/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 flex w-full flex-col p-8 md:p-12">
                  {project.projectCategory && (
                    <span className="mb-4 inline-flex w-fit items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-primary backdrop-blur-md">
                      {project.projectCategory}
                    </span>
                  )}
                  <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
                    {project.title}
                  </h2>
                  <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    {project.description}
                  </p>
                  
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    {project.liveUrl && (
                      <Link 
                        href={project.liveUrl} 
                        target="_blank"
                        className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-8 text-sm font-bold text-primary-foreground transition-all duration-300 hover:scale-[1.02] hover:bg-primary/90 hover:shadow-[0_0_20px_-5px_rgba(212,175,55,0.4)] active:scale-95"
                      >
                        View Live Demo <ExternalLink className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    )}
                    <Link 
                      href={project.githubUrl} 
                      target="_blank"
                      className="group inline-flex h-12 items-center gap-2 rounded-full border border-border bg-muted px-8 text-sm font-medium text-foreground transition-all duration-300 hover:scale-[1.02] hover:bg-accent hover:border-foreground/30 active:scale-95"
                    >
                      <GitHub className="h-4 w-4 transition-transform group-hover:scale-110" /> Source Code
                    </Link>
                  </div>
                </div>
              </div>

              {/* Body Content */}
              <div className="mx-auto flex max-w-4xl flex-col gap-16 p-8 md:p-12">
                
                {/* Overview & Solution */}
                <div className="grid gap-12 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">The Problem</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">The Solution</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-foreground">Key Features</h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {project.keyFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 rounded-2xl border border-border bg-muted/50 p-5 transition-colors hover:bg-muted">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-sm font-medium text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-foreground">Technology Stack</h3>
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {Object.entries(project.technologies).map(([category, techs]) => {
                      if (!techs || techs.length === 0) return null;
                      return (
                        <div key={category} className="space-y-3">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">{category}</h4>
                          <div className="flex flex-col gap-2">
                            {techs.map((tech) => (
                              <span key={tech} className="inline-flex items-center rounded-lg border border-border bg-muted px-3 py-2 text-sm font-medium text-muted-foreground">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Architecture Flow */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-foreground">Architecture Flow</h3>
                  <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-muted/50 p-8 sm:flex-row sm:flex-wrap sm:gap-4 md:p-12">
                    {project.architecture.map((step, idx) => (
                      <div key={idx} className="flex flex-col items-center sm:flex-row sm:gap-4">
                        <div className="flex items-center justify-center rounded-xl border border-border bg-muted px-6 py-4 text-center text-sm font-semibold text-foreground shadow-lg">
                          {step}
                        </div>
                        {idx < project.architecture.length - 1 && (
                          <ArrowDown className="my-4 h-6 w-6 text-muted-foreground/50 sm:hidden" />
                        )}
                        {idx < project.architecture.length - 1 && (
                          <ArrowRight className="hidden h-6 w-6 text-muted-foreground/50 sm:block" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline & Metadata Grid */}
                <div className="grid gap-12 md:grid-cols-2">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-foreground">Development Process</h3>
                    <div className="relative border-l border-border pl-6">
                      {project.developmentProcess.map((step, idx) => (
                        <div key={idx} className="mb-8 flex items-center last:mb-0">
                          <div className="absolute -left-[5px] h-2 w-2 rounded-full bg-primary" />
                          <span className="text-sm font-medium text-muted-foreground">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-foreground">My Role</h3>
                      <p className="text-muted-foreground leading-relaxed">{project.myRole}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Duration</span>
                        <span className="font-medium text-foreground">{project.duration}</span>
                      </div>
                      <div>
                        <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-muted-foreground/50">Project Type</span>
                        <span className="font-medium text-foreground">{project.projectType}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Challenges & Results */}
                <div className="grid gap-12 md:grid-cols-2">
                  <div className="space-y-4 rounded-3xl border border-border bg-muted/50 p-8">
                    <h3 className="text-xl font-bold text-foreground">Challenges</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
                  </div>
                  <div className="space-y-4 rounded-3xl border border-primary/20 bg-primary/5 p-8">
                    <h3 className="text-xl font-bold text-foreground">Results & Impact</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.results}</p>
                  </div>
                </div>

                {/* Future Improvements */}
                <div className="space-y-4 border-t border-border pt-12 text-center pb-8">
                  <h3 className="text-xl font-bold text-foreground">Future Improvements</h3>
                  <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
                    {project.futureImprovements}
                  </p>
                </div>
                
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
