import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Pages/Header/header";
import Footer from "./Shared/Footer/Footer";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Products from "./Shared/ProductsList/ProductList";;
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Wishlist from "./Pages/Wishlist/Wishlist";

import Profile from "./Pages/UserProfile/Profile";
import UpdateProfile from "./Pages/UpdateProfile/UpdateProfile";
import AllProducts from "./Pages/Shop/Shop";
import AllOrders from "./Pages/orders/Orders";
import OrderItems from "./Pages/OrderItems/OrderItems";
const LayOut = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "shop",
        element: <AllProducts />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "account",
        element: <Profile />,
      },
      {
        path: "edit",
        element: <UpdateProfile />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      { 
        path: "orders/",
        element: <AllOrders/>,
      },
      {
      path: "/order-details/:id",
      element: <OrderItems/>,
    },
     
    ],
  },
]);

export default router;
