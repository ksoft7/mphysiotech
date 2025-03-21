import React from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { BiCheckShield, BiPackage, BiSupport } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Star from "../components/Star.jsx";
import { getProduct } from "../redux/actions/productActions.js";
import Spinner from "../components/reusables/Spinner.jsx";
import Fallbackimg from "../assets/imgs/fallbackimg.png";
import "../App.css";
import { toast } from "react-toastify";
import { createProductReview } from "../redux/actions/productActions.js";
import { addCartItem } from "../redux/actions/CartActions";

const Productscreen = () => {
  const [cartPlusDisabled, setCartPlusDisabled] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const [amount, setAmount] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, product, reviewed } = useSelector(
    (state) => state.product
  );
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);
  const [reviewBoxOpen, setReviewBoxOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.user);
  const [buttonLoading, setButtonLoading] = useState(false);

  useEffect(() => {
    const item = cartItems.find((cartItem) => cartItem.id === product._id);
    setCartPlusDisabled(item && item.qty === product.stock);
  }, [product, cartItems]);

  const addItem = (id) => {
    if (cartItems.some((cartItem) => cartItem.id === id)) {
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
  useEffect(() => {
    dispatch(getProduct(id));
    setReviewBoxOpen(false);
    if (reviewed) {
      toast.success("Review submitted successfully!");
      setReviewBoxOpen(false);
    }
  }, [dispatch, id, toast, reviewed]);

  const changeAmount = (input) => {
    if (input === "plus") {
      setAmount(amount + 1);
    }
    if (input === "minus") {
      setAmount(amount - 1);
    }
  };

  const hasUserReviewed = () =>
    product.reviews.some((item) => item.user === userInfo._id);
  const onSubmit = () => {
    setButtonLoading(true);
    dispatch(createProductReview(product._id, userInfo._id, comment, rating));
    setButtonLoading(false);
  };

  return (
    <div>
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : error ? (
        <div>We are sorry {error}</div>
      ) : (
        product && (
          <section className="productdetails">
            <div className="productdetails_con">
              <article>
                <h1>{product.name}</h1>
                <p>₦{product.price}</p>
                <div>
                  <span>
                    <Star color="cyan" />
                    <Star rating={product.rating} star={2} />
                    <Star rating={product.rating} star={3} />
                    <Star rating={product.rating} star={4} />
                    <Star rating={product.rating} star={5} />
                  </span>
                  <p>{product.numberOfReviews} Reviews</p>
                </div>
                {product.productIsNew && (
                  <p
                    style={{
                      background: "greenyellow",
                      width: "4rem",
                      height: "2rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "3px",
                      color: "white",
                    }}
                  >
                    New
                  </p>
                )}
                {product.stock === 0 && (
                  <p
                    style={{
                      background: "red",
                      width: "7rem",
                      height: "2rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "3px",
                      color: "white",
                    }}
                  >
                    Sold Out
                  </p>
                )}
                <p className="producttext">{product.description}</p>
                <p>Quantity</p>
                <div className="qty-btn">
                  <button
                    disabled={amount <= 1}
                    onClick={() => changeAmount("minus")}
                  >
                    <CiCircleMinus />
                  </button>
                  <p>{amount}</p>
                  <button
                    disabled={amount >= product.stock}
                    onClick={() => changeAmount("plus")}
                  >
                    <CiCirclePlus />
                  </button>
                </div>
                <p>In stock: {product.stock}</p>
                <button
                  className="cartbtn"
                  disabled={product.stock <= 0 || cartPlusDisabled}
                  onClick={() => addItem(product._id)}
                  aria-label="Add to Cart"
                  title={product.stock <= 0 ? "Out of stock" : "Add to cart"}
                >
                  Add to cart
                </button>
                <div className="shipping">
                  {/* <span>
                      <BiCheckShield size="20px" />
                      <p>Year extended warranty</p>
                    </span> */}
                  <span>
                    <BiPackage size="20px" />
                    <p>Shipped in 2 - 3 days</p>
                  </span>
                  <span>
                    <BiSupport size="20px" />
                    <p>Were hear for you 24/7</p>
                  </span>
                </div>
              </article>
              <figure>
                <img
                  src={product.images[0] ? `${product.images[0]}` : Fallbackimg}
                  alt={product.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = Fallbackimg;
                  }}
                />
                <img
                  src={product.images[1] ? `${product.images[1]}` : Fallbackimg}
                  alt={product.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = Fallbackimg;
                  }}
                />
              </figure>
            </div>

            {userInfo && (
              <>
                <section className="comment_sec">
                  <div>
                    <button
                      className="btnReview"
                      disabled={hasUserReviewed()}
                      onClick={() => setReviewBoxOpen(!reviewBoxOpen)}
                    >
                      Write a review
                    </button>
                  </div>
                  {reviewBoxOpen && (
                    <div className="reviewmodal">
                      <span>
                        <button onClick={() => setRating(1)}>
                          <Star />
                        </button>
                        <button onClick={() => setRating(2)}>
                          <Star rating={rating} star={2} />
                        </button>
                        <button onClick={() => setRating(3)}>
                          <Star rating={rating} star={3} />
                        </button>
                        <button onClick={() => setRating(4)}>
                          <Star rating={rating} star={4} />
                        </button>
                        <button onClick={() => setRating(5)}>
                          <Star rating={rating} star={5} />
                        </button>
                      </span>

                      <textarea
                        name="comment"
                        onChange={(e) => {
                          setComment(e.target.value);
                        }}
                        placeholder={`The ${product.brand} ${product.name} is...`}
                      />
                      <button onClick={() => onSubmit()}>Publish review</button>
                    </div>
                  )}
                </section>
              </>
            )}

            <div>
              {product.reviews?.length > 0 ? (
                product.reviews.map((review) => (
                  <div className="reviewssection" key={review._id}>
                    <h2>Reviews</h2>
                    <span>
                      <p>
                        <Star color="cyan" />
                        <Star rating={product.rating} star={2} />
                        <Star rating={product.rating} star={3} />
                        <Star rating={product.rating} star={4} />
                        <Star rating={product.rating} star={5} />
                      </p>
                    </span>
                    <h4>{review.comment}</h4>
                    <h5>
                      by {review.name}, &nbsp;
                      {new Date(review.createdAt).toDateString()}
                    </h5>
                  </div>
                ))
              ) : (
                <p>No reviews available</p>
              )}
            </div>
          </section>
        )
      )}
    </div>
  );
};

export default Productscreen;
