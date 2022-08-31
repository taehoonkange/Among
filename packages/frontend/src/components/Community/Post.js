import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
const Layout = styled.div`
  margin-top: 10px;
  padding: 15px;
  background-color: white;
  border: 2px solid #f8f8f8;
  border-radius: 6px;
`;

const Header = styled.div`
  display: flex;
  & > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

const HeaderNameDate = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;

  & > div:nth-child(1) {
    font-weight: 700;
    font-size: 14px;
  }
  & > div:nth-child(2) {
    font-size: 12px;
    margin-top: 5px;
    color: #8e8e8e;
  }
`;
const CommunityPost = ({ post }) => {
  console.log(post);
  // dayjs(c.sendTime).format('YYYY-MM-DD');
  return (
    <Layout>
      <Header>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jUUXgzZXEr2ae7R7AKA16GP8IkABr-MQTbCmGvI&s"
          alt=""
        ></img>
        <HeaderNameDate>
          <div>{post.User.nickname}</div>
          <div>{dayjs(post.createdAt).format("YYYY.MM.DD HH:mm")}</div>
        </HeaderNameDate>
      </Header>
    </Layout>
  );
};

export default CommunityPost;
