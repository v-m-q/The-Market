import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../APIs/products";
import Card from "../../Shared/Card/Card";

export default function AllProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then((data) => {
                setProducts(data.data);
            })
            .catch((err) => {
                console.log("Error fetching data:", err);
            });
    }, []);

    return (
        <div>
            <h2>All Products</h2>
            <div className="row property__gallery">
            {products.map((product) => (
              <Card product={product}/>
            ))}
          </div>
        </div>
    );
}
