import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div id="preloder">
        <div class="loader"></div>
      </div>

      <div class="offcanvas-menu-overlay"></div>
      <div class="offcanvas-menu-wrapper">
        <div class="offcanvas__close">+</div>
        <ul class="offcanvas__widget">
          <li>
            <span class="icon_search search-switch"></span>
          </li>
          <li>
            <a href="#">
              <span class="icon_heart_alt"></span>
              <div class="tip">29</div>
            </a>
          </li>
          <li>
            <a href="./cart.html">
              <span class="icon_bag_alt"></span>
            </a>
          </li>
        </ul>
        <div class="offcanvas__logo">
          <a href="./index.html">
            <img src="img/logo.png" alt="" />
          </a>
        </div>
        <div id="mobile-menu-wrap"></div>
        <div class="offcanvas__auth">
          <a href="#">Login</a>
          <a href="#">Register</a>
        </div>
      </div>

      <header class="header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-3 col-lg-2">
              <div class="header__logo">
                <a href="./index.html">
                  <img
                    src="img/logoo.png"
                    style={{ width: "50px", height: "50px" }}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div class="col-xl-6 col-lg-7">
              <nav class="header__menu">
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
                </ul>
              </nav>
            </div>
            <div class="col-lg-3">
              <div class="header__right">
                <div class="header__right__auth">
                  <Link to="/signup">Signup</Link>
                  <Link to="/login">Login</Link>
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
                      <div class="tip">2</div>
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
          <div class="canvas__open">
            <i class="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </>
  );
}
