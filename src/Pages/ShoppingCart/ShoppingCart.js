import { getCartData } from "../../APIs/cart";
import { useState, useEffect } from "react";
import CartItem from "../../Shared/CartItem/CartItem";
import { stripeCheckout } from "../../APIs/payment";

export default function ShoppingCart() {
  const [cartProducts, setCartProducts] = useState([]);

  let tp = 0;
  const [totalPrice, setTotalprice] = useState(tp);

  useEffect(() => {
    getCartData()
      .then((data) => {
        setCartProducts(data.data.cartitem_set);

        if (cartProducts !== null) {
          prepareTotalPrice();
        }

      })
      .catch((err) => console.log(err.message));
  }, [cartProducts]);

  const prepareTotalPrice = () => {
    for (let i = 0; i < cartProducts.length; i++) {
      tp += cartProducts[i].quantity * cartProducts[i].product.price;
    }
    setTotalprice(tp);
  };

  const forwardToStripe = (e) => {
    e.preventDefault();
    stripeCheckout(totalPrice)
      .then((response) => {
        // redirect to stripe checkout page.
        window.location.href = response.data.payload;
      })
      .catch((err) => alert("error: something wrong happened"));
  };

  return (
    <>
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <a href="./index.html">
                  <i className="fa fa-home"></i> Home
                </a>
                <span>Shopping cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                      <th>Ch Quantity</th>
                      <th>Apply</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProducts?.map((oneElement) => (
                      <CartItem
                        cartData={oneElement}
                        chg={setCartProducts}
                        data={cartProducts}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="cart__btn">
                <a href="#">Continue Shopping</a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="cart__btn update__btn">
                <a href="#">
                  <span className="icon_loading"></span> Update cart
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="discount__content">
                <h6>Discount codes</h6>
                <form action="#">
                  <input type="text" placeholder="Enter your coupon code" />
                  <button type="submit" className="site-btn">
                    Apply
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-2">
              <div className="cart__total__procced">
                <h6>Cart total</h6>
                <ul>
                  <li>
                    Total <span>$ {totalPrice}</span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="primary-btn"
                  onClick={(e) => forwardToStripe(e)}
                >
                  Proceed to checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
