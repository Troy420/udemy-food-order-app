import React, { useContext } from "react";
import cssClasses from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);

  return (
    <button className={cssClasses.button} onClick={props.onOpenModal}>
      <span className={cssClasses.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={cssClasses.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
