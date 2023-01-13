import React from "react";
import { CartContext, useCartContext } from "../../../context/CartContext";
import "../cart/style.css";

const Cart = () => {
  const { cart, deleteProduct } = useCartContext();

  return (
    <>
      <div>
        {cart.map((product) => (
          <ul className="ul_quantity" key={product.id}>
            <li className="tittle">{product.title}</li>
            <li className="quantity">Total: {product.quantity} </li>
            <br />
            <li>
              <button
                className="button_cart"
                onClick={() => {
                  deleteProduct(product);
                }}
              >
                deleteProduct
              </button>
            </li>
          </ul>
        ))}
      </div>
      <button
        className="button_fin"
        onClick={() => {
          alert("Gracias por su compra!");
        }}
      >
        Finalizar compra
      </button>
    </>
  );
};

export default Cart;
