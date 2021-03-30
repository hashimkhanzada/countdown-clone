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
  }

  th {
    border-bottom: 1px solid #dddddd;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

  tr:last-child {
    border-top: solid 1px #dddddd;
    background-color: white;
    th {
      border-bottom: none;
    }
  }

  tr {
    td:last-child {
      text-align: center;
    }
  }

  th,
  td {
    padding: 10px;
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
