import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;

  color: #39464e;
`;

export const ProductRow = styled.div`
  display: flex;
  width: 1440px;

  > * {
    margin: 15px;
  }

  @media screen and (max-width: 1030px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ImageCol = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  background-color: white;
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 35%);

  img {
    width: 425px;
    object-fit: contain;

    @media screen and (max-width: 1030px) {
      width: 311px;
    }
  }
`;

export const InfoCol = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  h1 {
    margin-bottom: 12px;

    @media screen and (max-width: 1030px) {
      font-size: 25px;
    }
  }

  p {
    margin-bottom: 25px;
  }
`;

export const PriceRow = styled.div`
  div {
    display: flex;
    margin-top: 10px;
    font-size: 14px;
  }
`;

export const Price = styled.div`
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
`;
export const ButtonRow = styled.div`
  display: flex;
  width: 50%;
  margin-top: 10px;

  input {
    border: 1px solid #b4b9bc;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    padding: 8px 12px;
    font-size: 1rem;
    color: #39464e;
    width: 100%;
  }

  .add {
    border-radius: 0;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;

    * {
      width: 22px;
      height: 22px;
    }
  }

  .remove {
    border-radius: 0;
    margin-right: 1px;

    * {
      width: 22px;
      height: 22px;
    }
  }

  @media screen and (max-width: 1030px) {
    width: 100%;
  }
`;
