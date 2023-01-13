/* React */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* Icons */
import { BiHappyBeaming } from "react-icons/bi";

/* Helpers */
import { GetItems } from "../../../helper/fetch-items";

/* Styles */
import "./styles.css";

const ItemListContainer = (prop) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    GetItems()
      .then((_items) => {
        console.table(_items);
        setItems(_items);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return (
    <>
      <div className="greeting">
        Gracias por visitarnos {prop.greeting}
        <div className="greeting__icon">
          <BiHappyBeaming />
        </div>
      </div>

      {items && (
        <div className="div_card">
          <div className="p_card">
            {items.map((p) => (
              <li className="li_card" key={p.id}>
                <img src={p.pictureUrl} />

                <div className="b_card">
                  <Link to={`/item/${p.id}`} className="link">
                    Más Información
                  </Link>
                </div>
              </li>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
