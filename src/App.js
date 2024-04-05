import Header from "./Pages/Header/header";
import Footer from "./Pages/Footer/footer";
import CategoriesSection from "./Pages/CategoriesSection/CategoriesSection";
import ProductsList from "./Shared/ProductsList/ProductList";
import ServicesSection from "./Pages/ServicesSection/CategoriesSection";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";


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
    <>
      <Header />
      
      {Component} 
      
      <Footer />
    </>
  );
}

export default App;
