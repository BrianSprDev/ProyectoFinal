import React, { useContext, useState } from "react";
import { createContext } from "react";

export const Contexto = createContext();

export const useCartContext = () => {
  const cartContext = useContext(Contexto);
  return cartContext;
};

export const CartContext = ({ children }) => {
  const [cart, setcart] = useState([]);

  const addNewProduct = (product) => {
    const oldProduct = cart.find(
      (currentProduct) => currentProduct.id === product.id
    );

    if (!oldProduct) {
      const newCart = [...cart, product];
      setcart(newCart);
    } else {
      const oldCart = cart.filter(
        (currentProduct) => currentProduct.id !== product.id
      );

      let quantity = product.quantity + oldProduct.quantity;

      if (quantity > product.stock) quantity = product.stock;

      const newProduct = {
        ...product,
        quantity,
      };
      setcart([...oldCart, newProduct]);
    }
  };

  const deleteProduct = (product) => {
    const newCart = cart.filter(
      (currentProduct) => currentProduct.id !== product.id
    );
    setcart(newCart);
  };

  return (
    <Contexto.Provider value={{ cart, addNewProduct, deleteProduct }}>
      {children}
    </Contexto.Provider>
  );
};
