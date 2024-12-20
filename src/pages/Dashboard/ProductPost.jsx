import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import ImageUpload from "../../components/ImageUploadForProduct";
import { toast } from "react-toastify";
import { createProductPost } from "../../redux/actions/productActions";
import Spinner from "../../components/reusables/Spinner";
import Fixbars from "../../components/try.fixbar";
import "../../styles/trydasboard.css";

function ProductPost() {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    brand: "",
    name: "",
    category: "",
    stock: "",
    price: "",
    rating: "",
    numberOfReviews: "",
    images: [],
    productIsNew: true,
    description: "",
  });

  const { productPostCreated, error, updateButtonLoading } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (productPostCreated) {
      toast.success("Product created successfully");
      console.log(productPostCreated);
      setFormState({
        brand: "",
        name: "",
        category: "",
        stock: "",
        price: "",
        rating: "",
        numberOfReviews: "",
        images: [],
        productIsNew: true,
        description: "",
      });

      dispatch({ type: "RESET_PRODUCT_POST_CREATED" });
    }

    if (error) {
      toast.error(error);
    }
  }, [productPostCreated, error, dispatch]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageUpload = useCallback((images) => {
    setFormState((prev) => ({ ...prev, images }));
  }, []);

  const handlePublishPost = () => {
    const {
      brand,
      name,
      category,
      stock,
      price,
      rating,
      numberOfReviews,
      images,
      productIsNew,
      description,
    } = formState;

    // Validate required fields
    if (
      !brand ||
      !name ||
      !category ||
      !stock ||
      !price ||
      !images.length ||
      !description ||
      !rating ||
      !numberOfReviews
    ) {
      toast.error("Please fill in all fields and upload an image.");
      return;
    }

    // Dispatch action to create the product
    dispatch(createProductPost(formState));
  };

  return (
    <section className="trydashboard_wrapper">
      <Fixbars />
      <main className="Dashboard-contents">
        <section className="postblog_sty">
          <h1>Create New Product</h1>
          <article>
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              value={formState.brand}
              onChange={handleChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formState.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formState.category}
              onChange={handleChange}
            />
            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={formState.stock}
              onChange={handleChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formState.price}
              onChange={handleChange}
            />
            <input
              type="number"
              name="rating"
              placeholder="Rating"
              value={formState.rating}
              onChange={handleChange}
            />
            <input
              type="number"
              name="numberOfReviews"
              placeholder="Number of Reviews"
              value={formState.numberOfReviews}
              onChange={handleChange}
            />
            <ImageUpload setPostImages={handleImageUpload} />
            <textarea
              name="description"
              placeholder="Description"
              value={formState.description}
              onChange={handleChange}
            />
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="productIsNew"
                checked={formState.productIsNew}
                onChange={handleChange}
              />
              Product is New
            </label>
            <button
              disabled={updateButtonLoading}
              onClick={handlePublishPost}
              className="publish-btn"
            >
              {updateButtonLoading ? <Spinner /> : "Publish Product"}
            </button>
          </article>
        </section>
      </main>
    </section>
  );
}

export default ProductPost;
