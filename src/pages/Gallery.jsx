import GalleryGrid from './sections/gallery/GalleryGrid';
import styles from './Gallery.module.css';

const Gallery = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Bildegalleri</h1>
      <p>Her kommer bilder fra klubbens aktiviteter og dykketurer.</p>
      <GalleryGrid />
    </div>
  );
};

export default Gallery;
