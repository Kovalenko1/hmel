import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { CONTACTS } from '../constants';
import styles from './Header.module.scss';

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
        className={`${styles.header} ${
          isScrolled ? styles.headerScrolled : styles.headerTransparent
        }`}
      >
        <div className={styles.inner}>
          {/* Logo */}


          {/* Desktop Nav */}
          <nav className={styles.nav}>
            <button onClick={() => scrollToSection('legend')} className={styles.navButton}>Легенда</button>
            <button onClick={() => scrollToSection('stages')} className={styles.navButton}>Этапы</button>
            <button onClick={() => scrollToSection('formats')} className={styles.navButton}>Форматы</button>
            <button onClick={() => scrollToSection('contacts')} className={styles.navButton}>Контакты</button>
          </nav>

          {/* Contact & Mobile Toggle */}
          <div className={styles.actions}>
            <a href={`tel:${CONTACTS.phone.replace(/\s/g, '')}`} className={styles.contactLink}>
              <Phone size={18} className={styles.phoneIcon} />
              <span>{CONTACTS.phone}</span>
            </a>
            
            <button 
              className={styles.menuButton}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <button onClick={() => scrollToSection('legend')} className={styles.mobileLink}>Легенда</button>
            <button onClick={() => scrollToSection('stages')} className={styles.mobileLink}>Этапы</button>
            <button onClick={() => scrollToSection('formats')} className={styles.mobileLink}>Форматы</button>
            <button onClick={() => scrollToSection('contacts')} className={styles.mobileLink}>Контакты</button>
            <a href={`tel:${CONTACTS.phone.replace(/\s/g, '')}`} className={styles.mobileContact}>
              <Phone size={18} />
              <span>{CONTACTS.phone}</span>
            </a>
          </div>
        )}
      </header>
  );
};

