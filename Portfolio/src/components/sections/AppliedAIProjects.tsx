'use client';

import { portfolioData } from "@/data/portfolio";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { motion } from "framer-motion";

export function AppliedAIProjects() {
  const projects = portfolioData.projects.filter(p => p.category === "Applied AI Projects");
  
  if (projects.length === 0) return null;

  return (
    <section id="ai-projects" className="py-24 md:py-32 bg-muted/10 border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div 
          className="flex flex-col items-center mb-16 text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
            Applied AI Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Intelligent systems and agents built to solve complex problems and automate workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
