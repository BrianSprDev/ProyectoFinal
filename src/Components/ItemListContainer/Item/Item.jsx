/* import { data } from "../../data/data.jsx";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const Item = (prod) => {
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

export default Item;
 */
