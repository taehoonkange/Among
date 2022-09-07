import React, { useEffect } from "react";
import CommunityCategory from "../../components/Community/CommunityCategory";
import styled from "styled-components";
import CommunityPost from "../../components/Community/CommunityPosts";
import "./test.css";
import { useDispatch, useSelector } from "react-redux";
import { testLoadPosts } from "../../actions/post";
import { resetHasMorePosts } from "../../slice/postSlice";
const Layout = styled.div`
  display: flex;
  justify-content: center;
  overflow: scroll;
  width: 100%;
  height: 100%;
`;

const Community = () => {
  const dispatch = useDispatch();
  const testLoadPostsLoading = useSelector(
    (state) => state.posts.testLoadPostsLoading,
  );
  const hasMorePost = useSelector((state) => state.posts.hasMorePost);
  const handleScroll = (event) => {
    console.log("scrollTop: ", event.currentTarget.scrollTop);
    console.log("clientHeight: ", event.currentTarget.clientHeight);
    console.log("scrollHeight:", event.currentTarget.scrollHeight);
    if (
      event.currentTarget.scrollTop + 0.5 + event.currentTarget.clientHeight >
      event.currentTarget.scrollHeight - 300
    ) {
      if (hasMorePost && !testLoadPostsLoading) dispatch(testLoadPosts());
    }
  };

  useEffect(() => {
    return () => {
      console.log("화면이탈");
      dispatch(resetHasMorePosts());
    };
  }, []);

  return (
    <Layout style={{}} onScroll={handleScroll}>
      <CommunityCategory></CommunityCategory>
      <CommunityPost></CommunityPost>
    </Layout>
  );
};

export default Community;
