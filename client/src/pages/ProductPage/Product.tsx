import React, { useState, useEffect } from "react";
import { createAPIEndpoint, ENDPOINTS } from "../../api/axios";
import { Button } from "../../styles/globalStyles";
import IsLoadingHOC from "../../IsLoadingHOC";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CartProduct } from "../../types";

import { useSelector, useDispatch } from "react-redux";
import {
  incrementCart,
  decrementCart,
  selectCart,
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

const Product = ({ match, setLoading }: any) => {
  const [productData, setProductData] = useState<CartProduct>();

  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const [numberSelected, setNumberSelected] = useState(0);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setLoading(true);
    const GetData = async () => {
      await createAPIEndpoint(ENDPOINTS.PRODUCTS)
        .fetchById(match.params.id)
        .then((response: { data: CartProduct }) => {
          setProductData(response.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };

    GetData();
  }, [match]);

  const addToCart = () => {
    let cartData = { selectedProduct: productData! };

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
  }, [cart, match.params.id]);

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

export default IsLoadingHOC(Product);
