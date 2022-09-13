import { createSlice } from "@reduxjs/toolkit";

import {
  performanceUploadImages,
  uploadImages,
  performanceResgister,
  performanceSeats,
  getPerformance,
} from "../actions/performance";
import { data } from "./data";

const initialState = {
  imagePaths: [],
  seats: data,
  ticketSeats: [],
  performance: [],
};

const performanceSlice = createSlice({
  name: "performance",
  initialState,
  reducers: {
    resetImagePaths: (state, { payload }) => {
      state.imagePaths = [];
    },
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
    setTicketSeats: (state, { payload }) => {
      state.ticketSeats = [...state.ticketSeats, payload.value];
    },
    resetTicketSeats: (state, { payload }) => {
      state.ticketSeats = [];
    },
    setTicketSeatsMinus: (state, { payload }) => {
      state.ticketSeats = state.ticketSeats.filter(
        (seat) => seat.number !== payload.i,
      );
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(performanceUploadImages.pending, (state) => {})
      .addCase(performanceUploadImages.fulfilled, (state, action) => {
        state.imagePaths = [...state.imagePaths, action.payload];
        console.log(state.imagePaths);
      })
      .addCase(performanceUploadImages.rejected, (state, action) => {})
      .addCase(uploadImages.pending, (state) => {})
      .addCase(uploadImages.fulfilled, (state, action) => {
        // state.uploadImagesLoading = false;
        // state.uploadImagesDone = true;
        state.imagePaths = [...state.imagePaths, action.payload];
      })
      .addCase(uploadImages.rejected, (state, action) => {})
      .addCase(performanceResgister.pending, (state) => {})
      .addCase(performanceResgister.fulfilled, (state, action) => {
        state.performance = action.payload;
        return state;
      })
      .addCase(performanceResgister.rejected, (state, action) => {
        throw new Error("기분나쁜일이 생겼어요");
      })
      .addCase(performanceSeats.pending, (state) => {})
      .addCase(performanceSeats.fulfilled, (state, action) => {})
      .addCase(performanceSeats.rejected, (state, action) => {})
      .addCase(getPerformance.pending, (state) => {})
      .addCase(getPerformance.fulfilled, (state, action) => {
        state.performance = action.payload;
      })
      .addCase(getPerformance.rejected, (state, action) => {}),
});

export const {
  setSeatsData,
  resetSeatsData,
  setTicketSeats,
  setTicketSeatsMinus,
  resetTicketSeats,
  resetImagePaths,
} = performanceSlice.actions;
export default performanceSlice.reducer;
