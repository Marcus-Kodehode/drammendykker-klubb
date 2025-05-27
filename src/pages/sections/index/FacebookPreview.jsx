import styles from './FacebookPreview.module.css'

const FacebookPreview = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.logo} />
          <div>
            <p className={styles.name}>Drammen Sportsdykkere</p>
            <p className={styles.followers}>638 følgere</p>
          </div>
        </div>

        <div className={styles.image} />

        <div className={styles.content}>
          <p className={styles.date}>MAN, 25 MAI KL 18:00 UTC+1</p>
          <p className={styles.event}>Ekstraordinært årsmøte 2025</p>
          <p className={styles.subtext}>Blir oppdatert når bekreftet</p>
          <a href="/aktiviteter" className={styles.calendarLink}>Vis kalender</a>
        </div>
      </div>
    </section>
  )
}

export default FacebookPreview
