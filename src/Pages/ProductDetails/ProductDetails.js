import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ProductsByCategories,
  getProductDetails,
  rateProducts,
  searchForProducts,
} from "../../APIs/products";
import RatingComponent from "../../Shared/Rating/Rating";
import Card from "../../Shared/Card/Card";
import LikedProduct from "../../Shared/LikedProduct/LikedProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import "./ProductDetails.css";

const ProductDetails = () => {
  const [productCategory, setproductCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [rating, setRating] = useState(0);
  const params = useParams();
  console.log(params);

  const handleRating = (newRating) => {
    const productRating = setRating(newRating);
    rateProducts(product.product_id, productRating)
      .then((res) => setRating(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProductDetails(params.id)
      .then((res) => {
        setProduct(res.data);
        ProductsByCategories(res.data.category_id)
          .then((res) => {
            setproductCategory(res.data);
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
                    <img src="img/product/details/thumb-1.jpg" alt="" />
                  </a>
                  <a className="pt" href="#product-2">
                    <img src="img/product/details/thumb-2.jpg" alt="" />
                  </a>
                  <a className="pt" href="#product-3">
                    <img src="img/product/details/thumb-3.jpg" alt="" />
                  </a>
                  <a className="pt" href="#product-4">
                    <img src="img/product/details/thumb-4.jpg" alt="" />
                  </a>
                </div>
                <div className="product__details__slider__content">
                  <div className="product__details__pic__slider owl-carousel">
                    <img
                      data-hash="product-1"
                      className="product__big__img"
                      src="img/product/details/product-1.jpg"
                      alt=""
                    />
                    <img
                      data-hash="product-2"
                      className="product__big__img"
                      src="img/product/details/product-3.jpg"
                      alt=""
                    />
                    <img
                      data-hash="product-3"
                      className="product__big__img"
                      src="img/product/details/product-2.jpg"
                      alt=""
                    />
                    <img
                      data-hash="product-4"
                      className="product__big__img"
                      src="img/product/details/product-4.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product__details__text">
                <h3>{product.name}</h3>
                <h5>
                  Category:{" "}
                  {product.category_name && product.category_name.name}
                </h5>
                <div>
                  <RatingComponent value={product.avg_rate} />
                </div>
                <div>{product.avg_rate}</div>
                <div className="product__details__price">$ {product.price}</div>
                <p>{product.description}</p>
                <div className="product__details__button">
                  <ul>
                    <li>
                      <LikedProduct product={product.product_id} />
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
                    <li>
                      {rating === 0 ? (
                        <Stack spacing={1}>
                          <Rating
                            name="half-rating"
                            precision={0.5}
                            value={rating}
                            onChange={handleRating}
                          />
                        </Stack>
                      ) : (
                        <Rating name="disabled" value={rating} disabled />
                      )}
                    </li>
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
              <Card key={productItem.product_id} product={productItem} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
