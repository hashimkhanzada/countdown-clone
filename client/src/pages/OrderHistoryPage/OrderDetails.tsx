import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createAPIEndpoint, ENDPOINTS } from "../../api/axios";
import PageMap from "../../components/pageMap/PageMap";
import { format } from "date-fns";
import IsLoadingHOC from "../../IsLoadingHOC";

const OrderDetails = ({ match, setLoading }: any) => {
  const [orderDetails, setOrderDetails] = useState<any>();
  const [user] = useState(JSON.parse(localStorage.getItem("profile") || "{}"));
  const [orderPlaced, setOrderPlaced] = useState<any>();

  useEffect(() => {
    setLoading(true);
    const getOrderHistory = async () => {
      await createAPIEndpoint(ENDPOINTS.ORDERS)
        .fetchOrderById(match.params.orderId)
        .then((response: any) => {
          setOrderDetails(response.data);
          setOrderPlaced(
            format(
              new Date(response.data.createdAt.split("T")[0]),
              " dd-MMM-yyyy"
            )
          );
          setLoading(false);
        })
        .catch((err: any) => console.log(err));
    };

    getOrderHistory();
  }, []);

  return (
    <>
      <PageMap pageName="Order Details" />
      <OrderDetailsContainer>
        <OrderHistoryMain>
          <MainContainer>
            {user?.result ? (
              <>
                <div>
                  <h1>View Order: {orderDetails?._id}</h1>
                  <h1>${orderDetails?.totalPrice}</h1>
                </div>

                <p>
                  Order placed on <strong>{orderPlaced}</strong>
                </p>
                <p>
                  Delivery to: <strong>{orderDetails?.address}</strong>
                </p>
                <p>
                  Delivery on <strong> {orderDetails?.deliveryDate}</strong>
                </p>

                <table>
                  <thead>
                    <tr>
                      <th>Qty</th>
                      <th>Description</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderDetails?.orderItems.map(
                      ({ quantity, productName, productSubTotal }: any) => {
                        return (
                          <tr>
                            <td>{quantity}</td>
                            <td>{productName}</td>
                            <td>${productSubTotal}</td>
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
      </OrderDetailsContainer>
    </>
  );
};

export default IsLoadingHOC(OrderDetails);

export const OrderDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #39464e;
`;

export const OrderHistoryMain = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  max-width: 1200px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 48px 180px;

  @media screen and (max-width: 1030px) {
    padding: 48px 10px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  p {
    margin: 10px 0;
  }

  table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
    font-size: 14px;
  }

  th {
    border-bottom: 1px solid #dddddd;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

  th,
  td {
    padding: 10px;
    text-align: left;
  }
`;
