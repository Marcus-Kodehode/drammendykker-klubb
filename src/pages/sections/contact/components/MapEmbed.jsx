import styles from './MapEmbed.module.css'



const MapEmbed = () => {
return (
  <div className={styles.mapContainer}>
    <iframe
      title="Google Maps – Drammen Sportsdykkere"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10207.156856395646!2d10.2049!3d59.7439!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4641234567890abc%3A0xabcdef1234567890!2sDrammen!5e0!3m2!1sno!2sno!4v1700000000000"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
)

}

export default MapEmbed
