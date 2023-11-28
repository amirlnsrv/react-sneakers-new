import React from "react";
import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <>
      <h1>Контакты</h1>
      <div className={styles.location}>
        <div className={styles.imageBlock}>
          <img
            src="https://gray-kswo-prod.cdn.arcpublishing.com/resizer/QJAswOvSWNB6Dvmw7e412CvnIl8=/1200x400/smart/filters:quality(85)/do0bihdskp9dy.cloudfront.net/02-27-2023/t_50c7cebd34d943b89306344540beba0f_name_file_1280x720_2000_v3_1_.jpg"
            alt=""
          />
        </div>
        <h2 className={styles.title}>Бишкек</h2>
        <a href="#map">
          <button>Показать на карте</button>
        </a>
        <div className={styles.info}>
          <div className={styles.left}>
            <p className={styles.text}>Горького, 18</p>
            <p className={styles.text}>С 11:00 ДО 22:00 БЕЗ ВЫХОДНЫХ</p>
          </div>
          <div className={styles.right}>
            <p className={styles.text}>+996 709 43-73-50</p>
            <p className={styles.text}>REACTSNEAKERS@GMAIL.COM</p>
          </div>
        </div>
      </div>
      <iframe
        id="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.816987548188!2d74.62747957621241!3d42.85559737115122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb65041bf6f57%3A0x28d1152f05cfe450!2zMTgg0YPQuy4g0JPQvtGA0YzQutC-0LPQviwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1701086562733!5m2!1sru!2skg"
        width="100%"
        height="400"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="googlemaps"
      ></iframe>
    </>
  );
};

export default Contacts;
