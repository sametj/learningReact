import React from "react";
import "./cartTotal.css";
import { NumericFormat } from "react-number-format";

function cartTotal({ items }) {
  let getTotalPrice = () => {
    let total = 0;
    let quantity = 0;

    items.forEach((item) => {
      total += item.price * parseInt(item.quantity);
      quantity += parseInt(item.quantity);
    });
    return [total, quantity];
  };

  return (
    <div className="cart-total">
      <h3>
        SubTotal({getTotalPrice()[1]})
        <span className="cartTotal-price">
          <NumericFormat
            prefix="$"
            value={getTotalPrice()[0]}
            displayType={"text"}
            decimalScale={2}
            thousandSeparator={","}
          ></NumericFormat>
        </span>
      </h3>
      <button className="checkout-btn">Proceed to checkout</button>
    </div>
  );
}

export default cartTotal;
