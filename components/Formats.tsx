import React from 'react';
import { STORE_FORMATS } from '../constants';
import { Button } from './Button';
import styles from './Formats.module.scss';

export const Formats: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="formats" className={styles.formats}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Форматы магазинов
        </h2>

        <div className={styles.grid}>
          {STORE_FORMATS.map((format, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.media}>
                <div className={styles.overlay} />
                <img 
                  src={`imgs/${format.imageSeed}`} 
                  alt={format.title}
                  className={styles.image}
                />
                <div className={styles.mediaInfo}>
                  <h3 className={styles.cardTitle}>{format.title}</h3>
                  <p className={styles.cardArea}>{format.area}</p>
                </div>
              </div>
              
              <div className={styles.body}>
                <div className={styles.bodyContent}>
                  <div>
                    <span className={styles.statLabel}>Чистая прибыль</span>
                    <span className={styles.statValue}>{format.profit}</span>
                  </div>
                  
                  <div className={styles.metaGrid}>
                     <div>
                        <span className={styles.statLabel}>Окупаемость</span>
                        <span className={styles.metaValue}>{format.payback}</span>
                     </div>
                  </div>

                  <div className={styles.concept}>
                    <p className={styles.conceptText}>
                      "{format.concept}"
                    </p>
                  </div>
                </div>
                
                <Button onClick={scrollToContact} className={styles.fullWidthButton}>
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

