import { motion } from 'framer-motion'
import styles from './AboutNav.module.css'
import classNames from 'classnames'
import arrowLeft from '../../img/UI/arrowLeft.svg'
import arrowRight from '../../img/UI/arrowRight.svg'
import dot from '../../img/UI/dot.svg'

function AboutNav({ slide, aboutContent, currentSlide }) {
  return (
    <div className={styles.navContainer}>
      <div className={styles.nav}>
        <div className={styles.navIcoContainer}>
          <img
            onClick={() => {
              if (!!aboutContent[currentSlide.id - 1]) {
                slide(currentSlide.id - 1)
              } else {
                slide(aboutContent[aboutContent.length - 1].id)
              }
            }}
            className={styles.navIco}
            src={arrowLeft}
            alt="arrowLeft"
          ></img>
        </div>
        <div className={styles.dots}>
          {aboutContent.map((page) => {
            return (
              <div className={styles.dotContainer} key={page.id}>
                <img
                  onClick={() => {
                    slide(page.id)
                  }}
                  className={classNames(styles.navDot, {
                    [styles.dotActive]: currentSlide.id == page.id,
                  })}
                  src={dot}
                  alt="dot"
                ></img>
              </div>
            )
          })}
        </div>
        <div className={styles.navIcoContainer}>
          <img
            onClick={() => {
              if (!!aboutContent[currentSlide.id + 1]) {
                slide(currentSlide.id + 1)
              } else {
                slide(aboutContent[0].id)
              }
            }}
            className={styles.navIco}
            src={arrowRight}
            alt="arrowRight"
          ></img>
        </div>
      </div>
    </div>
  )
}

export default AboutNav
