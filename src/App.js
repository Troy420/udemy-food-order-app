import React, { useState, useContext } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const ctx = useContext(CartProvider);

  return (
    <CartProvider>
      {openModal && <Cart onCloseModal={closeModalHandler} />}
      <Header onOpenModal={openModalHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
