import React, { useState } from "react";
import SearchBar from "../../controls/searchBar/SearchBar";
import { Button } from "../../styles/globalStyles";

import {
  SearchSectionContainer,
  DeliveryRow,
  TruckIcon,
  SearchRow,
  ListIcon,
  SearchBarCol,
  ShoppingList,
  CheckOutCol,
  CheckOutIcon,
} from "./SearchSection.styles";

interface Props {}

const SearchSection = (props: Props) => {
  const [deliveryCity, setDeliveryCity] = useState("Glenfield");
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState("0.00");

  const changeCity = () => {
    console.log("city change");
  };

  return (
    <SearchSectionContainer>
      <DeliveryRow>
        <TruckIcon />
        <p>Delivery:</p> {deliveryCity}{" "}
        <span onClick={changeCity}>Change {">"}</span>
      </DeliveryRow>

      <SearchRow>
        <SearchBarCol>
          <SearchBar />
          <ShoppingList>
            <ListIcon />
            Shopping list
          </ShoppingList>
        </SearchBarCol>

        <CheckOutCol>
          <CheckOutIcon />
          {numberOfItems} items - ${totalPrice}
          <Button extraMargin="0 16px">Checkout</Button>
        </CheckOutCol>
      </SearchRow>
    </SearchSectionContainer>
  );
};

export default SearchSection;
