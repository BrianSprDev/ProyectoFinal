import React from "react";
import "./styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ onAdd, item }) => {
  const [count, setCount] = useState(0);
  const { stock } = item;

  function Add() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <>
      <div className="item-count">
        <button className="button" onClick={decrease}>
          -
        </button>

        <label className="amount"> {count} </label>

        <button className="button" onClick={Add}>
          +
        </button>
      </div>
      <Link className="lnk" to={"/cart"}>
        <button className="buttonC" onClick={() => onAdd(item, count)}>
          Añadir al Carrito
        </button>
      </Link>
    </>
  );
};

export default ItemCount;
