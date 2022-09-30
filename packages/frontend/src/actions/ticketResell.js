import axios from "../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ticketResellRequests } from "../util/ticketResellRequests";

axios.defaults.withCredentials = true; // front, backend 간 쿠키공유

export const ticketSalesRegistration = createAsyncThunk(
  "patch/ticketSalesRegistration",
  async (data, thunkAPI) => {
    console.log(data);
    const dataState = thunkAPI.getState().ticketBook.ticketID;
    try {
      const response = await axios.patch(
        ticketResellRequests().ticketSalesRegistration,
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
