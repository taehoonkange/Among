import axios from "../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import faker from "faker";
import { requests } from "../util/requests";
import { userRequests } from "../util/userRequests";
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

export const uploadInfluencerImages = createAsyncThunk(
  "post/uploadInfluencerImages",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const response = await axios.post("influencer/image", data); // POST /post/images
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const influencerRegister = createAsyncThunk(
  "post/influencerRegister",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("influencer/register", data); // POST /post/images
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getUserProfileNickname = createAsyncThunk(
  "get/getUserProfileNickname",
  async (data, thunkAPI) => {
    try {
      console.log("getUserProfileNickName");
      const response1 = await axios.get(requests().getUserProfile);
      console.log(response1);
      const response2 = await axios.get(requests().getUserNickName);
      console.log(response2);
      return { profile: response1.data, nickname: response2.data };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

/**
 * 유저의 프로필 사진을 등록하기전에 서버로 post를 시키는 함수
 */
export const postUserProfileImage = createAsyncThunk(
  "post/postUserProfileImage",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      const response = await axios.post(requests().postUserProfileImage, data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

/**
 * 유저의 프로필 사진 이미지의 이름을 서버에 전송하는 함수
 */
export const patchtUserProfileImageName = createAsyncThunk(
  "patch/patchUserProfileImage",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      await axios.patch(requests().patchUserProfileImage, { image: data });
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

/**
 * 유저의 프로필 사진 이미지의 이름을 서버에 전송하는 함수
 */
export const patchUserProfileNickName = createAsyncThunk(
  "patch/patchUserProfileNickName",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      await axios.patch(requests().patchUserProfileNickName, {
        nickname: data,
      });
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const patchSubmitImgAndName = createAsyncThunk(
  "patch/patchSubmitImgAndName",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      await axios.patch(requests().patchUserProfileNickName, {
        nickname: data.nickname,
      });
      await axios.patch(requests().patchUserProfileImage, {
        image: data.imgName,
      });
      return "done";
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const getUserTicket = createAsyncThunk(
  "get/getUserTicket",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(userRequests().getUserTicket);
      return { res: response.data, id: thunkAPI.getState().userData.userID };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
