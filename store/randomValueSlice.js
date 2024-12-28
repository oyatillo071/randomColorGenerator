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
      const opacity = getRandomOpacityValue() / 100;

      state.value = `rgba(${r},${g},${b},${opacity})`;
    },
    generateRandomGradient: (state) => {
      const color1 = `rgba(${getRandomValue()},${getRandomValue()},${getRandomValue()},${
        getRandomOpacityValue() / 100
      })`;
      const color2 = `rgba(${getRandomValue()},${getRandomValue()},${getRandomValue()},${
        getRandomOpacityValue() / 100
      })`;
      const color3 = `rgba(${getRandomValue()},${getRandomValue()},${getRandomValue()},${
        getRandomOpacityValue() / 100
      })`;

      state.value = `linear-gradient(90deg, ${color1} 0%, ${color2} 50%, ${color3} 100%)`;
    },
    inputColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { generateRandomValue, inputColor, generateRandomGradient } =
  randomValueSlice.actions;
export default randomValueSlice.reducer;
