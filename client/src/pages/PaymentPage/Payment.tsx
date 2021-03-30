import React, { useState, useEffect } from "react";
import { Button } from "../../styles/globalStyles";
import { createAPIEndpoint, ENDPOINTS } from "../../api/axios";
import PageMap from "../../components/pageMap/PageMap";
import { useHistory } from "react-router-dom";
import IsLoadingHOC from "../../IsLoadingHOC";

import { useSelector, useDispatch } from "react-redux";
import {
  selectCart,
  selectSubTotal,
  clearCart,
} from "../../features/cart/cartSlice";
import {
  selectDelivery,
  selectDeliveryDate,
  setDeliveryReceipt,
} from "../../features/delivery/deliverySlice";

import {
  PaymentContainer,
  PaymentMain,
  MainContainer,
  PaymentInfoRow,
  CreditCardRow,
} from "./Payment.styles";

interface IOrder {
  quantity: Number;
  productSubTotal: Number;
  productId: string;
  productImage: string;
  productName: string;
}

const Payment = ({ setLoading }: any) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const deliveryAddress = useSelector(selectDelivery);
  const deliveryDate = useSelector(selectDeliveryDate);
  const subTotal = useSelector(selectSubTotal);

  const history = useHistory();

  const [orderItems, setOrderItems] = useState<IOrder[]>();
  const [user] = useState(JSON.parse(localStorage.getItem("profile") || "{}"));

  useEffect(() => {
    setLoading(false);
    const newOrder: IOrder[] = [];

    cart.forEach((el: any) => {
      const orderItem: IOrder = {
        quantity: el.quantity,
        productSubTotal: el.calculatedPrice,
        productId: el._id,
        productImage: el.image,
        productName: el.name,
      };

      newOrder.push(orderItem);
    });

    setOrderItems(newOrder);
  }, [cart]);

  const createOrder = async () => {
    setLoading(true);
    await createAPIEndpoint(ENDPOINTS.ORDERS)
      .createNewOrder({
        orderItems: orderItems,
        user: JSON.parse(localStorage.getItem("profile") || "{}").result,
        totalPrice: Math.round((+subTotal + 14) * 100) / 100,
        address: deliveryAddress,
        deliveryDate: deliveryDate,
      })
      .then((response: any) => {
        dispatch(setDeliveryReceipt(response.data.order));
        dispatch(clearCart());
        setLoading(false);
        history.push("/receipt");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <PageMap pageName="Payment" />
      <PaymentContainer>
        <PaymentMain>
          <MainContainer>
            {user?.result ? (
              <>
                <PaymentInfoRow>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h2>Checkout - Payment</h2>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "25px",
                      border: "solid 1px #889ca8",
                      borderRadius: "5px",
                      marginTop: "20px",
                    }}
                  >
                    <h3>
                      Amount left to pay <span>${subTotal}</span>
                    </h3>
                  </div>
                </PaymentInfoRow>
                <CreditCardRow>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderBottom: "solid 1px #889ca8",
                      paddingBottom: "10px",
                    }}
                  >
                    <h4 style={{ marginRight: "15px" }}>
                      Pay with Credit or Debit Card
                    </h4>
                    <img
                      src="https://static.countdown.co.nz/assets/images/Checkout/Payment/icon-cards.png"
                      alt="card types"
                    />
                  </div>
                  <div className="cardContainer">
                    <input
                      placeholder="Card number"
                      style={{
                        width: "100%",
                        padding: "8px 12px",
                        borderRadius: "2px",
                        border: "solid 1px #889ca8",
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "5px 0",
                      }}
                    >
                      <input
                        placeholder="Exp MM"
                        style={{
                          width: "32%",
                          padding: "8px 12px",
                          borderRadius: "2px",
                          border: "solid 1px #889ca8",
                        }}
                      />
                      <input
                        placeholder="Exp YY"
                        style={{
                          width: "32%",
                          padding: "8px 12px",
                          borderRadius: "2px",
                          border: "solid 1px #889ca8",
                        }}
                      />
                      <input
                        placeholder="CVV"
                        style={{
                          width: "32%",
                          padding: "8px 12px",
                          borderRadius: "2px",
                          border: "solid 1px #889ca8",
                        }}
                      />
                    </div>
                    <Button
                      propPadding="8px 12px"
                      extraMargin="5px 0"
                      onClick={createOrder}
                    >
                      Submit and Confirm Order
                    </Button>
                  </div>
                </CreditCardRow>
              </>
            ) : (
              <h2>Please Log In to complete checkout</h2>
            )}
          </MainContainer>
        </PaymentMain>
      </PaymentContainer>
    </>
  );
};

export default IsLoadingHOC(Payment);
