import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NumberLiteralType } from "typescript";
import { AppThunk, RootState } from "../../app/store";

interface CartState {
  products: any;
  cartItems: any;
  currentItem: any;
}

interface Cart {
  _id?: string;
  subCategory?: string;
  claims?: string;
  decimalPrice?: string;
  image?: string;
  ingredients?: string;
  isOnSale?: boolean;
  madeIn?: string;
  mainCategory?: string;
  name?: string;
  originalPrice?: string;
  pricePerSpecificUnit?: string;
  saleType?: [string];
  specificUnit?: string;
  totalPrice?: number;
  weight?: number;
  weightUnit?: string;
  quantity: number;
}

const initialState: CartState = {
  products: [],
  cartItems: [],
  currentItem: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<any>) => {
      state.products = [...action.payload];
    },
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
          productAlreadyInCart = true;
        }
      });

      if (!productAlreadyInCart) {
        cartItems.push({
          ...action.payload.selectedProduct,
          quantity: parseInt(action.payload.count),
        });
        state.cartItems = [...cartItems];
      }
    },
    decrementCart: (state, action: PayloadAction<any>) => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;

      cartItems.forEach((cp: Cart) => {
        if (cp._id === action.payload.selectedProduct._id) {
          cp.quantity -= 1;
          productAlreadyInCart = true;
        }
      });

      if (!productAlreadyInCart) {
        cartItems.push({
          ...action.payload.selectedProduct,
          quantity: parseInt(action.payload.count),
        });
        state.cartItems = [...cartItems];
      }
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    addToCartByAmount: (state, action: PayloadAction<any>) => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;

      cartItems.forEach((cp: Cart) => {
        if (cp._id === action.payload.selectedProduct._id) {
          cp.quantity = cp.quantity + parseInt(action.payload.count, 10);
          productAlreadyInCart = true;
        }
      });

      if (!productAlreadyInCart) {
        cartItems.push({
          ...action.payload.selectedProduct,
          quantity: parseInt(action.payload.count),
        });
        state.cartItems = [...cartItems];
      }
    },
    changeCartCount: (state, action: PayloadAction<any>) => {
      let cartItems = state.cartItems;
      let productAlreadyInCart = false;

      cartItems.forEach((cp: Cart) => {
        if (cp._id === action.payload.selectedProduct._id) {
          cp.quantity = parseInt(action.payload.count, 10);
          productAlreadyInCart = true;
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
  addProducts,
  incrementCart,
  decrementCart,
  addToCartByAmount,
  changeCartCount,
  removeFromCart,
} = cartSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount: number): AppThunk => (dispatch) => {
  setTimeout(() => {
    dispatch(addToCartByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCart = (state: RootState) => state.cart.cartItems;

export default cartSlice.reducer;
