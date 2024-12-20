import React from "react";
import "../../App.css";
import { useDispatch } from "react-redux";
import { addCartItem, removeCartItem } from "../../redux/actions/CartActions";
import { FaRegTrashAlt } from "react-icons/fa";

const Cartitem = ({ cartItem }) => {
  const { name, image, price, stock, qty, id, brand } = cartItem;
  console.log(qty);
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <figure>
        <img src={image} alt={name} />
      </figure>

      <article>
        <div>
          <h3>
            {name} {brand}
          </h3>
          <button onClick={() => dispatch(removeCartItem(id))}>
            <FaRegTrashAlt />
          </button>
        </div>

        <div className="quantity">
          <select
            value={String(qty)}
            onChange={(e) => {
              dispatch(addCartItem(id, Number(e.target.value)));
            }}
          >
            {[...Array(stock).keys()].map((item) => (
              <option key={item + 1} value={item + 1}>
                {item + 1}
              </option>
            ))}
          </select>
          <p>${price}</p>
        </div>
      </article>
    </div>
  );
};

export default Cartitem;
