import { configureStore } from "@reduxjs/toolkit";
import profile from "./slices/profileSlice";
import pages from "./slices/Pagination"
export default configureStore({
  reducer: {
    profile,
    pages
  },
});
