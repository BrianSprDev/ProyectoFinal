import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data/data.jsx";
import ItemCount from "../ItemListContainer/ItemCount/ItemCount.jsx";
import "./ItemDetail.css";
import "../../index.css";
const ItemDetail = (ident) => {
  const [item, setItem] = useState({});

  const getProduct = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

  useEffect(() => {
    getProduct().then((response) => setItem(response));
  }, []);

  const { id } = useParams();

  let producto = data.find((product) => product.id == id);

  return (
    <div className="div-card">
      <ul className="li-card" key={producto}>
        <li className="li_description">{producto.description} </li>

        <li className="li_title">{producto.title} </li>
        <img src={producto.pictureUrl} className="img_product" />
        <div className="b-card">
          <li className="li_price"> {producto.price}</li>
          <ItemCount stock={producto.stock} />
          <button className="but-card"> Agregar al Carrito</button>
        </div>
      </ul>
    </div>
  );
};

export default ItemDetail;
