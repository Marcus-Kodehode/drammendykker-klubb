import styles from './MapEmbed.module.css'

const MapEmbed = () => {
  return (
    <div className={styles.mapContainer}>
      <iframe
        title="Google Maps – Drammen Sportsdykkere"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10206.951739496749!2d10.1905!3d59.7439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4641234567890abc%3A0xabcdef1234567890!2sDrammen%20Sportsdykkere!5e0!3m2!1sno!2sno!4v1700000000000"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default MapEmbed
