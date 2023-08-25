import styles from './NavBar.module.css'

function NavBar() {
  return (
    <div className={styles.navBar}>
      {/* <h1>12345</h1> */}
      <img className={styles.menuIco} src="../img/menu.svg" alt="menu"></img>
    </div>
  )
}

export default NavBar
