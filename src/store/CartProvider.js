import React from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {
    console.log(item);
  };

  const removeItemFromCartHandler = (id) => {};

  return (
    <CartContext.Provider
      value={{
        items: [],
        totalAmount: 0,
        addItem: (item) => {
          addItemToCartHandler;
        },
        removeItem: (id) => {
          removeItemFromCartHandler;
        },
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
