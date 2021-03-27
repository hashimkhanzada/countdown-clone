import React, { useState, useEffect } from "react";
import CartCard from "../../components/cartCard/CartCard";

import { useSelector, useDispatch } from "react-redux";
import {
  incrementCart,
  decrementCart,
  selectCart,
} from "../../features/cart/cartSlice";

import { CartContainer, CartMain } from "./Cart.styles";

interface Props {}

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

const Cart = (props: Props) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <CartContainer>
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
      </CartMain>
    </CartContainer>
  );
};

export default Cart;
