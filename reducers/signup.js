import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const signUpSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.value = true;
    },
    handleCancel: (state, action) => {
      state.value = false;
    },
  },
});

export const { showModal, handleOk, handleCancel } = signUpSlice.actions;
export default signUpSlice.reducer;
