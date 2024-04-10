import React, { useEffect, useState } from "react";
import { getAllOrders, getAllOrdersItems } from "../../APIs/orders";
import Card from "../../Shared/Card/Card";
import "./Orders.css"; 

export default function AllOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getAllOrders().then(async (res) => {
            const ordersWithItems = await Promise.all(
                res.data.orders.map(async (order) => {
                    const itemsResponse = await getAllOrdersItems(order.order_id);
                    return { ...order, orderitems: itemsResponse.data };
                })
            );
            setOrders(ordersWithItems);
        }).catch(error => {
            console.error("Error fetching orders:", error);
        });
    }, []);

    const calculateTotalItems = (order) => {
        let totalItems = 0;
        if (order && order.orderitems) {
            order.orderitems.forEach(item => {
                totalItems += item.quantity;
            });
        }
        return totalItems;
    };

    return (
        <div className="container">
            <div className="orders-container"> {/* Apply styling to this container */}
                {orders.map((order) => (
                    <div className="order" key={order.order_id}>
                        <h6>Order ID: {order.order_id}</h6>
                        {order.orderitems && order.orderitems.length > 0 ? (
                            <ul>
                                <li>Total Items: <span>{calculateTotalItems(order)}</span></li>
                                <li>Total Price: <span>{order.total_price}</span></li>
                                <li>Status: <span>{order.status}</span></li>
                                <li>Created At: <span>{order.date}</span></li>
                                <button>Show Details</button>
                            </ul>
                        ) : (
                            <p>No items found for this order</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
