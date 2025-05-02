import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import Nav from './Nav'
import logo from '/images/drammen-logo.webp'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
      <Link to="/" className={styles.logoLink}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>

        <h1 className={styles.title}>Drammen Sportsdykkere</h1>
      </div>
      <Nav />
    </header>
  )
}

export default Header
