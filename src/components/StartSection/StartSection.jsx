import { useState, useEffect } from 'react'
import classNames from 'classnames'
import styles from './StartSection.module.css'
// import logo from '../img/LOGO.svg'

function StartSection() {
  const renderDelay = 600
  // const animationTime = 0

  // const [logoRender, setLogoRender] = useState(false)
  const [logoFadeState, setLogoFadeState] = useState('fadeIn')

  useEffect(() => {
    setTimeout(() => {
      // setLogoRender(true)
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

      {/* {logoRender && (
        <img
          className={classNames(styles.logo, styles[logoFadeState])}
          src="../img/LOGO.svg"
          alt="LOGO"
        ></img>
      )} */}
    </div>
  )
}

export default StartSection
