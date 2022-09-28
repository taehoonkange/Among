import axios from "../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { requests } from "../util/requests";

axios.defaults.withCredentials = true; // front, backend 간 쿠키공유

export const performanceUploadImages = createAsyncThunk(
  "post/performanceUploadImages",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const response = await axios.post(requests().performanceImage, data); // POST /post/images
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  },
);

export const uploadImages = createAsyncThunk(
  "post/uploadImages",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("community/images", data); // POST /post/images
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getPerformance = createAsyncThunk(
  "get/performance",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(requests().getPerformance);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const performanceResgister = createAsyncThunk(
  "post/performanceResgister",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      await axios.post(requests().performance, data); // POST /post/images
      const response = thunkAPI.dispatch(getPerformance());
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const performanceSeats = createAsyncThunk(
  "post/performanceSeats",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const response = await axios.post(requests().performanceSeats, data); // POST /post/images
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  },
);

export const getPerformanceDetail = createAsyncThunk(
  "get/getPerformanceDetail",
  async (data, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const response = await axios.get(
        requests(undefined, data).getPerformanceDetail,
      );
      // 공연 1
      let temp = [];
      response.data.Tickets.map((el) => {
        if (el.status === "OWNED") {
          temp.push(el.id);
        } else if (
          el.status === "SALE" &&
          el.OwnerId === state.userData.userID
        ) {
          temp.push(el.id);
        }
      });
      return { res: response.data, ban: temp, userID: state.userData.userID };
    } catch (error) {
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const getSeatsData = createAsyncThunk(
  "get/getSeatsDat",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(requests(undefined, data).getSeatsData);
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  },
);

export const postTicketBuy = createAsyncThunk(
  "post/postTicketBuy",
  async (data, { rejectWithValue }) => {
    console.log(data);
    const newData = {
      seats: data,
    };
    try {
      await axios.post(requests().postTicketBuy, newData);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  },
);

export const getSearchPerformance = createAsyncThunk(
  "get/getSearchPerformance",
  async (data, { rejectWithValue }) => {
    console.log(data);
    try {
      const res = await axios.get(
        requests(undefined, data).getSearchPerformance,
      );
      return res.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  },
);
