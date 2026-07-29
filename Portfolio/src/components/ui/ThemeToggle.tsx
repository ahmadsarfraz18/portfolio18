"use client";

import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center opacity-50" />
    );
  }

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleOpen}
        className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background transition-all hover:bg-muted hover:border-white/20 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        aria-label="Toggle theme"
      >
        <AnimatePresence mode="wait">
          {theme === "light" && (
            <motion.div
              key="light"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] text-foreground" />
            </motion.div>
          )}
          {theme === "dark" && (
            <motion.div
              key="dark"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="h-[1.2rem] w-[1.2rem] text-foreground" />
            </motion.div>
          )}
          {theme === "system" && (
            <motion.div
              key="system"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Laptop className="h-[1.2rem] w-[1.2rem] text-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-2 w-32 rounded-xl border border-border bg-popover p-1 shadow-md z-50 overflow-hidden"
            >
              <button
                onClick={() => {
                  setTheme("light");
                  setIsOpen(false);
                }}
                className={`flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm transition-colors hover:bg-muted ${theme === 'light' ? 'bg-muted text-primary' : 'text-foreground'}`}
              >
                <Sun className="h-4 w-4" />
                <span>Light</span>
              </button>
              <button
                onClick={() => {
                  setTheme("dark");
                  setIsOpen(false);
                }}
                className={`flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm transition-colors hover:bg-muted ${theme === 'dark' ? 'bg-muted text-primary' : 'text-foreground'}`}
              >
                <Moon className="h-4 w-4" />
                <span>Dark</span>
              </button>
              <button
                onClick={() => {
                  setTheme("system");
                  setIsOpen(false);
                }}
                className={`flex w-full items-center gap-2 rounded-lg px-2 py-2 text-sm transition-colors hover:bg-muted ${theme === 'system' ? 'bg-muted text-primary' : 'text-foreground'}`}
              >
                <Laptop className="h-4 w-4" />
                <span>System</span>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
