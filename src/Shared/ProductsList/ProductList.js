import Card from "../Card/Card";
import { useState, useEffect } from "react";
import { getProducts } from "../../APIs/products";

export default function ProductsList({product}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data.data);
        console.log(data.data)
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    
    <>
    <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="section-title">
                <h4>New product</h4>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <ul className="filter__controls">
                <li className="active" data-filter="*">
                  All
                </li>
                <li data-filter=".women">Women’s</li>
                <li data-filter=".men">Men’s</li>
                <li data-filter=".kid">Kid’s</li>
                <li data-filter=".accessories">Accessories</li>
                <li data-filter=".cosmetic">Cosmetics</li>
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