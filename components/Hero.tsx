import React from 'react';
import { Button } from './Button';
import styles from './Hero.module.scss';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Background Image with Overlay */}
      <div className={styles.background}>
        <img 
          src="imgs/хмельяр лого.svg" 
          alt="Atmospheric Brewery" 
          className={styles.backgroundImage}
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.badgeWrap}>
           <span className={styles.badge}>
             Франшиза магазина разливных напитков
           </span>
        </div>
        <h1 className={styles.title}>
          Вкус, что всех объединяет
        </h1>

        <div className={styles.buttonRow}>
          <Button onClick={scrollToContact} className={styles.heroButton}>
            Оставьте заявку прямо сейчас
          </Button>
        </div>

        <div className={styles.scrollHint}>
           <span className={styles.scrollHintText}>Листайте вниз</span>
        </div>
      </div>
    </section>
  );
};

