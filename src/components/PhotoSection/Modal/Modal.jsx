import { useState } from 'react'
import styles from './Moda.module.css'
import classNames from 'classnames'

function Modal({
  closeModal,
  slidePhoto,
  fadeModalState,
  fadeState,
  photos,
  selectedPhoto,
}) {
  return (
    <div className={classNames(styles[fadeModalState], styles.modal)}>
      <img
        className={styles.closeIcon}
        src="../img/close_btn.svg"
        onClick={() => closeModal()}
      />
      <div
        className={classNames(styles.arrowContainer, styles.arrowContainerL)}
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
        className={classNames(styles.modalPhoto, styles[fadeState])}
        src={selectedPhoto.imgSrc}
        alt="fresh_photo"
      />

      <div
        className={classNames(styles.arrowContainer, styles.arrowContainerR)}
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
  )
}

export default Modal
