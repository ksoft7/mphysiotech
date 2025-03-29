import "../App.css";
import Modal from "react-modal";

const VariantModal = ({
  isOpen,
  onClose,
  product,
  quantities,
  onQuantityChange,
  onConfirm,
}) => {
  if (!product) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header">
        <h2>Select Variants for {product.name}</h2>
        <button onClick={onClose} className="modal-close">
          ×
        </button>
      </div>

      <div className="variant-list">
        {product.variants.map((variant) => (
          <div key={variant.id} className="variant-item">
            <p>
              {variant.specification} - ₦{variant.price}
            </p>
            <div className="qty-controls">
              <button
                onClick={() => onQuantityChange(variant.id, -1)}
                disabled={(quantities[variant.id] || 0) <= 0}
              >
                -
              </button>
              <span>{quantities[variant.id] || 0}</span>
              <button onClick={() => onQuantityChange(variant.id, 1)}>+</button>
            </div>
          </div>
        ))}
      </div>

      <div className="modal-actions">
        <button onClick={onConfirm}>Add to Cart</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </Modal>
  );
};

export default VariantModal;
