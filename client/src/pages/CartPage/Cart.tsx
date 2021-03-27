import React, { useState, useEffect } from "react";
import CartCard from "../../components/cartCard/CartCard";

import { useSelector, useDispatch } from "react-redux";
import {
  selectCart,
  clearCart,
  selectSubTotal,
} from "../../features/cart/cartSlice";

import {
  CartContainer,
  CartMain,
  TitleRow,
  TotalCostRow,
  Cost,
  Total,
  CheckOutRow,
} from "./Cart.styles";
import { Button } from "../../styles/globalStyles";
import { Link } from "react-router-dom";

interface ProductInfo {
  _id?: string;
  subCategory?: string;
  claims?: string;
  decimalPrice?: string;
  image?: string;
  ingredients?: string;
  isOnSale?: boolean;
  madeIn?: string;
  mainCategory?: string;
  name?: string;
  originalPrice?: string;
  pricePerSpecificUnit?: string;
  saleType?: [string];
  specificUnit?: string;
  totalPrice?: number;
  weight?: number;
  weightUnit?: string;
}

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const subTotal = useSelector(selectSubTotal);
  const [deliveryFee, setDeliveryFee] = useState(14);

  const clearTrolley = () => {
    dispatch(clearCart());
  };

  return (
    <CartContainer>
      <TitleRow>
        <h1>Trolley</h1>
        <h2>{cart.length} items</h2>
      </TitleRow>
      <CartMain>
        {cart?.map((data: ProductInfo) => {
          return (
            <CartCard
              key={data._id}
              _id={data._id}
              name={data.name}
              subCategory={data.subCategory}
              claims={data.claims}
              decimalPrice={data.decimalPrice}
              image={data.image}
              ingredients={data.ingredients}
              isOnSale={data.isOnSale}
              madeIn={data.madeIn}
              mainCategory={data.mainCategory}
              originalPrice={data.originalPrice}
              pricePerSpecificUnit={data.pricePerSpecificUnit}
              saleType={data.saleType}
              specificUnit={data.specificUnit}
              totalPrice={data.totalPrice}
              weight={data.weight}
              weightUnit={data.weightUnit}
            />
          );
        })}
        <TotalCostRow>
          <Cost>
            <p>Delivery fee</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </Cost>
          <Cost>
            <p>Subtotal</p>
            <p>${subTotal}</p>
          </Cost>
          <Total>
            <h1>Total (incl. GST)</h1>
            <h1>${(+subTotal + deliveryFee).toFixed(2)}</h1>
          </Total>
        </TotalCostRow>
      </CartMain>

      <CheckOutRow>
        <Button
          onClick={clearTrolley}
          style={{ background: "#c20e1a" }}
          propPadding="8px 32px"
        >
          Clear Trolley
        </Button>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <Button propPadding="8px 32px">Checkout</Button>
        </Link>
      </CheckOutRow>
    </CartContainer>
  );
};

export default Cart;
