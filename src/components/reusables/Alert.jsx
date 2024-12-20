import React from "react";

const Alert = ({ type = "info", title, description, onClose }) => {
  const alertStyles = {
    base: {
      padding: "10px",
      borderRadius: "5px",
      marginBottom: "15px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    types: {
      success: {
        backgroundColor: "#d4edda",
        color: "#155724",
        border: "1px solid #c3e6cb",
      },
      error: {
        backgroundColor: "#f8d7da",
        color: "#721c24",
        border: "1px solid #f5c6cb",
      },
      warning: {
        backgroundColor: "#fff3cd",
        color: "#856404",
        border: "1px solid #ffeeba",
      },
      info: {
        backgroundColor: "#cce5ff",
        color: "#004085",
        border: "1px solid #b8daff",
      },
    },
  };

  return (
    <div style={{ ...alertStyles.base, ...alertStyles.types[type] }}>
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
      {onClose && (
        <button
          style={{
            marginLeft: "10px",
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
