import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Legend } from './components/Legend';
import { Timeline } from './components/Timeline';
import { Formats } from './components/Formats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import styles from './App.module.scss';


const App: React.FC = () => {
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
