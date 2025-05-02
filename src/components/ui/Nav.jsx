import { NavLink } from 'react-router-dom';
import navStyles from './Nav.module.css';
import buttonStyles from '../base/Button.module.css';

const navItems = [
  { to: '/', text: 'Hjem' },
  { to: '/om-oss', text: 'Om oss' },
  { to: '/kontakt', text: 'Kontakt' },
  { to: '/dykkeplasser', text: 'Dykkeplasser' },
  { to: '/medlemmer', text: 'Medlem' },
  { to: '/galleri', text: 'Bildegalleri' },
  { to: '/aktiviteter', text: 'Aktiviteter' },
];

const Nav = () => {
  return (
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
  );
};

export default Nav;
