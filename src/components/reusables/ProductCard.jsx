import Image from "../../assets/imgs/eyeglasses.png";
import "../../App.css";
import { BiExpand } from "react-icons/bi";
import { toast } from "react-toastify";
import {
  addFavourites,
  removeFavourites,
} from "../../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { Link as ReactLink } from "react-router-dom";
import React, { useState } from "react";
import { addCartItem } from "../../redux/actions/CartActions";
import { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Fallbackimg from "../../assets/imgs/fallbackimg.png";

const ProductCard = ({ product, loading }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.product);
  const [isShown, setIsShown] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const [cartPlusDisabled, setCartPlusDisabled] = useState(false);

  useEffect(() => {
    const item = cartItems.find((cartItem) => cartItem.id === product._id);
    if (item && item.qty === product.stock) {
      setCartPlusDisabled(true);
    } else {
      setCartPlusDisabled(false);
    }
  }, [product, cartItems]);

  const addItem = (id) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === id);

    if (existingItem) {
      alert("Item is already in the cart!");
    } else {
      dispatch(addCartItem(id, 1));
      toast.success("Product added successfully!", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
      });
    }
  };

  return (
    <section className="product_card" loading={!loading}>
      <figure>
        <img
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          src={product.images[isShown && product.images.length === 2 ? 1 : 0]}
          onError={(e) => {
            e.target.onError = null;
            e.target.src = Fallbackimg;
          }}
          alt={product.name}
        />
      </figure>
      <span className="card_stock">
        {product.stock < 5 ? (
          <p style={{ color: "#faad07", background: "yellow" }}>
            only {product.stock} left
          </p>
        ) : product.stock < 1 ? (
          <p style={{ color: "red", background: "red" }}>Sold out</p>
        ) : (
          <p style={{ color: "green", background: "#c3eb34" }}>In stock</p>
        )}
        {product.productIsNew && (
          <p style={{ color: "purple", background: "#db86f7" }}>new</p>
        )}
      </span>
      <h3>
        {product.brand} {product.name}
      </h3>
      <p className="card_substible"> {product.subtitle} </p>
      <span className="card_price">
        <p> {product.category} </p>
        <p> ₦{product.price} </p>
      </span>

      <span className="btn_holder">
        {favorites.includes(product._id) ? (
          <button onClick={() => dispatch(removeFavourites(product._id))}>
            <MdOutlineFavorite size={"20px"} />
          </button>
        ) : (
          <button onClick={() => dispatch(addFavourites(product._id))}>
            <MdOutlineFavoriteBorder size={"20px"} />
          </button>
        )}

        <ReactLink to={`/product/${product._id}`}>
          <button className="proid">
            <BiExpand size={24} color="blue" />
          </button>
        </ReactLink>
        <button
          disabled={product.stock <= 0 || cartPlusDisabled}
          onClick={() => addItem(product._id)}
          aria-label="Add to Cart"
          title={product.stock <= 0 ? "Out of stock" : "Add to cart"}
        >
          <FaShoppingCart size={24} />
        </button>
      </span>
    </section>
  );
};

export default ProductCard;
