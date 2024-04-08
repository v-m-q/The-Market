import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../APIs/products";
import Card from "../../Shared/Card/Card";

export default function AllProducts() {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        getAllProducts()
            .then((data) => {
                setProducts(data.data);
            })
            .catch((err) => {
                console.log("Error fetching data:", err);
            });
    }, []);

    const filteredProducts = products.filter(product =>
        (product.name && product.name.toLowerCase().includes(filter.toLowerCase())) ||
        (product.description && product.description.toLowerCase().includes(filter.toLowerCase())) ||
        (product.category_id?.name && product.category_id.name.toLowerCase().includes(filter.toLowerCase()))
    );

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div>
            <h2>All Products</h2>
            <input
                type="text"
                placeholder="Search by name, description, or category..."
                value={filter}
                onChange={handleFilterChange}
                className="form-control m-auto my-3 w-25"
            />
            <div className="row property__gallery">
                {filteredProducts.map((product) => (
                    <Card key={product.product_id} product={product} />
                ))}
            </div>
        </div>
    );
}
