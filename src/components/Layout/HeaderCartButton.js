import React from "react";
import cssClasses from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={cssClasses.button}>
      <span className={cssClasses.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={cssClasses.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
