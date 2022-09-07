import axios from "../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import faker from "faker";
const shortid = require("shortid");

axios.defaults.withCredentials = true; // front, backend 간 쿠키공유

export const getUserDataServer = createAsyncThunk(
  "get/getUserDataServer",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(`/user`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
