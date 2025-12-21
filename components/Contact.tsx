import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { CONTACTS } from '../constants';
import { Button } from './Button';
import styles from './Contact.module.scss';

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
    <section id="contacts" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.panel}>
          
          {/* Info Side */}
          <div className={styles.info}>
             {/* Decorative circle */}
            <div className={styles.infoGlow}></div>

            <div>
              <h2 className={styles.infoTitle}>Свяжитесь с нами</h2>
              <p className={styles.infoText}>
                Готовы начать свой бизнес с душой? Оставьте заявку, и мы вышлем вам подробный финансовый план.
              </p>
              
              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Телефон</span>
                    <a href={`tel:${CONTACTS.phone.replace(/\s/g, '')}`} className={styles.infoLink}>
                      {CONTACTS.phone}
                    </a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Email</span>
                    <a href={`mailto:${CONTACTS.email}`} className={styles.infoLink}>
                      {CONTACTS.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.infoFooter}>
              <span className={styles.brandMark}>ХМЕЛЬЯРЪ</span>
            </div>
          </div>

          {/* Form Side */}
          <div className={styles.formSide}>
            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>
                  <CheckCircle size={32} />
                </div>
                <h3 className={styles.successTitle}>Заявка принята!</h3>
                <p className={styles.successText}>Мы свяжемся с вами в ближайшее время.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className={styles.successButton}>
                  Отправить еще
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h3 className={styles.formTitle}>Оставьте заявку</h3>
                <p className={styles.formSubtitle}>Заполните форму ниже, чтобы получить консультацию.</p>
                
                <div>
                  <label htmlFor="name" className={styles.fieldLabel}>Ваше имя</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className={styles.input}
                    placeholder="Иван Иванов"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={styles.fieldLabel}>Номер телефона</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className={styles.input}
                    placeholder="+7 (999) 000-00-00"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  />
                </div>

                <Button type="submit" className={styles.formButton}>
                  Оставьте заявку прямо сейчас
                </Button>
                
                <p className={styles.formNote}>
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

