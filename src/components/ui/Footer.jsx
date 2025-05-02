import styles from './Footer.module.css'
import logo from '/images/drammen-logo.webp'
import vipps from '/images/vipps.webp'
import grasrot from '/images/grasrotandelen.webp'
import facebook from '/images/facebook.png'
import instagram from '/images/instagram.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <img src={vipps} alt="Vipps" className={`${styles.partner} ${styles.vipps}`} />
        <img src={grasrot} alt="Grasrotandelen" className={styles.partner} />
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
  <img src={facebook} alt="Facebook" className={styles.icon} />
</a>
<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
  <img src={instagram} alt="Instagram" className={styles.icon} />
</a>
<small className={styles.visuallyHidden}>
  Ikoner fra <a href="https://www.flaticon.com/free-icons/instagram-logo">Pixel perfect</a> & 
  <a href="https://www.flaticon.com/free-icons/facebook">Freepik</a> via Flaticon.
</small>


      </div>
      <div className={styles.right}>
  <p>Drammen Sportsdykkere © 2025</p>
  <img src={logo} alt="Klubblogo" className={styles.logo} />
</div>

    </footer>
  )
}

export default Footer
