import styles from './ButtonIcon.module.css'

function ButtonIcon(props) {
  const { icon, onClick } = props
  return <img className={styles.icon} src={icon} alt="icon"></img>
}

export default ButtonIcon
