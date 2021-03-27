import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Col1 = styled.div`
  display: flex;
  align-items: center;
  flex: 0.6;

  > * {
    padding: 12px 16px;
  }
`;

export const Col2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > * {
    padding: 12px 16px;
  }

  p {
    color: #535e65;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      color: #007837;
    }
  }
`;

export const Col3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.2;
  background-color: lightgray;

  > * {
    padding: 12px 16px;
  }
`;

export const ImageCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 85px;
    object-fit: contain;
  }
`;

export const InfoCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 14px;
  color: #535e65;

  h2 {
    color: #39464e;
    font-size: 16px;
  }

  h1 {
    font-size: 16px;
    color: #39464e;
    font-weight: normal;
    margin-top: 19px;
  }
`;

export const QuantityCol = styled.div`
  display: flex;
  input {
    border: 1px solid #b4b9bc;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    padding: 8px 12px;
    font-size: 1rem;
    color: #39464e;

    :focus {
      outline: 0;
    }
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
`;

export const TotalCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;
