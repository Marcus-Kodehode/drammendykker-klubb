import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import styles from './GalleryGrid.module.css';

const images = Array.from({ length: 30 }, (_, i) => `/images/gallery/bilde${i + 1}.${['1','26'].includes((i+1).toString()) ? 'png' : ['2','3','12','14','16','21','27','30'].includes((i+1).toString()) ? 'webp' : 'jpg'}`);

const GalleryGrid = () => {
  return (
    <PhotoProvider>
      <div className={styles.grid}>
        {images.map((src, idx) => (
          <PhotoView key={idx} src={src}>
            <div className={styles.card}>
              <img src={src} alt={`Galleri ${idx + 1}`} />
            </div>
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
  );
};

export default GalleryGrid;
