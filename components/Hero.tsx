'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

// Sequence container for the staggered animation
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

// Item animation: Slide in from top
const slideFromTopVariants = {
  hidden: { opacity: 0, y: -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number] // Explicitly cast to internal cubic bezier format
    }
  }
};

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col md:flex-row min-h-screen bg-background">
      {/* Left Side: Image */}
      <div className="relative w-full min-h-[50vh] md:w-1/2 md:min-h-screen">
        <Image
          src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Lusso Sartoriale"
          fill
          priority
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Subtle dark overlay for better integration with the image vibe */}
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
      </div>

      {/* Right Side: Navigation & Content */}
      <div className="relative flex flex-col w-full md:w-1/2 min-h-[50vh] md:min-h-screen bg-white text-primary">
        
        {/* Navigation Menu */}
        <header className="w-full pt-12 pb-8 px-8 flex justify-center">
          <nav className="flex items-center gap-8 text-[11px] uppercase tracking-widest font-body font-semibold">
            <Link href="#" className="hover:text-accent transition-colors">Home</Link>
            <Link href="#" className="hover:text-accent transition-colors">Acquisti</Link>
            <Link href="#" className="hover:text-accent transition-colors">Blog</Link>
            <Link href="#" className="hover:text-accent transition-colors">Contatto</Link>
          </nav>
        </header>

        {/* Main Animated Content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-8 sm:px-12 w-full max-w-xl mx-auto pb-12">
          <motion.div 
            variants={sequenceVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center"
          >
            <motion.p 
              variants={slideFromTopVariants} 
              className="font-body text-primary uppercase text-xs md:text-sm tracking-[0.25em] mb-2"
            >
              La nostra essenza: Sartorialità.
            </motion.p>
            
            <motion.p 
              variants={slideFromTopVariants} 
              className="font-body text-primary/70 uppercase text-xs tracking-[0.15em] mb-12"
            >
              Creiamo atmosfere.
            </motion.p>
            
            <motion.h1 
              variants={slideFromTopVariants} 
              className="font-heading text-5xl sm:text-6xl md:text-[4rem] text-primary leading-[1.1] uppercase mb-8"
            >
              IL LUSSO<br />SARTORIALE
            </motion.h1>
            
            <motion.p 
              variants={slideFromTopVariants} 
              className="font-body text-primary/80 text-sm md:text-base max-w-sm mb-12"
            >
              Vesti la tua dimora con un&apos;eleganza irripetibile.
            </motion.p>

            <motion.div variants={slideFromTopVariants}>
              <Link 
                href="#consulenza" 
                className="inline-block bg-[#111111] text-white px-10 py-[18px] rounded-full uppercase tracking-[0.2em] text-[10px] font-semibold hover:bg-black/80 transition-colors"
              >
                Prenota consulenza
              </Link>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
