import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../state/menuSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});
