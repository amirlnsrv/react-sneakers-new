import React, { useContext } from "react";
import AppContext from "../context";

import arrow from "../assets/img/arrow.svg";

const Info = ({ title, image, description }) => {
  const { setCartOpened } = useContext(AppContext);

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width={120} src={image} alt="" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button
        onClick={() => {
          setCartOpened(false);
        }}
        className="greenButton"
      >
        <img className="arrowBack" src={arrow} alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
