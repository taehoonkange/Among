import { createSlice } from "@reduxjs/toolkit";

import {} from "../actions/user";

const initialState = {};

const performanceSlice = createSlice({
  name: "performance",
  initialState,
  reducers: {},
  extraReducers: (builder) => builder,
});

export const {} = performanceSlice.actions;
export default performanceSlice.reducer;
