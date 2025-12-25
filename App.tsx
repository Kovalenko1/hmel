import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Legend } from './components/Legend';
import { Timeline } from './components/Timeline';
import { Formats } from './components/Formats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import styles from './App.module.scss';

declare global {
  interface Window {
    ym?: (...args: any[]) => void;
  }
}

const App: React.FC = () => {
  useEffect(() => {
    (function (m: any, e: Document, t: string, r: string, i: string, k?: HTMLScriptElement, a?: Element | null) {
      m[i] = m[i] || function (...args: any[]) {
        (m[i].a = m[i].a || []).push(args);
      };
      m[i].l = Date.now();
      for (let j = 0; j < e.scripts.length; j += 1) {
        if (e.scripts[j].src === r) {
          return;
        }
      }
      k = e.createElement(t) as HTMLScriptElement;
      a = e.getElementsByTagName(t)[0];
      k.async = true;
      k.src = r;
      a?.parentNode?.insertBefore(k, a);
    })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=106022307', 'ym');

    window.ym?.(106022307, 'init', {
      ssr: true,
      webvisor: true,
      clickmap: true,
      ecommerce: 'dataLayer',
      accurateTrackBounce: true,
      trackLinks: true,
    });
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Hero />
        <Legend />
        <Timeline />
        <Formats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
