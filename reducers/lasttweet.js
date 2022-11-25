import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const lastTweetSlice = createSlice({
  name: "lasttweet",
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

export const { showModal2, handleCancel2 } = lastTweetSlice.actions;
export default lastTweetSlice.reducer;
