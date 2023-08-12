import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.iconsContainer}>
        <img
          className={styles.socialsIco}
          src="../img/whatsup.svg"
          alt="whatsup"
        ></img>
        <img
          className={styles.socialsIco}
          src="../img/telegram.svg"
          alt="telegram"
        ></img>
        <img className={styles.socialsIco} src="../img/vk.svg" alt="vk"></img>
        <img
          className={styles.socialsIco}
          src="../img/youtube.svg"
          alt="youtube"
        ></img>
      </div>
    </div>
  )
}

export default Footer
