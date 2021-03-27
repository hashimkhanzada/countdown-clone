import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NumberLiteralType } from "typescript";
import { AppThunk, RootState } from "../../app/store";

interface CartState {
  cartItems: any;
}

interface Cart {
  _id?: string;
  subCategory?: string;
  decimalPrice?: string;
  mainCategory?: string;
  name?: string;
  originalPrice?: string;
  pricePerSpecificUnit?: string;
  specificUnit?: string;
  totalPrice: number;
  quantity: number;
  calculatedPrice: number;
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementCart: (state, action: PayloadAction<any>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;

      cartItems.forEach((cp: Cart) => {
        if (cp._id === action.payload.selectedProduct._id) {
          cp.quantity += 1;
          cp.calculatedPrice = (cp.totalPrice / 100) * cp.quantity;
          productAlreadyInCart = true;
        }
      });

      if (!productAlreadyInCart) {
        cartItems.push({
          ...action.payload.selectedProduct,
          quantity: 1,
          calculatedPrice: action.payload.selectedProduct.totalPrice / 100,
        });
        state.cartItems = [...cartItems];
      }
    },
    decrementCart: (state, action: PayloadAction<any>) => {
      const cartItems = state.cartItems;

      cartItems.forEach((cp: Cart) => {
        if (cp._id === action.payload.selectedProduct._id) {
          cp.quantity -= 1;
          cp.calculatedPrice = (cp.totalPrice / 100) * cp.quantity;

          if (cp.quantity === 0) {
            const newArr = state.cartItems.filter(
              (item: Cart) => item._id != action.payload.selectedProduct._id
            );

            state.cartItems = [...newArr];
          }
        }
      });
    },
    removeFromCart: (state, action: PayloadAction<any>) => {
      const newArr = state.cartItems.filter(
        (item: Cart) => item._id != action.payload
      );

      state.cartItems = [...newArr];
    },
  },
});

export const {
  incrementCart,
  decrementCart,
  removeFromCart,
} = cartSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCart = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;
