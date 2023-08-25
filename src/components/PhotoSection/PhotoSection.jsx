import styles from './PhotoSection.module.css'
import photos from '../../data/photos'

function PhotoSection() {
  return (
    <div className={styles.photoSection}>
      {/* <div className={styles.bgCircle}></div> */}
      <div className={styles.gallery}>
        {photos.map((photo) => {
          return (
            <div className={styles.photo} key={photo.id}>
              <img src={photo.imgSrc} alt="photo" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PhotoSection
