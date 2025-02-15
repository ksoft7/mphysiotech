import React, { useState } from "react";
function Funsd() {
  const [isOpen, setIsOpen] = useState(false);
  const openDeleteConfirmBox = () => {
    setIsOpen(true);
  };

  const closeDeleteConfirmBox = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div>
        <button onClick={openDeleteConfirmBox} style={styles.deleteButton}>
          Delete
        </button>
      </div>
      {/* Good ideas */}
      {isOpen && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <p>Are you sure you want to delete this Blog?</p>
            <div style={styles.modalActions}>
              <button style={styles.confirmButton}>Yes, Delete</button>
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
}
const styles = {
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

export default Funsd;
