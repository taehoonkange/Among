import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CommunityCategory from "../../components/Community/CommunityCategory";
import styled from "styled-components";
import CommunityPost from "../../components/Community/CommunityPosts";
import GetUserData from "../../hooks/GetUserData";
import GetUserStatus from "../../hooks/GetUserStatus";
import { resetHasMorePosts, setCommunityCategory } from "../../slice/postSlice";
import { loadPosts, testLoadPosts } from "../../actions/post";

const Layout = styled.div`
  display: flex;
  justify-content: center;
`;

const Community = () => {
  const [id, setID] = useState();
  const path = useRef(useLocation().pathname);
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
    var regex = /[^0-9]/g; // 숫자가 아닌 문자열을 선택하는 정규식
    var result = path.current.replace(regex, ""); // 원래 문자열에서 숫자가 아닌 모든 문자열을 빈 문자로 변경
    setID(result);
    dispatch(setCommunityCategory({ value: "INFLUENCER" }));
  }, []);

  useEffect(() => {
    return () => {
      console.log("화면이탈");
      dispatch(resetHasMorePosts());
    };
  }, []);

  GetUserData();
  GetUserStatus(id);
  return (
    <Layout>
      <CommunityCategory></CommunityCategory>
      <CommunityPost CatergoryType="INFLUENCER"></CommunityPost>
    </Layout>
  );
};

export default Community;
