import React, { useEffect, useState } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { createAPIEndpoint, ENDPOINTS } from "../../api/axios";
import PaginationBar from "../../components/paginationBar/PaginationBar";

import {
  BrowseContainer,
  CategoryColumn,
  ProductColumn,
  HeadingContainer,
  FilterContainer,
  BrowseMain,
  ProductsContainer,
  PaginationContainer,
} from "./Browse.styles";

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

const Browse = ({ match }: any) => {
  const [productData, setProductData] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(true);
  const [isFirstPage, setIsFirstPage] = useState(true);

  useEffect(() => {
    const GetData = async () => {
      await createAPIEndpoint(ENDPOINTS.BROWSE)
        .fetchProductsByMainCategory(
          match.params.mainCategory,
          currentPage,
          itemsPerPage
        )
        .then((response: any) => {
          setProductData(response.data.results.paginatedProducts);
          setTotalItems(response.data.totalProducts);

          response.data.results.next.page
            ? setIsLastPage(false)
            : setIsLastPage(true);

          response.data.results.previous.page
            ? setIsFirstPage(false)
            : setIsFirstPage(true);
        })
        .catch((err) => console.log(err));

      await createAPIEndpoint(ENDPOINTS.BROWSE)
        .fetchSubCategoryData(match.params.mainCategory)
        .then((response: any) => {
          setSubCategory(response.data);
        })
        .catch((err) => console.log(err));
    };

    GetData();
  }, [match, currentPage]);

  useEffect(() => {
    const GetSubData = async () => {
      await createAPIEndpoint(ENDPOINTS.BROWSE)
        .fetchSubCategoryData(match.params.mainCategory)
        .then((response: any) => {
          setSubCategory(response.data);
        })
        .catch((err) => console.log(err));
    };

    GetSubData();
  }, [match]);

  return (
    <BrowseMain>
      <BrowseContainer>
        <CategoryColumn>
          <h3>Categories</h3>
          {subCategory?.map(({ subCategoryName, numberOfItems }) => {
            return (
              <p key={subCategoryName}>
                {subCategoryName} ({numberOfItems})
              </p>
            );
          })}
        </CategoryColumn>
        <ProductColumn>
          <HeadingContainer>
            <h1>Fruits {"&"} Veg</h1>
            <span>{productData?.length} items</span>
          </HeadingContainer>
          <FilterContainer>
            <p>Sort by:</p>
            <select>
              <option value="">Relevance</option>
            </select>
          </FilterContainer>
          <ProductsContainer>
            {productData?.map((data: ProductInfo) => {
              return (
                <ProductCard
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
          </ProductsContainer>
          <PaginationContainer>
            <PaginationBar
              itemsPerPage={itemsPerPage}
              totalItems={totalItems}
              selectedPage={currentPage}
              onPageChange={(e: any) => {
                setCurrentPage(e.target.id);
              }}
              nextPage={() => {
                setCurrentPage(!isLastPage ? +currentPage + 1 : currentPage);
              }}
              prevPage={() => {
                setCurrentPage(!isFirstPage ? +currentPage - 1 : currentPage);
              }}
              isFirstPage={isFirstPage}
              isLastPage={isLastPage}
            />
          </PaginationContainer>
        </ProductColumn>
      </BrowseContainer>
    </BrowseMain>
  );
};

export default Browse;
