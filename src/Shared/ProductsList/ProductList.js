import Card from "../Card/Card";
import { useState, useEffect } from "react";
import { getProducts } from "../../APIs/products";
import { getAllCategories } from "../../APIs/categories";
import { ProductsByCategories } from "../../APIs/products";

export default function ProductsList({ product }) {
  const [products, setProducts] = useState([]);
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
    getProducts()
      .then((data) => {
        setProducts(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleCategoryFilter = (categoryId) => {
    ProductsByCategories(categoryId)
      .then((response) => {
        setProducts(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching products by category:", error);
      });
  };

  return (
    <>
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="section-title">
                <h4>Our product</h4>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <ul className="filter__controls">
                <li className="active" data-filter="*">
                  All
                </li>
                {categories.slice(0, 6).map((category) => (
                  <li
                    className="active"
                    data-filter=".women"
                    key={category.id}
                    onClick={() => handleCategoryFilter(category.id)}
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="row property__gallery">
            {products.latest_products?.map((product) => (
              <Card product={product}></Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
