import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  CartItemContainer,
  ImageCol,
  InfoCol,
  QuantityCol,
  TotalCol,
  Col1,
  Col2,
  Col3,
} from "./CartCard.styles";

import {
  incrementCart,
  decrementCart,
  selectCart,
  removeFromCart,
} from "../../features/cart/cartSlice";
import { Button } from "../../styles/globalStyles";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface Props {
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

const CartCard = (props: Props) => {
  const dispatch = useDispatch();
  const [numberSelected, setNumberSelected] = useState(1);
  const cart = useSelector(selectCart);
  const [totalPrice, setTotalPrice] = useState("0.00");

  const addToCart = () => {
    let cartData = { selectedProduct: props };

    dispatch(incrementCart(cartData));
  };

  const decrementQuantity = () => {
    const { _id } = props;
    let cartData = {
      selectedProduct: {
        _id,
      },
    };

    dispatch(decrementCart(cartData));
  };

  const clearCartItem = () => {
    dispatch(removeFromCart(props._id));
  };

  useEffect(() => {
    cart.forEach((cartItem: any) => {
      if (cartItem._id === props._id) {
        setNumberSelected(cartItem.quantity);
        setTotalPrice(cartItem.calculatedPrice.toFixed(2));
      }
    });
  }, [cart]);

  return (
    <CartItemContainer>
      <Col1>
        <ImageCol>
          <img src={props.image} alt={props.name} />
        </ImageCol>
        <InfoCol>
          <h2>{props.name}</h2>
          <span>
            {props.weight}
            {props.weightUnit} ${props.pricePerSpecificUnit} /{" "}
            {props.specificUnit}
          </span>
          <h1>
            ${props.originalPrice}.{props.decimalPrice} each
          </h1>
        </InfoCol>
      </Col1>
      <Col2>
        <QuantityCol>
          <input value={numberSelected} readOnly />
          <Button
            className="remove"
            onClick={decrementQuantity}
            propWidth="40%"
          >
            <AiOutlineMinus />
          </Button>
          <Button className="add" onClick={addToCart} propWidth="40%">
            <AiOutlinePlus />
          </Button>
        </QuantityCol>
        <p onClick={clearCartItem}>Remove</p>
      </Col2>
      <Col3>
        <TotalCol>${totalPrice}</TotalCol>
      </Col3>
    </CartItemContainer>
  );
};

export default CartCard;
