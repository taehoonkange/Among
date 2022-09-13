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
      console.log(response.data);
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
      axios.post(requests().performance, data); // POST /post/images
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
