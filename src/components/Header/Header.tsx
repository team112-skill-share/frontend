import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      {/* <div className={styles.container}> */}
      <a href="/">
        <img className={styles.img} src="/img/skill-share-logo.svg" alt="" />
      </a>

      <div className={styles.rightside}>
        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            <li className={styles.nav_item}>Courses</li>
            <li className={styles.nav_item}>About us</li>
            <li className={styles.nav_item}>Work with us</li>
          </ul>
        </nav>

        <div className={styles.logos}>
          <div className={styles.lang}>
            <div className={styles.lang_icon} />
            <div className={styles.lang_arrow} />
          </div>

          <div className={styles.like} />

          <div className={styles.right}>
            <div className={styles.menu} />
            <div className={styles.account} />
          </div>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
};
