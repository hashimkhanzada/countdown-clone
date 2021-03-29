import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #39464e;
`;

export const CheckoutMain = styled.div`
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

  .deliveryButtons {
    display: flex;
    margin: 20px 0;

    @media screen and (max-width: 1030px) {
      align-items: center;
      flex-direction: column;

      button {
        margin: 5px 0;
      }
    }
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

export const DeliveryRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 0;
  padding-bottom: 30px;
  border-bottom: solid 1px #889ca8;

  h3 {
    font-size: 23px;
  }

  .num {
    border: 1px solid #536671;
    border-radius: 1rem;
    height: 2rem;
    margin-right: 0.75rem;
    text-align: center;
    width: 2rem;
  }

  button {
    width: 100%;
    margin: 10px;
    padding: 30px 0;
    background-color: white;
    font-size: 25px;
    border: solid 1px #889ca8;
    border-radius: 5px;
    color: #39464e;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: rgba(0, 120, 55, 0.1);
    }

    p {
      font-size: 20px;
      font-weight: bolder;
    }
  }

  .selected {
    background-color: rgba(0, 120, 55, 0.1);
    color: #007837;
    cursor: pointer;
  }

  .address {
    padding-left: 10px;

    h4 {
      font-size: 14px;
      font-weight: normal;
    }

    span {
      display: flex;
      align-items: center;
    }

    strong {
      margin-right: 15px;
    }

    p {
      font-size: 14px;
      color: #007837;

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

export const TimeslotRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 0;
  padding-bottom: 30px;
  border-bottom: solid 1px #889ca8;

  .num {
    border: 1px solid #536671;
    border-radius: 1rem;
    height: 2rem;
    margin-right: 0.75rem;
    text-align: center;
    width: 2rem;
  }

  button {
    width: 100%;
    margin: 10px;
    padding: 15px 0;
    background-color: white;
    font-size: 25px;
    border: solid 1px #889ca8;
    border-radius: 5px;
    color: #39464e;
    cursor: pointer;
    transition: all 0.1s ease;

    &:hover {
      background-color: rgba(0, 120, 55, 0.1);
    }

    p {
      font-size: 20px;
      font-weight: bolder;
    }
  }

  .selected {
    background-color: rgba(0, 120, 55, 0.1);
    color: #007837;
  }
`;
