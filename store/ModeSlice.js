import { createSlice } from "@reduxjs/toolkit";
const initialState = "light";
const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    modeChange: (state) => (state == "light" ? "dark" : "light"),
  },
});

export const { modeChange } = modeSlice.actions;
export default modeSlice.reducer;
