import styles from './GalleryStrip.module.css'
import kris1 from '/images/kris1.jpg'
import kris2 from '/images/kris2.jpg'
import kris3 from '/images/kris3.jpg'

const GalleryStrip = () => {
  return (
<section className={styles.galleryWrapper}>
  <div className={styles.gallery}>
    <img src={kris1} alt="Dykker 1" />
    <img src={kris2} alt="Dykker 2" />
    <img src={kris3} alt="Dykker 3" />
  </div>
  <p className={styles.credit}>
    Foto: <a href="https://www.flickr.com/photos/148835878@N08/" target="_blank" rel="noopener noreferrer">Kris-Mikael Krister</a>
  </p>
</section>
    
  )
}

export default GalleryStrip
