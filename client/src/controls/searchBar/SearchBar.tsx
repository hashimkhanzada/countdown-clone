import React from "react";

import {
  SearchBarContainer,
  Search,
  SearchInput,
  SearchIcon,
} from "./SearchBar.styles";

interface Props {}

const SearchBar = (props: Props) => {
  return (
    <SearchBarContainer>
      <Search>
        <SearchInput placeholder="Search Groceries" />
        <SearchIcon />
      </Search>
    </SearchBarContainer>
  );
};

export default SearchBar;
