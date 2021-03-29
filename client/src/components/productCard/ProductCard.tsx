import React, { useState, useEffect } from "react";
import { Button } from "../../styles/globalStyles";
import { Link } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { useSelector, useDispatch } from "react-redux";
import {
  incrementCart,
  decrementCart,
  selectCart,
  removeFromCart,
} from "../../features/cart/cartSlice";

import {
  ProductCardContainer,
  ProductImage,
  ProductInfo,
  ProductButton,
  PriceInfo,
  ProductInfoContainer,
  PriceInfoContainer,
} from "./ProductCard.styles";

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

const ProductCard = (props: Props) => {
  const dispatch = useDispatch();
  const [numberSelected, setNumberSelected] = useState(0);
  const cart = useSelector(selectCart);
  const [isInCart, setIsInCart] = useState(false);

  const addToCart = () => {
    let cartData = { selectedProduct: props, count: numberSelected };

    setIsInCart(true);
    dispatch(incrementCart(cartData));
  };

  const removeFromCart = () => {
    const { _id } = props;
    let cartData = {
      selectedProduct: {
        _id,
      },
    };

    if (numberSelected === 1) {
      setIsInCart(false);
    }
    dispatch(decrementCart(cartData));
  };

  useEffect(() => {
    cart.forEach((cartItem: any) => {
      if (cartItem._id === props._id) {
        setIsInCart(true);
        setNumberSelected(cartItem.quantity);
      }
    });
  }, [cart]);

  return (
    <ProductCardContainer>
      <Link
        to={`/product/${props._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <ProductInfoContainer>
          <ProductImage>
            <img src={props.image} alt={props.name} />
          </ProductImage>
          <PriceInfoContainer>
            <ProductInfo>
              <h2>{props.name}</h2>
              <span>
                {props.weight}
                {props.weightUnit} ${props.pricePerSpecificUnit} /{" "}
                {props.specificUnit}
              </span>
            </ProductInfo>
            <PriceInfo>
              <div>
                <h4>$</h4>
                <h3>{props.originalPrice}</h3>
                <h4>{props.decimalPrice}</h4>
              </div>
            </PriceInfo>
          </PriceInfoContainer>
        </ProductInfoContainer>
      </Link>

      <ProductButton>
        {isInCart ? (
          <>
            <input value={numberSelected} readOnly />
            <Button className="remove" onClick={removeFromCart} propWidth="50%">
              <AiOutlineMinus />
            </Button>
            <Button className="add" onClick={addToCart} propWidth="50%">
              <AiOutlinePlus />
            </Button>
          </>
        ) : (
          <Button onClick={addToCart} propWidth="100%">
            Add to trolley
          </Button>
        )}
      </ProductButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
