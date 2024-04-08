import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  counter_val: 0,
};

const counter = createSlice({
  name: "counter",
  initialState: INITIAL_STATE,
  reducers: {
    incrementCounter: (state) => {
      state.counter_val = state.counter_val + 1;
    },
    decrementCounter: (state, action) => {
      state.counter_val = state.counter_val - 1;
    },
  },
});

export const { incrementCounter, decrementCounter } = counter.actions;

export default counter.reducer;
