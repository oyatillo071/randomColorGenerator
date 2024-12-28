import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  family: "serif",
  size: "24px",
  style: "normal",
  weight: 400,
};
const textStyle = createSlice({
  name: "textStyle",
  initialState,
  reducers: {
    update: (state, { payload }) => {
      const { type, value } = payload;
      state[type] = value;
    },
  },
});

export const { update } = textStyle.actions;
export default textStyle.reducer;
