import React from "react";
import "./cartItems.css";
import Item from "./Item";

function cartItems() {
  return (
    <div className="cartItems">
      <h1>Shopping Cart</h1>
      <Item />
    </div>
  );
}

export default cartItems;
