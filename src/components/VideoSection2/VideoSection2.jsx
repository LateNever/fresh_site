import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import variants from '../UI/Animate/variants'
import classNames from 'classnames'
import styles from './VideoSection2.module.css'
import BgVideo from '../../img/backgrounds/ZimaFRESH.mp4'
import youtube from '../../img/socials/youtube.svg'

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

  const contentAnimation = {
    hidden: {
      // y: -20,
      opacity: 0,
    },
    visible: (custom) => ({
      // y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: custom * 0.2 },
    }),
  }

  return (
    <div className={styles.videoSection}>
      <img
        className={styles.cover}
        src="../../img/backgrounds/bg_1.jpg"
        alt="COVER"
      ></img>
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
            transition={{ duration: 0.5, delay: 1.5 }}
            variants={variants}
          />
        )}
      </AnimatePresence>
      <div className={styles.bgOverlay}></div>
      <motion.img
        className={styles.socialsIco}
        src={youtube}
        alt="youtube"
        onClick={openVideo}
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
        variants={contentAnimation}
      ></motion.img>
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
