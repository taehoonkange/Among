import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import Kdy from "../../images/kdy.jpeg";

const Layout = styled.div`
  box-shadow: -4px 0px 16px 1px rgba(211, 211, 211, 0.21);
  width: 15%;
  height: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const Frame = css`
  margin-top: 30px;
  margin-left: 30px;
`;

const InfluenceName = styled.div`
  ${Frame}
  font-size: 30px;
  font-weight: 700;
`;

const Follower = styled.div`
  font-size: 12px;
  margin-top: 5px;
  margin-left: 30px;
  color: #808080;
`;

const Profile = styled.img`
  margin-left: 30px;
  margin-top: 10px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const Feed = styled(Link)`
  margin-left: 30px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
  color: ${(props) =>
    props.path === `/Influencer/CommunityFeed/${props.id}`
      ? "rgb(95, 60, 250)"
      : "black"};
`;

const VIPFeed = styled(Link)`
  margin-left: 30px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
  color: ${(props) =>
    props.path === `/Influencer/CommunityVIPFeed/${props.id}`
      ? "rgb(95, 60, 250)"
      : "black"};
`;

const Influencer = styled(Link)`
  margin-left: 30px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
  color: ${(props) =>
    props.path === `/Influencer/CommunityInfluencer/${props.id}`
      ? "rgb(95, 60, 250)"
      : "black"};
`;
const CommunityCategory = () => {
  const path = useRef(useLocation().pathname);
  const [id, setID] = useState();
  const influencerDetailData = useSelector(
    (state) => state.posts.influencerDetailData,
  );

  console.log(influencerDetailData);

  useEffect(() => {
    var regex = /[^0-9]/g; // 숫자가 아닌 문자열을 선택하는 정규식
    var result = path.current.replace(regex, ""); // 원래 문자열에서 숫자가 아닌 모든 문자열을 빈 문자로 변경
    console.log(result); // 결과 출력
    setID(result);
  }, []);

  return (
    <Layout>
      <InfluenceName>
        {influencerDetailData.value.Influencer.name}
      </InfluenceName>
      {/* <Follower>193,027 Follower</Follower> */}
      <Profile
        src={`http://localhost:3065/${influencerDetailData.value.Influencer.Image.src}`}
      ></Profile>
      <Feed path={path.current} id={id} to={`/Influencer/CommunityFeed/${id}`}>
        Feed
      </Feed>
      <VIPFeed
        path={path.current}
        id={id}
        to={`/Influencer/CommunityVIPFeed/${id}`}
      >
        VIP Feed
      </VIPFeed>
      <Influencer
        path={path.current}
        id={id}
        to={`/Influencer/CommunityInfluencer/${id}`}
      >
        Influencer
      </Influencer>
    </Layout>
  );
};

export default CommunityCategory;
