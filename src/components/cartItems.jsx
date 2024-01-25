import React from "react";
import "./cartItems.css";
import CartItem from "./Item";

function cartItems({ items, setCartItems }) {
  const changeItemQuantity = (event, index) => {
    const newItems = [...items];
    newItems[index].quantity = event.target.value;
    setCartItems(newItems);
  };

  const deleteCartItem = (event, indextodelete) => {
    const newItems = [...items];
    if (newItems[indextodelete].quantity > 1) {
      newItems[indextodelete].quantity -= 1;
      setCartItems(newItems);
    } else if (newItems[indextodelete].quantity >= 1) {
      const newItems = items.filter((value, index) => {
        return index !== indextodelete;
      });
      setCartItems(newItems);
    }
  };
  return (
    <div className="cartItems">
      <h1>Shopping Cart</h1>
      <hr />
      <div className="CartItems-items">
        {items.map((item, index) => (
          <CartItem
            index={index}
            item={item}
            key={index}
            changeItemQuantity={changeItemQuantity}
            deleteCartItem={deleteCartItem}
          />
        ))}
      </div>
    </div>
  );
}

export default cartItems;
