import React, { useEffect, useRef, useState } from "react";
import CommunityCategory from "../../components/Community/CommunityCategory";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import CommunityPost from "../../components/Community/CommunityPosts";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts, testLoadPosts } from "../../actions/post";
import { resetHasMorePosts, setCommunityCategory } from "../../slice/postSlice";
import GetUserData from "../../hooks/GetUserData";
import GetUserStatus from "../../hooks/GetUserStatus";
const Layout = styled.div`
  display: flex;
  justify-content: center;
  overflow: scroll;
  width: 100%;
  height: 100%;
`;

const Community = () => {
  const [id, setID] = useState();
  const navigate = useNavigate();
  const path = useRef(useLocation().pathname);
  const dispatch = useDispatch();

  const testLoadPostsLoading = useSelector(
    (state) => state.posts.testLoadPostsLoading,
  );
  const hasMorePost = useSelector((state) => state.posts.hasMorePost);
  const userRank = useSelector((state) => state.posts.CommunityState);
  const influencerID = useSelector((state) => state.posts.NowCommunityId);

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
    dispatch(setCommunityCategory({ value: "VIP" }));
  }, []);
  GetUserData();
  GetUserStatus(id);

  useEffect(() => {
    return () => {
      console.log("화면이탈");
      dispatch(resetHasMorePosts());
    };
  }, []);

  useEffect(() => {
    if (userRank === "NORMAL") {
      window.alert("VIP만 확인 가능한 피드입니다.");
      navigate(`/Influencer/CommunityFeed/${influencerID}`);
    }
  }, [userRank]);
  return (
    <Layout onScroll={handleScroll}>
      <CommunityCategory></CommunityCategory>
      <CommunityPost CatergoryType="VIP"></CommunityPost>
    </Layout>
  );
};

export default Community;
