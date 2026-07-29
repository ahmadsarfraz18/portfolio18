'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { Preloader } from './Preloader';

export function ClientEffects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <Preloader />
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />
      
      {/* Global Background Glow & Noise */}
      <div className="pointer-events-none fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-[#080808]" />
        
        {/* Very subtle radial gradient at the top */}
        <div className="absolute top-[-20%] left-1/2 w-[800px] h-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px] opacity-60" />
      </div>
    </>
  );
}
