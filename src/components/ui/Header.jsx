import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '/images/drammen-logo.webp'
import Nav from './Nav'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Link to="/" className={styles.logoLink}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
        <h1 className={styles.title}>Drammen Sportsdykkere</h1>
      </div>

      {/* Burger for mobil */}
      <button
        className={styles.burger}
        onClick={() => setIsOpen(true)}
        aria-label="Åpne meny"
      >
        ☰
      </button>

      {/* ⬇ Rendre meny alltid, men kun vis overlay når isOpen */}
      <Nav setIsOpen={setIsOpen} isOpen={isOpen} />
    </header>
  )
}

export default Header

