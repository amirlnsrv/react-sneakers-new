import React from "react";

import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer clear">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.col}>
            <ul className={styles.info}>
              <p className={styles.title}>ИНФОРМАЦИЯ</p>
              <Link to="/contacts">
                <li>Контакты</li>
              </Link>
              <Link to="/delivery">
                <li>Доставка</li>
              </Link>
              <Link to="/faq">
                <li>FAQ</li>
              </Link>
            </ul>
            <ul className={styles.contacts}>
              <p className={styles.title}>КОНТАКТЫ</p>
              <li>
                <a href="tel:996701053601">996(709)437-350</a>
              </li>
              <li>ЧАСЫ РАБОТЫ (С 11:00 ДО 22:00)</li>
              <li>
                <a href="mailto:REACTSNEAKERS@GMAIL.COM">
                  REACTSNEAKERS@GMAIL.COM
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.copy}>
            <p>2022-2023 &copy; React Sneakers</p>
            <p>ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
