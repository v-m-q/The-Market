import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getAllOrders,
  getAllOrdersItems,
  getOrdersForPage,
} from "../../APIs/orders";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../store/slices/Pagination";
import "./Orders.css";

export default function AllOrders() {
  const [orders, setOrders] = useState([]);
  // const [initialFetchCompleted] = useState(false);
  const next = useSelector((state) => state.pages.next);
  const previous = useSelector((state) => state.pages.previous);
  useEffect(() => {
    getAllOrders()
      .then((response) => {
        const fetchedOrders = response.data.orders.map((order) => ({
          ...order,
          totalItems: 0,
        }));
          setOrders( fetchedOrders );
          dispatch(changePage({next:fetchedOrders.data.next,previous:fetchedOrders.data.previous}))
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  useEffect(() => {
    const fetchOrderItems = async () => {
      const ordersWithItems = await Promise.all(
        orders.map(async (order) => {
          try {
            const itemsResponse = await getAllOrdersItems(order.order_id);
            const orderWithItems = {
              ...order,
              totalItems: itemsResponse.data.length,
            };
            return orderWithItems;
          } catch (error) {
            console.error(
              `Error fetching items for order ${order.order_id}:`,
              error
            );
            return order;
          }
        })
      );
      setOrders(ordersWithItems);
    };
    fetchOrderItems();
  }, []);
  const goToNextPage = async () => {
    try {
      const nextOrdersData = await getOrdersForPage(next);
      setProducts(nextOrdersData.data.results);
      dispatch(
        changePage({
          next: nextOrdersData.data.next,
          previous: nextOrdersData.data.previous,
        })
      );
    } catch (err) {
      console.log("there is no next products");
    }
  };
  const goToPreviousPage = async () => {
    try {
      const previousOrdersData = await getOrdersForPage(previous);
      setProducts(previousOrdersData.data.results);
      dispatch(
        changePage({
          next: previousOrdersData.data.next,
          previous: previousOrdersData.data.previous,
        })
      );
    } catch (err) {
      console.log("there is no previous products");
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="container">
      <div className="orders-container">
        {orders.map((order) => (
          <div className="order" key={order.order_id}>
            <h6 style={{ alignSelf: "flex-start" }}>
              Order Number: {order.order_id}
            </h6>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ul>
                <li>
                  Total Items: <span>{order.totalItems}</span>
                </li>
                <li>
                  Total Price: <span>{order.total_price} $</span>
                </li>
                <li>
                  Status:{" "}
                  <span className={getStatusClassName(order.status)}>
                    {order.status}
                  </span>
                </li>
                <li>
                  Created At: <span>{formatDate(order.created_at)}</span>
                </li>
              </ul>
              <Link className="button" to={`/order-details/${order.order_id}`}>
                    Show Items
              </Link>
            </div>
          </div>
        ))}
      <nav
        aria-label="..."
        className="col-lg-9 col-md-9 d-flex justify-content-center mt-3 w-100"
      >
        <ul class="pagination">
          <li class="page-item">
            <button class="page-link" onClick={goToPreviousPage}>
              Previous
            </button>
          </li>
          <li class="page-item">
            <button class="page-link" onClick={goToNextPage}>
              Next
            </button>
          </li>
        </ul>
      </nav>
      </div>
    </div>
  );
}

function getStatusClassName(status) {
  switch (status) {
    case "delivered":
      return "delivered";
    case "pending":
      return "pending";
    case "shipped":
      return "shipped";
    default:
      return "";
  }
}
