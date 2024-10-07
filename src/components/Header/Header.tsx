import { useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

type Props = {
  handleSetLoginTrue: () => void;
};

export const Header: React.FC<Props> = ({ handleSetLoginTrue }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <header className={styles.header}>
      {/* <div className={styles.container}> */}
      <Link to="/home">
        <img
          className={styles.img}
          src={`${process.env.PUBLIC_URL}/img/skill-share-logo.svg`}
          alt="logo"
        />
      </Link>

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
            <div
              className={styles.account}
              onClick={() => setIsMenuActive(!isMenuActive)}
            >
              {isMenuActive && (
                <div className={styles.account_active}>
                  <Link to="login" className={styles.login}>
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
