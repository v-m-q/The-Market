import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { getAllOrders, getAllOrdersItems } from "../../APIs/orders";
import "./Orders.css";

export default function AllOrders() {
    const [orders, setOrders] = useState([]);
    const [initialFetchCompleted] = useState(false);

    useEffect(() => {
        getAllOrders()
            .then(response => {
                const fetchedOrders = response.data.orders.map(order => ({
                    ...order,
                    totalItems: 0 
                }));
                setOrders(fetchedOrders);
            })
            .catch(error => {
                console.error("Error fetching orders:", error);
            });
    }, []);

    useEffect(() => {
        const fetchOrderItems = async () => {
            const ordersWithItems = await Promise.all(
                orders.map(async order => {
                    try {
                        const itemsResponse = await getAllOrdersItems(order.order_id);
                        const orderWithItems = { ...order, totalItems: itemsResponse.data.length };
                        return orderWithItems;
                    } catch (error) {
                        console.error(`Error fetching items for order ${order.order_id}:`, error);
                        return order;
                    }
                })
            );
            setOrders(ordersWithItems);
        };
        fetchOrderItems();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <div className="container">
            <div className="orders-container">
                {orders.map((order) => (
                    <div className="order" key={order.order_id}>
                        <h6 style={{ alignSelf: "flex-start" }}>Order ID: {order.order_id}</h6>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <ul>
                                <li>Total Items: <span>{order.totalItems}</span></li>
                                <li>Total Price: <span>{order.total_price} $</span></li>
                                <li>Status: <span className={getStatusClassName(order.status)}>{order.status}</span></li>
                                <li>Created At: <span>{formatDate(order.created_at)}</span></li>
                            </ul>
                            <Link to={`/order-details/${order.order_id}`}>
                                <button>Show Details</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}    

function getStatusClassName(status) {
    switch (status) {
        case 'delivered':
            return 'delivered';
        case 'pending':
            return 'pending';
        case 'shipped':
            return 'shipped';
        default:
            return '';
    }
}
