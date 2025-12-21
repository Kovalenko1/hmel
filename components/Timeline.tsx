import React from 'react';
import { TIMELINE_STAGES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <section id="stages" className="py-20 bg-wood-900 text-wood-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-wood-100 mb-4">
            Открытие бизнеса за 1 месяц
          </h2>
          <p className="text-wood-300 text-lg max-w-2xl mx-auto">
            Мы сопровождаем вас на всех этапах: от идеи до торжественного открытия и первой прибыли.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-wood-700 -translate-x-1/2"></div>

          <div className="space-y-12 relative z-10">
            {TIMELINE_STAGES.map((stage, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={stage.id} className={`flex flex-col lg:flex-row items-center ${isEven ? 'lg:flex-row-reverse' : ''} gap-8 lg:gap-0`}>
                  
                  {/* Content Side */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pl-16' : 'lg:pr-16'}`}>
                    <div className="bg-wood-800 p-8 rounded-sm shadow-xl border border-wood-700 hover:border-wood-500 transition-colors">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-serif text-2xl font-bold text-wood-100">{stage.title}</h3>
                        <span className="bg-accent text-white text-xs font-bold px-2 py-1 rounded">
                          {stage.duration}
                        </span>
                      </div>
                      <ul className="space-y-3">
                        {stage.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-wood-300 text-sm">
                            <CheckCircle2 className="shrink-0 text-wood-500 mt-0.5" size={16} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center Marker */}
                  <div className="lg:absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-wood-200 border-4 border-wood-900 z-20 font-serif font-bold text-wood-900 text-xl shadow-lg">
                    {stage.id}
                  </div>

                  {/* Empty Side for layout balance */}
                  <div className="hidden lg:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};