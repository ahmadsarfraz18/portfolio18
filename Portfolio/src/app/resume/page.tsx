'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger: Variants = {
  visible: { transition: { staggerChildren: 0.08 } },
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
      {children}
    </h2>
  );
}

function SkillBadge({ name }: { name: string }) {
  return (
    <span className="inline-block rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">
      {name}
    </span>
  );
}

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Top Action Bar - Hidden on Print */}
      <div className="no-print fixed top-16 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto max-w-4xl flex items-center justify-between px-4 md:px-6 h-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex h-9 items-center justify-center gap-2 rounded-full border border-border bg-background px-5 text-sm font-medium transition-all hover:bg-muted hover:border-foreground/20"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </button>
            <a
              href="/resume-mahar-sarfaraz.docx"
              download
              className="inline-flex h-9 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              <FileText className="h-4 w-4" />
              Download DOCX
            </a>
          </div>
        </div>
      </div>

      {/* Resume Content */}
      <section className="pt-32 pb-20 print:pt-0 print:pb-0">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-10"
          >
            {/* Header */}
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-border flex-shrink-0">
                <Image
                  src="/profile.png"
                  alt="Mahar Ahmad Sarfraz"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  Mahar Ahmad Sarfraz
                </h1>
                <p className="text-lg font-medium text-primary">
                  Agentic AI Developer & Full-Stack Engineer
                </p>
                <p className="text-sm text-muted-foreground">
                  Karachi, Pakistan
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href="https://github.com/ahmadsarfraz18"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ahmad-sarfraz-394b4b276/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    LinkedIn
                  </a>
                  <Link
                    href="/"
                    className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    Portfolio
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Summary */}
            <motion.div variants={fadeIn} className="rounded-xl border border-border bg-card p-6">
              <SectionTitle>Summary</SectionTitle>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Specialist in building autonomous AI agent workflows, spec-driven architectures, and
                scalable full-stack web applications. Passionate about turning complex ideas into
                functional digital experiences through modern web technologies and AI systems.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div variants={fadeIn} className="rounded-xl border border-border bg-card p-6">
              <SectionTitle>Skills</SectionTitle>
              <div className="flex flex-wrap gap-2">
                {[
                  'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Fastify', 'Node.js',
                  'Python', 'PostgreSQL', 'Drizzle ORM', 'Docker', 'Ollama', 'OpenCode',
                  'Claude CLI', 'OpenAI Agents SDK', 'LangChain', 'FastAPI', 'Framer Motion',
                ].map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </motion.div>

            {/* Featured Projects */}
            <motion.div variants={fadeIn} className="rounded-xl border border-border bg-card p-6">
              <SectionTitle>Featured Projects</SectionTitle>
              <div className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-foreground">
                    LogiFlow AI — Logistics Document Automation SaaS
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    End-to-end SaaS platform for automating logistics documentation using AI agents.
                    Built with Next.js, TypeScript, and LLM orchestration for intelligent document
                    parsing and workflow automation.
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-foreground">
                    Med-Synapse — Healthcare AI Agent Architecture
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Multi-agent healthcare system designed for clinical data processing and patient
                    interaction. Leveraged structured agent workflows with safety guardrails and
                    context-aware decision-making.
                  </p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-foreground">
                    Al-Arab Shawarma & Web Applications
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    High-conversion restaurant landing page and multiple full-stack web applications
                    including e-commerce platforms, task management dashboards, and interactive
                    digital products built with Next.js and Tailwind CSS.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div variants={fadeIn} className="rounded-xl border border-border bg-card p-6">
              <SectionTitle>Experience</SectionTitle>
              <div className="space-y-5">
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-sm font-semibold text-foreground">
                      Agentic AI Developer & Prompt Engineer
                    </h3>
                    <span className="text-xs text-muted-foreground">Independent / Freelance</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Designing and building autonomous AI agent systems, multi-agent workflows,
                    and prompt engineering solutions. Developing production-ready AI applications
                    using OpenAI Agents SDK, LangChain, and modern LLM architectures.
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-sm font-semibold text-foreground">
                      Unit Manager
                    </h3>
                    <span className="text-xs text-muted-foreground">Akhuwat Microfinance</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Managed microfinance operations, client portfolios, and team coordination.
                    Developed strong analytical and leadership skills in financial services.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={fadeIn} className="rounded-xl border border-border bg-card p-6">
              <SectionTitle>Education</SectionTitle>
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-sm font-semibold text-foreground">
                    Governor Sindh Initiative (GIAIC)
                  </h3>
                  <span className="text-xs text-muted-foreground">2024 – Present</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Certified Agentic AI & Web3 Engineering program. Completed OpenAI Agents SDK
                  assessment with 92nd percentile score. Focused on modern web development, AI
                  agents, and full-stack engineering.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Print Styles */}
      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: white !important;
            color: #111 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          section.pt-32 {
            padding-top: 0 !important;
          }
          .rounded-xl {
            border-radius: 0 !important;
            border: 1px solid #ddd !important;
            break-inside: avoid;
          }
          .bg-card {
            background: white !important;
          }
          .text-foreground {
            color: #111 !important;
          }
          .text-muted-foreground {
            color: #555 !important;
          }
          .text-primary {
            color: #111 !important;
          }
          .border-border {
            border-color: #ddd !important;
          }
          .bg-muted\\/50 {
            background: #f3f4f6 !important;
          }
          .hover\\:border-primary\\/40,
          .hover\\:text-foreground {
            color: #111 !important;
          }
          .underline {
            text-decoration: underline !important;
          }
          a {
            color: #333 !important;
          }
        }
      `}</style>
    </>
  );
}
