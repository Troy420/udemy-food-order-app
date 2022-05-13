import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
// import ModalContext from "../../store/modal-context";

const DUMMY_ITEMS = [
  {
    id: "c1",
    name: "Sushi",
    amount: 2,
    price: 12.99,
  },
];

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {DUMMY_ITEMS.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  // const modalCtx = useContext(ModalContext);

  return (
    <Modal onCloseModal={props.onCloseModal}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>31.22</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onCloseModal}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
