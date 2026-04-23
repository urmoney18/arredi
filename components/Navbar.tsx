'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Sistemi', href: '#sistemi' },
  { name: 'Design', href: '#design' },
  { name: 'Recensioni', href: '#recensioni' },
  { name: 'Contatti', href: '#contatti' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group flex items-center">
            {/* Logo Particolare Black */}
            <h1 className={`font-body tracking-tight transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-primary'} text-2xl font-bold`}>
              IL PARTICOLARE
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative text-[11px] font-body uppercase tracking-[0.1em] font-medium transition-colors ${
                  isScrolled ? 'text-primary hover:text-black' : 'text-primary hover:text-black'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1.5 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full bg-primary`} />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-primary' : 'text-primary'
            }`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
            <span className="sr-only">Apri menu</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            <div className="flex items-center justify-between p-6">
              <h1 className="font-body tracking-tight text-primary text-2xl font-bold">
                IL PARTICOLARE
              </h1>
              <button
                className="p-2 text-primary hover:text-secondary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex flex-col items-center justify-center flex-1 gap-8 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-body text-primary tracking-wide hover:text-secondary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
