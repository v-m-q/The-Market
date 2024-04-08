import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const counter = useSelector((state) => state.counter.counter_val);
  const navigate = useNavigate();

  const redirectToWishList = () => {
    navigate("/wishlist");
  };
  
  return (
    <>
      <div id="preloder">
        <div className="loader"></div>
      </div>

      <div className="offcanvas-menu-overlay"></div>
      <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__close">+</div>
        <ul className="offcanvas__widget">
          <li>
            <span className="icon_search search-switch"></span>
          </li>
          <li>
            <a href="#">
              <span className="icon_heart_alt"></span>
              <div className="tip">29</div>
            </a>
          </li>
          <li>
            <a href="./cart.html">
              <span className="icon_bag_alt"></span>
            </a>
          </li>
        </ul>
        <div className="offcanvas__logo">
          <a href="./index.html">
            <img src="img/logo.png" alt="" />
          </a>
        </div>
        <div id="mobile-menu-wrap"></div>
        <div className="offcanvas__auth">
          <a>Login</a>
          <a>Register</a>
        </div>
      </div>

      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-2">
              <div className="header__logo">
                <a href="./index.html">
                  <img
                    src="img/logoo.png"
                    style={{ width: "50px", height: "50px" }}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <nav className="header__menu">
                <ul>
                  <li className="active">
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#">Women’s</a>
                  </li>
                  <li>
                    <a href="#">Men’s</a>
                  </li>
                  <li>
                    <a href="./shop.html">Shop</a>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul className="dropdown">
                      <li>
                        <a href="./product-details.html">Product Details</a>
                      </li>
                      <li>
                        <a href="./shop-cart.html">Shop Cart</a>
                      </li>
                      <li>
                        <a href="./checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="./blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="./blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="./contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__right">
                <div className="header__right__auth">
                  <a href="#">Login</a>
                  <a href="#">Register</a>
                </div>
                <ul className="header__right__widget">
                  <li>
                    <span className="icon_search search-switch"></span>
                  </li>
                  <li>
                    <a href="">
                      <FontAwesomeIcon
                        icon={farHeart}
                        onClick={() => {
                          redirectToWishList();
                        }}
                      />
                      <div className="tip">{counter}</div>
                    </a>
                  </li>
                  <li>
                    <a href="cart">
                      <span className="icon_bag_alt"></span>
                      <div className="tip">1</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="canvas__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </>
  );
}
