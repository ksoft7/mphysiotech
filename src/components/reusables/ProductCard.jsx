import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BiExpand } from "react-icons/bi";
import { toast } from "react-toastify";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { Link as ReactLink } from "react-router-dom";
import Modal from "react-modal"; // Import react-modal
import {
  addFavourites,
  removeFavourites,
} from "../../redux/actions/productActions";
import { addCartItem } from "../../redux/actions/CartActions";
import Fallbackimg from "../../assets/imgs/fallbackimg.png";
import "../../App.css";
import { truncateCombined } from "../../utils/truncateword";

const ProductCard = ({ product, loading }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.cart);
  const [isShown, setIsShown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedQuantities, setSelectedQuantities] = useState({});

  useEffect(() => {
    let defaultQuantities = {};
    product.variants?.forEach((variant) => {
      defaultQuantities[variant.id] = 0;
    });
    setSelectedQuantities(defaultQuantities);
  }, [product]);

  const handleQuantityChange = (variantId, amount) => {
    setSelectedQuantities((prev) => ({
      ...prev,
      [variantId]: Math.max(0, (prev[variantId] || 0) + amount),
    }));
  };

  const handleAddToCart = () => {
    if (product.variants && product.variants.length > 0) {
      setShowModal(true);
    } else {
      dispatch(addCartItem(product._id, 1));
      toast.success("Product added to cart!");
    }
  };

  const handleConfirmSelection = () => {
    let selectedItems = Object.entries(selectedQuantities)
      .filter(([_, qty]) => qty > 0)
      .map(([variantId, qty]) => ({
        id: product._id,
        variantId,
        qty,
      }));

    if (selectedItems.length > 0) {
      selectedItems.forEach((item) => {
        dispatch(addCartItem(item.id, item.qty, item.variantId));
      });

      toast.success("Items added to cart!");
      setShowModal(false);
    } else {
      alert("Please select at least one variant.");
    }
  };

  return (
    <section className="product_card" loading={!loading}>
      <figure>
        <img
          src={
            product.images.length > 1 ? product.images[1] : product.images[0]
          } // Show second image first
          alt={product.name}
          onMouseEnter={
            (e) => (e.target.src = product.images[0]) // Switch to first image on hover
          }
          onMouseLeave={
            (e) =>
              (e.target.src =
                product.images.length > 1
                  ? product.images[1]
                  : product.images[0]) // Switch back to second image
          }
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = Fallbackimg;
          }}
        />
      </figure>

      <span className="card_stock">
        {product.stock < 5 ? (
          <p style={{ color: "#faad07", background: "yellow" }}>
            Only {product.stock} left
          </p>
        ) : product.stock < 1 ? (
          <p style={{ color: "red", background: "red" }}>Sold out</p>
        ) : (
          <p style={{ color: "green", background: "#c3eb34" }}>In stock</p>
        )}
        {product.productIsNew && (
          <p style={{ color: "purple", background: "#db86f7" }}>New</p>
        )}
      </span>

      <h3 title={product.name}>{truncateCombined(product.name, "", 15)}</h3>

      <span className="card_price">
        <p>{product.category}</p>
        <p>₦{product.price}</p>
      </span>

      <span className="btn_holder">
        {favorites.includes(product._id) ? (
          <button onClick={() => dispatch(removeFavourites(product._id))}>
            <MdOutlineFavorite size={"20px"} />
          </button>
        ) : (
          <button onClick={() => dispatch(addFavourites(product._id))}>
            <MdOutlineFavoriteBorder size={"20px"} />
          </button>
        )}

        <ReactLink to={`/product/${product._id}`}>
          <button className="proid">
            <BiExpand size={24} color="blue" />
          </button>
        </ReactLink>

        <button
          disabled={product.stock <= 0}
          onClick={handleAddToCart}
          aria-label="Add to Cart"
          title={product.stock <= 0 ? "Out of stock" : "Add to cart"}
        >
          <FaShoppingCart size={24} />
        </button>
      </span>

      {/* Variant Selection Modal */}
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="modal-header">
          <p>Select a variation</p>
          <button className="modal-close" onClick={() => setShowModal(false)}>
            ×
          </button>
        </div>

        <div className="variant-list">
          {product.variants?.map((variant) => (
            <div key={variant.id} className="variant-item">
              <span>
                {variant.specification} <br /> ₦{variant.price}
              </span>
              <div className="qty-controls">
                <button
                  onClick={() => handleQuantityChange(variant.id, -1)}
                  disabled={selectedQuantities[variant.id] <= 0}
                >
                  -
                </button>
                <span>{selectedQuantities[variant.id] || 0}</span>
                <button onClick={() => handleQuantityChange(variant.id, 1)}>
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="modal-actions">
          <button className="continue-btn" onClick={() => setShowModal(false)}>
            Continue Shopping
          </button>
          <button className="cart-btn" onClick={handleConfirmSelection}>
            Go to Cart
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default ProductCard;
