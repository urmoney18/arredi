'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

// Item animation: Slide in from top
const slideFromTopVariants = {
  hidden: { opacity: 0, y: -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  }
};

const sequenceVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2, // Small pause before sequence begins
    }
  }
};

export default function SplitScreenSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use scroll triggered zoom
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]); // Subtle enlarge

  return (
    <section id="filosofia" ref={containerRef} className="relative w-full flex flex-col md:flex-row min-h-screen bg-white">
      
      {/* Left Side: Content */}
      <div className="relative flex flex-col w-full md:w-1/2 justify-center items-center px-8 py-20 md:py-0 bg-white text-primary">
        <motion.div 
          variants={sequenceVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-start max-w-sm w-full"
        >
          <motion.p 
            variants={slideFromTopVariants} 
            className="font-body text-accent uppercase text-[10px] md:text-xs tracking-[0.25em] mb-2 font-semibold"
          >
            Since 1999
          </motion.p>
          
          <motion.p 
            variants={slideFromTopVariants} 
            className="font-body text-primary/70 uppercase text-[10px] tracking-[0.15em] mb-12 font-semibold"
          >
            Esperienza & Visione.
          </motion.p>
          
          <motion.h2 
            variants={slideFromTopVariants} 
            className="font-heading text-4xl sm:text-[48px] md:text-[80px] text-primary leading-[1.05] tracking-tight mb-8"
          >
            DESIGN<br />E MATERIA
          </motion.h2>
          
          <motion.p 
            variants={slideFromTopVariants} 
            className="font-body text-primary text-sm md:text-base leading-relaxed mb-12"
          >
            Sistemi in vetro, arredi custom e superfici all'avanguardia per l'interior.
          </motion.p>

          <motion.div variants={slideFromTopVariants}>
            <a 
              href="tel:+393280761062" 
              className="inline-block bg-black text-white px-10 py-[18px] rounded-[2px] uppercase tracking-[0.2em] text-[10px] font-semibold hover:bg-black/80 transition-colors"
            >
              Prenota consulenza
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Side: Image with Scroll Zoom */}
      <div className="relative w-full md:w-1/2 min-h-[50vh] md:min-h-screen overflow-hidden bg-secondary/20">
        <motion.div style={{ scale }} className="absolute inset-0 w-full h-full origin-center">
          <Image
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Design and Materia Dettagli"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            referrerPolicy="no-referrer"
          />
          {/* Subtle dark overlay for better integration */}
          <div className="absolute inset-0 bg-black/5 mix-blend-multiply" />
        </motion.div>
      </div>

    </section>
  );
}
