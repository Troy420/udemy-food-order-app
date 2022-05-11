import React from "react";
import cssClasses from "./Header.module.css";

import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <>
      <header className={cssClasses.header}>
        <h1>Food for Mbul</h1>
        <button>Cart</button>
      </header>
      <div>
        <img
          className={cssClasses["main-image"]}
          src={mealsImage}
          alt="Meals Image"
        />
      </div>
    </>
  );
};

export default Header;
