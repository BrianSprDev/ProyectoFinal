import React from "react";
import "./ItemCount.css";
import { useState } from "react";

const ItemCount = () => {
  const [count, setCount] = useState(0);

  const stock = 10;
  function onAdd() {
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
    <div className="item-count">
      <button className="button" onClick={decrease}>
        -
      </button>

      <label className="amount"> {count} </label>

      <button className="button" onClick={onAdd}>
        +
      </button>
    </div>
  );
};

export default ItemCount;
