import { useState } from "react";
import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const location = useLocation();

  return (
    <header className={styles.header}>
      {/* <div className={styles.container}> */}
      <Link to="home">
        <img
          className={styles.img}
          src={`${process.env.PUBLIC_URL}/img/skill-share-logo.svg`}
          alt="logo"
        />
      </Link>

      <div className={styles.rightside}>
        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            <Link to="courses" className={styles.nav_link}>
              <li className={styles.nav_item}>Courses</li>
            </Link>
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
            <div
              className={styles.account}
              onClick={() => setIsMenuActive(!isMenuActive)}
            >
              {isMenuActive && (
                <div className={styles.account_active}>
                  <Link
                    to="login"
                    className={styles.login}
                    state={{ backgroundLocation: location }}
                  >
                    <div className={styles.login_icon} />
                    <span className={styles.login_text}>Log in</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </header>
  );
};
