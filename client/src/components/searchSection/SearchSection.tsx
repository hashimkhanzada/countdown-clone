import React, { useState, useEffect } from "react";
import SearchBar from "../../controls/searchBar/SearchBar";
import { Button } from "../../styles/globalStyles";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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

import {
  selectCart,
  calculateSubTotal,
  selectSubTotal,
} from "../../features/cart/cartSlice";

interface Props {}

const SearchSection = (props: Props) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const subTotal = useSelector(selectSubTotal);

  const [deliveryCity, setDeliveryCity] = useState("Glenfield");

  useEffect(() => {
    dispatch(calculateSubTotal());
  }, [cart]);

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
        <div style={{ display: "flex", flex: "1", justifyContent: "flex-end" }}>
          <CheckOutCol to="/reviewcart">
            <CheckOutIcon />
            <span>{cart?.length} items - </span>${subTotal}
            <Button extraMargin="0 16px" hideMobile>
              Checkout
            </Button>
          </CheckOutCol>
        </div>
      </SearchRow>
    </SearchSectionContainer>
  );
};

export default SearchSection;
