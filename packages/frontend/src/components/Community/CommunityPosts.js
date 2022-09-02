import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import CommunityPostInput from "./CommunityPostInput";
import Post from "./Post";
import { loadPosts } from "../../actions/post";
const Layout = styled.div`
  width: 40%;
  padding: 10px;
`;
const CommunityPosts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPosts());
    return () => {};
  }, []);

  const mainPosts = useSelector((state) => state.posts.mainPosts);
  return (
    <Layout>
      <CommunityPostInput></CommunityPostInput>
      {mainPosts.map((post) => {
        return <Post key={post.id} post={post}></Post>;
      })}
    </Layout>
  );
};

export default CommunityPosts;
