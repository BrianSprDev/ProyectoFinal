import React from "react";
import { CartContext, useCartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart } = useCartContext();

  console.log(cart);
  return (
    <div>
      {cart.map((product) => (
        <h1 key={product.id}>
          {product.title}
          {product.quantity}
          <button onClick={console.log("hola")}> deleteProduct </button>
        </h1>
      ))}
    </div>
  );
};

export default Cart;
