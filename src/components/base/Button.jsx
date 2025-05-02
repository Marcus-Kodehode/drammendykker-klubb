import { NavLink } from 'react-router-dom'
import styles from './Button.module.css'

const Button = ({ text, to, variant = 'primary', size = 'md' }) => {
  return (
<NavLink
  to={to}
  className={({ isActive }) =>
    `${styles.button} ${styles[variant]} ${styles[size]} ${isActive ? styles.active : ''}`
  }
>
  {text}
  <span className={styles.bubble}></span> {/* ← ekstra boble om ønsket */}
</NavLink>


  )
}

export default Button
