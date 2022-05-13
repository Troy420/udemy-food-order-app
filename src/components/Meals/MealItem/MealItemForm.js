import React, { useContext } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";
// import CartContext from "../../../store/cart-context";

const MealItemForm = (props) => {
  // const cartCtx = useContext(CartContext);

  return (
    <form action="" className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
