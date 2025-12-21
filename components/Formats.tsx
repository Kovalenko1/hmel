import React from 'react';
import { STORE_FORMATS } from '../constants';
import { Button } from './Button';

export const Formats: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="formats" className="py-20 bg-wood-50">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-wood-900 text-center mb-16">
          Форматы магазинов
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {STORE_FORMATS.map((format, index) => (
            <div key={index} className="bg-white rounded-sm overflow-hidden shadow-lg border border-wood-200 flex flex-col group">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-wood-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={`imgs/${format.imageSeed}`} 
                  alt={format.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                  <h3 className="font-serif text-3xl font-bold text-white">{format.title}</h3>
                  <p className="text-wood-200 text-sm font-medium uppercase tracking-wider">{format.area}</p>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="space-y-6 mb-8 flex-grow">
                  <div>
                    <span className="block text-xs uppercase text-wood-500 font-bold tracking-widest mb-1">Чистая прибыль</span>
                    <span className="text-3xl font-serif font-bold text-accent">{format.profit}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <span className="block text-xs uppercase text-wood-500 font-bold tracking-widest mb-1">Окупаемость</span>
                        <span className="text-wood-900 font-medium">{format.payback}</span>
                     </div>
                  </div>

                  <div className="bg-wood-50 p-4 rounded border border-wood-100">
                    <p className="text-wood-700 text-sm italic">
                      "{format.concept}"
                    </p>
                  </div>
                </div>
                
                <Button onClick={scrollToContact} className="w-full">
                  Выбрать
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};