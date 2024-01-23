import React from "react";
import "./cartItems.css";
import CartItem from "./Item";

function cartItems({ items }) {
  return (
    <div className="cartItems">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="CartItems-items">
        {items.map((item, index) => (
          <CartItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default cartItems;
