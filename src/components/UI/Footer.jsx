import styles from './Footer.module.css'
import ButtonIcon from './ButtonIcon'

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.iconsContainer}>
        <a href="#" target="_blank">
          <img
            className={styles.socialsIco}
            src="../img/whatsup.svg"
            alt="whatsup"
          ></img>
        </a>

        <a href="#" target="_blank">
          <img
            className={styles.socialsIco}
            src="../img/telegram.svg"
            alt="telegram"
          ></img>
        </a>

        <a
          // className={styles.socialsIco}
          href="https://vk.com/fresh_music_band"
          target="_blank"
        >
          <img
            className={styles.socialsIco}
            src="../img/vk.svg"
            alt="vk"
            // href="https://vk.com/fresh_music_band"
          ></img>
        </a>

        <a href="https://www.youtube.com/@fresh_music_band" target="_blank">
          <img
            className={styles.socialsIco}
            src="../img/youtube.svg"
            alt="youtube"
          ></img>
        </a>

        {/* <ButtonIcon icon="../img/whatsup.svg" /> */}
      </div>
    </div>
  )
}

export default Footer
