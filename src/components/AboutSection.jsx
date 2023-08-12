import styles from './AboutSection.module.css'
import NavBar from './NavBar'
import AboutCarousel from './AboutCarousel'
import Footer from './Footer'

function AboutSection() {
  return (
    <div className={styles.aboutSection}>
      <img className={styles.cover} src="../img/about-bg.jpg" alt="COVER"></img>
      <div className={styles.bgOverlay}></div>
      <div className={styles.bgOverlay2}></div>
      <NavBar />
      <AboutCarousel />
      <Footer />
    </div>
  )
}

export default AboutSection
