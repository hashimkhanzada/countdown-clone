import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

import { CartProduct as Cart } from "../../types";

interface CartState {
  cartItems: Cart[];
  subTotal: number | string;
}

const initialState: CartState = {
  cartItems: [],
  subTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementCart: (
      state,
      action: PayloadAction<{
        selectedProduct: Cart;
      }>
    ) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;

      cartItems.forEach((cp: Cart) => {
        if (cp._id === action.payload.selectedProduct._id) {
          cp.quantity! += 1;
          cp.calculatedPrice = (cp.totalPrice! / 100) * cp.quantity!;
          productAlreadyInCart = true;
        }
      });

      if (!productAlreadyInCart) {
        cartItems.push({
          ...action.payload.selectedProduct,
          quantity: 1,
          calculatedPrice: action.payload.selectedProduct.totalPrice! / 100,
        });
        state.cartItems = [...cartItems];
      }
    },
    decrementCart: (
      state,
      action: PayloadAction<{
        selectedProduct: { _id?: string };
      }>
    ) => {
      const cartItems = state.cartItems;

      cartItems.forEach((cp: Cart) => {
        if (cp._id === action.payload.selectedProduct._id) {
          cp.quantity! -= 1;
          cp.calculatedPrice = (cp.totalPrice! / 100) * cp.quantity!;

          if (cp.quantity === 0) {
            const newArr = state.cartItems.filter(
              (item: Cart) => item._id !== action.payload.selectedProduct._id
            );

            state.cartItems = [...newArr];
          }
        }
      });
    },
    removeFromCart: (state, action: PayloadAction<string | undefined>) => {
      const newArr = state.cartItems.filter(
        (item: Cart) => item._id !== action.payload
      );

      state.cartItems = [...newArr];
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    calculateSubTotal: (state) => {
      const cartItems = state.cartItems;
      let subTotal = 0;

      cartItems.forEach((element: Cart) => {
        subTotal += (element.totalPrice! / 100) * element.quantity!;
      });

      state.subTotal = subTotal.toFixed(2);
    },
  },
});

export const {
  incrementCart,
  decrementCart,
  removeFromCart,
  clearCart,
  calculateSubTotal,
} = cartSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCart = (state: RootState) => state.cart.cartItems;
export const selectSubTotal = (state: RootState) => state.cart.subTotal;

export default cartSlice.reducer;
