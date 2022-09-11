import { createSlice } from "@reduxjs/toolkit";

import { performanceUploadImages } from "../actions/performance";
import { data } from "./data";
const initialState = {
  imagePaths: [],
  seats: data,
};

const performanceSlice = createSlice({
  name: "performance",
  initialState,
  reducers: {
    setSeatsData: (state, { payload }) => {
      state.seats = [
        ...state.seats.slice(0, payload.i),
        payload.value,
        ...state.seats.slice(payload.i + 1),
      ];
      console.log(state.seats);
      return state;
    },
    resetSeatsData: (state) => {
      state.seats = data;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(performanceUploadImages.pending, (state) => {})
      .addCase(performanceUploadImages.fulfilled, (state, action) => {
        state.imagePaths = [...state.imagePaths, action.payload];
        console.log(state.imagePaths);
      })
      .addCase(performanceUploadImages.rejected, (state, action) => {}),
});

export const { setSeatsData, resetSeatsData } = performanceSlice.actions;
export default performanceSlice.reducer;
