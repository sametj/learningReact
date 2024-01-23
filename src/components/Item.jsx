import React from "react";
import "./item.css";

function Item({ item }) {
  return (
    <div className="item-container">
      <div className="item">
        <img src={item.image} alt="item-img"></img>
        <div className="item-desc-container">
          <div className="item-tags">
            <h1>{item.title}</h1>
            <span className="in-stock">{item.stock}</span>
            <div className="qty-container">
              <select className="quantity">
                <option value={item.quantity}>Qty : {item.quantity}</option>
              </select>
              <span> | </span>
              <span className="delete-btn">Delete</span>
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
