import styles from './AboutSection.module.css'
import NavBar from '../UI/NavBar'
import AboutCarousel from './AboutCarousel'
import Footer from '../UI/Footer'

function AboutSection() {
  return (
    <div className={styles.aboutSection}>
      {/* <img className={styles.cover} src="../img/about-bg.jpg" alt="COVER"></img>
      <div className={styles.bgOverlay}></div>
      <div className={styles.bgOverlay2}></div> */}
      {/* <NavBar /> */}
      <div className={`${styles.bgCircle} ${styles.bgCircle__1}`}></div>
      <div className={`${styles.bgCircle} ${styles.bgCircle__2}`}></div>
      <div className={`${styles.bgCircle} ${styles.bgCircle__3}`}></div>
      <AboutCarousel />
      {/* <Footer /> */}
    </div>
  )
}

export default AboutSection
