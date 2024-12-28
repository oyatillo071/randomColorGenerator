import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const userIndex = state.findIndex(
        (user) => user.id === action.payload.id
      );
      if (userIndex !== -1) {
        state[userIndex] = { ...state[userIndex], ...action.payload };
      }
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
