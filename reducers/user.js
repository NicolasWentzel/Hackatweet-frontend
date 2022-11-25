import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { token: null, username: null },
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
    },
    logout: (state) => {
      state.value.token = null;
      state.value.username = null;},

    addUserToStore: (state, action) => {
      state.value.push(action.payload);
    },
    
  },
});

export const { addUserToStore, login, logout } = usersSlice.actions;
export default usersSlice.reducer;
