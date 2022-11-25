import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const tweetSlice = createSlice({
  name: "tweet",
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

export const { showModal2, handleCancel2 } = tweetSlice.actions;
export default tweetSlice.reducer;
