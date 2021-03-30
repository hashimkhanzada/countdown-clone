import styled from "styled-components";

export const ReceiptContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #39464e;
`;

export const ReceiptMain = styled.div`
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
`;

export const ReceiptInfoRow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 0;
  padding-bottom: 50px;

  span {
    padding: 0 10px;
  }

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    @media screen and (max-width: 1030px) {
      font-size: 12px;
    }
  }

  h1 {
    @media screen and (max-width: 1030px) {
      font-size: 24px;
    }
  }

  .orderDetails {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media screen and (max-width: 1030px) {
      align-items: flex-start;
      flex-direction: column;
    }
  }

  .deliveryDetails {
    padding: 30px;
    border: solid 1px #889ca8;
    border-radius: 5px;
    margin-top: 30px;

    > * {
      margin: 15px 0;
    }
  }
`;

export const OrderItemsRow = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 15px;
    border: 1px solid #dddddd;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }

  th {
    background-color: #007837;
    color: #ffffff;
  }

  tr:nth-child(even) {
    background-color: #f3f3f3;
  }

  tr {
    border-bottom: 1px solid #dddddd;
  }

  tr:nth-last-child(2) {
    border-bottom: 2px solid #009879;
  }

  tr:last-child {
    background: #ffffff;
    color: #39464e;
    font-size: 16px;
  }

  tbody th {
    background: #ffffff;
    color: #39464e;
    font-size: 16px;
  }

  th,
  td {
    padding: 12px 15px;
    text-align: left;
  }
`;
