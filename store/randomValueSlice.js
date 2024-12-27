import { createSlice } from "@reduxjs/toolkit";
import getRandomValue, { getRandomOpacityValue } from "./getRandomValue";

const randomValueSlice = createSlice({
  name: "randomValue",
  initialState: { value: "rgba(0,0,0,100%)" },
  reducers: {
    generateRandomValue: (state) => {
      const r = getRandomValue();
      const g = getRandomValue();
      const b = getRandomValue();
      const opacity = getRandomOpacityValue();

      state.value = `rgba(${r},${g},${b},${opacity}%)`;
    },
    inputColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { generateRandomValue, inputColor } = randomValueSlice.actions;
export default randomValueSlice.reducer;
