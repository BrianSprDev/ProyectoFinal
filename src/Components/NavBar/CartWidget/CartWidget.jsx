import React from "react";
import "./CartWidget.css";
import { MdShoppingCart } from "react-icons/md";
import { useCartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
const CartWidget = () => {
  const { cart } = useCartContext();

  return (
    <>
      <Link to="/cart">
        <div className="cart">
          <div className="cart__quantity">
            {cart.map((product) => (
              <h1 key={product.id}>{product.quantity}</h1>
            ))}
          </div>
          <MdShoppingCart />
        </div>
      </Link>
    </>
  );
};

export default CartWidget;
