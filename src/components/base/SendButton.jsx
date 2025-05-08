import styles from './SendButton.module.css'

const SendButton = ({ text = "Send melding", disabled = false }) => {
  return (
    <button type="submit" className={styles.button} disabled={disabled}>
      {text}
    </button>
  )
}

export default SendButton
