import { createSlice } from "@reduxjs/toolkit";

import { getUserDataServer } from "../actions/user";

const initialState = {
  account: "",
  isConnect: false,
  userData: JSON.parse(localStorage.getItem("userAccount")),
  userName: "",
  userProfile: "",
  userID: 0,
  userType: "NORMAL",
  communityId: 0,
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
    setUserID: (state, { payload }) => {
      state.userID = payload.value;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUserDataServer.pending, (state) => {})
      .addCase(getUserDataServer.fulfilled, (state, { payload }) => {
        state.userID = payload.id;
        state.userType = payload.userType;
        state.userName = payload.nickname;
        state.communityId = payload.communityId;
      })
      .addCase(getUserDataServer.rejected, (state, action) => {}),
});

export const {
  setUserData,
  setAccount,
  setIsConnect,
  setUserName,
  setUserProfile,
  setUserID,
} = userDataSlice.actions;
export default userDataSlice.reducer;
