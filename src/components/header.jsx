import React from "react";
import "./header.css";

function header({ title }) {
  return (
    <div className="App-header">
      <h1 className="h1-style">{title}</h1>
    </div>
  );
}

export default header;
