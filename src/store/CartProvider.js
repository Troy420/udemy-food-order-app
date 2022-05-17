import React, { useReducer } from "react";
import CartContext from "./cart-context";

const cartInitialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM_TO_CART") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return cartInitialState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    cartInitialState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM_TO_CART",
      item: item,
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_ITEM_FROM_CART",
      id: id,
    });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: (item) => {
          addItemToCartHandler(item);
        },
        removeItem: (id) => {
          removeItemFromCartHandler(id);
        },
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
