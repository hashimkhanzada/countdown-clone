import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface SearchState {
  searchTerm: string;
  isSearched: boolean;
}

const initialState: SearchState = {
  searchTerm: "",
  isSearched: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeSearchTerm: (state, action: PayloadAction<any>) => {
      state.searchTerm = action.payload;
    },
    searchClicked: (state, action: PayloadAction<any>) => {
      state.isSearched = action.payload;
    },
  },
});

export const { changeSearchTerm, searchClicked } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.searchTerm;
export const selectSearchClicked = (state: RootState) =>
  state.search.isSearched;

export default searchSlice.reducer;
