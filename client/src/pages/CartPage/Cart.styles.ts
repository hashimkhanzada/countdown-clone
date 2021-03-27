import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CartMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: white;
  width: 100%;
  max-width: 1200px;
`;

export const TitleRow = styled.div`
  display: flex;
  color: #39464e;
  align-items: center;
  width: 100%;
  background-color: white;
  border-bottom: solid 1px #e9f2fc;
  max-width: 1200px;
  padding: 20px;

  h1 {
    padding: 0 18px 4px 8px;
  }

  h2 {
    font-weight: normal;
  }
`;

export const TotalCostRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 50px;
  width: 50%;

  > * {
    margin: 2px 0;
  }
`;

export const Cost = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 26px;
  }
`;

export const CheckOutRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 20px 15px;
  background: white;
  margin: 20px 0;
`;
