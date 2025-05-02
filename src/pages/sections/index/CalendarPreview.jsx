import styles from './CalendarPreview.module.css';

const CalendarPreview = () => {
  return (
    <section className={styles.wrapper}>
      <h3>Kommende aktiviteter</h3>
      <div className={styles.event}>
        <div className={styles.date}>
          <span className={styles.month}>NOV</span>
          <span className={styles.day}>28</span>
        </div>
        <div className={styles.info}>
          <p className={styles.dates}>November 28 - December 7</p>
          <p className={styles.title}>Skagerak Dykkekrets tur – Egypt</p>
        </div>
      </div>
      <a href="#" className={styles.link}>Vis kalender</a>
    </section>
  );
};

export default CalendarPreview;
