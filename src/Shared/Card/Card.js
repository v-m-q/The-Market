import { addProductToCart } from "../../APIs/cart";
import { incrementCounter } from "../../store/slices/counter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import RatingComponent from "../Rating/Rating";
import { addProductsToWishlist } from "../../APIs/wishlist";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "./Card.css";

export default function Card({ product }) {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const dispatch = useDispatch();
  const base_URL = "http://127.0.0.1:8000";

  function addToCart(e, id) {
    e.preventDefault();
    addProductToCart(id)
      .then(() => {
        alert("Added to cart successfully");
      })
      .catch((err) => alert("Auth error : --"));
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
                <a href="img/product/product-1.jpg" className="image-popup">
                  <span
                    className="arrow_expand"
                    onclick={(e) => showDetails(e, product)}
                  ></span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon_heart_alt">
                    <FontAwesomeIcon
                      icon={isInWishlist ? fasHeart : farHeart}
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(incrementCounter());
                        toggleWishlist(product.product_id);
                      }}
                    />
                  </span>
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => addToCart(e, product.product_id)}>
                  <span className="icon_bag_alt"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="product__item__text">
            <h6>
              <a href="#">{product.name}</a>
            </h6>
            <div className="rating">
              <RatingComponent value={product.avg_rate} />
            </div>
            <div className="product__price">$ {product.price}</div>
          </div>
        </div>
      </div>
    </>
  );
}
