import React from "react";
import styled from "styled-components";
import TextArea from "./TextArea";

const Layout = styled.div`
  padding: 15px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  border-radius: 6px;
`;

const Title = styled.div``;
const CommunityInput = styled.textarea``;
const CommunityPostInput = () => {
  return (
    <Layout>
      <Title>포스트 쓰기</Title>
      <TextArea></TextArea>
    </Layout>
  );
};

export default CommunityPostInput;
