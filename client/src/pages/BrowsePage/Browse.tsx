import React, { useEffect, useState } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { createAPIEndpoint, ENDPOINTS } from "../../api/axios";

import {
  BrowseContainer,
  CategoryColumn,
  ProductColumn,
  HeadingContainer,
  FilterContainer,
  BrowseMain,
  ProductsContainer,
} from "./Browse.styles";

interface ProductInfo {
  _id?: string;
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

const Browse = ({ match }: any) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const GetData = async () => {
      await createAPIEndpoint(ENDPOINTS.BROWSE)
        .fetchByMainCategory(match.params.mainCategory)
        .then((response: any) => {
          setProductData(response.data);
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    };

    GetData();
  }, [match]);

  return (
    <BrowseMain>
      <BrowseContainer>
        <CategoryColumn>
          <h3>Categories</h3>
          <p>Fruit (79)</p>
          <p>Vegetables (79)</p>
          <p>Fruit (79)</p>
          <p>Vegetables (79)</p>
          <p>Organic Fruit {"&"} Vegetables (79)</p>
        </CategoryColumn>
        <ProductColumn>
          <HeadingContainer>
            <h1>Fruits {"&"} Veg</h1>
            <span>318 Items</span>
          </HeadingContainer>
          <FilterContainer>
            <p>Sort by:</p>
            <select>
              <option value="">Relevance</option>
            </select>
          </FilterContainer>
          <ProductsContainer>
            {productData &&
              productData.map((data: ProductInfo) => {
                return (
                  <ProductCard
                    key={data._id}
                    name={data.name}
                    category={data.category}
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
          </ProductsContainer>
        </ProductColumn>
      </BrowseContainer>
    </BrowseMain>
  );
};

export default Browse;
