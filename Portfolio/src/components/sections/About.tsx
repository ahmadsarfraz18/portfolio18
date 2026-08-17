'use client';

import { portfolioData } from "@/data/portfolio";
import { motion, Variants } from "framer-motion";
import { Brain, Code2, Cpu } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-muted/10 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT SIDE: Narrative */}
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              About Me
            </motion.h2>
            <motion.div variants={itemVariants} className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>{portfolioData.about.bio}</p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Capability Blocks */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6 lg:mt-2"
          >
            <motion.div variants={itemVariants} className="group flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-6 sm:p-8 rounded-[2rem] border border-border bg-card hover:bg-muted shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-500 ease-out hover:-translate-y-1">
               <div className="p-3 rounded-2xl bg-muted text-primary shrink-0 transition-transform duration-500 group-hover:scale-110">
                 <Brain className="h-6 w-6 sm:h-7 sm:w-7" />
               </div>
               <div className="space-y-2">
                 <h3 className="text-xl font-semibold text-foreground tracking-tight">AI Systems</h3>
                 <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">Developing intelligent agents and practical AI solutions that turn complex concepts into usable tools.</p>
               </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="group flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-6 sm:p-8 rounded-[2rem] border border-border bg-card hover:bg-muted shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-500 ease-out hover:-translate-y-1">
               <div className="p-3 rounded-2xl bg-muted text-primary shrink-0 transition-transform duration-500 group-hover:scale-110">
                 <Code2 className="h-6 w-6 sm:h-7 sm:w-7" />
               </div>
               <div className="space-y-2">
                 <h3 className="text-xl font-semibold text-foreground tracking-tight">Full-Stack Development</h3>
                 <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">Building responsive, modern, and scalable web applications with robust architectures and elegant UI.</p>
               </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="group flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-6 sm:p-8 rounded-[2rem] border border-border bg-card hover:bg-muted shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-500 ease-out hover:-translate-y-1">
               <div className="p-3 rounded-2xl bg-muted text-primary shrink-0 transition-transform duration-500 group-hover:scale-110">
                 <Cpu className="h-6 w-6 sm:h-7 sm:w-7" />
               </div>
               <div className="space-y-2">
                 <h3 className="text-xl font-semibold text-foreground tracking-tight">Physical AI & Robotics Education</h3>
                 <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">Exploring humanoid robotics, spec-driven development, and advanced simulation environments.</p>
               </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
