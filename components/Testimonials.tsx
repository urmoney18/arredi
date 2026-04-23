'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star } from 'lucide-react';

import { ASSETS } from '@/lib/constants';
import Image from 'next/image';

const REVIEWS = [
  {
    text: "Professionalità e cura ai dettagli :)",
    author: "Sabrina Lamacchia",
  },
  {
    text: "Soluzioni eleganti, attenzione maniacale al cliente. Il risultato supera sempre le aspettative.",
    author: "Federica Ilgrande",
  },
  {
    text: "Materiali di altissima qualità e una consulenza d'arredo davvero impeccabile.",
    author: "Valentina Cicero",
  },
  {
    text: "Un punto di riferimento a Barletta. Ho affidato loro l'arredamento di casa con risultati meravigliosi.",
    author: "Serena Rosa Sguera",
  },
  {
    text: "Cortesia, precisione e soprattutto idee sempre innovative e di gran gusto.",
    author: "Anna Diviccaro",
  },
  {
    text: "I veri maestri dell'interior design, pronti a risolvere ogni esigenza con classe.",
    author: "Antonietta Di Lorenzo",
  },
  {
    text: "Lavorare con Il Particolare significa affidarsi a professionisti competenti e seri.",
    author: "Mimmo Montenero",
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="recensioni" className="py-32 bg-white relative overflow-hidden flex flex-col items-center justify-center min-h-[60vh] border-t border-[#E5E5E5]">
      {/* Subtle Secondary Visual Background */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <Image
          src={ASSETS.secondaryVisual}
          alt="Architettura interni"
          fill
          quality={100}
          className="object-cover object-center grayscale"
          sizes="100vw"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="max-w-4xl mx-auto px-8 sm:px-12 w-full text-center relative z-10">
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
        >
          <div className="flex justify-center gap-1.5 mb-10">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-primary text-primary" />
            ))}
          </div>
          
          <div className="relative h-48 md:h-32 flex items-center justify-center w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <p className="font-heading text-2xl md:text-3xl leading-relaxed mb-8 text-primary max-w-3xl">
                  "{REVIEWS[currentIndex].text}"
                </p>
                <p className="font-body uppercase tracking-widest text-[11px] font-semibold text-secondary">
                  {REVIEWS[currentIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-500 rounded-full ${
                  idx === currentIndex 
                    ? 'w-8 h-[2px] bg-primary' 
                    : 'w-2 h-[2px] bg-secondary'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
