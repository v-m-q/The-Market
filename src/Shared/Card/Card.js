import { addProductToCart } from "../../APIs/cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import RatingComponent from "../Rating/Rating";
import { useNavigate } from "react-router-dom";
import "./Card.css";
import LikedProduct from "../LikedProduct/LikedProduct";

export default function Card({ product }) {
  const base_URL = "http://127.0.0.1:8000";

  const navigate = useNavigate();

  const redirectToProductDetails = (id) => {
    navigate(`/products/${id}`);
  };

  function addToCart(e, id) {
    e.preventDefault();
    addProductToCart(id)
      .then(() => {
        alert("Added to cart successfully");
      })
      .catch((err) => alert("Auth error : --"));
  }

  if (!product) {
    return null;
  }

  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 mix">
        <div className="product__item">
          <div
            className="product__item__pic set-bg"
            style={{
              "background-image": `url(${base_URL}/${product.thumbnail})`,
            }}
          >
            {product.quantity === 0 ? (
              <span className="out">Out of Stock</span>
            ) : (
              <span className="in">Available</span>
            )}
            <ul className="product__hover">
              <li>
                <a href={`${product.thumbnail}`} className="image-popup">
                  <span className="arrow_expand">
                    <FontAwesomeIcon icon={faArrowUpLong} />
                  </span>
                </a>
              </li>
              <li>
                <span className="icon_heart_alt">
                  <LikedProduct product={product.product_id} />
                </span>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  onClick={(e) => addToCart(e, product.product_id)}
                />
              </li>
            </ul>
          </div>
          <div className="product__item__text">
            <h6>
              <p
                className="product-header"
                onClick={() => redirectToProductDetails(product.product_id)}
              >
                {product.name}
              </p>
            </h6>
            <div>
              <RatingComponent value={product.avg_rate} />
            </div>
            <div className="product__price">$ {product.price}</div>
          </div>
        </div>
      </div>
    </>
  );
}
