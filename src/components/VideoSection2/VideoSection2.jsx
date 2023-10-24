import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import variants from '../UI/Animate/variants'
import classNames from 'classnames'
import styles from './VideoSection2.module.css'
import BgVideo from '../../img/ZimaFRESH.mp4'

function VideoSection2() {
  const [modal, setModal] = useState(false)
  const [bgVideoShow, setBgVideoShow] = useState(true)
  const [videoShow, setVideoShow] = useState(false)

  const openVideo = () => {
    setBgVideoShow(!bgVideoShow)
  }
  const closeVideo = () => {
    setBgVideoShow(!bgVideoShow)
  }

  return (
    <div className={styles.videoSection}>
      <img className={styles.cover} src="../img/cover.jpg" alt="COVER"></img>
      <AnimatePresence>
        {bgVideoShow && (
          <motion.video
            src={BgVideo}
            autoPlay
            muted
            loop
            className={styles.cover}
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
            transition={{ duration: 0.3 }}
            variants={variants}
          />
        )}
      </AnimatePresence>
      <div className={styles.bgOverlay}></div>
      <img
        className={styles.socialsIco}
        src="../img/youtube.svg"
        alt="youtube"
        onClick={openVideo}
      ></img>
      <AnimatePresence>
        {!bgVideoShow && (
          <motion.div
            className={styles.videoDiv}
            initial={'hidden'}
            animate={'visible'}
            exit={'hidden'}
            transition={{ duration: 0.3 }}
            variants={variants}
          >
            <img
              className={styles.closeIcon}
              src="../img/close_btn.svg"
              onClick={() => closeVideo()}
            />
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default VideoSection2
