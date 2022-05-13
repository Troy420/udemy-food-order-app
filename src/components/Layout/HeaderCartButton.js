import React from "react";
import cssClasses from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
// import ModalContext from "../../store/modal-context";

const HeaderCartButton = (props) => {
  // const modalCtx = useContext(ModalContext);

  return (
    <button className={cssClasses.button} onClick={props.onOpenModal}>
      <span className={cssClasses.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={cssClasses.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
