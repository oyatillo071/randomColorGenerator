// store.js
import { configureStore } from "@reduxjs/toolkit";
import randomValueReducer from "./randomValueSlice";
import modeChangeReducer from "./ModeSlice";
import textReducer from "./textStyleSlice.js";
import userReducer from "./userSlice";
const store = configureStore({
  reducer: {
    randomValue: randomValueReducer,
    mode: modeChangeReducer,
    text: textReducer,
    users: userReducer,
  },
});

export default store;
