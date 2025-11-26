import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-brand-navy/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-white">
            WFG <span className="text-brand-red">Playbook</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Products</a>
          <a href="#whyaon" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Why Aon?</a>
          <a href="#contacts" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-navy border-t border-slate-800 p-4 md:hidden flex flex-col gap-4 shadow-xl">
           <a href="#products" className="text-slate-300 hover:text-white font-medium" onClick={() => setMobileMenuOpen(false)}>Products</a>
           <a href="#whyaon" className="text-slate-300 hover:text-white font-medium" onClick={() => setMobileMenuOpen(false)}>Why Aon?</a>
           <a href="#contacts" className="text-slate-300 hover:text-white font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
};