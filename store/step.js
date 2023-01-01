import { createSlice } from "@reduxjs/toolkit";

const initialStep = {
  stepNumber: 1,
};

const stepSlice = createSlice({
  name: "steps",
  initialState: initialStep,
  reducers: {
    increment(state) {
      state.stepNumber++;
      if (state.stepNumber > 4) state.stepNumber = 1;
    },
    decrement(state) {
      state.stepNumber--;
      if (state.stepNumber < 1) state.stepNumber = 1;
    },
  },
});

export const stepActions = stepSlice.actions;

export default stepSlice.reducer;
