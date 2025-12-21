import React from 'react';
import { TIMELINE_STAGES } from '../constants';
import { CheckCircle2 } from 'lucide-react';
import styles from './Timeline.module.scss';

export const Timeline: React.FC = () => {
  return (
    <section id="stages" className={styles.timeline}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Открытие бизнеса за 1 месяц
          </h2>
          <p className={styles.subtitle}>
            Мы сопровождаем вас на всех этапах: от идеи до торжественного открытия и первой прибыли.
          </p>
        </div>

        <div className={styles.track}>
          {/* Vertical Line for Desktop */}
          <div className={styles.trackLine}></div>

          <div className={styles.stageList}>
            {TIMELINE_STAGES.map((stage, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={stage.id}
                  className={`${styles.stageRow} ${isEven ? styles.stageRowReverse : ''}`}
                >
                  
                  {/* Content Side */}
                  <div
                    className={`${styles.stageContent} ${
                      isEven ? styles.stageContentLeft : styles.stageContentRight
                    }`}
                  >
                    <div className={styles.stageCard}>
                      <div className={styles.stageHeader}>
                        <h3 className={styles.stageTitle}>{stage.title}</h3>
                        <span className={styles.stageDuration}>
                          {stage.duration}
                        </span>
                      </div>
                      <ul className={styles.itemList}>
                        {stage.items.map((item, i) => (
                          <li key={i} className={styles.item}>
                            <CheckCircle2 className={styles.itemIcon} size={16} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center Marker */}
                  <div className={styles.stageMarker}>
                    {stage.id}
                  </div>

                  {/* Empty Side for layout balance */}
                  <div className={styles.stageSpacer}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

