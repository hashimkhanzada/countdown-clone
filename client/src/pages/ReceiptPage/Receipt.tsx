import React, { useState, useRef } from "react";
import { Button } from "../../styles/globalStyles";
import PageMap from "../../components/pageMap/PageMap";
import { useHistory } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { format } from "date-fns";

import {
  ReceiptContainer,
  ReceiptMain,
  MainContainer,
  ReceiptInfoRow,
  OrderItemsRow,
} from "./Receipt.styles";

import { useSelector } from "react-redux";
import { selectDeliveryReceipt } from "../../features/delivery/deliverySlice";

const pageStyle = `
table {
  width: 100%;
  border-collapse: collapse;
}

th {
  border-bottom: 1px solid #dddddd;
} 

tr:nth-child(even) {
  background-color: #dddddd;
}

tr:last-child {
  border-top: solid 1px #dddddd;
  background-color: white; 
}

tr:last-child th{
  border-bottom: none;
}

th,
td {
  padding: 10px;
  text-align: left;
}
`;

const Receipt = () => {
  const receipt = useSelector(selectDeliveryReceipt);
  const history = useHistory();
  const tableRef = useRef<HTMLTableElement>(null);

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
    pageStyle: pageStyle,
  });

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("profile") || "{}")
  );

  const logout = () => {
    history.push("/");

    localStorage.clear();
    setUser(null);
  };

  if (!receipt.createdAt)
    return (
      <h2 style={{ textAlign: "center", paddingTop: "20px" }}>
        Sorry, this page is not available. Go to 'My Orders' to view order
        details
      </h2>
    );
  return (
    <>
      <PageMap pageName="Receipt" />
      <ReceiptContainer>
        <ReceiptMain>
          <MainContainer>
            {user?.result ? (
              <>
                <ReceiptInfoRow>
                  <div className="header">
                    <h2>Checkout - Payment</h2>
                  </div>

                  <h1>Thank you for shopping with Countdown</h1>
                  <div style={{ display: "flex", marginTop: "10px" }}>
                    <Button
                      onClick={handlePrint}
                      extraMargin="0 10px 0 0"
                      propPadding="8px 18px"
                    >
                      Print Receipt
                    </Button>

                    <Button
                      propPadding="8px 18px"
                      style={{ backgroundColor: "red" }}
                      onClick={logout}
                    >
                      Logout
                    </Button>
                  </div>

                  <div className="orderDetails">
                    <div>
                      <h2
                        style={{ fontWeight: "normal", marginBottom: "10px" }}
                      >
                        Your order details:
                      </h2>
                      <div>
                        <p>
                          <strong>Order number:</strong> {receipt?._id}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p>
                        <strong>Order created:</strong>{" "}
                        {format(
                          new Date(receipt?.createdAt.split("T")[0]),
                          " dd-MMM-yyyy"
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="deliveryDetails">
                    <h2>Delivery address</h2>
                    <p>
                      <strong>Your groceries will be delivered to:</strong>
                    </p>
                    <p>{receipt?.address}</p>
                    <p>
                      on <strong>{receipt?.deliveryDate}</strong>
                    </p>
                  </div>
                </ReceiptInfoRow>
                <OrderItemsRow>
                  <table ref={tableRef}>
                    <thead>
                      <tr>
                        <th>Qty</th>
                        <th>Name</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {receipt?.orderItems.map(
                        ({ quantity, productName, productSubTotal }: any) => {
                          return (
                            <>
                              <tr>
                                <td>{quantity}</td>
                                <td>{productName}</td>
                                <td>${productSubTotal}</td>
                              </tr>
                            </>
                          );
                        }
                      )}
                      <tr>
                        <th>Total</th>
                        <td>${receipt?.totalPrice}</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </OrderItemsRow>
              </>
            ) : (
              <h2>Please Log In to view the receipt</h2>
            )}
          </MainContainer>
        </ReceiptMain>
      </ReceiptContainer>
    </>
  );
};

export default Receipt;
