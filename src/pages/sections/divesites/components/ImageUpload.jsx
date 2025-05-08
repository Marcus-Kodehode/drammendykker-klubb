import styles from './ImageUpload.module.css'

const ImageUpload = ({ onChange }) => {
  return (
    <div className={styles.upload}>
      <label htmlFor="images">Last opp bilder</label>
      <input
        type="file"
        id="images"
        name="images"
        accept="image/*"
        multiple
        onChange={onChange}
      />
    </div>
  )
}

export default ImageUpload
