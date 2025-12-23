import React from 'react';
import { Wheat, Award, Flame } from 'lucide-react';
import styles from './Legend.module.scss';

export const Legend: React.FC = () => {
  return (
    <section id="legend" className={styles.legend}>
      {/* Decorative background elements */}
      <div className={styles.glowRight} />
      <div className={styles.glowLeft} />

      <div className={styles.container}>
        
        {/* The Legend Story */}
        <div className={styles.story}>
          <div className={styles.imageWrap}>
             <div className={styles.imageFrameWrap}>
                <div className={styles.imageFrame} />
                <img 
                  src="imgs/img159.jpg" 
                  alt="Старый мастер" 
                  className={styles.image} 
                />
             </div>
          </div>
          <div className={styles.storyContent}>
            <h2 className={styles.heading}>
              Легенда о <span className={styles.headingAccent}>Хмельяре</span>
            </h2>
            <div className={styles.storyText}>
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
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Wheat size={32} />
            </div>
            <h3 className={styles.cardTitle}>Возвращение к истокам</h3>
            <p className={styles.cardText}>
              Бренд напитков, возрождающий старорусские традиции культуры питья, каким оно было на Руси из покон веков
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Flame size={32} />
            </div>
            <h3 className={styles.cardTitle}>Наследие вкуса</h3>
            <p className={styles.cardText}>
              Память о временах, когда вкус имел смысл, а традиция передавалась из рук в руки, из века в век
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <Award size={32} />
            </div>
            <h3 className={styles.cardTitle}>Передача ценностей</h3>
            <p className={styles.cardText}>
               Мы стремимся сохранить атмосферу, которая связывает поколения и не подвластна времени
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};


