import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.leftside}>
          <div className={styles.contacts}>
            <div className={styles.contact}>
              <span className={styles.contact_reason}>
                Having problems with the course?{" "}
              </span>
              <span className={styles.contact_email}>connect@s-share.com</span>
            </div>

            <div className={styles.contact}>
              <span className={styles.contact_reason}>
                Shall we work together?
              </span>
              <span className={styles.contact_email}>
                partnerships@s-share.com
              </span>
            </div>
          </div>

          <ul className={styles.info}>
            <li className={styles.info_item}>FAQs</li>
            <li className={styles.info_item}>Privacy Policy</li>
            <li className={styles.info_item}>Help</li>
          </ul>
        </div>

        <div className={styles.rightside}>
          <img
            className={styles.logo}
            src="/img/skill-share-logo.svg"
            alt="logo"
          />

          <ul className={styles.socials}>
            <li className={styles.social}>
              <a className={styles.social_link} href="https://facebook.com">
                <img
                  className={styles.social_facebook}
                  src="/img/icons/facebook.svg"
                  alt="Facebook"
                />
              </a>
            </li>

            <li className={styles.social}>
              <a className={styles.social_link} href="https://telegram.com">
                <img
                  className={styles.social_telegram}
                  src="/img/icons/telegram.svg"
                  alt="Telegram"
                />
              </a>
            </li>

            <li className={styles.social}>
              <a className={styles.social_link} href="https://instagram.com">
                <img
                  className={styles.social_instagram}
                  src="/img/icons/instagram.svg"
                  alt="Instagram"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
