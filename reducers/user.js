import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserToStore: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addUserToStore } = usersSlice.actions;
export default usersSlice.reducer;
