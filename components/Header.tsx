import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { CONTACTS } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-wood-900/95 shadow-xl py-3 backdrop-blur-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center text-white">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
           {/* Stylized Text Logo */}
           <div className="flex flex-col items-start">
             <img 
              src="imgs/хмельяр надпись.svg" 
              alt="Atmospheric Brewery" 
              className="w-36 h-12"
              />
           </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
          <button onClick={() => scrollToSection('legend')} className="hover:text-wood-300 transition-colors">Легенда</button>
          <button onClick={() => scrollToSection('stages')} className="hover:text-wood-300 transition-colors">Этапы</button>
          <button onClick={() => scrollToSection('formats')} className="hover:text-wood-300 transition-colors">Форматы</button>
          <button onClick={() => scrollToSection('contacts')} className="hover:text-wood-300 transition-colors">Контакты</button>
        </nav>

        {/* Contact & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href={`tel:${CONTACTS.phone.replace(/\s/g, '')}`} className="hidden md:flex items-center gap-2 font-bold hover:text-wood-300 transition-colors">
            <Phone size={18} className="text-accent" />
            <span>{CONTACTS.phone}</span>
          </a>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-wood-900 border-t border-wood-800 md:hidden p-4 flex flex-col gap-4 shadow-xl">
          <button onClick={() => scrollToSection('legend')} className="text-white py-2 border-b border-wood-800">Легенда</button>
          <button onClick={() => scrollToSection('stages')} className="text-white py-2 border-b border-wood-800">Этапы</button>
          <button onClick={() => scrollToSection('formats')} className="text-white py-2 border-b border-wood-800">Форматы</button>
          <button onClick={() => scrollToSection('contacts')} className="text-white py-2 border-b border-wood-800">Контакты</button>
          <a href={`tel:${CONTACTS.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-accent font-bold py-2">
            <Phone size={18} />
            <span>{CONTACTS.phone}</span>
          </a>
        </div>
      )}
    </header>
  );
};