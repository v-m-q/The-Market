import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { useNavigate ,Link} from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const redirectToWishList = () => {
    navigate("/wishlist");
  };

  return (
    <>
      <div id="preloder">
        <div className="loader"></div>
      </div>
      <div class="offcanvas-menu-overlay"></div>
      <div class="offcanvas-menu-wrapper">
        <div class="offcanvas__close">+</div>
        <ul class="offcanvas__widget">
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
        <div class="offcanvas__auth">
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
            <div class="col-lg-3">
              <div class="header__right">
                <div class="header__right__auth">
                  <Link  to="login">Login</Link>
                  <Link to="signup">Register</Link>
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
                      <div className="tip">2</div>
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
