import axios from "../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import faker from "faker";
import { requests } from "../util/requests";
const shortid = require("shortid");

// import { backendUrl } from "../config/config";
// import userSlice from "../reducers/user";

// axios.defaults.baseURL = backendUrl;
axios.defaults.withCredentials = true; // front, backend 간 쿠키공유

export const testLoadPosts = createAsyncThunk(
  "post/testLoadPosts",
  async (data, thunkAPI) => {
    setTimeout(() => {}, 1000);
    return;
  },
);

export const loadPosts = createAsyncThunk(
  "get/loadPosts",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const response = await axios.get(requests(state).getPosts);
    console.log(response.data);
    return response.data;
  },
);

export const addPostServer = createAsyncThunk(
  "post/addPostServer",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      await axios.post(requests(state).setPost, data);
      // thunkAPI.dispatch(userSlice.actions.addPostToMe(response.data.id));
      const response2 = await axios.get(requests(state).getPosts);
      return response2.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const addCommentServer = createAsyncThunk(
  "post/addCommentServer",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      await axios.post(requests(undefined, data).setComment, data.res);
      const response2 = await axios.get(requests(state).getPosts);
      return response2.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const addReplyServer = createAsyncThunk(
  "post/addReplyServer",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      await axios.post(requests(state, data).setReply, data.res);
      const response = await axios.get(requests(state).getPosts);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const uploadImages = createAsyncThunk(
  "post/uploadImages",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("community/images", data); // POST /post/images
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const uploadEditImages = createAsyncThunk(
  "post/uploadEditImages",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("community/images", data); // POST /post/images
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const editPostServer = createAsyncThunk(
  "patch/editPostServer",
  async (data, thunkAPI) => {
    try {
      console.log(data);
      await axios.patch(`community/post/${data.postId}`, data.formData);
      // thunkAPI.dispatch(userSlice.actions.addPostToMe(response.data.id));
      const response2 = await axios.get(
        requests(undefined, data).getPostDetail,
      );
      return response2.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const deletePostServer = createAsyncThunk(
  "delete/deletePostServer",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    try {
      await axios.delete(`/community/${data.id}`);
      const response2 = await axios.get(requests(state).getPosts);
      return response2.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const postLikeServer = createAsyncThunk(
  "patch/postLikeServer",
  async (data, thunkAPI) => {
    try {
      await axios.patch(`/community/${data.postId}/like`);
      const response2 = await axios.get(
        requests(undefined, data).getPostDetail,
      );
      return response2.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const postDeleteLikeServer = createAsyncThunk(
  "delete/postDeleteLikeServer",
  async (data, thunkAPI) => {
    try {
      await axios.delete(`/community/${data.postId}/like`);
      const response2 = await axios.get(
        requests(undefined, data).getPostDetail,
      );
      return response2.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const deleteCommentServer = createAsyncThunk(
  "delete/deleteCommentServer",
  async (data, thunkAPI) => {
    try {
      await axios.delete(`/community/comment/${data.commentId}`);
      const response2 = await axios.get(
        requests(undefined, data).getPostDetail,
      );
      return response2.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const deleteReplyServer = createAsyncThunk(
  "delete/deleteReplyServer",
  async (data, thunkAPI) => {
    try {
      await axios.delete(`/community/comment/${data.refCommentId}`);
      const response2 = await axios.get(
        requests(undefined, data).getPostDetail,
      );
      return response2.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const generateDummyPost = (number) =>
  Array(20)
    .fill()
    .map((v, i) => ({
      post: {
        id: shortid.generate(),
        User: {
          id: shortid.generate(),
          nickname: faker.name.findName(),
        },
        content: faker.lorem.paragraph(),
        createdAt: "2022-09-02T11:31:03.000Z",
        updatedAt: "2022-09-02T11:31:03.000Z",
        UserId: 1,
        ImageId: null,
        Images: [
          {
            id: 13,
            src: "quality_1662442834830.png",
          },
          {
            id: 14,
            src: "up-arrow_1662442844825.png",
          },
          {
            id: 15,
            src: "adad_1662442848028.png",
          },
        ],
        Comments: [
          {
            id: 2,
            content: faker.lorem.sentence(),
            inherited: true,
            createdAt: "2022-09-02T11:03:27.000Z",
            updatedAt: "2022-09-02T11:03:27.000Z",
            UserId: 1,
            PostId: 1,
            User: {
              id: shortid.generate(),
              nickname: faker.name.findName(),
            },
            Refs: [],
          },
        ],
        Likers: [],
      },
      likeCount: 0,
    }));

export const editCommentServer = createAsyncThunk(
  "patch/editCommentServer",
  async (data, thunkAPI) => {
    try {
      await axios.patch(`/community/comment/${data.CommentId}`, data.res);
      const response2 = await axios.get(
        requests(undefined, data).getPostDetail,
      );
      return response2.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const InfluencerSearch = createAsyncThunk(
  "get/InfluencerSearch ",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(`/influencer/search`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);

export const CommnunityCheckStatus = createAsyncThunk(
  "get/CommnunityCheckStatus ",
  async (data, thunkAPI) => {
    console.log(data);
    try {
      const response = await axios.get(
        `/community/${data.communityId}/checkStatus`,
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
