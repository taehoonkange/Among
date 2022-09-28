import React, { useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteReplyServer, editCommentServer } from "../../actions/post";
import pepe from "../../images/pepe.jpeg";
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

const EditForm = styled.input`
  border: none;
  font-size: 16px;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

const CommentReply = ({ element, commentId, postId }) => {
  const userID = useSelector((state) => state.userData.userID);
  const dispatch = useDispatch();
  const [content, setContent] = useState(element.content);
  const [edit, setEdit] = useState(false);
  const editRef = useRef(null);

  const onKeydownEdit = useCallback(
    (e) => {
      if (e.key === "Enter" && e.keyCode === 13) {
        if (!e.shiftKey) {
          e.preventDefault();
          if (content?.trim() !== "") {
            dispatch(
              editCommentServer({
                CommentId: element.id,
                postId: postId,
                res: { content: content },
              }),
            );
            setEdit(false);
          }
        }
      }
    },
    [content, commentId, postId],
  );

  const onChangeEditContent = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  return (
    <Layout>
      <CommentProfileText>
        {/* <img alt="" src={element.User.profileImage} /> */}
        <img alt={pepe} src="" />
        <CommentText>
          <div>{element.User.nickname}</div>
          {edit ? (
            <EditForm
              ref={editRef}
              onKeyDown={onKeydownEdit}
              value={content}
              onChange={onChangeEditContent}
            />
          ) : (
            <div>{element.content}</div>
          )}
        </CommentText>
      </CommentProfileText>
      {userID === element.User.id && (
        <>
          {edit ? (
            <EditOrDelete
              onClick={() => {
                setEdit((prev) => !prev);
                setContent(element.content);
              }}
              style={{ cursor: "pointer", color: "red" }}
            >
              취소
            </EditOrDelete>
          ) : (
            <EditOrDelete
              onClick={() => {
                setEdit((prev) => !prev);
                setTimeout(() => {
                  editRef.current.focus();
                }, 300);
              }}
              style={{ cursor: "pointer" }}
            >
              수정
            </EditOrDelete>
          )}
          {edit ? (
            <>
              <EditOrDelete
                onClick={() => {
                  if (content.length === 0) {
                    window.alert("댓글을 입력해주세요.");
                  } else {
                    dispatch(
                      editCommentServer({
                        CommentId: element.id,
                        postId: postId,
                        res: { content: content },
                      }),
                    );
                    setEdit(false);
                  }
                }}
                style={{ cursor: "pointer", color: "rgb(95, 60, 250)" }}
              >
                수정완료
              </EditOrDelete>
              <EditOrDelete>또는 Enter를 눌러주세요.</EditOrDelete>
            </>
          ) : (
            <EditOrDelete
              onClick={() => {
                dispatch(
                  deleteReplyServer({
                    refCommentId: element.id,
                    postId: postId,
                  }),
                );
              }}
            >
              삭제
            </EditOrDelete>
          )}
        </>
      )}
    </Layout>
  );
};

export default CommentReply;
