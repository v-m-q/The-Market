import { BrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import router from "./routes";

function App() {

  let Component;

  switch (window.location.pathname) {
    case "/":
      Component = <> <CategoriesSection/> <ProductsList/> <ServicesSection/> </> 
      break;

    case "/cart":
      Component = <ShoppingCart/>
      break;
  
    default:
      break;
  }

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
