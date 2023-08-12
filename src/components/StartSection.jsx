import styles from './StartSection.module.css'
// import logo from '../img/LOGO.svg'

function StartSection() {
  return (
    <div className={styles.startSection}>
      <img className={styles.cover} src="../img/cover.jpg" alt="COVER"></img>
      <img className={styles.logo} src="../img/LOGO.svg" alt="LOGO"></img>
      <div className={styles.bgOverlay}></div>
      {/* <img className={styles.logo} src="../img/LOGO.svg" alt="FRESH LOGO"></img> */}
    </div>
  )
}

export default StartSection
