import styles from './Section.module.css'

function Section(props) {
  const { children } = props
  return (
    <div className={styles.section}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default Section
