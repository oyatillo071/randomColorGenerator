// store.js
import { configureStore } from "@reduxjs/toolkit";
import randomValueReducer from "./randomValueSlice";
import modeChangeReducer from "./ModeSlice";
const store = configureStore({
  reducer: {
    randomValue: randomValueReducer,
    mode: modeChangeReducer,
  },
});

export default store;
