import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface DeliveryState {
  deliveryAddress: string;
  deliveryDate: string;
  deliveryReceipt: IReceipt;
}

interface IReceipt {
  address: string;
  createdAt: string;
  deliveryDate: string;
  orderItems: [];
  totalPrice: number;
  user: string;
  _id: string;
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
    changeDeliveryAddress: (state, action: PayloadAction<any>) => {
      state.deliveryAddress = action.payload;
    },
    changeDeliveryDate: (state, action: PayloadAction<any>) => {
      state.deliveryDate = action.payload;
    },
    setDeliveryReceipt: (state, action: PayloadAction<any>) => {
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
