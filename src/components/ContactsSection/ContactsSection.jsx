import styles from './ContactSection.module.css'

function ContactsSection() {
  return (
    <div className={styles.contactSection}>
      <img className={styles.cover} src="../img/cover.jpg" alt="COVER"></img>
      <div className={styles.bgOverlay}></div>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <h3>Contacts</h3>
          <p>fresh@mail.ru</p>
        </div>
        <div className={styles.contentRight}>
          <img className={styles.logo} src="../img/LOGO.svg" alt="LOGO"></img>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  )
}

export default ContactsSection
