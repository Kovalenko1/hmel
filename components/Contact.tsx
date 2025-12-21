import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACTS } from '../constants';
import { Button } from './Button';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormState({ name: '', phone: '' });
    }, 1000);
  };

  return (
    <section id="contacts" className="relative py-20 bg-wood-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#d3a656 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-wood-100 rounded-sm shadow-2xl overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="bg-wood-800 text-wood-100 p-12 md:w-5/12 flex flex-col justify-between relative overflow-hidden">
             {/* Decorative circle */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-2xl"></div>

            <div>
              <h2 className="font-serif text-3xl font-bold mb-8">Свяжитесь с нами</h2>
              <p className="text-wood-300 mb-12">
                Готовы начать свой бизнес с душой? Оставьте заявку, и мы вышлем вам подробный финансовый план.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-wood-700 flex items-center justify-center text-accent">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="block text-xs text-wood-400 uppercase tracking-widest">Телефон</span>
                    <a href={`tel:${CONTACTS.phone.replace(/\s/g, '')}`} className="font-bold text-lg hover:text-white transition-colors">
                      {CONTACTS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-wood-700 flex items-center justify-center text-accent">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-xs text-wood-400 uppercase tracking-widest">Email</span>
                    <a href={`mailto:${CONTACTS.email}`} className="font-bold text-lg hover:text-white transition-colors">
                      {CONTACTS.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-wood-700">
              <span className="font-serif text-2xl font-bold text-wood-600 opacity-50">ХМЕЛЬЯРЪ</span>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-12 md:w-7/12 bg-wood-50">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-wood-900">Заявка принята!</h3>
                <p className="text-wood-600">Мы свяжемся с вами в ближайшее время.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-4">
                  Отправить еще
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-wood-900 mb-2">Оставьте заявку</h3>
                <p className="text-wood-600 mb-6 text-sm">Заполните форму ниже, чтобы получить консультацию.</p>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-wood-700 mb-2 uppercase tracking-wide">Ваше имя</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-white border border-wood-300 rounded focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="Иван Иванов"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-wood-700 mb-2 uppercase tracking-wide">Номер телефона</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 bg-white border border-wood-300 rounded focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="+7 (999) 000-00-00"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  />
                </div>

                <Button type="submit" className="w-full py-4 text-lg mt-4">
                  Оставьте заявку прямо сейчас
                </Button>
                
                <p className="text-xs text-wood-500 text-center mt-4">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper icon for success state
const CheckCircle = ({ size }: { size: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);