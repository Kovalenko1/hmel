import React from 'react';
import { Wheat, Award, Flame } from 'lucide-react';

export const Legend: React.FC = () => {
  return (
    <section id="legend" className="py-20 md:py-32 bg-wood-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-wood-200 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-wood-300 rounded-full blur-3xl opacity-20 translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* The Legend Story */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="lg:w-1/2 order-2 lg:order-1">
             <div className="relative">
                <div className="absolute -inset-4 border-2 border-wood-400 rounded-sm translate-x-2 translate-y-2" />
                <img 
                  src="imgs/img159.jpg" 
                  alt="Старый мастер" 
                  className="rounded-sm shadow-2xl relative z-10 w-full object-cover h-[500px] sepia-[.3]" 
                />
             </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 space-y-6 text-wood-900">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-wood-800">
              Легенда о <span className="text-accent">Хмельяре</span>
            </h2>
            <div className="prose prose-lg text-wood-800 font-serif italic text-xl leading-loose">
              <p>
                «Говорят, в старом Яру, где дикий хмель вился по дубам, жил мастер, чьи напитки сбивали с ног и поднимали дух. 
                Его звали Хмельяр — знаток традиций и рецептов, трав, и душевных разговоров у костра.
              </p>
              <p>
                Он не готовил пиво ради прибыли. Он вёл беседу с хмелем, раскрывал его тайный вкус и силу. 
                Хмельяр варил то, что согревает даже без огня, и подавал только тем, кто знал, за чем пришёл — 
                не за градусом, а за историей в бокале».
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-wood-50 p-8 rounded-sm shadow-md border border-wood-200 text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="mx-auto w-16 h-16 bg-wood-200 rounded-full flex items-center justify-center mb-6 text-wood-800 group-hover:bg-accent group-hover:text-white transition-colors">
              <Wheat size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-wood-900 mb-3">Наследие вкуса</h3>
            <p className="text-wood-700">
              Бережно восстановленное по древним рецептам для современного ценителя подлинности.
            </p>
          </div>

          <div className="bg-wood-50 p-8 rounded-sm shadow-md border border-wood-200 text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="mx-auto w-16 h-16 bg-wood-200 rounded-full flex items-center justify-center mb-6 text-wood-800 group-hover:bg-accent group-hover:text-white transition-colors">
              <Flame size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-wood-900 mb-3">Характер</h3>
            <p className="text-wood-700">
              Бренд напитков с характером, где каждая капля наполнена смыслами и природной силой.
            </p>
          </div>

          <div className="bg-wood-50 p-8 rounded-sm shadow-md border border-wood-200 text-center group hover:-translate-y-2 transition-transform duration-300">
            <div className="mx-auto w-16 h-16 bg-wood-200 rounded-full flex items-center justify-center mb-6 text-wood-800 group-hover:bg-accent group-hover:text-white transition-colors">
              <Award size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-wood-900 mb-3">Качество</h3>
            <p className="text-wood-700">
               Только натуральные ингредиенты, проверенные поставщики и строгий контроль на всех этапах.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};