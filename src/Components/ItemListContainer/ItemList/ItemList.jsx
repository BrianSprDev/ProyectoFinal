import React from "react";
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
  "$1000",
  "wwwww"
);

/* ItemList.js Es un agrupador de un set de componentes Item.js (Deberías incluirlo dentro de ItemListContainer de la primera pre-entrega del Proyecto Final)
Implementa un async mock (promise): Usa un efecto de montaje para poder emitir un llamado asincrónico a un mock (objeto) estático de datos que devuelva un conjunto de item { id, title, description, price, pictureUrl } en dos segundos (setTimeout), para emular retrasos de red. */

const ItemList = () => {
  return (
    <div className="div">
      <button>asdasd </button>
    </div>
  );
};

export default ItemList;
