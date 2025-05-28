import { useEffect, useRef, useState } from 'react'
import styles from './Credit.module.css'
import logo from '/images/logo.png'

const Credit = () => {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className={`${styles.container} ${visible ? styles.show : ''}`}
    >
      <img src={logo} alt="Børresen Utvikling Logo" className={styles.logo} />
      <div className={styles.textBlock}>
        <p className={`${styles.label} ${visible ? styles.focusIn : styles.blurOut}`}>
          Utviklet av
        </p>
        <p className={`${styles.brand} ${visible ? styles.focusIn : styles.blurOut}`}>
          Børresen Utvikling
        </p>
      </div>
    </section>
  )
}

export default Credit
