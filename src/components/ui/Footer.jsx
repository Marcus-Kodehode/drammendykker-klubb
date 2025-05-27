import styles from './Footer.module.css'
import logo from '/images/drammen-logo.webp'
import facebook from '/images/facebook.png'
import instagram from '/images/instagram.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Venstre: Copyright + logo */}
      <div className={styles.left}>
        <p>© {new Date().getFullYear()} Drammen Sportsdykkere</p>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>

      {/* Midten: CTA */}
      <div className={styles.center}>
        <p className={styles.ctaText}>
          Klar for nye eventyr under vann?
        </p>
        <a href="/kontakt" className={styles.ctaButton}>
          Bli medlem
        </a>
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

