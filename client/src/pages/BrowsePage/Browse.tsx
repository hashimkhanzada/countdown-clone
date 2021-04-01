import React, { useEffect, useState } from "react";
import ProductCard from "../../components/productCard/ProductCard";
import { createAPIEndpoint, ENDPOINTS } from "../../api/axios";
import PaginationBar from "../../components/paginationBar/PaginationBar";
import IsLoadingHOC from "../../IsLoadingHOC";
import { Product } from "../../types";

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

const Browse = ({ setLoading, match }: any) => {
  const [productData, setProductData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [itemsPerPage] = useState(15);
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
    setLoading(true);
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
          setLoading(false);

          response.data.results.next.page
            ? setIsLastPage(false)
            : setIsLastPage(true);

          response.data.results.previous.page
            ? setIsFirstPage(false)
            : setIsFirstPage(true);

          if (!response.data.results.paginatedProducts.length) {
            setCurrentPage(1);
          }
        })
        .catch((err) => console.log(err));
    };

    const GetSearchData = async () => {
      await createAPIEndpoint(ENDPOINTS.SEARCHPRODUCT)
        .fetchBySearch(searchValue, currentPage, itemsPerPage)
        .then((response: any) => {
          setProductData(response.data.results.paginatedProducts);
          setTotalItems(response.data.totalProducts);
          setLoading(false);
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
  }, [match, currentPage, searchValue, itemsPerPage]);

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
              {productData?.map((data: Product) => {
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

export default IsLoadingHOC(Browse);
