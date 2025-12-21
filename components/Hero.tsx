import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="imgs/хмельяр лого.svg" 
          alt="Atmospheric Brewery" 
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-wood-950/80 via-wood-900/60 to-wood-900/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <div className="mb-6 animate-fade-in-up">
           <span className="inline-block py-1 px-3 border border-wood-400 text-wood-200 text-xs md:text-sm uppercase tracking-widest rounded mb-4 bg-wood-950/50 backdrop-blur-sm">
             Франшиза напитков с характером
           </span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-wood-100 font-bold mb-6 drop-shadow-2xl leading-tight">
          ХМЕЛЬЯРЪ
        </h1>
        
        <p className="font-sans text-lg md:text-2xl text-wood-200 max-w-3xl mb-12 font-light leading-relaxed">
          Каждая капля — это возвращение к истокам, к щедрому хлебосольному столу, наполненному смыслами и природной силой.
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          <Button onClick={scrollToContact} className="text-lg px-10 py-4">
            Оставьте заявку прямо сейчас
          </Button>
        </div>

        <div className="absolute bottom-8 animate-bounce text-wood-300">
           <span className="text-xs uppercase tracking-widest">Листайте вниз</span>
        </div>
      </div>
    </section>
  );
};