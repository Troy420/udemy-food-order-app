import React from "react";
import cssClasses from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <>
      <header className={cssClasses.header}>
        <h1>Food for Mbul</h1>
        <HeaderCartButton />
      </header>
      <div className={cssClasses["main-image"]}>
        <img src={mealsImage} alt="Delicious Food" />
      </div>
    </>
  );
};

export default Header;
