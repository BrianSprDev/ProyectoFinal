import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./ItemList.css";
import img1984 from "./imagenes/1984.jpg";
import imgEstEsc from "./imagenes/estudioEnEscarlata.jpg";
import imgOdisea from "./imagenes/Odisea.jpg";
import ItemCount from "../ItemCount/ItemCount";
import imgAleph from "./imagenes/elAleph.jpg";
import Item from "../itemJs/Item.jsx";

class libro {
  constructor(id, title, description, price, pictureUrl, stock) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.pictureUrl = pictureUrl;
    this.stock = stock;
  }
}

const estEnEscarlata = new libro(
  "1",
  "estudio en escarlata",
  "escrito por Arthur Conan Doyle",
  "$" + 1000,
  img1984,
  10
);

const mil984 = new libro(
  "2",
  "1984",
  "escrito por George Orwell",
  "$" + 1200,
  imgEstEsc,
  7
);

const laOdisea = new libro(
  "3",
  "La Odisea",
  "escrito por Homero",
  "$" + 950,
  imgOdisea,
  5
);

const elAleph = new libro(
  "4",
  "El Aleph",
  "escrito por Borges",
  "$" + 120,
  imgAleph,
  3
);
const arrLibros = [estEnEscarlata, mil984, laOdisea, elAleph];

/* ItemList.js Es un agrupador de un set de componentes Item.js (Deberías incluirlo dentro de ItemListContainer de la primera pre-entrega del Proyecto Final)
Implementa un async mock (promise): Usa un efecto de montaje para poder emitir un llamado asincrónico a un mock (objeto) estático de datos que devuelva un conjunto de item { id, title, description, price, pictureUrl } en dos segundos (setTimeout), para emular retrasos de red. */

const ProductsList = () => {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    getBooks().then((response) => {
      setProd(response);
    });
  }, []);

  const getBooks = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(arrLibros);
      }, 2000);
    });
  };

  return (
    <div className="div-card">
      <div className="p-card">
        {prod.map((p) => (
          <li className="li-card" key={p.id}>
            {p.title + " " + p.description + " " + p.price}
            <img src={p.pictureUrl} />
            <div className="d-count">
              <ItemCount stock={p.stock} /> <Item />
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
