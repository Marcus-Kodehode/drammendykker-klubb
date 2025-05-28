import styles from './OverlayButton.module.css'

const OverlayButton = ({ label, position, onClick, ariaLabel }) => {
  return (
    <button
      className={`${styles.button} ${styles[position]}`}
      onClick={onClick}
      aria-label={ariaLabel || position}
    >
      {label}
    </button>
  )
}

export default OverlayButton
