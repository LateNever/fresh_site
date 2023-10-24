import { useState, useEffect, useRef } from 'react'
import { useMountModal } from './Modal/useMountModal'
import classNames from 'classnames'
import styles from './PhotoSection.module.css'
import photos from '../../data/photos'
import Modal from './Modal/Modal'

function PhotoSection() {
  const [modal, setModal] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState('')
  const [fadeState, setFadeState] = useState('fadeIn')
  const [fadeModalState, setModalFadeState] = useState('modal')
  const [currentTimer, setCurrentTimer] = useState()
  const { mounted } = useMountModal({ modal })

  const getPhoto = (photo) => {
    setSelectedPhoto(photo)
    setModal(true)
    setModalFadeState('modalIn')
    setTimeout(() => {
      setModalFadeState('modalOn')
    }, 1)
  }

  const closeModal = () => {
    setModal(false)
    setModalFadeState('modalIn')
  }

  const slidePhoto = (direction, loopDirection) => {
    const timer = setTimeout(() => {
      if (!!photos[selectedPhoto.id + direction]) {
        console.log('NEXT')
        setSelectedPhoto(photos[selectedPhoto.id + direction])
      } else {
        setSelectedPhoto(photos[loopDirection])
        console.log('SKOK')
      }
      setFadeState('fadeIn')
    }, 100)
    clearTimeout(currentTimer)
    setFadeState('fadeOut')
    setCurrentTimer(timer)
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

      {mounted && (
        <Modal
          closeModal={closeModal}
          slidePhoto={slidePhoto}
          fadeModalState={fadeModalState}
          fadeState={fadeState}
          photos={photos}
          selectedPhoto={selectedPhoto}
        />
      )}
    </div>
  )
}

export default PhotoSection
