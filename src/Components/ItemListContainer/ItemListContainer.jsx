import React from "react";
import "./ItemListContainer.css";
import { BiHappyBeaming } from "react-icons/bi";
import ItemList from "./ItemList/ItemList";

const ItemListContainer = (prop) => {
  return (
    <>
      <div className="greeting">
        Gracias por visitarnos {prop.greeting}
        <div className="greeting__icon">
          <BiHappyBeaming />
        </div>
      </div>
      <div>
        <ItemList />
      </div>
    </>
  );
};

export default ItemListContainer;
