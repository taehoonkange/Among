import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import CommunityPostInput from "./CommunityPostInput";
import Post from "./Post";
import { loadPosts } from "../../actions/post";
import { setUserID } from "../../slice/userDataSlice";
import axios from "../../api";
const Layout = styled.div`
  width: 40%;
  padding: 10px;
`;
const CommunityPosts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPosts());
    async function fetchAndUser() {
      const res = await axios.get("/user");
      dispatch(setUserID({ value: res.data.id }));
    }
    fetchAndUser();
    return () => {};
  }, []);

  const mainPosts = useSelector((state) => state.posts);

  return (
    <Layout>
      <CommunityPostInput></CommunityPostInput>
      {mainPosts.mainPosts.map((post) => {
        return (
          <Post key={post.id} like={post.likeCount} post={post.post}></Post>
        );
      })}
    </Layout>
  );
};

export default CommunityPosts;
