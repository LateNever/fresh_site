import { useState, useEffect, useRef } from 'react'
import photos from '../../data/photos'
import styles from './PhotoSection.module.css'

function PhotoSection() {
  const [modal, setModal] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState('')

  const getPhoto = (photo) => {
    setSelectedPhoto(photo)
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  // let photoRef = useRef()

  const slidePhoto = (direction, loopDirection) => {
    console.log(selectedPhoto.id + direction)
    if (!!photos[selectedPhoto.id + direction]) {
      console.log('NEXT')
      setSelectedPhoto(photos[selectedPhoto.id + direction])
    } else {
      setSelectedPhoto(photos[loopDirection])
      console.log('SKOK')
    }
  }

  // useEffect(() => {
  //   let handler = (e) => {
  //     if (!photoRef.current.contains(e.target)) {
  //       closeModal()
  //     }
  //   }

  //   document.addEventListener('mousedown', handler)

  //   return () => {
  //     document.removeEventListener('mousedown', handler)
  //   }
  // })

  return (
    <div className={styles.photoSection}>
      <div className={`${styles.bgCircle} ${styles.bgCircle__1}`}></div>
      <div className={`${styles.bgCircle} ${styles.bgCircle__2}`}></div>
      <div className={`${styles.bgCircle} ${styles.bgCircle__3}`}></div>

      <h1>О группе в картинках</h1>
      <div className={styles.gallery}>
        {photos.map((photo) => {
          return (
            <div
              key={photo.id}
              onClick={() => {
                getPhoto(photo)
                // selectedPhotoRef.current = photo
              }}
            >
              <img
                src={photo.imgSrc}
                alt="fresh_photo"
                className={styles.photoImg}
              />
            </div>
          )
        })}
      </div>

      <div
        className={modal ? `${styles.modal} ${styles.modalOpen}` : styles.modal}
      >
        <img
          className={styles.closeIcon}
          src="../img/close_btn.svg"
          onClick={() => closeModal()}
        />
        <div
          className={`${styles.arrowContainer} ${styles.arrowContainerL}`}
          onClick={() => {
            slidePhoto(-1, photos.length - 1)
          }}
        >
          <img
            className={styles.navIco}
            src="../img/arrowLeft.svg"
            alt="arrowLeft"
          ></img>
        </div>

        <img
          // ref={photoRef}
          className={styles.modalPhoto}
          src={selectedPhoto.imgSrc}
          alt="fresh_photo"
        />
        <div
          className={`${styles.arrowContainer} ${styles.arrowContainerR}`}
          onClick={() => {
            slidePhoto(1, 0)
          }}
        >
          <img
            className={styles.navIco}
            src="../img/arrowRight.svg"
            alt="arrowRight"
          ></img>
        </div>
      </div>
    </div>
  )
}

export default PhotoSection
