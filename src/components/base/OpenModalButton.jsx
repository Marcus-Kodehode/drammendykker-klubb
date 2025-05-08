import styles from './OpenModalButton.module.css'

const OpenModalButton = ({ onClick }) => (
    <button className={styles.button} onClick={onClick}>
      Trykk her
    </button>
  )
  


export default OpenModalButton
