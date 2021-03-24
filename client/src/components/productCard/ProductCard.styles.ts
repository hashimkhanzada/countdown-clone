import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border: none;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 35%);
  overflow: hidden;
  border-radius: 0;
  padding: 0.75rem 1rem;
  color: #39464e;
  width: 225px;
  border: solid 2px transparent;

  transition: all 0.3s ease;

  &:hover {
    border: solid 2px #007837;
  }

  @media screen and (max-width: 1030px) {
    width: 100%;
    display: block;
  }
`;

export const ProductInfoContainer = styled.div`
  cursor: pointer;

  @media screen and (max-width: 1030px) {
    display: flex;
    align-items: flex-start;
    padding-top: 10px;
  }
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  @media screen and (max-width: 1030px) {
    margin-top: 5px;
    margin-right: 1rem;
    height: 100%;
  }

  img {
    width: 160px;
    object-fit: contain;

    @media screen and (max-width: 1030px) {
      width: 85px;
    }
  }
`;

export const ProductInfo = styled.div`
  h2 {
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 15px;
  }

  span {
    font-size: 14px;
  }
`;

export const ProductButton = styled.div`
  display: flex;
`;

export const PriceInfoContainer = styled.div`
  @media screen and (max-width: 1030px) {
    display: flex;
    flex-direction: column;
  }
`;

export const PriceInfo = styled.div`
  font-size: 23px;
  margin: 15px 0;

  @media screen and (max-width: 1030px) {
    margin: 10px 0;
  }

  div {
    display: flex;

    h3 {
      font-size: 48px;

      @media screen and (max-width: 1030px) {
        font-size: 30px;
      }
    }

    h4 {
      font-size: 18px;
      padding-top: 14px;
      @media screen and (max-width: 1030px) {
        font-size: 14px;
        padding-top: 8px;
      }
    }
  }
`;
