import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"; // Import your reducer

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add reducers here
  },
});
