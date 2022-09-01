import React, { useState, useCallback } from "react";
import styled from "styled-components";
import thumbsUp from "../../images/thumbs-up.png";
import CommentReplyComp from "./CommentReply";
const CommentLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 5px;
`;

const CommentProfileText = styled.div`
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

const CommentLikeReply = styled.div`
  display: flex;
  margin-left: 55px;
  margin-top: 5px;
  margin-bottom: 6px;
  color: #65676b;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  & > div:nth-child(2) {
    margin-left: 10px;
  }
`;

const ThumbsUp = styled.div`
  display: flex;
  position: absolute;
  width: 30px;
  height: 18px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 10px;
  top: calc(100% - 12px);
  left: calc(100% - 26px);
  background-color: white;
  & > img {
    width: 16px;
    height: 16px;
  }
  & > div {
    font-size: 14px;
    margin-left: 3px;
    color: #65676b;
  }
`;

const Reply = styled.div`
  display: flex;
  margin-left: 55px;
  margin-bottom: 5px;
  & > div {
    font-size: 14px;
    color: black;
  }
  cursor: pointer;
`;
const ReplyIcon = styled.div`
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/WCLDxem1RXp.png);
  background-position: 0px -650px;
  background-size: 25px 719px;
  width: 16px;
  height: 16px;
  margin-top: 2px;
  margin-right: 6px;
  background-repeat: no-repeat;
  display: inline-block;
  /* filter: invert(41%) sepia(5%) saturate(326%) hue-rotate(182deg); */
`;
const Comment = ({ el }) => {
  console.log(el.Refs);
  const [like, setLike] = useState(false);
  const [reply, setReply] = useState(false);
  const onChangeLike = useCallback(() => {
    setLike((prev) => !prev);
  }, []);

  const onChangeReply = useCallback(() => {
    setReply((prev) => !prev);
  }, []);
  return (
    <CommentLayout>
      <CommentProfileText>
        <img alt="" src={el.User.profileImage} />
        <CommentText>
          <div>{el.User.nickname}</div>
          <div>{el.content}</div>
          {like && (
            <ThumbsUp>
              <img src={thumbsUp} alt="" />
              <div>1</div>
            </ThumbsUp>
          )}
        </CommentText>
      </CommentProfileText>
      <CommentLikeReply>
        <div
          onClick={onChangeLike}
          style={{ color: like && "rgb(95, 60, 250)" }}
        >
          좋아요
        </div>
        <div>답글달기</div>
      </CommentLikeReply>
      {!reply && (
        <Reply>
          <ReplyIcon></ReplyIcon>
          <div onClick={onChangeReply}>답글 {el.Refs.length}개</div>
        </Reply>
      )}

      {reply &&
        el.Refs.map((element) => {
          return (
            <CommentReplyComp
              key={element.id}
              element={element}
            ></CommentReplyComp>
          );
        })}
    </CommentLayout>
  );
};

export default Comment;
