import React, { useEffect, useState } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { createAPIEndpoint, ENDPOINTS } from "../../api/axios";
import PaginationBar from "../../components/paginationBar/PaginationBar";
import { useSelector, useDispatch } from "react-redux";

import {
  changeSearchTerm,
  selectSearch,
  searchClicked,
  selectSearchClicked,
} from "../../features/search/searchSlice";

import {
  SearchContainer,
  CategoryColumn,
  ProductColumn,
  HeadingContainer,
  FilterContainer,
  SearchMain,
  ProductsContainer,
  PaginationContainer,
} from "./Search.styles";

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

const Search = ({ match }: any) => {
  const [productData, setProductData] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(true);
  const [isFirstPage, setIsFirstPage] = useState(true);

  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearch);

  useEffect(() => {
    const GetSearchData = async () => {
      await createAPIEndpoint(ENDPOINTS.SEARCHPRODUCT)
        .fetchBySearch(searchValue, currentPage, itemsPerPage)
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
    };
    GetSearchData();
  }, [match, currentPage, searchValue]);

  useEffect(() => {
    const GetCategoryData = async () => {
      await createAPIEndpoint(ENDPOINTS.SEARCHPRODUCT)
        .fetchMainCategoryData(searchValue)
        .then((response: any) => {
          setSubCategory(response.data);
          console.log(response);
        })
        .catch((err) => console.log(err));
    };
    if (searchValue) {
      GetCategoryData();
    }
  }, [match, searchValue]);

  return (
    <SearchMain>
      <SearchContainer>
        <CategoryColumn>
          <h3>Categories</h3>
          {subCategory?.map(({ categoryName, numberOfItems }) => {
            return (
              <p key={categoryName}>
                {categoryName} ({numberOfItems})
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
      </SearchContainer>
    </SearchMain>
  );
};

export default Search;
