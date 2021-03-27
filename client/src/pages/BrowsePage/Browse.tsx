import React, { useEffect, useState } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { createAPIEndpoint, ENDPOINTS } from "../../api/axios";
import PaginationBar from "../../components/paginationBar/PaginationBar";
import { useSelector, useDispatch } from "react-redux";

import {
  changeSearchTerm,
  selectSearch,
} from "../../features/search/searchSlice";

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
import PageMap from "../../components/pageMap/PageMap";

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
  const [categoryData, setCategoryData] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(true);
  const [isFirstPage, setIsFirstPage] = useState(true);

  const searchValue = useSelector(selectSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeSearchTerm(""));
  }, [match]);

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
    };

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

    searchValue ? GetSearchData() : GetData();
  }, [match, currentPage, searchValue]);

  useEffect(() => {
    const GetSubData = async () => {
      await createAPIEndpoint(ENDPOINTS.BROWSE)
        .fetchSubCategoryData(match.params.mainCategory)
        .then((response: any) => {
          setSubCategory(response.data);
        })
        .catch((err) => console.log(err));
    };

    const GetCategoryData = async () => {
      await createAPIEndpoint(ENDPOINTS.SEARCHPRODUCT)
        .fetchMainCategoryData(searchValue)
        .then((response: any) => {
          setCategoryData(response.data);
        })
        .catch((err) => console.log(err));
    };

    searchValue ? GetCategoryData() : GetSubData();
  }, [match, searchValue]);

  return (
    <>
      {searchValue ? (
        <PageMap pageName="Search Results" />
      ) : (
        <PageMap pageName={match.params.mainCategory} />
      )}

      <BrowseMain>
        <BrowseContainer>
          <CategoryColumn>
            <h3>Categories</h3>
            {searchValue
              ? categoryData?.map(({ categoryName, numberOfItems }) => {
                  return (
                    <p key={categoryName}>
                      {categoryName} ({numberOfItems})
                    </p>
                  );
                })
              : subCategory?.map(({ subCategoryName, numberOfItems }) => {
                  return (
                    <p key={subCategoryName}>
                      {subCategoryName} ({numberOfItems})
                    </p>
                  );
                })}
          </CategoryColumn>
          <ProductColumn>
            <HeadingContainer>
              {searchValue ? (
                <h1>Results for "{searchValue}"</h1>
              ) : (
                <h1>{match.params.mainCategory}</h1>
              )}

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
    </>
  );
};

export default Browse;
