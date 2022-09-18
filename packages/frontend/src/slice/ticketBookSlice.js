import { createSlice } from "@reduxjs/toolkit";

import {} from "../actions/user";

import { DecorateTicket, getTicketBook } from "../actions/ticketBook";

const initialState = {
  ticketID: 0,
  ticketBookData: [],
};

const ticketBookSlice = createSlice({
  name: "ticketBook",
  initialState,
  reducers: {
    setTicketID: (state, { payload }) => {
      state.ticketID = payload.value;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(DecorateTicket.pending, (state) => {})
      .addCase(DecorateTicket.fulfilled, (state, { payload }) => {
        state.myPerformance = payload;
      })
      .addCase(DecorateTicket.rejected, (state, action) => {})
      .addCase(getTicketBook.pending, (state) => {})
      .addCase(getTicketBook.fulfilled, (state, { payload }) => {
        state.ticketBookData = payload;
      })
      .addCase(getTicketBook.rejected, (state, action) => {}),
});

export const { setTicketID } = ticketBookSlice.actions;
export default ticketBookSlice.reducer;
