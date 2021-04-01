import React, { useState, useEffect } from "react";
import SearchBar from "../../controls/searchBar/SearchBar";
import { Button } from "../../styles/globalStyles";
import { useSelector, useDispatch } from "react-redux";

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

import {
  changeDeliveryAddress,
  selectDelivery,
} from "../../features/delivery/deliverySlice";

const SearchSection = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const subTotal = useSelector(selectSubTotal);
  const deliveryAddress = useSelector(selectDelivery);

  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState(deliveryAddress);

  useEffect(() => {
    dispatch(calculateSubTotal());
  }, [cart]);

  useEffect(() => {
    console.log(deliveryAddress);
  }, [deliveryAddress]);

  const changeCity = () => {
    dispatch(changeDeliveryAddress(inputValue));
  };

  return (
    <SearchSectionContainer>
      <DeliveryRow>
        <TruckIcon />
        <p>Delivery:</p> {deliveryAddress}{" "}
        {isVisible ? (
          <form className="address">
            <h3>Enter your address:</h3>
            <input
              value={inputValue}
              onChange={(e: any) => {
                setInputValue(e.target.value);
              }}
            />
            <Button
              propPadding="5px 15px"
              onClick={() => {
                if (inputValue) {
                  changeCity();
                  setIsVisible(false);
                } else {
                  setIsVisible(false);
                }
              }}
              type="submit"
            >
              Confirm
            </Button>
          </form>
        ) : (
          <span onClick={() => setIsVisible(true)}>Change {">"}</span>
        )}
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
