import styles from './Intro.module.css';

const Intro = () => {
  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.heroIntro}>
      <div className={styles.overlay}>
        <h1>Velkommen til Drammen Sportsdykkere</h1>
        <p>Bli med på eventyret under vann</p>
        <button onClick={scrollToHero} className={styles.exploreButton}>
            Utforsk mer
        </button>
      </div>
    </section>
  );
};

export default Intro;
