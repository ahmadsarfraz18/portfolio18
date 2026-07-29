'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = 'hidden';
    
    // Simulate minimum loading time for the animation sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = '';
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080808]"
        >
          <div className="flex flex-col items-center justify-center overflow-hidden">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold tracking-tighter text-white"
            >
              <motion.span
                initial={{ display: 'inline-block' }}
                animate={{ display: 'none' }}
                transition={{ delay: 1, duration: 0.1 }}
              >
                MA
              </motion.span>
              <motion.span
                initial={{ opacity: 0, display: 'none' }}
                animate={{ opacity: 1, display: 'inline-block' }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                Mahar Ahmad Sarfraz
              </motion.span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="mt-6 flex items-center gap-3"
            >
              <div className="h-px w-8 bg-white/20" />
              <span className="text-xs font-medium tracking-widest text-white/50 uppercase">
                Loading Portfolio...
              </span>
              <div className="h-px w-8 bg-white/20" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
