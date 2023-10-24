import { motion } from 'framer-motion'
import variants from './Animate/variants'
import styles from './Footer.module.css'
import ButtonIcon from './ButtonIcon'
import { ReactComponent as Whatsup } from '../../img/whatsup.svg'

function Footer() {
  return (
    <motion.div
      className={styles.footer}
      initial={'hidden'}
      animate={'visible'}
      transition={{ duration: 1, delay: 0.5 }}
      variants={variants}
    >
      <div className={styles.iconsContainer}>
        <a href="#" target="_blank">
          <Whatsup className={styles.socialsIco} />
          {/* <img
            className={styles.socialsIco}
            src="../img/whatsup.svg"
            alt="whatsup"
          ></img> */}
        </a>

        <a href="#" target="_blank">
          <img
            className={styles.socialsIco}
            src="../img/telegram.svg"
            alt="telegram"
          ></img>
        </a>

        <a href="https://vk.com/fresh_music_band" target="_blank">
          <img className={styles.socialsIco} src="../img/vk.svg" alt="vk"></img>
        </a>

        <a href="https://www.youtube.com/@fresh_music_band" target="_blank">
          <img
            className={styles.socialsIco}
            src="../img/youtube.svg"
            alt="youtube"
          ></img>
        </a>
      </div>
    </motion.div>
  )
}

export default Footer
