import { useSelector, useDispatch } from "react-redux";
import { BiExpand } from "react-icons/bi";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { Link as ReactLink } from "react-router-dom";
import {
  addFavourites,
  removeFavourites,
} from "../../redux/actions/productActions";
import Fallbackimg from "../../assets/imgs/fallbackimg.png";
import Spinner from "./Spinner";
import "../../App.css";
import { truncateCombined } from "../../utils/truncateword";

const ProductCard = ({ product, loading, onAddToCart }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state.product);

  if (loading) return <Spinner />;

  return (
    <section className="product_card">
      <figure>
        <img
          src={
            product.images.length > 1 ? product.images[1] : product.images[0]
          }
          alt={product.name}
          onMouseEnter={(e) => {
            e.target.src = product.images[0];
          }}
          onMouseLeave={(e) => {
            e.target.src =
              product.images.length > 1 ? product.images[1] : product.images[0];
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = Fallbackimg;
          }}
        />
      </figure>

      <span className="card_stock">
        {product.stock < 1 ? (
          <p style={{ color: "red", background: "red" }}>Sold out</p>
        ) : product.stock < 5 ? (
          <p style={{ color: "#faad07", background: "yellow" }}>
            Only {product.stock} left
          </p>
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
            <BiExpand size={24} />
          </button>
        </ReactLink>

        <button
          disabled={product.stock <= 0}
          onClick={onAddToCart}
          aria-label="Add to Cart"
          title={product.stock <= 0 ? "Out of stock" : "Add to cart"}
        >
          <FaShoppingCart size={24} />
        </button>
      </span>
    </section>
  );
};

export default ProductCard;
