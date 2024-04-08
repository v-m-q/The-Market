import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { getProductsByWishlist } from "../../APIs/wishlist";
import { removeProductsFromWishlist } from "../../APIs/wishlist";
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
          setWishitems(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [navigate]);

  const removeItem = (productId) => {
    removeProductsFromWishlist(productId)
      .then((res) => {
        const updatedWishitems = wishitems.filter(
          (item) => item.product.id !== productId
        );

        setWishitems(updatedWishitems);

        window.location.reload();
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
            <div className="shop__cart__table">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {wishitems.map((item, id) => (
                  <tbody key={id}>
                    <tr>
                      <td className="cart__product__item">
                        <img src="img/shop-cart/cp-1.jpg" alt="" />
                        <div className="cart__product__item__title">
                          <h6>{item.product_details.name}</h6>
                          <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
