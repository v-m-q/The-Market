import Header from "./Pages/Header/header";
import Footer from "./Pages/Footer/footer";
import CategoriesSection from "./Pages/CategoriesSection/CategoriesSection";
import ProductsList from "./Shared/ProductsList/ProductList";
import ServicesSection from "./Pages/ServicesSection/CategoriesSection";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import Payment from "./Pages/Payment/payment";


function App() {

  localStorage.setItem('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEyNDE3NzM4LCJpYXQiOjE3MTI0MTQxMzgsImp0aSI6IjE0YmVlZGQwZDMwMjQ1OGI5YTEwNGViMWNlYmJiNWE1IiwidXNlcl9pZCI6MSwiZW1haWwiOiJhaG1laWlkQG1oYWl5eWwuY29tIn0.yyv-CaIzct9JTdyGSzGNMiZ61e0Kl5E5dUYK8cb3kyM');
  
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
    <>
      <Header />
      
      {Component} 
      
      <Footer />
    </>
  );
}

export default App;
