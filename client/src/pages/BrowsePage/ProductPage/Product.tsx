import React, { useState, useEffect } from "react";
import { createAPIEndpoint, ENDPOINTS } from "../../../api/axios";
import { Button } from "../../../styles/globalStyles";

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
  description?: string;
}

const Product = ({ match }: any) => {
  const [productData, setProductData] = useState<ProductInfo>();

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
            <Button propWidth="100%">Add to trolley</Button>
          </ButtonRow>
        </InfoCol>
      </ProductRow>
    </ProductContainer>
  );
};

export default Product;
