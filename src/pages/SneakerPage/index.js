import React from "react";
import { Link, useParams } from "react-router-dom";

import styles from "./SneakerPage.module.scss";

const SneakerPage = ({ sneakers }) => {
  const { id } = useParams();

  const { name, price, img, text } = { ...sneakers[id - 1] };

  if (!name) return <h2 className="p-40">Loading...</h2>;

  return (
    <section className={styles.sneaker}>
      <div className="container">
        <Link to="/" style={{ fontSize: "18px" }}>
          &#128281; Вернуться назад
        </Link>
        <div className={styles.inner}>
          <div className={styles.img}>
            <img width={500} src={img} alt={img} />
          </div>
          <div className={styles.text}>
            <h3
              className="fw-bold"
              style={{ fontSize: "24px", letterSpacing: "3px" }}
            >
              {name}
            </h3>
            <p className={styles.price}>{price} сом</p>
            <p className={styles.subtitle}>{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SneakerPage;
