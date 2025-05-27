import { NavLink } from 'react-router-dom'
import navStyles from './Nav.module.css'
import buttonStyles from '../base/Button.module.css'

const navItems = [
  { to: '/', text: 'Hjem' },
  { to: '/om-oss', text: 'Om oss' },
  { to: '/kontakt', text: 'Kontakt' },
  { to: '/dykkerplasser', text: 'Dykkeplasser' },
  { to: '/medlemmer', text: 'Medlem' },
  { to: '/galleri', text: 'Bildegalleri' },
  { to: '/aktiviteter', text: 'Aktiviteter' }
]

const Nav = ({ setIsOpen }) => {
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Desktop meny */}
      <nav className={navStyles.navList}>
        {navItems.map(({ to, text }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `${buttonStyles.nav} ${isActive ? buttonStyles.active : ''}`
            }
          >
            {text}
            <span className={buttonStyles.bubble}></span>
            <span className={buttonStyles.bubble}></span>
            <span className={buttonStyles.bubble}></span>
          </NavLink>
        ))}
      </nav>

      {/* Mobil overlay */}
      <div className={navStyles.overlay}>
        <button
          className={navStyles.close}
          onClick={closeMenu}
          aria-label="Lukk meny"
        >
          ✕
        </button>
        <div className={navStyles.menu}>
          {navItems.map(({ to, text }) => (
            <NavLink
              key={to}
              to={to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `${buttonStyles.nav} ${isActive ? buttonStyles.active : ''}`
              }
            >
              {text}
              <span className={buttonStyles.bubble}></span>
              <span className={buttonStyles.bubble}></span>
              <span className={buttonStyles.bubble}></span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  )
}

export default Nav





/**
 * 📦 Nav.jsx
 * 
 * Denne komponenten håndterer all navigasjon i toppmenyen.
 * 
 * ✅ På desktop:
 *    - Viser alle navigasjonslenker horisontalt.
 * 
 * ✅ På mobil:
 *    - Viser en burger-knapp (☰) som åpner en vertikal meny.
 *    - Bytter ikon til ✖ når menyen er åpen.
 *    - Lukker menyen automatisk når en lenke trykkes.
 * 
 * 🎨 Styling og aktiv tilstand styres gjennom navStyles og globale knappe-stiler.
 */