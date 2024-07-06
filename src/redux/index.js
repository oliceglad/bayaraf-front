import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

setupListeners(store.dispatch);
