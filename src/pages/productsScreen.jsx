import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, toggleFavorites } from "../redux/actions/productActions";
import { addCartItem } from "../redux/actions/CartActions.js";
import ProductCard from "../components/reusables/ProductCard.jsx";
import VariantSelector from "../utils/variantUtils.js";
import { toast } from "react-toastify";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

import "../App.css";
import "../styles/productSty.css";

function Productscreen() {
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const { loading, error, products, pagination, favoritesToggled } =
    useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts(1));
  }, [dispatch]);

  const paginationButtonClick = (page) => {
    dispatch(getProducts(page));
  };

  const handleAddToCart = (product) => {
    if (product.variants?.length > 0) {
      setSelectedProduct(product);
    } else {
      dispatch(addCartItem(product._id, 1));
      toast.success("Product added to cart!");
    }
  };

  return (
    <>
      <section className="proSearch">
        <div>
          <input
            type="search"
            name="search"
            placeholder="Enter your search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <IoSearchOutline />
          </button>
        </div>

        <span>
          {favoritesToggled ? (
            <button onClick={() => dispatch(toggleFavorites(false))}>
              <MdOutlineFavorite size={22} />
            </button>
          ) : (
            <button onClick={() => dispatch(toggleFavorites(true))}>
              <MdOutlineFavoriteBorder size={22} />
            </button>
          )}
        </span>
      </section>

      {products.length >= 1 && (
        <div className="card_flex">
          {error ? (
            <div>{error}</div>
          ) : (
            products
              .filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((product) => (
                <section key={product._id}>
                  <ProductCard
                    product={product}
                    loading={loading}
                    onAddToCart={() => handleAddToCart(product)}
                  />
                </section>
              ))
          )}
        </div>
      )}

      {selectedProduct && (
        <>
          <div
            className="variant-overlay"
            onClick={() => setSelectedProduct(null)}
          />
          <div className="variant-selection-box">
            <h3>Select Variants for {selectedProduct.name}</h3>
            <VariantSelector product={selectedProduct} />
            <div className="variant-actions">
              <button onClick={() => setSelectedProduct(null)}>
                Continue Shopping
              </button>
              <button
                className="primary-btn"
                onClick={() => {
                  setSelectedProduct(null);
                  toast.success("Selected variants added to cart!");
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </>
      )}

      <div className="paginationbtn">
        <button className="clickbtn" onClick={() => paginationButtonClick(1)}>
          <FaAnglesLeft />
        </button>
        {Array.from(Array(pagination.totalPages), (_, i) => (
          <button
            key={i}
            onClick={() => paginationButtonClick(i + 1)}
            style={{
              backgroundColor:
                pagination.currentPage === i + 1 ? "#07a4b5" : "#c9c7c7",
              color: "white",
              border: "none",
              padding: "8px 10px",
              margin: "4px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="clickbtn"
          onClick={() => paginationButtonClick(pagination.totalPages)}
        >
          <FaAnglesRight />
        </button>
      </div>
    </>
  );
}

export default Productscreen;
