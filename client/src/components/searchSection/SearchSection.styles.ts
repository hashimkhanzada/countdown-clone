import styled from "styled-components";
import { FiTruck } from "react-icons/fi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";

export const SearchSectionContainer = styled.div`
  box-shadow: 0 5px 5px 0 rgb(0 0 0 / 15%);
`;

export const DeliveryRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #39464e;
  padding: 12px 16px 0;
  p {
    padding: 0 8px;
    font-weight: bolder;
  }

  span {
    margin-left: 8px;
    cursor: pointer;
    color: #007837;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const TruckIcon = styled(FiTruck)`
  font-size: 24px;
  color: gray;
`;

export const SearchRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
`;

export const ListIcon = styled(HiOutlineClipboardList)`
  font-size: 32px;
  margin-right: 8px;
`;

export const SearchBarCol = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const ShoppingList = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  color: #535e65;
  cursor: pointer;

  &:hover {
    color: #007837;
  }

  @media screen and (max-width: 1030px) {
    display: none;
  }
`;

export const CheckOutCol = styled.div`
  display: flex;
  align-items: center;
  color: #535e65;
  flex: 1;
  justify-content: flex-end;

  span {
    @media screen and (max-width: 1030px) {
      display: none;
    }
  }
`;

export const CheckOutIcon = styled(IoCartOutline)`
  font-size: 32px;
  color: #007837;
  margin: 0 8px;
`;
