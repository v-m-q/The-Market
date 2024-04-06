import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Shared/Header/header";
import Footer from "./Shared/Footer/footer";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Products from "./Pages/Products/Products";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";

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
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
