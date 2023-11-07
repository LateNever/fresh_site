import { useState, useEffect } from 'react'
import NavBar from '../UI/NavBar'
import Footer from '../UI/Footer'
import classNames from 'classnames'
import styles from './StartSection.module.css'

function StartSection() {
  const renderDelay = 600

  const [logoFadeState, setLogoFadeState] = useState('fadeIn')

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        setLogoFadeState('fadeOn')
      }, 10)
    }, renderDelay)
  })

  return (
    <div className={styles.startSection}>
      <img className={styles.cover} src="../img/cover.jpg" alt="COVER"></img>
      <div className={styles.bgOverlay}></div>

      <img
        className={classNames(styles.logo, styles[logoFadeState])}
        src="../img/LOGO.svg"
        alt="LOGO"
      ></img>

      <Footer />
    </div>
  )
}

export default StartSection
