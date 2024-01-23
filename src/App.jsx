import React from "react";
import "./App.css";
import Header from "./header";
import CartItems from "./cartItems";
import CartTotal from "./cartTotal";

function App() {
  const appMainStyle = {
    display: "flex",
    padding: "20px",
    gap: "20px",
  };
  return (
    <div className="App">
      <div className="app-header">
        <Header title="Amazon Cart" />
      </div>
      <div className="app-main" style={appMainStyle}>
        <CartItems />
        <CartTotal />
      </div>
    </div>
  );
}

export default App;
