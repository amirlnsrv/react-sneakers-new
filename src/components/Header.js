import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

import logo from "../assets/img/logo.png";
import cart from "../assets/img/cart.svg";
import heart from "../assets/img/heart.svg";
import user from "../assets/img/user.svg";

const Header = (props) => {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img src={logo} alt="" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex">
        <li className="mr-30 cu-p" onClick={props.onClickCart}>
          <img width={18} height={18} src={cart} alt="Cart" />
          <span>{totalPrice} сом</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favourites">
            <img width={18} height={18} src={heart} alt="Features" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={18} height={18} src={user} alt="User" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
