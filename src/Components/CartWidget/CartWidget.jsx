import React from "react";
import carrito from "./carrito.png";
import "./CartWidget.css";
const CartWidget = () => {
  return (
    <>
      <div className="cart-container">
        <div className="cant">1</div>
        <img src={carrito} className="cart" />
      </div>
    </>
  );
};

export default CartWidget;
