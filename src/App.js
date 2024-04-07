import Header from "./Pages/Header/header";
import Footer from "./Pages/Footer/footer";
import CategoriesSection from "./Pages/CategoriesSection/CategoriesSection";
import ProductsList from "./Shared/ProductsList/ProductList";
import ServicesSection from "./Pages/ServicesSection/CategoriesSection";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import Payment from "./Pages/Payment/payment";


function App() {
  
  localStorage.setItem('auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEyNDQ0MzU2LCJpYXQiOjE3MTI0NDA3NTYsImp0aSI6Ijc4NzIzMjUyMjk2NDQ0YzY5YWIwYWY5MDgyZDY5YmI1IiwidXNlcl9pZCI6MSwiZW1haWwiOiJuZXdAdXNlci5jb20ifQ.9NIs9qIGVgJnurHicMv-KoUd1GIOAhJvJCaZ-4p5x6s');
  
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
