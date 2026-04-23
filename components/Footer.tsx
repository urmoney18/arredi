'use client';

import { motion } from "motion/react";
import { ASSETS, CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <motion.footer 
      id="contatti"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative w-full bg-white text-[#1A1A1A] border-t border-[#E5E5E5] flex flex-col"
    >
      <div className="w-full flex flex-col lg:flex-row min-h-[500px]">
        
        {/* Area 1: Legacy (Vertical Text) */}
        <div className="hidden lg:flex w-24 shrink-0 border-r border-[#E5E5E5] items-center justify-center relative">
          <p className="font-body text-[10px] uppercase tracking-widest text-[#8E8E8E] transform -rotate-90 whitespace-nowrap">
            Since 1999 — 27 anni di eccellenza
          </p>
        </div>

        {/* Area 2: Contact Info */}
        <div className="w-full lg:w-[400px] shrink-0 border-b lg:border-b-0 lg:border-r border-[#E5E5E5] p-12 lg:p-24 flex flex-col justify-between">
          <div>
            <h2 className="font-body text-2xl md:text-3xl font-bold tracking-tight mb-8">
              IL PARTICOLARE
            </h2>
            <div className="flex flex-col gap-6 text-sm">
              <div className="flex flex-col">
                <span className="text-[#8E8E8E] mb-1">Luogo</span>
                <span className="font-medium">{CONTACT_INFO.address}<br/>{CONTACT_INFO.city}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#8E8E8E] mb-1">Telefono</span>
                <a href={CONTACT_INFO.phoneHref} aria-label={`Call us at ${CONTACT_INFO.phone}`} className="font-medium hover:opacity-60 transition-opacity">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex flex-col">
                <span className="text-[#8E8E8E] mb-1">Orari</span>
                <span className="font-medium leading-relaxed">Lunedì: 17:00 – 21:00<br/>Martedì - Sabato: 09:00 – 13:00 / 17:00 – 21:00<br/>Domenica: Chiuso</span>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-xs text-[#8E8E8E]">
            <a href={CONTACT_INFO.instagram} target="_blank" rel="noreferrer" aria-label="Visit our Instagram" className="hover:text-[#1A1A1A] transition-colors mr-6">Instagram</a>
            <a href={CONTACT_INFO.facebook} target="_blank" rel="noreferrer" aria-label="Visit our Facebook" className="hover:text-[#1A1A1A] transition-colors">Facebook</a>
          </div>
        </div>

        {/* Area 3: Expanded Map */}
        <div className="w-full lg:flex-1 min-h-[400px] lg:min-h-full relative overflow-hidden bg-white p-0 m-0">
          <iframe 
            src={ASSETS.mapIframeUrl} 
            title="Google Maps Location of Il Particolare Barletta"
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "grayscale(100%) contrast(1.1) opacity(0.85)", display: "block" }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          />
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="w-full px-6 lg:px-12 py-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] tracking-widest font-body text-[#8E8E8E] uppercase">
        <p>© {new Date().getFullYear()} Il Particolare S.r.l.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-[#1A1A1A] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#1A1A1A] transition-colors">Cookies</a>
        </div>
      </div>
    </motion.footer>
  );
}
