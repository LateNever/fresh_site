import styles from './TestSection.module.css'
import photos from '../../data/photos'

function TestSection(props) {
  return (
    <div>
      <div className={styles.gallery}>
        {photos.map((photo) => {
          return (
            <div key={photo.id}>
              <img src={photo.imgSrc} alt="photo" className={styles.photoImg} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

TestSection.propTypes = {}

export default TestSection
