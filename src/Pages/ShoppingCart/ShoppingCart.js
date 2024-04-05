import { getCartData } from "../../APIs/add_to_cart";
import { useState, useEffect } from "react";
import CartItem from "../../Shared/CartItem/CartItem";

export default function ShoppingCart() {

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    getCartData()
      .then((data) => {
        setCartProducts(data.data.cartitem_set);
        console.log(data)
      })
      .catch((err) => console.log(err.message));
  }, []);


  return (
    <>
      <div class="breadcrumb-option">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb__links">
                <a href="./index.html">
                  <i class="fa fa-home"></i> Home
                </a>
                <span>Shopping cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>

                    {cartProducts?.map((oneElement)=>(
                      <CartItem cartData={oneElement}/>
                    ))}
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="cart__btn">
                <a href="#">Continue Shopping</a>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="cart__btn update__btn">
                <a href="#">
                  <span class="icon_loading"></span> Update cart
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="discount__content">
                <h6>Discount codes</h6>
                <form action="#">
                  <input type="text" placeholder="Enter your coupon code" />
                  <button type="submit" class="site-btn">
                    Apply
                  </button>
                </form>
              </div>
            </div>
            <div class="col-lg-4 offset-lg-2">
              <div class="cart__total__procced">
                <h6>Cart total</h6>
                <ul>
                  <li>
                    Subtotal <span>$ 750.0</span>
                  </li>
                  <li>
                    Total <span>$ 750.0</span>
                  </li>
                </ul>
                <a href="#" class="primary-btn">
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
