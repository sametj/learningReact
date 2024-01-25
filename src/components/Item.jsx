import React from "react";
import "./item.css";

function Item({ index, item, changeItemQuantity, deleteCartItem }) {
  return (
    <div className="item-container">
      <div className="item">
        <img src={item.image} alt="item-img"></img>
        <div className="item-desc-container">
          <div className="item-tags">
            <h1>{item.title}</h1>
            <span className="in-stock">{item.stock}</span>
            <div className="qty-container">
              <select
                onChange={(e) => changeItemQuantity(e, index)}
                className="quantity"
                value={item.quantity}
              >
                <option value="1">Qty : 1</option>
                <option value="2">Qty : 2</option>
                <option value="3">Qty : 3</option>
                <option value="4">Qty : 4</option>
                <option value="5">Qty : 5</option>
                <option value="6">Qty : 6</option>
                <option value="7">Qty : 7</option>
                <option value="8">Qty : 8</option>
                <option value="9">Qty : 9</option>
              </select>
              <span> | </span>
              <span
                onClick={(e) => deleteCartItem(e, index)}
                className="delete-btn"
              >
                Delete
              </span>
            </div>
          </div>
        </div>
        <div className="item-price">${item.price}</div>
      </div>
      <hr />
    </div>
  );
}

export default Item;
