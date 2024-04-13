import React, { useState } from "react";
import array from "./array";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const Wishlist = () => {
  const [wishitems, setWishitems] = useState(array);
  console.log(wishitems[0].product_details);

  return (
    <section class="shop-cart spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="shop__cart__table">
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
                      <td class="cart__product__item">
                        <img src="img/shop-cart/cp-1.jpg" alt="" />
                        <div class="cart__product__item__title">
                          <h6>{item.product_details.name}</h6>
                          <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                          </div>
                        </div>
                      </td>
                      <td class="cart__price">
                        $ {item.product_details.price}
                      </td>
                      <td class="cart__close">
                        <span class="icon_close">
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </span>
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
