import "../../App.css";
import "../../styles/dashboard.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProducts, updateProduct } from "../../redux/actions/productActions";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Spinner from "../../components/reusables/Spinner";
import { GoArrowLeft } from "react-icons/go";

const ProductEditPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { products, loading, error } = useSelector((state) => state.product);
  const [productDetails, setProductDetails] = useState({
    brand: "",
    name: "",
    category: "",
    stock: 0,
    price: 0,
    productIsNew: false,
    description: "",
    rating: 0,
  });

  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(getProducts());
    } else {
      const productToEdit = products.find((product) => product._id === id);
      if (productToEdit) {
        setProductDetails({
          brand: productToEdit.brand,
          name: productToEdit.name,
          category: productToEdit.category,
          stock: productToEdit.stock,
          price: productToEdit.price,
          productIsNew: productToEdit.productIsNew,
          description: productToEdit.description,
          rating: productToEdit.rating,
        });
      }
    }
  }, [dispatch, products, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      brand,
      name,
      category,
      stock,
      price,
      productIsNew,
      description,
      rating,
    } = productDetails;
    dispatch(
      updateProduct(
        id,
        brand,
        name,
        category,
        stock,
        price,
        productIsNew,
        description,
        rating
      )
    );
    toast.success("Product updated successfully!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <>
      <Link className="moveLf" to={"/ProductsTab"}>
        <GoArrowLeft />
      </Link>
      {loading && <Spinner />}
      {error && <p>{error}</p>}
      <div className="product-edit-page">
        <h1>Edit Product</h1>
        {!loading && !error && (
          <form onSubmit={handleSubmit}>
            <article>
              <div>
                <label htmlFor="brand">Brand</label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={productDetails.brand}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={productDetails.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={productDetails.category}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="stock">Stock</label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  value={productDetails.stock}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="stock">rating</label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  value={productDetails.rating}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={productDetails.price}
                  onChange={handleChange}
                />
              </div>
            </article>
            <p>
              <label htmlFor="productIsNew">New Product</label>
              <input
                type="checkbox"
                id="productIsNew"
                name="productIsNew"
                checked={productDetails.productIsNew}
                onChange={(e) =>
                  setProductDetails({
                    ...productDetails,
                    productIsNew: e.target.checked,
                  })
                }
              />
            </p>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={productDetails.description}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Save Changes</button>
          </form>
        )}
      </div>
    </>
  );
};

export default ProductEditPage;
