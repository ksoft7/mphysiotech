import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadProduct } from "../../redux/actions/AdminActions";

const AddNewProduct = () => {
  const dispatch = useDispatch();
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [productIsNew, setProductIsNew] = useState(true);
  const [description, setDescription] = useState("");
  const [imageOne, setImageOne] = useState("");
  const [imageTwo, setImageTwo] = useState("");

  const createNewProduct = () => {
    dispatch(
      uploadProduct({
        brand,
        name,
        category,
        stock,
        price,
        images: [`/images/${imageOne}`, `/images/${imageTwo}`],
        productIsNew,
        description,
      })
    );
  };

  return (
    <tr style={{ borderBottom: "1px solid #ddd" }}>
      <td style={{ padding: "8px" }}>
        <div>
          <label>Image File Name 1</label>
          <input
            type="text"
            value={imageOne}
            onChange={(e) => setImageOne(e.target.value)}
            placeholder="e.g., iPhone.jpg"
            style={{
              display: "block",
              margin: "8px 0",
              padding: "4px",
              width: "100%",
            }}
          />
        </div>
        <div>
          <label>Image File Name 2</label>
          <input
            type="text"
            value={imageTwo}
            onChange={(e) => setImageTwo(e.target.value)}
            placeholder="e.g., iPhone.jpg"
            style={{
              display: "block",
              margin: "8px 0",
              padding: "4px",
              width: "100%",
            }}
          />
        </div>
      </td>
      <td style={{ padding: "8px" }}>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            style={{
              display: "block",
              margin: "8px 0",
              padding: "4px",
              width: "100%",
              height: "100px",
            }}
          />
        </div>
      </td>
      <td style={{ padding: "8px" }}>
        <div>
          <label>Brand</label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            placeholder="Apple or Samsung etc."
            style={{
              display: "block",
              margin: "8px 0",
              padding: "4px",
              width: "100%",
            }}
          />
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Samsung S30"
            style={{
              display: "block",
              margin: "8px 0",
              padding: "4px",
              width: "100%",
            }}
          />
        </div>
      </td>
      <td style={{ padding: "8px" }}>
        <div>
          <label>Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Electronics"
            style={{
              display: "block",
              margin: "8px 0",
              padding: "4px",
              width: "100%",
            }}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="299.99"
            style={{
              display: "block",
              margin: "8px 0",
              padding: "4px",
              width: "100%",
            }}
          />
        </div>
      </td>
      <td style={{ padding: "8px" }}>
        <div>
          <label>Stock</label>
          <input
            type="text"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            style={{
              display: "block",
              margin: "8px 0",
              padding: "4px",
              width: "100%",
            }}
          />
        </div>
        <div>
          <label>
            New Badge
            <input
              type="checkbox"
              checked={productIsNew}
              onChange={() => setProductIsNew(!productIsNew)}
              style={{ marginLeft: "8px" }}
            />
          </label>
        </div>
      </td>
      <td style={{ padding: "8px" }}>
        <button
          onClick={createNewProduct}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#007bff",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          <span style={{ marginRight: "8px" }}>📁</span> Save Product
        </button>
      </td>
    </tr>
  );
};

export default AddNewProduct;
