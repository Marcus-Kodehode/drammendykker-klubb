import styles from './DiveIntro.module.css'
import OpenModalButton from '../../../components/base/OpenModalButton'

const DiveIntro = ({ onOpen }) => {
  return (
    <section className={styles.wrapper}>
      <h1>Velkommen til Drammen sportsdykkere kartotek.</h1>
      <div className={styles.columns}>
        <div>
          <h2>Forord om kartoteket</h2>
          <p>
            I Norge har vi forskjellige dykke-sertifikater og de fleste har forskjellige navn på nivåene.
          </p>
          <p>Forklaring forskjellige koder:</p>
          <p>P1 = Open water</p>
          <p>P2 = Advanced til Rescue</p>
          <p>P3 = Divemaster</p>
        </div>
        <div>
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
