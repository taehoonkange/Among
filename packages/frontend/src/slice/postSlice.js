import { createSlice } from "@reduxjs/toolkit";
import {
  loadPosts,
  addPostServer,
  addCommentServer,
  addReplyServer,
  uploadImages,
  uploadEditImages,
  deletePostServer,
  postLikeServer,
  postDeleteLikeServer,
  editPostServer,
  deleteCommentServer,
} from "../actions/post";
const shortid = require("shortid");
const initialState = {
  mainPosts: [
    {
      post: {
        id: 6,
        content: "게시물 내용 입력",
        createdAt: "2022-09-02T11:31:03.000Z",
        updatedAt: "2022-09-02T11:31:03.000Z",
        UserId: 1,
        ImageId: null,
        User: {
          id: 1,
          nickname: "KTH",
        },
        Images: [],
        Comments: [],
        Likers: [],
      },
      likeCount: 0,
    },
    {
      post: {
        id: 5,
        content: "게시물 내용 입력",
        createdAt: "2022-09-02T10:17:35.000Z",
        updatedAt: "2022-09-02T10:17:35.000Z",
        UserId: 1,
        ImageId: null,
        User: {
          id: 1,
          nickname: "KTH",
        },
        Images: [],
        Comments: [],
        Likers: [],
      },
      likeCount: 0,
    },
    {
      post: {
        id: 4,
        content: "게시물 내용 입력",
        createdAt: "2022-09-02T10:17:34.000Z",
        updatedAt: "2022-09-02T10:17:34.000Z",
        UserId: 1,
        ImageId: null,
        User: {
          id: 1,
          nickname: "KTH",
        },
        Images: [],
        Comments: [],
        Likers: [],
      },
      likeCount: 0,
    },
    {
      post: {
        id: 3,
        content: "게시물 내용 입력",
        createdAt: "2022-09-02T10:17:34.000Z",
        updatedAt: "2022-09-02T10:17:34.000Z",
        UserId: 1,
        ImageId: null,
        User: {
          id: 1,
          nickname: "KTH",
        },
        Images: [],
        Comments: [],
        Likers: [],
      },
      likeCount: 0,
    },
    {
      post: {
        id: 2,
        content: "게시물 내용 입력",
        createdAt: "2022-09-02T10:17:33.000Z",
        updatedAt: "2022-09-02T10:17:33.000Z",
        UserId: 1,
        ImageId: null,
        User: {
          id: 1,
          nickname: "KTH",
        },
        Images: [],
        Comments: [],
        Likers: [],
      },
      likeCount: 0,
    },
    {
      post: {
        id: 1,
        content: "게시물 내용 입력",
        createdAt: "2022-09-02T10:17:31.000Z",
        updatedAt: "2022-09-02T10:17:31.000Z",
        UserId: 1,
        ImageId: null,
        User: {
          id: 1,
          nickname: "KTH",
        },
        Images: [],
        Comments: [
          {
            id: 2,
            content: "any",
            inherited: true,
            createdAt: "2022-09-02T11:03:27.000Z",
            updatedAt: "2022-09-02T11:03:27.000Z",
            UserId: 1,
            PostId: 1,
            User: {
              id: 1,
              nickname: "KTH",
            },
            Refs: [],
          },
          {
            id: 1,
            content: "any",
            inherited: false,
            createdAt: "2022-09-02T11:03:05.000Z",
            updatedAt: "2022-09-02T11:03:05.000Z",
            UserId: 1,
            PostId: 1,
            User: {
              id: 1,
              nickname: "KTH",
            },
            Refs: [
              {
                id: 2,
                content: "any",
                inherited: true,
                createdAt: "2022-09-02T11:03:27.000Z",
                updatedAt: "2022-09-02T11:03:27.000Z",
                UserId: 1,
                PostId: 1,
                Ref: {
                  createdAt: "2022-09-02T11:03:27.000Z",
                  updatedAt: "2022-09-02T11:03:27.000Z",
                  CommentId: 1,
                  RefId: 2,
                },
                User: {
                  id: 1,
                  nickname: "KTH",
                },
              },
            ],
          },
        ],
        Likers: [],
      },
      likeCount: 0,
    },
  ],
  imagePaths: [],
  editImagePaths: [],
};
let dummy = {
  post: {
    id: shortid.generate(),
    content: "테스트 게시물",
    createdAt: Date(),
    updatedAt: Date(),
    UserId: 1,
    ImageId: null,
    User: {
      id: 1,
      nickname: "KTH",
    },
    Images: [],
    Comments: [],
    Likers: [],
  },
  likeCount: 0,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, { payload }) => {
      console.log("first");
      // num++;
      let dummyPost = { ...dummy };
      dummyPost.post = { ...dummyPost.post, content: payload.value };
      dummyPost.post.User = {
        ...dummyPost.post.User,
        nickname: payload.userName,
      };
      console.log(payload.userName);
      state = [dummyPost, ...state];
      console.log([dummyPost, ...state]);
      // dummyPost = { ...dummyPost, id: num };
      return state;
    },
    addComment: (state, { payload }) => {
      console.log(payload.id);
      const target = state.findIndex((v) => v.post.id === payload.id);
      console.log(target);
      let OB = {
        id: shortid.generate(),
        content: payload.value,
        inherited: true,
        createdAt: Date(),
        updatedAt: Date(),
        UserId: 1,
        PostId: 1,
        User: {
          id: 1,
          nickname: payload.userName,
        },
        Refs: [],
      };
      // let OB = {
      //   User: {
      //     nickname: "김동영",
      //     profileImage: "https://avatars.githubusercontent.com/u/62373865?v=4",
      //   },
      //   content: payload.value,
      //   Refs: [],
      // };
      state[target].post.Comments = [...state[target].post.Comments, OB];
      return state;
    },
    addReply: (state, { payload }) => {
      // console.log(state.mainPosts);
      // console.log(initialState.mainPosts[0]);
      // console.log(payload.value);
      // console.log(payload.index);
      let OB = {
        User: {
          nickname: "김동영",
          profileImage: "https://avatars.githubusercontent.com/u/62373865?v=4",
        },
        id: 3,
        content: payload.value,
      };
      state.mainPosts[0].Comments[payload.index - 1].Refs = [
        ...state.mainPosts[0].Comments[payload.index - 1].Refs,
        OB,
      ];
    },
    deleteImage: (state, { payload }) => {
      state.imagePaths = state.imagePaths.filter(
        (image) => image[0] !== payload.value[0],
      );
    },
    editPostImage: (state, { payload }) => {
      console.log(payload.value);
      let res = [];
      payload.value.map((v) => res.push(v.src));
      state.editImagePaths = res;
      console.log(state.editImagePaths);
      return state;
    },
    deleteEditImage: (state, { payload }) => {
      state.editImagePaths = state.editImagePaths.filter(
        (image) => image[0] !== payload.value[0],
      );
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(loadPosts.pending, (state) => {
        console.log("pending");
      })
      .addCase(loadPosts.fulfilled, (state, action) => {
        console.log(action.payload);
        console.log("fulfilled");
        state.mainPosts = action.payload;
        return state;
      })
      .addCase(loadPosts.rejected, (state, action) => {})
      .addCase(addPostServer.pending, (state) => {})
      .addCase(addPostServer.fulfilled, (state, action) => {
        state.mainPosts = action.payload;
        state.imagePaths = [];
        return state;
      })
      .addCase(addPostServer.rejected, (state) => {
        console.log("rejected");
      })
      .addCase(addCommentServer.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(addCommentServer.fulfilled, (state, action) => {
        state.mainPosts = action.payload;
        return state;
      })
      .addCase(addCommentServer.rejected, (state, action) => {
        console.log("rejected");
      })
      .addCase(addReplyServer.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(addReplyServer.fulfilled, (state, action) => {
        state.mainPosts = action.payload;
        return state;
      })
      .addCase(addReplyServer.rejected, (state, action) => {})
      .addCase(uploadImages.pending, (state) => {})
      .addCase(uploadImages.fulfilled, (state, action) => {
        // state.uploadImagesLoading = false;
        // state.uploadImagesDone = true;
        state.imagePaths = [...state.imagePaths, action.payload];
      })
      .addCase(uploadImages.rejected, (state, action) => {})
      .addCase(uploadEditImages.pending, (state) => {})
      .addCase(uploadEditImages.fulfilled, (state, action) => {
        state.editImagePaths = [...state.editImagePaths, action.payload];
      })
      .addCase(uploadEditImages.rejected, (state, action) => {})
      .addCase(deletePostServer.pending, (state) => {})
      .addCase(deletePostServer.fulfilled, (state, action) => {
        // state.mainPosts = action.payload;
        // console.log(action.payload);
        // return state;
      })
      .addCase(deletePostServer.rejected, (state) => {})
      .addCase(postLikeServer.pending, (state) => {})
      .addCase(postLikeServer.fulfilled, (state, action) => {
        let test = state.mainPosts.map((el) => {
          console.log(el);
          if (action.payload.post.id === el.post.id) {
            return action.payload;
          }
          return el;
        });
        console.log(test);
        state.mainPosts = test;
        console.log(action.payload);
        console.log(state.mainPosts);
        return state;
      })
      .addCase(postLikeServer.rejected, (state) => {})
      .addCase(postDeleteLikeServer.pending, (state) => {})
      .addCase(postDeleteLikeServer.fulfilled, (state, action) => {
        let test = state.mainPosts.map((el) => {
          console.log(el);
          if (action.payload.post.id === el.post.id) {
            return action.payload;
          }
          return el;
        });
        console.log(test);
        state.mainPosts = test;
        console.log(action.payload);
        console.log(state.mainPosts);
        // return state;
      })
      .addCase(postDeleteLikeServer.rejected, (state) => {})
      .addCase(editPostServer.pending, (state) => {})
      .addCase(editPostServer.fulfilled, (state, action) => {
        let test = state.mainPosts.map((el) => {
          console.log(el);
          if (action.payload.post.id === el.post.id) {
            return action.payload;
          }
          return el;
        });
        state.mainPosts = test;
        state.editImagePaths = [];
        return state;
      })
      .addCase(editPostServer.rejected, (state) => {
        console.log("rejected");
      })
      .addCase(deleteCommentServer.pending, (state) => {})
      .addCase(deleteCommentServer.fulfilled, (state, action) => {
        let test = state.mainPosts.map((el) => {
          console.log(el);
          if (action.payload.post.id === el.post.id) {
            return action.payload;
          }
          return el;
        });
        state.mainPosts = test;
        return state;
      })
      .addCase(deleteCommentServer.rejected, (state) => {
        console.log("rejected");
      }),
});

export const {
  addPost,
  addComment,
  addReply,
  deleteImage,
  editPostImage,
  deleteEditImage,
} = postSlice.actions;
export default postSlice.reducer;
