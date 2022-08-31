import React from "react";
import CommunityCategory from "../../components/Community/CommunityCategory";
import styled from "styled-components";
import CommunityPost from "../../components/Community/CommunityPost";

const Layout = styled.div`
  display: flex;
  justify-content: center;
`;

const Community = () => {
  return (
    <Layout>
      <CommunityCategory></CommunityCategory>
      <CommunityPost></CommunityPost>
    </Layout>
  );
};

export default Community;
