import styles from './ContactSection.module.css'
import bgCover from '../../img/backgrounds/bg_2.jpg'
import { ReactComponent as Logo } from '../../img/logo/LOGO.svg'

function ContactsSection() {
  return (
    <div className={styles.contactSection}>
      <img className={styles.cover} src={bgCover} alt="COVER"></img>
      <div className={styles.bgOverlay}></div>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <h3>Contacts</h3>
          <p>fresh@mail.ru</p>
        </div>
        <div className={styles.contentRight}>
          {/* <img className={styles.logo} src="../img/LOGO.svg" alt="LOGO"></img> */}
          <Logo className={styles.logo} />
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default ContactsSection
