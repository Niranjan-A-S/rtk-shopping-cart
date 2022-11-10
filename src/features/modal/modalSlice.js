import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = state.isOpen ? false : true;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
