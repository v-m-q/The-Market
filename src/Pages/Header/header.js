import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {

  // const navigate = useNavigate();

  // const redirectToWishList = () => {
  //   navigate("/wishlist");
  // };


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
                  <li class="">
                    <Link to='/' >
                      Home
                    </Link>
                  </li>
                  <li class="">
                    <Link to='/shop' >
                      Shop
                    </Link>
                  </li>
                  <li class="">
                    <Link to='/orders' >
                      Orders
                    </Link>
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
                <ul class="header__right__widget">

                  <li>
                    <Link to='/account' >
                        <span class="icon_profile"></span>
                    </Link> 
                  </li>

                  <li>
                    <Link to="/logout">
                      <span class="arrow_right_alt"></span>
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="/wishlist">
                      <span class="icon_heart_alt"></span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/cart">
                      <span class="icon_bag_alt"></span>
                      <div class="tip">1</div>
                    </Link>
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