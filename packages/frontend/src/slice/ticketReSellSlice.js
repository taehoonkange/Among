import { createSlice } from "@reduxjs/toolkit";

import { ticketSalesRegistration } from "../actions/ticketResell";

const initialState = {};

const ticketResell = createSlice({
  name: "ticketResell",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(ticketSalesRegistration.pending, (state) => {})
      .addCase(ticketSalesRegistration.fulfilled, (state, { payload }) => {})
      .addCase(ticketSalesRegistration.rejected, (state, action) => {}),
});

export const {} = ticketResell.actions;
export default ticketResell.reducer;
