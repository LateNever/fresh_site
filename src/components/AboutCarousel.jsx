import styles from './AboutCarousel.module.css'

function AboutCarousel() {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.header}>
        <h1>О группе</h1>
      </div>
      <div className={styles.window}>
        <div className={styles.allPages}>
          <div className={styles.contentOne}>
            <p>
              КАВЕР-ГРУППА FRESH - это фирменный звук, свежий вкус новой музыки,
              танцевальный драйв и нескончаемые эмоции! <br />
              Мы превратим ваше мероприятие в настоящий праздник!
            </p>
          </div>
          <div className={styles.contentTwo}>
            <img className={styles.logo} src="../img/LOGO.svg" alt="LOGO"></img>
          </div>
        </div>
      </div>
      <div className={styles.nav}>
        <img
          className={styles.navIco}
          src="../img/arrowLeft.svg"
          alt="arrowLeft"
        ></img>
        <div className={styles.dots}>
          <img className={styles.navDot} src="../img/dot.svg" alt="dot"></img>
          <img className={styles.navDot} src="../img/dot.svg" alt="dot"></img>
        </div>
        <img
          className={styles.navIco}
          src="../img/arrowRight.svg"
          alt="arrowRight"
        ></img>
      </div>
    </div>
  )
}

export default AboutCarousel
