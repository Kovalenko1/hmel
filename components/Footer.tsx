import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-wood-950 text-wood-400 py-8 border-t border-wood-900">
      <div className="container mx-auto px-4 text-center">
        <div className="font-serif text-2xl font-bold text-wood-200 mb-4 tracking-widest">ХМЕЛЬЯРЪ</div>
        <p className="text-sm mb-4">Наследие вкуса. Традиции. Качество.</p>
        <div className="text-xs opacity-60">
          &copy; {new Date().getFullYear()} Все права защищены. Франшиза.
        </div>
      </div>
    </footer>
  );
};