import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  notifications: 8,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
  },
});

export const { getUser, setNotifications } = userSlice.actions;

export default userSlice.reducer;
