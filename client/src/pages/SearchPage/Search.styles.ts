import styled from "styled-components";

export const SearchMain = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 16px;
  width: 100%;
  max-width: 1500px;

  color: #39464e;

  @media screen and (max-width: 1030px) {
    flex-direction: column;
  }
`;

export const CategoryColumn = styled.div`
  display: flex;
  flex-direction: column;

  padding: 12px 0;

  h3 {
    margin: 0 0 12px;
    padding: 0 48px 12px 0;
    border-bottom: 1px solid #b4b9bc;
  }

  p {
    color: #007837;
    margin-bottom: 8px;
    cursor: pointer;
    transition: all 0.1s ease-out;

    &:hover {
      text-decoration: underline;
      color: #39464e;
    }
  }
`;

export const ProductColumn = styled.div`
  width: 85%;
  margin-left: 32px;

  @media screen and (max-width: 1030px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  h1 {
    @media screen and (max-width: 1030px) {
      font-size: 25px;
    }
  }

  span {
    color: #535e65;
    font-size: 23px;
    padding: 0 16px;

    @media screen and (max-width: 1030px) {
      display: none;
    }
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;

  p {
    margin-right: 8px;
  }

  select {
    border: 1px solid #b4b9bc;
    font-size: 1rem;
    min-width: 10rem;
    text-align: left;
    cursor: pointer;
    color: #39464e;
    padding: 8px 32px 8px 12px;
    border-radius: 0.25rem;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  > * {
    margin: 10px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
  margin-top: 10px;
`;
