import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface DeliveryState {
  deliveryAddress: string;
}

const initialState: DeliveryState = {
  deliveryAddress: "Main City, Wanganui",
};

export const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    changeDeliveryAddress: (state, action: PayloadAction<any>) => {
      state.deliveryAddress = action.payload;
    },
  },
});

export const { changeDeliveryAddress } = deliverySlice.actions;

export const selectDelivery = (state: RootState) =>
  state.delivery.deliveryAddress;

export default deliverySlice.reducer;
