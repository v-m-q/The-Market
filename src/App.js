import Header from "./Pages/Header/header";
import Footer from "./Pages/Footer/footer";
import CategoriesSection from "./Pages/CategoriesSection/CategoriesSection";
import ProductsList from "./Shared/ProductsList/ProductList";
import ServicesSection from "./Pages/ServicesSection/CategoriesSection";


function App() {
  

  return (
    <>
      <Header />
      <CategoriesSection />
      <ProductsList />
      <ServicesSection />
      <Footer />
    </>
  );
}

export default App;
