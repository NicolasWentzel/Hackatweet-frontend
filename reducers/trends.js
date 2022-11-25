import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const trendsSlice = createSlice({
  name: "trends",
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

export const { showModal2, handleCancel2 } = trendsSlice.actions;
export default trendsSlice.reducer;
