import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "하꼬지할꼬지",
        profileImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jUUXgzZXEr2ae7R7AKA16GP8IkABr-MQTbCmGvI&s",
      },
      createdAt: "2022-08-31T13:00:25.000Z",
      content: "첫 번째 게시글",
      Images: [
        {
          src: "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg",
        },
        {
          src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
            profileImage:
              "https://weverse-phinf.pstatic.net/MjAyMjA4MDRfMTUx/MDAxNjU5NTc1ODMzMzMy.GmmXDzaqn6TjOKbC3iNjvjbA5nn7AZJ2EAnrOIgptpEg.dRkV0DzRqk_kkSfbqkWFoUQ-0dorOh6-8BuGNukOGbMg.PNG/44060680316209887b7ddb13c-89d4-4074-b011-2a4b8a027c75.png?type=s92",
          },
          content: "우와 개정판이 나왔군요~",
        },
        {
          User: {
            nickname: "hero",
            profileImage:
              "https://weverse-phinf.pstatic.net/MjAyMjA4MDRfMTUx/MDAxNjU5NTc1ODMzMzMy.GmmXDzaqn6TjOKbC3iNjvjbA5nn7AZJ2EAnrOIgptpEg.dRkV0DzRqk_kkSfbqkWFoUQ-0dorOh6-8BuGNukOGbMg.PNG/44060680316209887b7ddb13c-89d4-4074-b011-2a4b8a027c75.png?type=s92",
          },
          content: "얼른 사고싶어요~",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};
let num = 2;
let dummyPost = {
  id: num,
  content: "더미데이터입니다.",
  User: {
    id: 1,
    nickname: "김동영",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jUUXgzZXEr2ae7R7AKA16GP8IkABr-MQTbCmGvI&s",
  },
  Images: [],
  Comments: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, { payload }) => {
      console.log("first");
      num++;
      state.mainPosts = [dummyPost, ...state.mainPosts];
      dummyPost = { ...dummyPost, id: num };
    },
  },
});

export const { addPost } = postSlice.actions;
export default postSlice.reducer;
