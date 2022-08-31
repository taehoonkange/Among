import React from "react";
import styled from "styled-components";
import CommunityPostInput from "./CommunityPostInput";

const Layout = styled.div`
  background-color: yellow;
  width: 40%;
  height: 500px;
  padding: 10px;
`;
const CommunityPost = () => {
  return (
    <Layout>
      <CommunityPostInput></CommunityPostInput>
    </Layout>
  );
};

export default CommunityPost;
