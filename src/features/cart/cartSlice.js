import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 20,
  total: 0,
  isLoading: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    remove: (state, action) => {
      const itemID = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemID);
    },
    increase: (state, action) => {
      const itemID = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemID);
      cartItem.amount += 1;
    },
    decrease: (state, action) => {
      const itemID = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemID);
      cartItem.amount -= 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.price * item.amount;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const { clearCart, decrease, increase, remove, calculateTotals } =
  cartSlice.actions;
