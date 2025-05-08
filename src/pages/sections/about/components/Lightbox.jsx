import styles from './LightBox.module.css'
import OverlayButton from '../../../../components/base/OverlayButton';

const LightBox = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  const image = images[currentIndex]

  return (
    <div className={styles.overlay} onClick={onClose}>
      <img
        src={image}
        alt={`Bilde ${currentIndex + 1}`}
        className={styles.image}
        onClick={(e) => e.stopPropagation()}
      />
      <OverlayButton label="×" position="close" onClick={onClose} />
      <OverlayButton label="←" position="prev" onClick={(e) => { e.stopPropagation(); onPrev(); }} />
      <OverlayButton label="→" position="next" onClick={(e) => { e.stopPropagation(); onNext(); }} />
    </div>
  )
}

export default LightBox
