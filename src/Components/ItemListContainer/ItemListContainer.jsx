import React from "react";
import "./ItemListContainer.css";
const ItemListContainer = (prop) => {
  return (
    <div className="greeting">
      <h2> Gracias por visitarnos {prop.greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
