import { createSlice } from "@reduxjs/toolkit";
import { getPerformance } from "../actions/performance";

import {
  getUserDataServer,
  getUserProfileNickname,
  influencerRegister,
  postUserProfileImage,
  uploadInfluencerImages,
  patchtUserProfileImageName,
  patchUserProfileNickName,
  patchSubmitImgAndName,
  getUserTicket,
  getMyPerformance,
} from "../actions/user";

const initialState = {
  account: "",
  isConnect: false,
  userData: JSON.parse(localStorage.getItem("userAccount")),
  userID: 0,
  userType: "NORMAL",
  communityId: 0,
  imagePaths: [],
  getuserProfileLoading: false,
  getuserProfileDone: false,
  getuserProfileError: null,
  userProfile: "",
  userProfileName: "",
  userName: "",
  userTicketData: [],
  myPageMyTicket: [],
  myPerformance: [],
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData: (state, { payload }) => {
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
    doneGetuserProfileLoading: (state, { payload }) => {
      state.getuserProfileLoading = true;
    },
    /**
      ticket의 ID를 저장한다.
     */
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUserProfileNickname.pending, (state) => {
        state.getuserProfileLoading = true;
      })
      .addCase(getUserProfileNickname.fulfilled, (state, { payload }) => {
        state.getuserProfileDone = true;
        state.userProfile = payload.profile;
        state.userName = payload.nickname.nickname;
      })
      .addCase(getUserProfileNickname.rejected, (state, action) => {
        state.getuserProfileLoading = false;
        state.getuserProfileError = true;
      })
      .addCase(postUserProfileImage.pending, (state) => {})
      .addCase(postUserProfileImage.fulfilled, (state, { payload }) => {
        state.userProfileName = payload;
      })
      .addCase(postUserProfileImage.rejected, (state, action) => {})
      .addCase(patchtUserProfileImageName.pending, (state) => {})
      .addCase(patchtUserProfileImageName.fulfilled, (state, { payload }) => {})
      .addCase(patchtUserProfileImageName.rejected, (state, action) => {})
      .addCase(patchUserProfileNickName.pending, (state) => {})
      .addCase(patchUserProfileNickName.fulfilled, (state, { payload }) => {})
      .addCase(patchUserProfileNickName.rejected, (state, action) => {})
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
        state.imagePaths = [...state.imagePaths, payload];
        return state;
      })
      .addCase(uploadInfluencerImages.rejected, (state, action) => {})
      .addCase(influencerRegister.pending, (state) => {})
      .addCase(influencerRegister.fulfilled, (state, { payload }) => {
        state.userType = payload.userType;
        window.localStorage.setItem("userType", payload.userType);
        return state;
      })
      .addCase(influencerRegister.rejected, (state, action) => {})
      .addCase(patchSubmitImgAndName.pending, (state) => {})
      .addCase(patchSubmitImgAndName.fulfilled, (state, { payload }) => {})
      .addCase(patchSubmitImgAndName.rejected, (state, action) => {})
      .addCase(getUserTicket.pending, (state) => {})
      .addCase(getUserTicket.fulfilled, (state, { payload }) => {
        state.userTicketData = payload.res;
        let tempArray = [];
        let temp;
        payload.res.Owned.map((el) => {
          switch (el.status) {
            case "USED":
              temp = { ...el, ticketType: "사용됨" };
              tempArray = [...tempArray, temp];
              break;
            case "OWNED":
              temp = { ...el, ticketType: "보유중" };
              tempArray = [...tempArray, temp];
              break;
            case "SALE":
              if (el.Creates[0].id !== payload.id) {
                let temp = { ...el, ticketType: "리셀중" };
                tempArray = [...tempArray, temp];
              }
              break;
            default:
              break;
          }
          // tempArray.sort((a, b) => {
          //   return new Date(a.day) - new Date(b.day);
          // });
          state.myPageMyTicket = tempArray;
        });
        return state;
      })
      .addCase(getUserTicket.rejected, (state, action) => {})
      .addCase(getMyPerformance.pending, (state) => {})
      .addCase(getMyPerformance.fulfilled, (state, { payload }) => {
        state.myPerformance = payload;
      })
      .addCase(getMyPerformance.rejected, (state, action) => {}),
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
