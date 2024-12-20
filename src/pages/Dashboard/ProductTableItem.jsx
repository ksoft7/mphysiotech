import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteProduct } from "../../redux/actions/AdminActions";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openDeleteConfirmBox = () => {
    setIsOpen(true);
  };

  const closeDeleteConfirmBox = () => {
    setIsOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteProduct(product._id))
      .then(() => {
        toast.success("Product has been deleted.");
      })
      .catch((error) => {
        toast.error(
          error.response?.data?.message || "Failed to delete the product."
        );
      });
    closeDeleteConfirmBox();
  };

  const handleEdit = () => {
    navigate(`/edit-product/${product._id}`);
  };

  return (
    <div style={styles.card}>
      <img
        src={product.images[0] || "https://via.placeholder.com/150"}
        alt={product.name}
        style={styles.image}
      />
      <h3 style={styles.name}>{product.name}</h3>
      <p style={styles.price}>${product.price}</p>
      <div style={styles.actions}>
        <button onClick={handleEdit} style={styles.editButton}>
          Edit
        </button>
        <button onClick={openDeleteConfirmBox} style={styles.deleteButton}>
          Delete
        </button>
      </div>

      {isOpen && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <p>Are you sure you want to delete this product?</p>
            <div style={styles.modalActions}>
              <button onClick={handleDelete} style={styles.confirmButton}>
                Yes, Delete
              </button>
              <button
                onClick={closeDeleteConfirmBox}
                style={styles.cancelButton}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "250px",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "4px",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "12px 0",
  },
  price: {
    fontSize: "16px",
    color: "#555",
    margin: "8px 0",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
  },
  editButton: {
    backgroundColor: "#07a4b5",
    color: "#fff",
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    color: "#fff",
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  modal: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1000",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "40px 20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    width: "300px",
  },
  modalActions: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  confirmButton: {
    backgroundColor: "#e74c3c",
    color: "#fff",
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  cancelButton: {
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ProductCard;
