import { useState, useEffect, useRef } from 'react'
import styles from './VideoSection.module.css'

function VideoSection() {
  const [showMode, setShowMode] = useState(false)

  const handlerClick = () => {
    setShowMode(true)
  }

  let content = null
  let startContent = (
    <>
      <img
        className={styles.socialsIco}
        src="../img/youtube.svg"
        alt="youtube"
      ></img>
    </>
  )

  if (showMode) {
    content = (
      <iframe
        className={styles.video}
        // width="560"
        // height="315"
        src="https://www.youtube.com/embed/toE1jye6HLY?si=VoW9bCCJRGc-P7ol?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay=; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    )
    startContent = null
  }

  return (
    <div className={styles.videoSection}>
      <div className={`${styles.bgCircle} ${styles.bgCircle__1}`}></div>
      <div className={`${styles.bgCircle} ${styles.bgCircle__2}`}></div>
      <div className={`${styles.bgCircle} ${styles.bgCircle__3}`}></div>

      <h1>Видео</h1>
      <div className={styles.videoDiv} onClick={handlerClick}>
        {startContent}
        {content}
      </div>
    </div>
  )
}

export default VideoSection
