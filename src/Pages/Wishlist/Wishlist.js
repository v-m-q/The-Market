import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { getProductsByWishlist } from "../../APIs/wishlist";
import { removeProductsFromWishlist } from "../../APIs/wishlist";
import RatingComponent from "../../Shared/Rating/Rating";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const navigate = useNavigate();
  const [wishitems, setWishitems] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("Token")) {
      navigate("/login");
    } else {
      getProductsByWishlist()
        .then((res) => {
          setWishitems(res.data.results);
        })
        .catch((err) => console.log(err));
    }
  }, [navigate]);

  const removeItem = (productId) => {
    removeProductsFromWishlist(productId)
      .then((res) => {
        getProductsByWishlist()
          .then((res) => {
            setWishitems(res.data.results);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="shop-cart spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {wishitems.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  fontSize: "24px",
                  marginTop: "50px",
                  color: "#ca1515",
                }}
              >
                Wishlist is empty
              </div>
            ) : (
              <div className="shop__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  {wishitems.map((item, id) => (
                    <tbody key={id}>
                      <tr>
                        <td className="cart__product__item">
                          <img src="img/shop-cart/cp-1.jpg" alt="" />
                          <div className="cart__product__item__title">
                            <h6>{item.product_details.name}</h6>
                            <div>
                              <RatingComponent
                                value={item.product_details.avg_rate}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="cart__price">
                          $ {item.product_details.price}
                        </td>
                        <td className="cart__close">
                          <button>
                            <FontAwesomeIcon
                              icon={faTrashAlt}
                              onClick={() => {
                                removeItem(item.product);
                              }}
                            />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
