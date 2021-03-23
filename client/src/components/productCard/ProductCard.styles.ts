import styled from "styled-components";

export const ProductCardContainer = styled.div`
  background-color: #fff;
  border: none;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 35%);
  overflow: hidden;
  position: relative;
  border-radius: 0;
  padding: 0.75rem 1rem;
  color: #39464e;
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  img {
    width: 160px;
    object-fit: contain;
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

export const ProductButton = styled.div``;
export const PriceInfo = styled.div`
  font-size: 23px;
  margin: 15px 0;
  h3 {
    em {
      vertical-align: top;
      font-size: 48px;
      font-style: normal;
    }

    span {
      font-size: 18px;
    }
  }
`;
