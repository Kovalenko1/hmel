import React from 'react';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.title}>ХМЕЛЬЯРЪ</div>
        <p className={styles.copy}>Наследие вкуса. Традиции. Качество.</p>
        <div className={styles.legal}>
          &copy; {new Date().getFullYear()} Все права защищены. Франшиза.
        </div>
      </div>
    </footer>
  );
};

