import { createSlice } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils";

const paginationSlice = createSlice({
  name: "Page",
  initialState: {
    next: "",
    previous: "",
  },
  reducers: {
    changePage: (state, action) => {
      state.next = action.payload.next;
      state.previous = action.payload.previous;
    },
    GoPreviousPage: (state, action) => {
      state.previous = action.payload.previous;
    },
  },
});
export const { GoPreviousPage, GoNextPage, changePage } = paginationSlice.actions;
export default paginationSlice.reducer
