import React, { useState, useEffect } from "react";
import { Button } from "../../styles/globalStyles";
import { createAPIEndpoint, ENDPOINTS } from "../../api/axios";

import { useSelector, useDispatch } from "react-redux";
import { selectCart, selectSubTotal } from "../../features/cart/cartSlice";
import { selectDelivery } from "../../features/delivery/deliverySlice";

interface IOrder {
  quantity: Number;
  productSubTotal: Number;
  product: string;
  productImage: string;
}

const Payment = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const deliveryAddress = useSelector(selectDelivery);
  const subTotal = useSelector(selectSubTotal);

  const [orderItems, setOrderItems] = useState<IOrder[]>();

  useEffect(() => {
    const newOrder: IOrder[] = [];

    cart.forEach((el: any) => {
      const orderItem: IOrder = {
        quantity: el.quantity,
        productSubTotal: el.calculatedPrice,
        product: el._id,
        productImage: el.image,
      };

      newOrder.push(orderItem);
    });

    setOrderItems(newOrder);
  }, [cart]);

  const createOrder = async () => {
    await createAPIEndpoint(ENDPOINTS.ORDERS)
      .createNewOrder({
        orderItems: orderItems,
        user: JSON.parse(localStorage.getItem("profile") || "{}").result,
        totalPrice: subTotal,
        address: deliveryAddress,
      })
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Button extraMargin="50px" onClick={createOrder}>
        Finish
      </Button>
    </div>
  );
};

export default Payment;
