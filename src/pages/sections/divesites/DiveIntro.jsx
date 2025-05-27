import styles from './DiveIntro.module.css'
import OpenModalButton from '../../../components/base/OpenModalButton'

const DiveIntro = ({ onOpen }) => {
  return (
    <section className={styles.wrapper}>
      <h1>Velkommen til Drammen sportsdykkere kartotek.</h1>
      <div className={styles.columns}>
        <div className={styles.card}>
          <h2>Forord om kartoteket</h2>
          <p>
            I Norge har vi forskjellige dykke-sertifikater og de fleste har forskjellige navn på nivåene.
          </p>
          <p>Forklaring forskjellige koder:</p>
          <p><span className={`${styles.badge} ${styles.p1}`}>P1</span> = Open water</p>
          <p><span className={`${styles.badge} ${styles.p2}`}>P2</span> = Advanced til Rescue</p>
          <p><span className={`${styles.badge} ${styles.p3}`}>P3</span> = Divemaster</p>
        </div>
        <div className={styles.card}>
          <h2>Melde inn ny dykkeplass?</h2>
          <p>
            Kjenner du til et sted som ikke er med i denne listen? Hjelp oss ved å melde det inn!
          </p>
          <OpenModalButton onClick={onOpen} />
        </div>
      </div>
    </section>
  )
}

export default DiveIntro
