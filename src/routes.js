import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Pages/Header/header";
import Footer from "./Shared/Footer/Footer";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Products from "./Shared/ProductsList/ProductList";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Profile from "./Pages/UserProfile/Profile";
import UpdateProfile from "./Pages/UpdateProfile/UpdateProfile";
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
    ],
  },
]);

export default router;
