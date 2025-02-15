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

const Productscreen = () => {
  const [amount, setAmount] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, product, reviewed } = useSelector(
    (state) => state.product
  );
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);
  const [title, setTitle] = useState("");
  const [reviewBoxOpen, setReviewBoxOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.user);
  const [buttonLoading, setButtonLoading] = useState(false);
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
    dispatch(
      createProductReview(product._id, userInfo._id, comment, rating, title)
    );
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
                <h1>
                  {product.brand} {product.name}
                </h1>
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
                <div>
                  <p>{product.subtitle}</p>
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
                <button className="cartbtn" disabled={product.stock === 0}>
                  Add to cart
                </button>
                <div className="shipping">
                  <span>
                    <BiCheckShield size="20px" />
                    <p>Year extended warranty</p>
                  </span>
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
                  src={
                    product.images[0]
                      ? `http://localhost:5000/${product.images[0].replace(
                          /\\/g,
                          "/"
                        )}`
                      : Fallbackimg
                  }
                  alt={product.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = Fallbackimg;
                  }}
                />
                <img
                  src={
                    product.images[1]
                      ? `http://localhost:5000/${product.images[1].replace(
                          /\\/g,
                          "/"
                        )}`
                      : Fallbackimg
                  }
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
                <div>
                  <button
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

                    <div>
                      <input
                        type="text"
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                        placeholder="Review title (optional)"
                      />
                      <textarea
                        name="comment"
                        onChange={(e) => {
                          setComment(e.target.value);
                        }}
                        placeholder={`The ${product.brand} ${product.name} is...`}
                      />
                      <button onClick={() => onSubmit()}>Publish review</button>
                    </div>
                  </div>
                )}
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
                      <p>{review.title && review.title}</p>
                    </span>
                    <p>{review.comment}</p>
                    <p>
                      by {review.name}, &nbsp;
                      {new Date(review.createdAt).toDateString()}
                    </p>
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
