import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface SearchState {
  searchTerm: string;
}

const initialState: SearchState = {
  searchTerm: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeSearchTerm: (state, action: PayloadAction<any>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { changeSearchTerm } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.searchTerm;

export default searchSlice.reducer;
