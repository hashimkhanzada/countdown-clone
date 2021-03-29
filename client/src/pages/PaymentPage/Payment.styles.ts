import styled from "styled-components";

export const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #39464e;
`;

export const PaymentMain = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  max-width: 1200px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 48px 180px;

  @media screen and (max-width: 1030px) {
    padding: 48px 10px;
  }

  .checkoutOptions {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;

    .checkoutMethod {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: solid 1px #889ca8;
      border-radius: 5px;
      padding: 20px;
      width: 100%;
      margin: 0 10px;

      p {
        margin: 10px 0;
        font-size: 14px;
      }
    }
  }
`;

export const PaymentInfoRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 0;
  padding-bottom: 50px;

  span {
    padding: 0 10px;
  }
`;

export const CreditCardRow = styled.div`
  display: flex;
  flex-direction: column;

  .cardContainer {
    width: 40%;
    margin-top: 30px;

    @media screen and (max-width: 1030px) {
      width: 100%;

      button {
        width: 100%;
        margin-top: 20px;
      }
    }
  }
`;
