import React, { useReducer } from "react";
import CartContext from "./cart-context";

const cartInitialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM_TO_CART") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    // --------------- CONSOLES
    // console.log("state.items", state.items);
    // console.log("action", action);
    // console.log("action.item", action.item);
    // console.log("existingCartItemIndex", existingCartItemIndex);
    // console.log("existingCartItem", existingCartItem);
    // console.log("updateTotalAmount", updatedTotalAmount);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM_FROM_CART") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItems;

    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

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
