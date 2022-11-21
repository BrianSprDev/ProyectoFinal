import React from "react";
import "./ItemListContainer.css";
import { BiHappyBeaming } from "react-icons/bi";
const ItemListContainer = (prop) => {
  return (
    <div className="greeting">
      Gracias por visitarnos {prop.greeting}
      <div className="greeting-icon">
        <BiHappyBeaming />
      </div>
    </div>
  );
};

export default ItemListContainer;
