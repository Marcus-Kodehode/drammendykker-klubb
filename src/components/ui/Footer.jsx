import styles from './Footer.module.css'
import logo from '/images/drammen-logo.webp'
import facebook from '/images/facebook.png'
import instagram from '/images/instagram.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Venstre: Copyright + logo */}
      <div className={styles.left}>
        <p>© {new Date().getFullYear()} Drammen Sportsdykkere</p>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>

      {/* Midten: CTA tekst + knapper */}
      <div className={styles.center}>
        <p className={styles.ctaText}>
          Klar for nye eventyr eller vil du støtte klubben?
        </p>
        <div className={styles.buttonGroup}>
          <Link to="/kontakt" className={styles.ctaButton}>
            Bli medlem
          </Link>
          <Link to="/støtt-oss" className={styles.ctaButtonAlt}>
            Støtt oss
          </Link>
        </div>
      </div>

      {/* Høyre: Sosiale medier */}
      <div className={styles.right}>
        <a href="https://www.facebook.com/DrammenSportsdykkere" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" className={styles.icon} />
        </a>
        <a href="https://www.instagram.com/drammensportsdykkere/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" className={styles.icon} />
        </a>
      </div>
    </footer>
  )
}

export default Footer



/* Kommentar:
   Footer-komponenten viser støttepartnere (Vipps/Grasrot), sosiale medier og klubbinfo.
   På mobil vises alt som tre seksjoner under hverandre (grid), men på desktop er layouten
   uendret og horisontal.
*/

