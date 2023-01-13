import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import ItemCount from "./ItemCount";
import "./styles.css";

/* Helpers */
import { GetItems } from "../../../helper/fetch-items";

import { useCartContext } from "../../../context/CartContext.jsx";

const ItemDetail = (ident) => {
  const { addNewProduct } = useCartContext();

  const { id } = useParams();

  const onAdd = (item, quantity) => {
    const newProduct = { ...item, quantity };
    addNewProduct(newProduct);
  };

  const [item, setItem] = useState([]);

  useEffect(() => {
    GetItems()
      .then((_items) => {
        setItem(_items.find((i) => i.id === id));
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return (
    <div className="div-card">
      <ul className="li-card" key={item}>
        <li className="li_description">{item.description} </li>

        <li className="li_title">{item.title} </li>
        <img src={item.pictureUrl} className="img_product" />
        <div className="b-card">
          <li className="li_price"> {item.price}</li>
          <ItemCount item={item} onAdd={onAdd} />
        </div>
      </ul>
    </div>
  );
};

export default ItemDetail;
