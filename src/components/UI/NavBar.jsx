import { motion } from 'framer-motion'
import variants from './Animate/variants'
import styles from './NavBar.module.css'
import { ReactComponent as Menu } from '../../img/UI/menu.svg'

function NavBar() {
  return (
    <motion.div
      className={styles.navBar}
      initial={'hidden'}
      animate={'visible'}
      transition={{ duration: 1, delay: 1 }}
      variants={variants}
    >
      <Menu className={styles.menuIco} />
    </motion.div>
  )
}

export default NavBar
