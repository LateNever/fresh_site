import { useState, useEffect } from 'react'
import NavBar from '../UI/NavBar'
import Footer from '../UI/Footer'
import classNames from 'classnames'
import styles from './StartSection.module.css'
import bgCover from '../../img/backgrounds/bg_1.jpg'
import { ReactComponent as Logo } from '../../img/logo/LOGO.svg'

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
      <img className={styles.cover} src={bgCover} alt="COVER"></img>
      <div className={styles.bgOverlay}></div>

      <Logo className={classNames(styles.logo, styles[logoFadeState])} />

      {/* <Footer /> */}
    </div>
  )
}

export default StartSection
