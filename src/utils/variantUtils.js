import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  addCartItem,
  removeCartItemThunk,
} from "../redux/actions/CartActions.js";

const VariantSelector = ({ product }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const getVariantQty = (variantId) => {
    const cartProduct = cartItems.find((item) => item.id === product._id);
    return (
      cartProduct?.variants?.find((v) => v.variantId === variantId)?.qty || 0
    );
  };

  const handleIncrement = (variant) => {
    if (variant.stock === "out of stock") {
      toast.warning(`"${variant.specification}" is out of stock`);
      return;
    }
    dispatch(addCartItem(product._id, 1, variant.id));
  };

  const handleDecrement = (variant) => {
    const currentQty = getVariantQty(variant.id);
    if (currentQty > 0) {
      dispatch(removeCartItemThunk(product._id, variant.id));
    }
  };

  return (
    <div className="cart-item-variants">
      {product.variants.map((variant) => {
        const currentQty = getVariantQty(variant.id);
        const isOutOfStock = variant.stock === "out of stock";

        return (
          <div
            key={variant.id}
            className={`variant-option ${isOutOfStock ? "out-of-stock" : ""} `}
          >
            <span className="">
              <h4>
                {variant.specification} - ₦{variant.price.toLocaleString()}
              </h4>
              <br />
              <span
                style={{
                  fontSize: "1rem",
                  color: isOutOfStock ? "red" : "green",
                }}
              >
                {isOutOfStock ? "(Out of stock)" : "(In stock)"}
              </span>
            </span>

            <div className="qty-controls">
              <button
                disabled={isOutOfStock}
                onClick={() => handleDecrement(variant)}
              >
                -
              </button>
              <span>{currentQty}</span>
              <button
                disabled={isOutOfStock}
                onClick={() => handleIncrement(variant)}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VariantSelector;
