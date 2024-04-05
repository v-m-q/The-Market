import { createBrowserRouter } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

const router = createBrowserRouter( [
    {
        path: '/products/:id',
        Component:ProductDetails
    }
])
