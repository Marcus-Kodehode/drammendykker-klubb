import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa'
import OverlayButton from '../../../../components/base/OverlayButton'
import styles from './Lightbox.module.css'


const Lightbox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  const image = images[currentIndex]

  return (
    <div className={styles.overlay} onClick={onClose}>
      <img
        src={image}
        alt={`Bilde ${currentIndex + 1}`}
        className={styles.image}
        onClick={(e) => e.stopPropagation()}
      />

      <OverlayButton
        label={<FaTimes />}
        position="close"
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
        ariaLabel="Lukk bildevisning"
      />

      <OverlayButton
        label={<FaChevronLeft />}
        position="prev"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        ariaLabel="Forrige bilde"
      />

      <OverlayButton
        label={<FaChevronRight />}
        position="next"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        ariaLabel="Neste bilde"
      />
    </div>
  )
}

export default Lightbox
