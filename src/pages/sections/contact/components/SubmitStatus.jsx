import styles from './SubmitStatus.module.css'

const SubmitStatus = ({ status }) => {
  if (!status) return null

  return <p className={styles.status}>{status}</p>
}

export default SubmitStatus
