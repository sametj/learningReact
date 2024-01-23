import React from "react";
import "./item.css";

function Item() {
  return (
    <div className="item">
      <img src="https://www.apple.com/newsroom/images/product/ipad/standard/Apple-iPad-Air-hero-color-lineup-220308_big.jpg.large.jpg"></img>
      <div className="item-desc-container">
        <div className="item-tags">
          <h1>Apple iPad Pro</h1>
          <span className="in-stock">In Stock</span>
          <div className="qty-container">
            <span className="quantity">Qty : 1</span>
            <span> | </span>
            <span className="delete-btn">Delete</span>
          </div>
        </div>
        <div className="item-price">$799</div>
      </div>
    </div>
  );
}

export default Item;
