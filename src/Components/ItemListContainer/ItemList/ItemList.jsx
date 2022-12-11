/* import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./ItemList.css";
import { data } from "../../data/data.jsx";
import { Link } from "react-router-dom";
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
        resolve(data);
      }, 500);
    });
  };

  return (
    <div className="div_card">
      <div className="p_card">
        {prod.map((p) => (
          <li className="li_card" key={p.id}>
            {p.title + " " + p.description + " " + p.price}
            <img src={p.pictureUrl} />
            <Link to={`/item/${p.id}`}> button</Link>
            <div className="b_card"></div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
 */
