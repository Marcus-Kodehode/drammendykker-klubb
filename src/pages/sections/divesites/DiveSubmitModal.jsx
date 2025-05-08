import SubmitForm from './components/SubmitForm'
import styles from './DiveSubmitModal.module.css'

const DiveSubmitModal = ({ onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          &times;
        </button>
        <SubmitForm />
      </div>
    </div>
  )
}

export default DiveSubmitModal

