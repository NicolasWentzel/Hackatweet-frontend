import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const signInSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    showModal2: (state, action) => {
      state.value = true;
    },
    handleCancel2: (state, action) => {
      state.value = false;
    },
  },
});

export const { showModal2, handleOk2, handleCancel2 } = signInSlice.actions;
export default signInSlice.reducer;
