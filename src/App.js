import CategoriesSection from "./Pages/CategoriesSection/CategoriesSection";
import ProductsList from "./Shared/ProductsList/ProductList";
import ServicesSection from "./Pages/ServicesSection/CategoriesSection";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import Payment from "./Pages/Payment/payment";
import {RouterProvider} from "react-router-dom";
import router from "./routes";


function App() {

  localStorage.setItem('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEyNDIxNDI2LCJpYXQiOjE3MTI0MTc4MjYsImp0aSI6IjcxNzEzMWEzM2U4NjRmOWE5MWM1OTA4Nzk1OWNmNzhjIiwidXNlcl9pZCI6MSwiZW1haWwiOiJhaG1laWlkQG1oYWl5eWwuY29tIn0.IdZtwHkdxRNyXe1kQKLm6vQSGmX2ke0n9OZ-yOOh3b4');
  
  let Component;

  switch (window.location.pathname) {
    case "/":
      Component = <> <CategoriesSection/> <ProductsList/> <ServicesSection/> </> 
      break;

    case "/cart":
      Component = <ShoppingCart/>
      break;
    
    case "/payment-stripe-page":
      Component = <Payment/>
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
