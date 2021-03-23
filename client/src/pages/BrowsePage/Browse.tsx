import React, { useEffect, useState } from "react";

import {
  BrowseContainer,
  CategoryColumn,
  ProductColumn,
  HeadingContainer,
  FilterContainer,
  BrowseMain,
} from "./Browse.styles";

interface Props {}

const Browse = ({ match }: any) => {
  useEffect(() => {
    console.log(match.params.category);
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
        </ProductColumn>
      </BrowseContainer>
    </BrowseMain>
  );
};

export default Browse;
