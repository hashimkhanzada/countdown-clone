import React from "react";
import { Button } from "../../styles/globalStyles";

import {
  ProductCardContainer,
  ProductImage,
  ProductInfo,
  ProductButton,
  PriceInfo,
} from "./ProductCard.styles";

interface Props {}

const ProductCard = (props: Props) => {
  return (
    <ProductCardContainer>
      <ProductImage>
        <img
          src="https://static.countdown.co.nz/assets/product-images/big/9400597021548.jpg"
          alt="asd"
        />
      </ProductImage>
      <ProductInfo>
        <h2>Fresh Product Bananas Yellow</h2>
        <span>1kg $9.50 / 1KG</span>
      </ProductInfo>
      <PriceInfo>
        <h3>
          <span>$</span>
          <em>9</em>
          <span>50</span>
        </h3>
      </PriceInfo>

      <ProductButton>
        <Button maxWidth>Add to trolley</Button>
      </ProductButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
