/* React */
import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

/* Icons */
import { BiHappyBeaming } from "react-icons/bi";

/* Helpers */
import { GetItems } from "../../../helper/fetch-items";

const ItemCategory = (props) => {
  const [items, setItems] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    GetItems()
      .then((_items) => {
        setItems(_items.filter((i) => i.category === category));
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [category]);

  return (
    <>
      <div className="greeting">
        Gracias por visitarnos {props.greeting}
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

export default ItemCategory;
