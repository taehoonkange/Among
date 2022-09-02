import axios from "../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { backendUrl } from "../config/config";
// import userSlice from "../reducers/user";

// axios.defaults.baseURL = backendUrl;
// axios.defaults.withCredentials = true; // front, backend 간 쿠키공유
export const loadPosts = createAsyncThunk(
  "post/loadPosts",
  async (data, thunkAPI) => {
    const response = await axios.get(`community/posts/lastId=${10}`);
    return response.data;
  },
);
