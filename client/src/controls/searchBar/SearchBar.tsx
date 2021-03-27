import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  changeSearchTerm,
  selectSearch,
} from "../../features/search/searchSlice";

import {
  SearchBarContainer,
  Search,
  SearchInput,
  SearchIcon,
} from "./SearchBar.styles";

interface Props {}

const SearchBar = (props: Props) => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectSearch);

  const searchProduct = (e: any) => {
    e.preventDefault();
  };

  return (
    <SearchBarContainer>
      <Search>
        <SearchInput
          value={searchValue}
          onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
          placeholder="Search Groceries"
        />
        <button type="submit" onClick={searchProduct}>
          <SearchIcon />
        </button>
      </Search>
    </SearchBarContainer>
  );
};

export default SearchBar;
