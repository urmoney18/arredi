'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { ASSETS } from '@/lib/constants';

const SERVICES = [
  {
    title: "Sistemi in Vetro e Metallo",
    copy: "Pareti divisorie e porte interne. Soluzioni architettoniche create per dividere gli ambienti mantenendo luce fluida e design essenziale.",
    image: ASSETS.services.glassSystems,
    id: "sistemi"
  },
  {
    title: "Arredo su Misura",
    copy: "Cucine high-end e armadiature integrate per plasmare un lusso geometrico e funzionale.",
    image: ASSETS.services.bespoke,
    id: "design"
  },
  {
    title: "Interni e Tessile",
    copy: "Superfici d'autore e dettagli architettonici tattili che definiscono la gerarchia visiva dello spazio.",
    image: ASSETS.services.interior,
    id: "interni"
  }
];

function HorizontalCard({ item, index }: { item: typeof SERVICES[0], index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax subtle movement for the image
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div 
      ref={containerRef}
      id={item.id}
      className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-white"
    >
      <div className="w-[85vw] max-w-[1400px] h-[75vh] relative custom-grid">
        <motion.div 
          className="absolute inset-0 overflow-hidden rounded-[2px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div style={{ y }} className="absolute inset-0 -top-20 -bottom-20 w-full h-[120%]">
             <Image 
               src={item.image} 
               alt={`Visual showing ${item.title}`} 
               fill 
               quality={100}
               className="object-cover object-center"
               sizes="85vw"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-black/15 mix-blend-multiply" />
          </motion.div>
        </motion.div>
        
        {/* Caption Card appearing from bottom */}
        <motion.div 
          className="absolute bottom-0 left-0 bg-white p-8 md:p-12 max-w-[500px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] uppercase font-body font-bold tracking-[0.2em] text-[#8E8E8E]">
              / 0{index + 1}
            </span>
            <div className="h-[1px] w-8 bg-[#E5E5E5]" />
          </div>
          <h3 className="font-heading text-3xl md:text-4xl text-[#1A1A1A] leading-tight mb-4 tracking-tight">
            {item.title}
          </h3>
          <p className="font-body text-[#1A1A1A]/70 text-sm md:text-base leading-relaxed">
            {item.copy}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default function HorizontalServices() {
  return (
    <section className="flex flex-col w-full bg-white pb-32">
      <div className="py-24 text-center">
         <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="font-heading text-[#1A1A1A] text-4xl sm:text-5xl tracking-tight uppercase"
         >
           Le Nostre Proposte
         </motion.h2>
      </div>
      <div className="flex flex-col gap-24 md:gap-32">
        {SERVICES.map((service, index) => (
          <HorizontalCard key={index} item={service} index={index} />
        ))}
      </div>
    </section>
  );
}
