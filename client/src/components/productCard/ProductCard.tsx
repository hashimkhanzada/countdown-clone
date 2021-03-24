import React from "react";
import { Button } from "../../styles/globalStyles";

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
  category?: string;
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
  return (
    <ProductCardContainer>
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

      <ProductButton>
        <Button maxWidth>Add to trolley</Button>
      </ProductButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
