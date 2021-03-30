import React, { useState, useEffect } from "react";
import PageMap from "../../components/pageMap/PageMap";
import { createAPIEndpoint, ENDPOINTS } from "../../api/axios";
import { format } from "date-fns";
import IsLoadingHOC from "../../IsLoadingHOC";

import {
  OrderHistoryContainer,
  OrderHistoryMain,
  MainContainer,
  OrderLink,
} from "./OrderHistory.styles";

const OrderHistory = ({ setLoading }: any) => {
  const [user] = useState(JSON.parse(localStorage.getItem("profile") || "{}"));

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setLoading(true);
    const getOrderHistory = async () => {
      await createAPIEndpoint(ENDPOINTS.ORDERS)
        .fetchOrderHistory(user.result._id)
        .then((response: any) => {
          setOrders(response.data);
          setLoading(false);
        })
        .catch((err: any) => console.log(err));
    };

    getOrderHistory();
  }, [user.result._id]);

  return (
    <>
      <PageMap pageName="Order History" />
      <OrderHistoryContainer>
        <OrderHistoryMain>
          <MainContainer>
            {user?.result ? (
              <>
                <h1>My Orders</h1>
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Order #</th>
                      <th>Item Count</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map(
                      ({ createdAt, _id, orderItems, totalPrice }: any) => {
                        return (
                          <tr>
                            <td>
                              {format(
                                new Date(createdAt.split("T")[0]),
                                " dd-MM-yyyy"
                              )}
                            </td>
                            <td>{_id}</td>
                            <td>{orderItems.length}</td>
                            <td>${totalPrice}</td>
                            <td>
                              <OrderLink to={`/orderhistory/${_id}`}>
                                View Order
                              </OrderLink>
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </>
            ) : (
              <h2>Please Log In to view your order history</h2>
            )}
          </MainContainer>
        </OrderHistoryMain>
      </OrderHistoryContainer>
    </>
  );
};

export default IsLoadingHOC(OrderHistory);
