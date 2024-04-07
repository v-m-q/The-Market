import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./Pages/Header/header";
import Products from "./Shared/ProductsList/ProductList";
import Wishlist from "./Pages/Wishlist/Wishlist";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    // errorElement: <NotFound />,
    children: [
      {
        path: "/",
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);

export default router;
