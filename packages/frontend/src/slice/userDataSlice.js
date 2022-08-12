import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  account: "",
  isConnect: false,
  userData: JSON.parse(localStorage.getItem("userAccount")),
  userName: "",
  userProfile: "",
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
    setUserName: (state, { payload }) => {
      state.userName = payload.value;
    },
    setUserProfile: (state, { payload }) => {
      state.userProfile = payload.value;
    },
  },
});

export const {
  setUserData,
  setAccount,
  setIsConnect,
  setUserName,
  setUserProfile,
} = userDataSlice.actions;
export default userDataSlice.reducer;
