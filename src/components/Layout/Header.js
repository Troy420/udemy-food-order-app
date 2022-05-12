import React from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Food for Mbul</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="Delicious Food" />
      </div>
    </>
  );
};

export default Header;
