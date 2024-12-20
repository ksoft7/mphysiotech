import React from "react";
import { useDispatch } from "react-redux";

const ConfirmRemovalAlert = ({
  isOpen,
  onClose,
  cancelRef,
  itemToDelete,
  deleteAction,
}) => {
  const dispatch = useDispatch();

  const onDeleteItem = () => {
    dispatch(deleteAction(itemToDelete._id));
    onClose();
  };

  if (!isOpen) return null; // Render nothing if the dialog is not open

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          width: "400px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
          overflow: "hidden",
        }}
      >
        <div style={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
          <h2 style={{ fontSize: "18px", margin: 0, fontWeight: "bold" }}>
            Delete {itemToDelete.name}
          </h2>
        </div>
        <div style={{ padding: "16px" }}>
          <p>Are you sure? You can't undo this action afterwards.</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "16px",
            borderTop: "1px solid #ddd",
          }}
        >
          <button
            ref={cancelRef}
            onClick={onClose}
            style={{
              padding: "8px 16px",
              background: "#f0f0f0",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginRight: "8px",
            }}
          >
            Cancel
          </button>
          <button
            onClick={onDeleteItem}
            style={{
              padding: "8px 16px",
              background: "#e53e3e",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Delete {itemToDelete.name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRemovalAlert;
