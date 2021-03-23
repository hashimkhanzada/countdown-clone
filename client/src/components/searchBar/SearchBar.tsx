import React from "react";

import {
  SearchBarContainer,
  Search,
  SearchInput,
  SearchIcon,
  Select,
} from "./SearchBar.styles";

interface Props {}

const SearchBar = (props: Props) => {
  return (
    <SearchBarContainer>
      <Select>
        <option value="grocery">Grocery</option>
      </Select>
      <Search>
        <SearchInput placeholder="Search Groceries" />
        <SearchIcon />
      </Search>
    </SearchBarContainer>
  );
};

export default SearchBar;
