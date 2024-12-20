import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  resetProductError,
} from "../../redux/actions/productActions";
import AddNewProduct from "./AddNewProduct";
import ProductTableItem from "./ProductTableItem";
import Fixbar from "../../components/try.fixbar";
import { LuMenu } from "react-icons/lu";
import Profile from "../../assets/imgs/womanprofile.jpg";
import { useFixedBar } from "../../Context/Fixcontext";
import { IoSearchOutline } from "react-icons/io5";
import { BellIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const ProductsTab = () => {
  const { toggleWidth } = useFixedBar();
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.admin);
  const { products, productUpdate } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(resetProductError());
    if (productUpdate) {
    }
  }, [dispatch, productUpdate]);

  return (
    <>
      <section className="trydashboard_wrapper">
        <Fixbar />
        <main className="Dashboard-contents">
          <nav className="dashNav">
            <div className="icons-in">
              <LuMenu
                cursor={"pointer"}
                onClick={() => {
                  toggleWidth();
                  setIsVisible(true);
                }}
                className="icon"
              />
              {isVisible && (
                <LuMenu
                  cursor={"pointer"}
                  onClick={() => {
                    toggleWidth();
                    setIsVisible(false);
                  }}
                  color="#fff"
                  className="icon3"
                />
              )}
              <form action="#">
                <IoSearchOutline className="icon2" />
                <input type="text" />
              </form>
            </div>
            <span className="profile">
              <BellIcon className="iconss2" />
              <img src={Profile} alt="Woman profile" />
            </span>
          </nav>
          <div style={{ padding: "20px" }}>
            {error && (
              <div
                style={{
                  backgroundColor: "#f8d7da",
                  color: "#842029",
                  padding: "10px",
                  borderRadius: "4px",
                  marginBottom: "20px",
                }}
              >
                <strong>Oops!</strong> {error}
              </div>
            )}

            {loading ? (
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    border: "5px solid #f3f3f3",
                    borderTop: "5px solid #3498db",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                    margin: "auto",
                  }}
                ></div>
                <style>{`
                        @keyframes spin {
                          0% { transform: rotate(0deg); }
                          100% { transform: rotate(360deg); }
                          }
                          `}</style>
              </div>
            ) : (
              <div>
                <div className="newblosty">
                  <Link to={"/Product-Post"}>
                    <button>Post New Product</button>
                  </Link>
                </div>
                <section className="productsty2">
                  {products.length > 0 &&
                    products.map((product) => (
                      <ProductTableItem key={product._id} product={product} />
                    ))}
                </section>
              </div>
            )}
          </div>
        </main>
      </section>
    </>
  );
};

export default ProductsTab;
