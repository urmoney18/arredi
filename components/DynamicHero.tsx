'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ASSETS, CONTACT_INFO } from '@/lib/constants';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function DynamicHero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col lg:flex-row bg-white pt-24 lg:pt-0">
      {/* Left Column: Typography */}
      <div className="w-full lg:w-[45%] flex flex-col justify-between px-6 sm:px-12 py-12 lg:py-24">
        
        {/* Top: Breadcrumb */}
        <motion.nav 
          aria-label="Breadcrumb"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-body text-[#8E8E8E] text-[11px] uppercase tracking-widest mt-8 lg:mt-16"
        >
          <ol className="flex space-x-2">
            <li><span aria-current="page">Atelier</span></li>
            <li><span aria-hidden="true">/</span></li>
            <li><span aria-current="page">Barletta</span></li>
          </ol>
        </motion.nav>

        {/* Center: Heading */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={{
            show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
          }}
          className="flex flex-col my-16 lg:my-0"
        >
          <motion.h1 
            variants={textVariants}
            className="font-body text-[#1A1A1A] text-5xl sm:text-6xl lg:text-7xl xl:text-[84px] leading-[1.05] tracking-tight font-bold max-w-lg"
          >
            IL PARTICOLARE<br/>BARLETTA
          </motion.h1>
          
          <motion.div variants={textVariants} className="mt-12">
            <a 
              href={CONTACT_INFO.phoneHref} 
              aria-label={`Prenota consulenza chiamando il numero ${CONTACT_INFO.phone}`}
              className="inline-block border-b border-[#1A1A1A] text-[#1A1A1A] pb-1 uppercase tracking-[0.15em] text-[11px] font-body font-semibold transition-opacity hover:opacity-60"
            >
              Prenota consulenza
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom: Technical Metadata */}
        <motion.dl 
          aria-label="Company Metadata"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-12 text-[#1A1A1A] font-body text-xs"
        >
          <div className="flex flex-col gap-1">
            <dt className="text-[#8E8E8E]">Partner</dt>
            <dd className="font-medium">IL PARTICOLARE S.r.l.</dd>
          </div>
          <div className="flex flex-col gap-1">
            <dt className="text-[#8E8E8E]">Luogo</dt>
            <dd className="font-medium">{CONTACT_INFO.addressFull}</dd>
          </div>
        </motion.dl>
      </div>

      {/* Right Column: Visual */}
      <div className="w-full lg:w-[55%] h-[60vh] lg:h-screen relative overflow-hidden bg-[#F9F9F9]">
        <motion.div
           initial={{ opacity: 0, scale: 1.05 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           className="absolute inset-0 w-full h-full origin-center"
        >
          <Image
             src={ASSETS.heroVisual}
             alt="Architectural glass and metal partition system"
             fill
             priority
             quality={100}
             sizes="(max-width: 1024px) 100vw, 60vw"
             className="object-cover object-center"
             referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
