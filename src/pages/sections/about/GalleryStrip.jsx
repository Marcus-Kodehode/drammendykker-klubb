import { useState } from 'react'
import styles from './GalleryStrip.module.css'
import kris1 from '/images/kris1.jpg'
import kris2 from '/images/kris2.jpg'
import kris3 from '/images/kris3.jpg'
import LightBox from './components/LightBox'

const images = [kris1, kris2, kris3]

const GalleryStrip = () => {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleClose = () => setSelectedIndex(null)

  return (
    <section>
      <div className={styles.gallery}>
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Dykker ${idx + 1}`}
            onClick={() => setSelectedIndex(idx)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <LightBox
        images={images}
        currentIndex={selectedIndex}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      )}

      <p className={styles.credit}>
        Foto:{' '}
        <a
          href="https://www.flickr.com/photos/148835878@N08/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kris-Mikael Krister
        </a>
      </p>
    </section>
  )
}

export default GalleryStrip
