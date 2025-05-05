import styles from './OverlayButton.module.css'

const OverlayButton = ({ onClick, label, position }) => {
  return (
    <button className={`${styles.button} ${styles[position]}`} onClick={onClick}>
      {label}
    </button>
  )
}

export default OverlayButton
