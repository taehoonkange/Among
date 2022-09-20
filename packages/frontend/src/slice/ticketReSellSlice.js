import { createSlice } from "@reduxjs/toolkit";

import {
  patchResellTicket,
  ticketInfo,
  ticketSalesRegistration,
} from "../actions/ticketResell";

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
      .addCase(ticketInfo.rejected, (state, action) => {})
      .addCase(patchResellTicket.pending, (state) => {})
      .addCase(patchResellTicket.fulfilled, (state, { payload }) => {})
      .addCase(patchResellTicket.rejected, (state, action) => {}),
});

export const {} = ticketResell.actions;
export default ticketResell.reducer;
