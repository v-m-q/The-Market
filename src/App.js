import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./routes";
import store from "./store/store";

function App() {
  /* localStorage.setItem(
    "auth-token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEyNDIxNDI2LCJpYXQiOjE3MTI0MTc4MjYsImp0aSI6IjcxNzEzMWEzM2U4NjRmOWE5MWM1OTA4Nzk1OWNmNzhjIiwidXNlcl9pZCI6MSwiZW1haWwiOiJhaG1laWlkQG1oYWl5eWwuY29tIn0.IdZtwHkdxRNyXe1kQKLm6vQSGmX2ke0n9OZ-yOOh3b4"
  );

  let Component;

  switch (window.location.pathname) {
    case "/":
      Component = (
        <>
          {" "}
          <CategoriesSection /> <ProductsList /> <ServicesSection />{" "}
        </>
      );
      break;

    case "/cart":
      Component = <ShoppingCart />;
      break;

    case "/payment-stripe-page":
      Component = <Payment />;
      break;

    default:
      break;
  }*/

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
