import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../stores";
import { ProductType, TotalItemType } from "../../types/ProductType";

export interface CartState {
  cartItems: ProductType[];
  totalItems: TotalItemType[];
  totalPrice: number;
}

const initialState: CartState = {
  cartItems: [],
  totalItems: [],
  totalPrice: 0,
};

export const cartReducer = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      state.cartItems.push(action.payload);
    },
    addTotalItem: (
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) => {
      const { productId, quantity } = action.payload;
      const existingItem = state.totalItems.find(
        (item) => item.id === productId
      );

      if (existingItem) {
        existingItem.qty += quantity;
      } else {
        state.totalItems.push({ id: productId, qty: quantity });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== productId);
      state.totalItems = state.totalItems.filter(
        (item) => item.id !== productId
      );
    },
    reduceTotalItem: (
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) => {
      const { productId, quantity } = action.payload;
      const existingItem = state.totalItems.find(
        (item) => item.id === productId
      );

      if (existingItem) {
        existingItem.qty -= quantity;

        if (existingItem.qty <= 0) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== productId
          );
          state.totalItems = state.totalItems.filter(
            (item) => item.id !== productId
          );
        }
      }
    },
    calculateTotalPrice: (state) => {
      let totalPrice = 0;
      state.cartItems.forEach((cartItem) => {
        const totalItem = state.totalItems.find(
          (item) => item.id === cartItem.id
        );
        if (totalItem) {
          totalPrice += cartItem.price * totalItem.qty;
        }
      });
      state.totalPrice = totalPrice;
    },
  },
});

export const {
  addToCart,
  addTotalItem,
  removeFromCart,
  reduceTotalItem,
  calculateTotalPrice,
} = cartReducer.actions;

export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectTotalItems = (state: RootState) => state.cart.totalItems;

export default cartReducer.reducer;
