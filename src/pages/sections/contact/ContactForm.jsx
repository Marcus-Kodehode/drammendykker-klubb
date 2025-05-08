import { useState } from 'react'
import styles from './ContactForm.module.css'
import SubmitStatus from './components/SubmitStatus'
import SendButton from '../../../components/base/SendButton'

const ContactForm = () => {
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Takk! Melding sendt 🚀')
    console.log('Skjema sendt!')

    // Tilbakestill skjema om ønskelig
    e.target.reset()

    // Nullstill etter noen sekunder (valgfritt)
    setTimeout(() => setStatus(''), 5000)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name">Navn</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">E-post</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Melding</label>
        <textarea id="message" name="message" rows="5" required />
      </div>

      <SendButton type="submit" />
      <SubmitStatus status={status} />
    </form>
  )
}

export default ContactForm
