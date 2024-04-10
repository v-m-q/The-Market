import { addProductToCart } from "../../APIs/cart";

import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";

import "./Card.css"

export default function Card({product}) {
  const base_URL = 'http://127.0.0.1:8000'
  
  function addToCart(e, id) {
    e.preventDefault();
    addProductToCart(id)
      .then(() => {
        alert('Added to cart successfully')
      })
      .catch((err) => alert('Auth error : --'));
  }

  return (
    
    <>
        <div className="col-lg-3 col-md-4 col-sm-6 mix">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  style={{'background-image': `url(${base_URL}/${product.thumbnail})`}}
                >
                  
                  {product.quantity === 0 ? <span className="out">Out of Stock</span> : <span className="in">Available</span>}
                  <ul className="product__hover">
                    <li>
                      <a href="img/product/product-1.jpg" className="image-popup">
                        <span className="arrow_expand" > 
                        {/* <span className="arrow_expand" onclick = {(e)=> showDetails(e,product)}> */}
                        {/* <FontAwesomeIcon icon="fa-solid fa-arrows-up-down" /> */}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon_heart_alt" > 
                        {/* <span className="icon_heart_alt" onclick = {(e)=> addToWhishList(e,product)}> */}
                        {/* <FontAwesomeIcon icon="fa-light fa-heart" /> */}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => addToCart(e, product.product_id)}>
                        <span className="icon_bag_alt">
                        {/* <FontAwesomeIcon icon="fa-regular fa-cart-shopping" /> */}
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">{product.name}</a>
                  </h6>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="product__price">$ {product.price}</div>
                </div>
              </div>
            </div>
    </>
  );
}