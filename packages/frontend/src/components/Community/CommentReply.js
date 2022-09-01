import React from "react";
import styled from "styled-components";

const CommentProfileText = styled.div`
  margin-left: 55px;
  margin-bottom: 5px;
  display: flex;
  & > img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
`;

const CommentText = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #f7f7f8;
  padding: 5px 10px;
  border-radius: 12px;

  & > div:nth-child(1) {
    font-weight: 700;
    font-size: 14px;
  }
  & > div:nth-child(2) {
    word-break: break-all;
    font-size: 16px;
    font-weight: 400;
  }
`;

const CommentReply = ({ element }) => {
  return (
    <CommentProfileText>
      <img alt="" src={element.User.profileImage} />
      <CommentText>
        <div>{element.User.nickname}</div>
        <div>{element.content}</div>
      </CommentText>
    </CommentProfileText>
  );
};

export default CommentReply;
