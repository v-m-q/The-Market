import React, { useEffect, useState } from "react";
import { searchProducts, getAllProducts , ProductsByCategories } from "../../APIs/products";
import { getAllCategories } from "../../APIs/categories"; 
import Card from "../../Shared/Card/Card";

export default function AllProducts() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories()
            .then((data) => {
                setCategories(data.data);
            })
            .catch((err) => {
                console.log("Error fetching categories:", err);
            });
    }, []);

    useEffect(() => {
        const fetchProducts = () => {
            let productsPromise;
            if (searchTerm === "") {
                productsPromise = getAllProducts(); 
            } else {
                productsPromise = searchProducts(searchTerm); 
            }
            productsPromise.then(response => {
                setProducts(response.data);
            }).catch(error => {
                console.error('Error fetching products:', error);
            });
        };

        fetchProducts();
    }, [searchTerm]);

    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCategoryFilter = (categoryName) => { 
        ProductsByCategories(categoryName) 
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products by category:', error);
            });
    };

    return (
        <div className="row">
            <div className="col-lg-3 col-md-3">
                <div className="shop__sidebar">
                    <div className="sidebar__categories">
                        <div className="section-title m-5">
                            <h4>Categories</h4>
                        </div>
                        <div className="categories__accordion">
                            <div className="accordion" id="accordionExample">
                                {categories.map((category) => (
                                    <div className="card" key={category.category_id}>
                                        <div className="card-heading active" onClick={() => handleCategoryFilter(category.name)}>
                                        <h4 style={{ textTransform: "capitalize", 
                                        textAlign:"center" }}>
                                            <b>{category.name}</b>
                                        </h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-9 col-md-9">
                <input
                    type="text"
                    placeholder=" Search...... "
                    value={searchTerm}
                    onChange={handleSearchInputChange}
                    className="form-control ml-0 my-5 w-25"
                />
                <div className="row property__gallery">
                    {products.map((product) => (
                        <Card key={product.product_id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
