import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Receipt } from "../../types";

interface DeliveryState {
  deliveryAddress: string;
  deliveryDate: string;
  deliveryReceipt: Receipt;
}

const initialState: DeliveryState = {
  deliveryAddress: "",
  deliveryDate: "",
  deliveryReceipt: {
    address: "",
    createdAt: "",
    deliveryDate: "",
    orderItems: [],
    totalPrice: 0,
    user: "",
    _id: "",
  },
};

export const deliverySlice = createSlice({
  name: "delivery",
  initialState,
  reducers: {
    changeDeliveryAddress: (state, action: PayloadAction<string>) => {
      state.deliveryAddress = action.payload;
    },
    changeDeliveryDate: (state, action: PayloadAction<string>) => {
      state.deliveryDate = action.payload;
    },
    setDeliveryReceipt: (state, action: PayloadAction<Receipt>) => {
      state.deliveryReceipt = action.payload;
    },
  },
});

export const {
  changeDeliveryAddress,
  changeDeliveryDate,
  setDeliveryReceipt,
} = deliverySlice.actions;

export const selectDelivery = (state: RootState) =>
  state.delivery.deliveryAddress;

export const selectDeliveryDate = (state: RootState) =>
  state.delivery.deliveryDate;

export const selectDeliveryReceipt = (state: RootState) =>
  state.delivery.deliveryReceipt;

export default deliverySlice.reducer;
