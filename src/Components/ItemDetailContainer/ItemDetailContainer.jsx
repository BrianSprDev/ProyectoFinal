/* import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data/data.jsx";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const route = useParams();
  const getProduct = () =>
    new Promise((resolve, reject) => {
      setTimeout(
        () => resolve(data.find((product) => product.id == route)),
        2000
      );
    });

  useEffect(() => {
    getProduct().then((response) => setItem(response));
  }, []);

  return <ItemDetail ident={item}></ItemDetail>;
};

export default ItemDetailContainer;
 */
