import { createSlice } from "@reduxjs/toolkit";

import {
  getTicketResellData,
  patchResellTicket,
  ticketInfo,
  ticketSalesRegistration,
  patchUseTicket,
} from "../actions/ticketResell";

const initialState = {
  ticketDetailInfo: [],
  ticketResellData: [],
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
      .addCase(patchResellTicket.rejected, (state, action) => {})
      .addCase(getTicketResellData.pending, (state) => {})
      .addCase(getTicketResellData.fulfilled, (state, { payload }) => {
        state.ticketResellData = payload;
      })
      .addCase(getTicketResellData.rejected, (state, action) => {})
      .addCase(patchUseTicket.pending, (state) => {})
      .addCase(patchUseTicket.fulfilled, (state, { payload }) => {})
      .addCase(patchUseTicket.rejected, (state, action) => {}),
});

export const {} = ticketResell.actions;
export default ticketResell.reducer;
