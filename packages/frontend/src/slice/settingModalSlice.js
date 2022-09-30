import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  reSellModalOpen: false,
};

const settingModalSlice = createSlice({
  name: "open",
  initialState,
  reducers: {
    setOpen: (state, { payload }) => {
      state.open = payload.value;
    },
    setReSellModalOpen: (state, { payload }) => {
      state.reSellModalOpen = payload.value;
    },
  },
});

export const { setOpen, setReSellModalOpen } = settingModalSlice.actions;
export default settingModalSlice.reducer;
