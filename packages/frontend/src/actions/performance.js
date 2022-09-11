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
