import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ProductsByCategories,
  getProductDetails,
  rateProducts,
} from "../../APIs/products";
import RatingComponent from "../../Shared/Rating/Rating";
import Card from "../../Shared/Card/Card";
import LikedProduct from "../../Shared/LikedProduct/LikedProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Stack from "@mui/material/Stack";
import "./ProductDetails.css";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const ProductDetails = () => {
  const base_URL = "http://127.0.0.1:8000";
  const [productCategory, setproductCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [rating, setRating] = useState(0);
  const params = useParams();

  const handleRating = (event, newRating) => {
    console.log("newRating " + newRating);
    setRating(newRating);
    rateProducts(product.id, newRating)
      .then((res) => console.log(res.data.value))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProductDetails(params.id)
      .then((res) => {
        setProduct(res.data);

        console.log(res.data);

        ProductsByCategories(res.data.category_id)
          .then((res) => {
            setproductCategory(res.data.results);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => console.log(err));
  }, [rating]);

  if (!product) {
    return null;
  }

  return (
    <div>
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product__details__pic">
                <div className="product__details__pic__left product__thumb nice-scroll">
                  <a className="pt active" href="#product-1">
                    <img src={`${base_URL}/${product.thumbnail}`} alt="" />
                  </a>
                  <a className="pt" href="#product-2">
                    <img src={`${base_URL}/${product.thumbnail}`} alt="" />
                  </a>
                  <a className="pt" href="#product-3">
                    <img src={`${base_URL}/${product.thumbnail}`} alt="" />
                  </a>
                  <a className="pt" href="#product-4">
                    <img src={`${base_URL}/${product.thumbnail}`} alt="" />
                  </a>
                </div>

                <div class="product__details__slider__content">
                  <div class="product__details__pic__slider owl-carousel">
                    <img src={"http://127.0.0.1:8000//media/1500x500.jpg"} />
                    <img
                      class="product__big__img"
                      src={`${base_URL}/${product.thumbnail}`}
                      alt=""
                    />
                    <img
                      class="product__big__img"
                      src={`${base_URL}/${product.thumbnail}`}
                      alt=""
                    />
                    <img
                      class="product__big__img"
                      src={`${base_URL}/${product.thumbnail}`}
                      alt=""
                    />
                    <img
                      class="product__big__img"
                      src={`${base_URL}/${product.thumbnail}`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product__details__text">
                <h3>{product.name}</h3>
                <h5>Category: {product.category && product.category}</h5>
                <span>{product.avg_rate}</span>{" "}
                <span>
                  <RatingComponent value={product.avg_rate} />
                </span>
                <div className="product__details__price">$ {product.price}</div>
                <p>{product.description}</p>
                <div className="product__details__button">
                  <ul>
                    <li>
                      <LikedProduct product={product.id} />
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faShoppingBag} />
                    </li>
                  </ul>
                </div>
                <div className="product__details__widget">
                  <ul>
                    <li>
                      <span>Availability: </span>
                      <span>
                        {" "}
                        {product.quantity === 0 ? (
                          <span className="out-of-stock">Out of Stock</span>
                        ) : (
                          <span className="in-stock">In Stock</span>
                        )}
                      </span>
                    </li>
                    <li></li>
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating"
                        precision={0.5}
                        value={rating}
                        onChange={handleRating}
                      />
                    </Stack>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="related__title">
                <h5>RELATED PRODUCTS</h5>
              </div>
            </div>
            {productCategory.slice(-4).map((productItem) => (
              <Card key={productItem.id} product={productItem} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
