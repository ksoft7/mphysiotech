import React from "react";
import { useDispatch } from "react-redux";
import { removeCartItemThunk } from "../../redux/actions/CartActions.js";
import { FaRegTrashCan } from "react-icons/fa6";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const handleRemoveVariant = (variantId) => {
    dispatch(removeCartItemThunk(cartItem.id, variantId));
  };

  return (
    <div className="cart-item">
      <img src={cartItem.image} alt={cartItem.name} className="cart-item-img" />

      <div className="cart-item-details">
        <h4 className="cart-item-name">{cartItem.name}</h4>

        {cartItem.variants && cartItem.variants.length > 0 && (
          <div className="cart-item-variants">
            {cartItem.variants.map((variant, index) => (
              <div
                key={`${variant.variantId || `default-${index}`}`}
                className="cart-variant-row"
              >
                <div className="variant-details">
                  <strong>{variant.specification}</strong>
                  &nbsp;
                  {/* <span
                    className={`stock-status ${
                      variant.variantAvailable === "out of stock" ? "out" : "in"
                    }`}
                  >
                    {variant.variantAvailable === "out of stock"
                      ? "Out of stock"
                      : "In stock"}
                  </span> */}
                  {variant.qty} × ₦{variant.price.toLocaleString()} = &nbsp;
                  <strong>
                    ₦{(variant.qty * variant.price).toLocaleString()}
                  </strong>
                </div>

                <FaRegTrashCan
                  className="remove-icon"
                  onClick={() => handleRemoveVariant(variant.variantId)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItem;
