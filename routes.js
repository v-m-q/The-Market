import { createBrowserRouter } from "react-router-dom";
import ProductDetails from "./src/Pages/ProductDetails/ProductDetails";

const router = createBrowserRouter( [
    {
        path: '/products/:id',
        Component:ProductDetails
    }
])
