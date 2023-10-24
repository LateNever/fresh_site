import { motion } from 'framer-motion'
import variants from './Animate/variants'
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <motion.div
      className={styles.navBar}
      initial={'hidden'}
      animate={'visible'}
      transition={{ duration: 1, delay: 0.5 }}
      variants={variants}
    >
      {/* <h1>12345</h1> */}
      <img className={styles.menuIco} src="../img/menu.svg" alt="menu"></img>
    </motion.div>
  )
}

export default NavBar
