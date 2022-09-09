import { createSlice } from "@reduxjs/toolkit";

import {
  getUserDataServer,
  influencerRegister,
  uploadInfluencerImages,
} from "../actions/user";

const initialState = {
  account: "",
  isConnect: false,
  userData: JSON.parse(localStorage.getItem("userAccount")),
  userName: "",
  userProfile: "",
  userID: 0,
  userType: "NORMAL",
  communityId: 0,
  imagePaths: [],
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
        window.localStorage.setItem("userType", `${payload.userType}`);
        state.userName = payload.nickname;
        state.communityId = payload.communityId;
        return state;
      })
      .addCase(getUserDataServer.rejected, (state, action) => {})
      .addCase(uploadInfluencerImages.pending, (state) => {})
      .addCase(uploadInfluencerImages.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.imagePaths = [...state.imagePaths, payload];
        console.log(state.imagePaths);
        return state;
      })
      .addCase(uploadInfluencerImages.rejected, (state, action) => {})
      .addCase(influencerRegister.pending, (state) => {})
      .addCase(influencerRegister.fulfilled, (state, { payload }) => {
        state.userType = payload.userType;
        console.log(payload);
        window.localStorage.setItem("userType", payload.userType);
        return state;
      })
      .addCase(influencerRegister.rejected, (state, action) => {}),
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
