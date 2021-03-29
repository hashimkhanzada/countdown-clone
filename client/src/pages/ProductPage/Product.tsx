import React, { useState, useEffect } from "react";
import { createAPIEndpoint, ENDPOINTS } from "../../api/axios";
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
  ProductContainer,
  ProductRow,
  ImageCol,
  InfoCol,
  PriceRow,
  ButtonRow,
  Price,
} from "./Product.styles";

interface ProductInfo {
  _id: string;
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
  description?: string;
}

const Product = ({ match }: any) => {
  const [productData, setProductData] = useState<ProductInfo>();

  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const [numberSelected, setNumberSelected] = useState(0);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const GetData = async () => {
      await createAPIEndpoint(ENDPOINTS.BROWSE)
        .fetchById(match.params.id)
        .then((response: any) => {
          setProductData(response.data);

          console.log(response.data);
        })
        .catch((err) => console.log(err));
    };

    GetData();
  }, [match]);

  const addToCart = () => {
    let cartData = { selectedProduct: productData, count: numberSelected };

    setIsInCart(true);
    dispatch(incrementCart(cartData));
  };

  const removeFromCart = () => {
    const _id = match.params.id;
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
      if (cartItem._id === match.params.id) {
        setIsInCart(true);
        setNumberSelected(cartItem.quantity);
      }
    });
  }, [cart]);

  return (
    <ProductContainer>
      <ProductRow>
        <ImageCol>
          <img src={productData?.image} alt={productData?.name} />
        </ImageCol>
        <InfoCol>
          <h1>{productData?.name}</h1>
          <p>{productData?.madeIn}</p>
          <p>{productData?.description}</p>
          <PriceRow>
            <div>
              {productData?.weight}
              {productData?.weightUnit} ${productData?.pricePerSpecificUnit} /{" "}
              {productData?.specificUnit}
            </div>
            <Price>
              <h4>$</h4>
              <h3>{productData?.originalPrice}</h3>
              <h4>{productData?.decimalPrice}</h4>
            </Price>
          </PriceRow>
          <ButtonRow>
            {isInCart ? (
              <>
                <input value={numberSelected} readOnly />
                <Button
                  className="remove"
                  onClick={removeFromCart}
                  propWidth="50%"
                >
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
          </ButtonRow>
        </InfoCol>
      </ProductRow>
    </ProductContainer>
  );
};

export default Product;
