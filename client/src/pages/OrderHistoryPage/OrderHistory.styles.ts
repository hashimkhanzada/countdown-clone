import { Link } from "react-router-dom";
import styled from "styled-components";

export const OrderHistoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #39464e;
`;

export const OrderHistoryMain = styled.div`
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

  table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
    font-size: 14px;
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
    td:last-child {
      font-weight: bolder;

      text-align: center;
    }

    &:hover {
      background-color: #dddddd;
    }
  }

  tr:last-child {
    border-bottom: 2px solid #009879;
  }

  th,
  td {
    padding: 12px 15px;
    text-align: left;
  }
`;

export const OrderLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;
