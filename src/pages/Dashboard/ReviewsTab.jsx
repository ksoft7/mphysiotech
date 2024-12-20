import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeReview } from "../../redux/actions/AdminActions";
import { getProducts } from "../../redux/actions/productActions";

const ReviewsTab = () => {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.admin);
  const { products, reviewRemoval } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
    if (reviewRemoval) {
      alert("Review has been removed.");
    }
  }, [dispatch, reviewRemoval, loading]);

  const onRemoveReview = (productId, reviewId) => {
    dispatch(removeReview(productId, reviewId));
  };

  return (
    <div style={{ padding: "20px" }}>
      {error && (
        <div
          style={{
            border: "1px solid red",
            padding: "10px",
            color: "red",
            marginBottom: "20px",
          }}
        >
          <strong>Upps!</strong> {error}
        </div>
      )}
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <div
            style={{
              width: "50px",
              height: "50px",
              border: "5px solid #ccc",
              borderTopColor: "cyan",
              borderRadius: "50%",
              animation: "spin 0.65s linear infinite",
            }}
          ></div>
          <style>{`
						@keyframes spin {
							to {
								transform: rotate(360deg);
							}
						}
					`}</style>
        </div>
      ) : (
        <div>
          {products.length > 0 &&
            products.map((product) => (
              <div key={product._id} style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                    onClick={(e) => {
                      const panel = e.target.nextElementSibling;
                      if (panel) {
                        panel.style.display =
                          panel.style.display === "block" ? "none" : "block";
                      }
                    }}
                  >
                    <span>{product.name}</span>
                    <span>({product.reviews.length} Reviews)</span>
                  </div>
                  <div style={{ display: "none", padding: "10px" }}>
                    <table
                      style={{ width: "100%", borderCollapse: "collapse" }}
                    >
                      <thead>
                        <tr>
                          <th
                            style={{
                              borderBottom: "1px solid #ccc",
                              padding: "10px",
                            }}
                          >
                            Username
                          </th>
                          <th
                            style={{
                              borderBottom: "1px solid #ccc",
                              padding: "10px",
                            }}
                          >
                            Rating
                          </th>
                          <th
                            style={{
                              borderBottom: "1px solid #ccc",
                              padding: "10px",
                            }}
                          >
                            Title
                          </th>
                          <th
                            style={{
                              borderBottom: "1px solid #ccc",
                              padding: "10px",
                            }}
                          >
                            Comment
                          </th>
                          <th
                            style={{
                              borderBottom: "1px solid #ccc",
                              padding: "10px",
                            }}
                          >
                            Created
                          </th>
                          <th
                            style={{
                              borderBottom: "1px solid #ccc",
                              padding: "10px",
                            }}
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.reviews.map((review) => (
                          <tr key={review._id}>
                            <td
                              style={{
                                padding: "10px",
                                borderBottom: "1px solid #eee",
                              }}
                            >
                              {review.name}
                            </td>
                            <td
                              style={{
                                padding: "10px",
                                borderBottom: "1px solid #eee",
                              }}
                            >
                              {review.rating}
                            </td>
                            <td
                              style={{
                                padding: "10px",
                                borderBottom: "1px solid #eee",
                              }}
                            >
                              {review.title}
                            </td>
                            <td
                              style={{
                                padding: "10px",
                                borderBottom: "1px solid #eee",
                              }}
                            >
                              <textarea
                                style={{ width: "100%", resize: "none" }}
                                readOnly
                                value={review.comment}
                              ></textarea>
                            </td>
                            <td
                              style={{
                                padding: "10px",
                                borderBottom: "1px solid #eee",
                              }}
                            >
                              {new Date(review.createdAt).toDateString()}
                            </td>
                            <td
                              style={{
                                padding: "10px",
                                borderBottom: "1px solid #eee",
                              }}
                            >
                              <button
                                style={{
                                  backgroundColor: "red",
                                  color: "white",
                                  border: "none",
                                  padding: "5px 10px",
                                  cursor: "pointer",
                                }}
                                onClick={() =>
                                  onRemoveReview(product._id, review._id)
                                }
                              >
                                Remove Review
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ReviewsTab;
