import React from 'react'
import styles from './Footer.module.css'
import logo from '/images/drammen-logo.webp'
import vipps from '/images/vipps.webp'
import grasrot from '/images/grasrotandelen.webp'
import facebook from '/images/facebook.png'
import instagram from '/images/instagram.png'

const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      {/* 🧾 Vipps og Grasrot */}
      <div className={styles.left}>
        <img
          src={vipps}
          alt="Vipps #926581"
          className={`${styles.partner} ${styles.vipps}`}
        />
        <img
          src={grasrot}
          alt="Grasrotandelen"
          className={styles.partner}
        />
      </div>

      {/* 🌐 Sosiale medier */}
      <div className={styles.socialIcons}>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={facebook}
            alt="Facebook"
            className={styles.icon}
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={instagram}
            alt="Instagram"
            className={styles.icon}
          />
        </a>
      </div>

      {/* 🏊 Klubblogo og tekst */}
      <div className={styles.right}>
        <p>Drammen Sportsdykkere © 2025</p>
        <img
          src={logo}
          alt="Drammen Sportsdykkere Logo"
          className={styles.logo}
        />
      </div>

      {/* ♿ Tilgjengelighet og kildehenvisning (skjult) */}
      <small className={styles.visuallyHidden}>
        Ikoner fra{' '}
        <a href="https://www.flaticon.com/free-icons/instagram-logo">
          Pixel perfect
        </a>{' '}
        &amp;{' '}
        <a href="https://www.flaticon.com/free-icons/facebook">
          Freepik
        </a>{' '}
        via Flaticon.
      </small>
    </footer>
  )
}

export default Footer


/* Kommentar:
   Footer-komponenten viser støttepartnere (Vipps/Grasrot), sosiale medier og klubbinfo.
   På mobil vises alt som tre seksjoner under hverandre (grid), men på desktop er layouten
   uendret og horisontal.
*/

