import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllOrdersItems } from "../../APIs/orders";
import { getProductDetails } from "../../APIs/products"; // Assuming you import getProductDetails from the correct file

export default function OrderItemsPage() {
    const [orderItems, setOrderItems] = useState([]);
    const params = useParams();
    const orderId = params.id; 
    console.log(orderId);

    useEffect(() => {
        const fetchOrderItems = async () => {
            try {
                const response = await getAllOrdersItems(orderId);
                setOrderItems(response.data);
            } catch (error) {
                console.error("Error fetching order items:", error);
            }
        };

        fetchOrderItems();
    }, [orderId]); 

    // Function to fetch product details for a given product ID
    const fetchProductDetails = async (productId) => {
        try {
            const response = await getProductDetails(productId);
            return response.data; // Assuming the product details are returned in the response data
        } catch (error) {
            console.error("Error fetching product details:", error);
            return null;
        }
    };

    return (
        <>
            <h1>Order Items for Order ID: {orderId}</h1>

            <section className="shop-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shop__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product Image</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orderItems.map(async (item, index) => {
                                            const productDetails = await fetchProductDetails(item.product_id);
                                            return (
                                                <tr key={index}>
                                                    <td>{productDetails ? <img src={productDetails.thumbnail} alt="Product Thumbnail" /> : "N/A"}</td>
                                                    <td>{productDetails ? productDetails.name : "N/A"}</td>
                                                    <td>{productDetails ? `${productDetails.price}$` : "N/A"}</td>
                                                    <td>{item.quantity}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
