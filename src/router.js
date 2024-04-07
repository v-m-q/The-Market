import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./Pages/Header/header";
import Footer from "./Pages/Footer/footer";

// NOTE: not used in this commit  

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

function WithoutLayout() {
  return (
    <>
      <Outlet />
    </>
  )
}


const router = createBrowserRouter([
  {
    element: <Layout />,
    // errorElement: <NotFound />,
    children: [
      {
        path: "/",
      },
      
    ]
  },
])

export default router;