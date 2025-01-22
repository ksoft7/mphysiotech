import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorites } from "../redux/actions/productActions";
import "../App.css";
import "../styles/productSty.css";
import ProductCard from "../components/reusables/ProductCard.jsx";
import { getProducts } from "../redux/actions/productActions.js";
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

function Productscreen() {
  const dispatch = useDispatch();
  const { loading, error, products, pagination, favoritesToggled } =
    useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProducts(1));
  }, [dispatch]);

  useEffect(() => {}, [favoritesToggled, dispatch]);

  const paginationButtonClick = (page) => {
    dispatch(getProducts(page));
  };

  return (
    <>
      {products.length >= 1 && (
        <div>
          <section className="proSearch">
            <h3>All categories</h3>
            <form action="#">
              <input
                type="search"
                name="search"
                id=""
                placeholder="Enter your search"
              />
              <button type="submit">
                <IoSearchOutline />
              </button>
            </form>

            <span>
              {favoritesToggled ? (
                <button>
                  <MdOutlineFavorite
                    size={22}
                    onClick={() => dispatch(toggleFavorites(false))}
                  />
                </button>
              ) : (
                <button onClick={() => dispatch(toggleFavorites(true))}>
                  <MdOutlineFavoriteBorder size={22} />
                </button>
              )}
            </span>
          </section>
          <div className="card_flex">
            {error ? (
              <div>{(error, console.log(error))} Error</div>
            ) : (
              products.map((product) => (
                <section>
                  <ProductCard
                    key={product._id}
                    product={product}
                    loading={loading}
                  />
                </section>
              ))
            )}
          </div>
          {favoritesToggled}
        </div>
      )}
      <div className="paginationbtn">
        <button
          style={{
            backgroundColor: "#07a4b5",
            color: "white",
            border: "none",
            padding: "8px 12px",
            margin: "4px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          className=""
          onClick={() => paginationButtonClick(1)}
        >
          <FaAnglesLeft />
        </button>
        {Array.from(Array(pagination.totalPages), (e, i) => {
          return (
            <button
              key={i}
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
              onClick={() => paginationButtonClick(i + 1)}
            >
              {i + 1}
            </button>
          );
        })}
        <button
          style={{
            backgroundColor: "#07a4b5",
            color: "white",
            border: "none",
            padding: "8px 10px",
            margin: "4px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => paginationButtonClick(pagination.totalPages)}
        >
          <FaAnglesRight />
        </button>
      </div>
    </>
  );
}

export default Productscreen;
