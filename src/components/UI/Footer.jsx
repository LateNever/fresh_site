import { motion } from 'framer-motion'
import variants from './Animate/variants'
import styles from './Footer.module.css'
import { ReactComponent as Whatsup } from '../../img/socials/whatsup.svg'
import { ReactComponent as Telegram } from '../../img/socials/telegram.svg'
import { ReactComponent as Vk } from '../../img/socials/vk.svg'
import { ReactComponent as Youtube } from '../../img/socials/youtube.svg'

function Footer() {
  return (
    <motion.div
      className={styles.footer}
      initial={'hidden'}
      whileInView={'visible'}
      transition={{ duration: 1, delay: 1 }}
      variants={variants}
    >
      <div className={styles.iconsContainer}>
        <a href="#" target="_blank">
          <Whatsup className={styles.socialsIco} />
        </a>

        <a href="#" target="_blank">
          <Telegram className={styles.socialsIco} />
        </a>

        <a href="https://vk.com/fresh_music_band" target="_blank">
          <Vk className={styles.socialsIco} />
        </a>

        <a href="https://www.youtube.com/@fresh_music_band" target="_blank">
          <Youtube className={styles.socialsIco} />
        </a>
      </div>
    </motion.div>
  )
}

export default Footer
