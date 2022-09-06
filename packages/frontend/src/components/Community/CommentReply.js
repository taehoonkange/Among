import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteReplyServer } from "../../actions/post";

const Layout = styled.div`
  display: flex;
`;
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

const EditOrDelete = styled.div`
  align-self: flex-end;
  margin-bottom: 10px;
  margin-left: 5px;
  color: #65676b;
  font-weight: 700;
  font-size: 12px;
`;
const CommentReply = ({ element, postId }) => {
  console.log(element);
  const userID = useSelector((state) => state.userData.userID);
  const dispatch = useDispatch();
  return (
    <Layout>
      <CommentProfileText>
        {/* <img alt="" src={element.User.profileImage} /> */}
        <img
          alt=""
          src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jUUXgzZXEr2ae7R7AKA16GP8IkABr-MQTbCmGvI&s"
        />
        <CommentText>
          <div>{element.User.nickname}</div>
          <div>{element.content}</div>
        </CommentText>
      </CommentProfileText>
      {userID === element.User.id && (
        <>
          <EditOrDelete>수정</EditOrDelete>
          <EditOrDelete
            onClick={() => {
              dispatch(
                deleteReplyServer({ refCommentId: element.id, postId: postId }),
              );
            }}
          >
            삭제
          </EditOrDelete>
        </>
      )}
    </Layout>
  );
};

export default CommentReply;
