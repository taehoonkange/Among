import axios from "../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ticketBookRequests } from "../util/ticketBookRequests";

axios.defaults.withCredentials = true; // front, backend 간 쿠키공유

export const DecorateTicket = createAsyncThunk(
  "patch/DecorateTicket ",
  async (data, thunkAPI) => {
    console.log(data);
    const dataState = thunkAPI.getState().ticketBook.ticketID;
    try {
      const response = await axios.patch(
        ticketBookRequests(undefined, dataState).decorateTicket,
        { image: data },
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
