import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './AboutCarousel.module.css'
import { ReactComponent as Logo } from '../../img/logo/LOGO.svg'
import { ReactComponent as ArrowLeft } from '../../img/UI/arrowLeft.svg'
import AboutNav from './AboutNav'
import aboutContent from './aboutContent'

function AboutCarousel() {
  const [currentSlide, setCurrentSlide] = useState(aboutContent[0])

  const animateOffset = 10
  const animateDuration = 0.2

  const slide = (page) => {
    setCurrentSlide(aboutContent[page])
  }

  const contentAnimation = {
    hidden: {
      x: -75,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: custom * 0.2 },
    }),
  }

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.content}>
        <motion.div
          className={styles.contentLeft}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5, once: true }}
          variants={contentAnimation}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              className={styles.contLeftContainer}
              initial={{ opacity: 0, x: -animateOffset }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -animateOffset }}
              transition={{ duration: animateDuration }}
            >
              <div className={styles.title}>
                <h1>{currentSlide.title}</h1>
              </div>
              <div className={styles.text}>
                <p>{currentSlide.text}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Есть проблема: при частом нажатии на стрелку, компонент ломается, 
          связана с работой AnimatePresence (если его убрать то все ок) */}
          <AboutNav
            slide={slide}
            aboutContent={aboutContent}
            currentSlide={currentSlide}
          />
        </motion.div>
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          variants={contentAnimation}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              className={styles.contentRight}
              initial={{ opacity: 0, x: animateOffset }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: animateOffset }}
              transition={{ duration: animateDuration }}
            >
              <div className={styles.bgOverlay}></div>
              <img
                src={currentSlide.img}
                alt="img"
                className={styles.contentImg}
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutCarousel
