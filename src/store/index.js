import { configureStore } from "@reduxjs/toolkit";
import profile from "./slices/profileSlice";
export default configureStore({
  reducer: {
    profile
  },
});
