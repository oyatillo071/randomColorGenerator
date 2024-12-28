// store.js
import { configureStore } from "@reduxjs/toolkit";
import randomValueReducer from "./randomValueSlice";
import modeChangeReducer from "./ModeSlice";
import textReducer from "./textStyleSlice.js";
const store = configureStore({
  reducer: {
    randomValue: randomValueReducer,
    mode: modeChangeReducer,
    text: textReducer,
  },
});

export default store;
