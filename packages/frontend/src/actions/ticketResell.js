import axios from "../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ticketResellRequests } from "../util/ticketResellRequests";

axios.defaults.withCredentials = true; // front, backend 간 쿠키공유

export const ticketSalesRegistration = createAsyncThunk(
  "patch/ticketSalesRegistration",
  async (data, thunkAPI) => {
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

export const ticketInfo = createAsyncThunk(
  "get/ticketInfo",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(
        ticketResellRequests(undefined, data).ticketInfo,
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const patchResellTicket = createAsyncThunk(
  "patch/patchResellTicket",
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch(
        ticketResellRequests(undefined, data).patchResellTicket,
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const getTicketResellData = createAsyncThunk(
  "get/getTicketResellData",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(
        ticketResellRequests().getTicketResellData,
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const patchUseTicket = createAsyncThunk(
  "get/useTicket",
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch(
        ticketResellRequests(undefined, data).ticketSell,
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
