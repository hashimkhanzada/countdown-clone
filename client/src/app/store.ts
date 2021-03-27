import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import searchReducer from "../features/search/searchSlice";
import deliveryReducer from "../features/delivery/deliverySlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
    delivery: deliveryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
