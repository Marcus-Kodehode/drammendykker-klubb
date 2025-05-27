import styles from './Contact.module.css'
import ContactIntro from './sections/contact/ContactIntro'
import ContactForm from './sections/contact/ContactForm'
import MapEmbed from './sections/contact/components/MapEmbed'

const Contact = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <ContactIntro />
        <ContactForm />
      </div>
      <MapEmbed />
    </section>
  )
}

export default Contact
