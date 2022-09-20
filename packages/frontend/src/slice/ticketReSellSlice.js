import { createSlice } from "@reduxjs/toolkit";

import { ticketInfo, ticketSalesRegistration } from "../actions/ticketResell";

const initialState = {
  ticketDetailInfo: [],
};

const ticketResell = createSlice({
  name: "ticketResell",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(ticketSalesRegistration.pending, (state) => {})
      .addCase(ticketSalesRegistration.fulfilled, (state, { payload }) => {})
      .addCase(ticketSalesRegistration.rejected, (state, action) => {})
      .addCase(ticketInfo.pending, (state) => {})
      .addCase(ticketInfo.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.ticketDetailInfo = payload;
      })
      .addCase(ticketInfo.rejected, (state, action) => {
        console.log("에러난다");
      }),
});

export const {} = ticketResell.actions;
export default ticketResell.reducer;
