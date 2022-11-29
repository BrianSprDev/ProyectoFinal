import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./ItemList.css";

class libro {
  constructor(id, title, description, price, pictureUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.pictureUrl = pictureUrl;
  }
}

const estEnEscarlata = new libro(
  "1",
  "estudio en escarlata",
  "escrito por Arthur Conan Doyle",
  "$" + 1000,
  "wwwww"
);

const mil984 = new libro(
  "2",
  "1984",
  "escrito por George Orwell",
  "$" + 1200,
  "wwwww"
);

const laOdisea = new libro(
  "3",
  "La Odisea",
  "escrito por Homero",
  "$" + 950,
  "wwwww"
);

const arrLibros = [estEnEscarlata, mil984, laOdisea];

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
    <div className="div">
      {prod.map((p) => (
        <li key={p.id}>{p.title + " " + p.description + " " + p.price}</li>
      ))}
    </div>
  );
};

export default ProductsList;
