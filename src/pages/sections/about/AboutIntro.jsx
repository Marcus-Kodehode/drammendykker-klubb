import styles from './AboutIntro.module.css'
import logo from '/images/drammen-logo.webp'

const AboutIntro = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.card}>
        <div className={styles.text}>
          <h2>Om Drammen Sportsdykkere</h2>
          <p>
            Drammen Sportsdykkere er en aktiv klubb med dyktige medlemmer innen både apparat- og fridykking.
            Klubben har et sterkt fokus på sikkerhet, inkludering og sosialt miljø – både over og under vann.
          </p>
          <p className={styles.contact}>
            <strong>E-post:</strong> Info@drammensportsdykkere.no<br />
            <strong>Telefon:</strong> 977 05 385
          </p>
        </div>
        <div className={styles.logoWrap}>
          <img src={logo} alt="Klubblogo" className={styles.logo} />
        </div>
      </div>
    </section>
  )
}

export default AboutIntro
