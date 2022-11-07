import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./features/navSlice";

export default configureStore({
  reducer: {
    nav: navReducer,
  },
});
