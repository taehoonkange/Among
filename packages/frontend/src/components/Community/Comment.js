import React, { useState, useCallback, useRef } from "react";
import styled from "styled-components";
import thumbsUp from "../../images/thumbs-up.png";
import CommentReplyComp from "./CommentReply";
import up from "../../images/up.png";
import { useDispatch, useSelector } from "react-redux";
import { addReply } from "../../slice/postSlice";
import {
  addReplyServer,
  deleteCommentServer,
  editCommentServer,
} from "../../actions/post";

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

const MycontentWrapper = styled.div`
  display: flex;
  margin-left: 55px;
  margin-bottom: 10px;
`;
const MyComment = styled.input`
  background-color: #f7f7f8;
  border-radius: 23px;
  font-size: 16px;
  box-sizing: border-box;
  border: none;
  flex-grow: 1;
  min-height: 30px;
  padding: 6px 18px;
  caret-color: rgb(95, 60, 250);
  &:focus {
    outline: none;
  }
`;

const MyContentButton = styled.img`
  align-self: center;
  width: 35px;
  height: 35px;
  margin-left: 10px;
  filter: invert(90%) sepia(27%) saturate(0%) hue-rotate(301deg);
`;

const MyContentActiveButton = styled.img`
  align-self: center;
  width: 35px;
  height: 35px;
  margin-left: 10px;
  filter: invert(21%) sepia(66%) saturate(5240%) hue-rotate(249deg);
`;

const EditForm = styled.input`
  border: none;
  font-size: 16px;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;
const Comment = ({ el, id, postid, commentId }) => {
  const userID = useSelector((state) => state.userData.userID);
  console.log(id);
  console.log(commentId);
  const dispatch = useDispatch();
  const dispatcher = useDispatch();
  const [like, setLike] = useState(false);
  const [reply, setReply] = useState(false);
  const [content, setContent] = useState(el.content);
  const [edit, setEdit] = useState(false);
  const [myComment, setMyComment] = useState("");
  const activeComment = useRef(null);
  const editRef = useRef(null);
  const onChangeLike = useCallback(() => {
    setLike((prev) => !prev);
  }, []);

  const onChangeReply = useCallback(() => {
    setReply((prev) => !prev);
  }, []);

  const onChangeMyComment = useCallback((e) => {
    setMyComment(e.target.value);
  }, []);

  const myCommnetSubmit = useCallback(() => {
    // dispatcher(addReply({ value: myComment, index: id }));
    dispatcher(
      addReplyServer({
        postId: postid,
        refId: el.id,
        res: { content: myComment },
      }),
    );
    setMyComment("");
  }, [myComment]);

  const checkReply = (el) => {
    if (!reply && el.Refs.length > 0) return true;
    else return false;
  };

  const onKeydownChat = useCallback(
    (e) => {
      if (e.key === "Enter" && e.keyCode === 13) {
        if (!e.shiftKey) {
          e.preventDefault();
          if (myComment?.trim() !== "") {
            myCommnetSubmit(e);
          }
        }
      }
    },
    [myComment],
  );

  const onKeydownEdit = useCallback(
    (e) => {
      if (e.key === "Enter" && e.keyCode === 13) {
        if (!e.shiftKey) {
          e.preventDefault();
          if (content?.trim() !== "") {
            dispatch(
              editCommentServer({
                CommentId: commentId,
                postId: postid,
                res: { content: content },
              }),
            );
            setEdit(false);
          }
        }
      }
    },
    [content, commentId, postid],
  );

  const onChangeEditContent = useCallback((e) => {
    setContent(e.target.value);
  }, []);
  return (
    <CommentLayout>
      <CommentProfileText>
        {/* <img alt="" src={el.User.profileImage} /> */}
        <img
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jUUXgzZXEr2ae7R7AKA16GP8IkABr-MQTbCmGvI&s"
        />
        <CommentText ref={activeComment}>
          <div>{el.User.nickname}</div>
          {edit ? (
            <EditForm
              ref={editRef}
              onKeyDown={onKeydownEdit}
              value={content}
              onChange={onChangeEditContent}
            />
          ) : (
            <div>{el.content}</div>
          )}
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
        <div onClick={() => setReply(true)}>답글달기</div>
        {userID === id && (
          <>
            {edit ? (
              <div
                onClick={() => {
                  setEdit((prev) => !prev);
                  setContent(el.content);
                }}
                style={{ cursor: "pointer", marginLeft: "9px", color: "red" }}
              >
                취소
              </div>
            ) : (
              <div
                onClick={() => {
                  setEdit((prev) => !prev);
                  setTimeout(() => {
                    editRef.current.focus();
                  }, 300);
                }}
                style={{ marginLeft: "9px" }}
              >
                수정
              </div>
            )}
            {edit ? (
              <>
                <div
                  onClick={() => {
                    if (content.length === 0) {
                      window.alert("댓글을 입력해주세요.");
                    } else {
                      dispatch(
                        editCommentServer({
                          CommentId: commentId,
                          postId: postid,
                          res: { content: content },
                        }),
                      );
                      setEdit(false);
                    }
                  }}
                  style={{ marginLeft: "9px", color: "rgb(95, 60, 250)" }}
                >
                  수정완료
                </div>
                <div style={{ cursor: "initial", marginLeft: "4px" }}>
                  또는 Enter를 눌러주세요.
                </div>
              </>
            ) : (
              <div
                onClick={() => {
                  dispatch(
                    deleteCommentServer({
                      commentId: commentId,
                      postId: postid,
                    }),
                  );
                }}
                style={{ marginLeft: "9px" }}
              >
                삭제
              </div>
            )}
          </>
        )}
      </CommentLikeReply>
      {checkReply(el) && (
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
              postId={postid}
              element={element}
            ></CommentReplyComp>
          );
        })}
      {reply && (
        <MycontentWrapper>
          <MyComment
            value={myComment}
            onChange={onChangeMyComment}
            onKeyDown={onKeydownChat}
            onFocus={() =>
              (activeComment.current.style.background =
                "linear-gradient(90deg, rgb(254, 224, 255) 0%, rgb(218, 235, 255) 100%)")
            }
            onBlur={() => {
              activeComment.current.style.background = "#f7f7f8";
            }}
            placeholder="댓글을 입력하세요."
          />
          {myComment ? (
            <MyContentActiveButton onClick={myCommnetSubmit} src={up} alt="" />
          ) : (
            <MyContentButton src={up} alt="" />
          )}
        </MycontentWrapper>
      )}
    </CommentLayout>
  );
};

export default Comment;
