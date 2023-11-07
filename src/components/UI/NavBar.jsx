import { motion } from 'framer-motion'
import variants from './Animate/variants'
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <motion.div
      className={styles.navBar}
      initial={'hidden'}
      animate={'visible'}
      transition={{ duration: 1, delay: 2 }}
      variants={variants}
    >
      <img className={styles.menuIco} src="../img/menu.svg" alt="menu"></img>
    </motion.div>
  )
}

export default NavBar
