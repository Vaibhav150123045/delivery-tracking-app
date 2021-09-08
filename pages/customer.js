import React, { useState } from "react";
import styles from "../styles/Customer.module.css";

const Customer = () => {
  const [qty, setQty] = useState(null);
  const [item, setItem] = useState("");
  const [weight, calculateWeight] = useState(0);
  return (
    <div class={styles.container}>
      <h1>Welcome Shradha</h1>

      <div class={styles.inputBox}>
        <span>choose item</span>
        <input
          type="text"
          value={item}
          placeholder="enter your food"
          onChange={(val) => setItem(val)}
        />
      </div>
      <div class={styles.inputBox}>
        <span>enter quantity</span>
        <input
          type="number"
          onChange={(val) => setQty(val)}
          value={qty}
        ></input>
      </div>
      <div class={styles.inputBox}>
        <span>choose</span>
        <input type="options"></input>
      </div>
      <button
        onClick={(e) => {
          console.log("qty", qty);
          console.log("name", item);
        }}
      >
        Calculate weight{" "}
      </button>
    </div>
  );
};

export default Customer;
