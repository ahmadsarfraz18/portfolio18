'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle2 } from "lucide-react";
import { Icons } from "@/components/ui/icons";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("developerhub83@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button 
              onClick={handleCopyEmail}
              className="group inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full bg-foreground px-8 text-sm font-semibold text-background transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1 hover:bg-foreground/90 hover:shadow-xl active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 relative overflow-hidden"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                  Copied!
                </>
              ) : (
                <>
                  <Mail className="mr-2 h-5 w-5 text-[#EA4335] transition-transform duration-300 group-hover:scale-110" />
                  developerhub83@gmail.com
                </>
              )}
            </button>
            <a 
              href="https://wa.me/923121281814" 
              target="_blank" 
              rel="noreferrer"
              className="group inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full border border-border bg-muted px-8 text-sm font-medium text-foreground transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1 hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              <Icons.whatsapp className="mr-2 h-5 w-5 text-[#25D366] transition-transform duration-300 group-hover:scale-110" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
