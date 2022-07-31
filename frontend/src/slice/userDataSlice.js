import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  account: "",
  isConnect: false,
  userData: JSON.parse(localStorage.getItem("userAccount")),
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData: (state, { payload }) => {
      console.log(payload.value);
      state.userData = payload.value;
    },
    setAccount: (state, { payload }) => {
      state.account = payload.value;
    },
    setIsConnect: (state, { payload }) => {
      state.isConnect = payload.value;
    },
  },
});

export const { setUserData, setAccount, setIsConnect } = userDataSlice.actions;
export default userDataSlice.reducer;
