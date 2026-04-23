'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

const SERVICES = [
  {
    title: "Metal & Glass Systems",
    copy: "Pareti divisorie e porte interne in vetro con eleganti strutture in metallo. Soluzioni architettoniche create per dividere gli ambienti mantenendo luce fluida e design essenziale.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    reverse: true
  },
  {
    title: "Total Bespoke",
    copy: "Progettazione e realizzazione di elementi d'arredo completamente su misura. Cucine su progetto, armadiature integrate e divani sartoriali per plasmare l'esatta geometria della tua idea.",
    image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    reverse: false
  },
  {
    title: "Interior Surfaces",
    copy: "Superfici d'autore e rivestimenti d'avanguardia. Carte da parati di alta gamma, materiali innovativi e soluzioni tessili architettoniche pensati per valorizzare volumi e profondità.",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    reverse: true
  }
];

const textVariants = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
};

function ServiceRow({ item, index }: { item: typeof SERVICES[0], index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Isolate scroll progress to each individual row for the perfect parallax zoom effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <div 
      ref={containerRef} 
      className={`w-full flex flex-col md:flex-row min-h-[60vh] bg-white ${item.reverse ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Text Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-20 lg:p-32">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            show: { transition: { staggerChildren: 0.25 } }
          }}
          className="max-w-md flex flex-col items-start w-full"
        >
          <motion.div variants={textVariants} className="flex items-center gap-4 mb-6">
            <span className="text-[10px] uppercase font-body font-bold tracking-[0.2em] text-secondary">
              / 0{index + 1}
            </span>
            <div className="h-[1px] w-8 bg-secondary" />
          </motion.div>
          
          <motion.h3 
            variants={textVariants} 
            className="font-heading text-3xl md:text-5xl lg:text-[54px] text-primary leading-[1.05] tracking-tight mb-8 font-bold"
          >
            {item.title}
          </motion.h3>
          
          <motion.p 
            variants={textVariants} 
            className="font-body text-foreground text-sm md:text-base leading-relaxed"
          >
            {item.copy}
          </motion.p>
        </motion.div>
      </div>

      {/* Image Side */}
      <div className="w-full md:w-1/2 relative min-h-[40vh] md:min-h-full overflow-hidden bg-secondary/10">
        <motion.div style={{ scale }} className="absolute inset-0 origin-center w-full h-full">
          <Image 
            src={item.image} 
            alt={item.title} 
            fill 
            quality={100}
            className="object-cover object-center" 
            sizes="(max-width: 768px) 100vw, 50vw" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/5 mix-blend-multiply pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
}

export default function AlternatingServices() {
  return (
    <section id="servizi" className="flex flex-col w-full bg-white">
      {SERVICES.map((service, index) => (
        <ServiceRow key={index} item={service} index={index} />
      ))}
    </section>
  );
}
