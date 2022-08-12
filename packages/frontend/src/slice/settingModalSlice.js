import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const settingModalSlice = createSlice({
  name: "open",
  initialState,
  reducers: {
    setOpen: (state, { payload }) => {
      state.open = payload.value;
    },
  },
});

export const { setOpen } = settingModalSlice.actions;
export default settingModalSlice.reducer;
