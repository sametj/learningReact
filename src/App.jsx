import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import CartItems from "./components/cartItems";
import CartTotal from "./components/cartTotal";
import data from "./Data";
import Itm from "./components/Item";

function App() {
  const appMainStyle = {
    display: "flex",
    gap: "20px",
  };

  const [cartItems, setCartItems] = useState(data);
  return (
    <div className="App">
      <div className="app-header">
        <Header title="Amazon Cart" />
      </div>
      <div className="app-main" style={appMainStyle}>
        <CartItems items={cartItems} />
        <CartTotal />
      </div>
    </div>
  );
}

export default App;
