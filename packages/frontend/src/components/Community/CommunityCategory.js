import React, { useRef } from "react";
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
  font-weight: 600;
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
    props.path === "/CommunityFeed" ? "rgb(95, 60, 250)" : "black"};
`;

const Influencer = styled(Link)`
  margin-left: 30px;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
  color: ${(props) =>
    props.path === "/CommunityFeed" ? "black" : "rgb(95, 60, 250)"};
`;
const CommunityCategory = () => {
  const path = useRef(useLocation().pathname);
  console.log(path.current);
  return (
    <Layout>
      <InfluenceName>PONY</InfluenceName>
      <Follower>193,027 Follower</Follower>
      <Profile src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrdjtR1sgogr2JkoOOTybl4feZyZbdIZDb9JoT-wgH&s"></Profile>
      <Feed path={path.current} to="/CommunityFeed">
        Feed
      </Feed>
      <Influencer path={path.current} to="/CommunityInfluencer">
        Influencer
      </Influencer>
    </Layout>
  );
};

export default CommunityCategory;
