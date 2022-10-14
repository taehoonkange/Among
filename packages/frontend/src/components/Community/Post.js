import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import "./heart.css";
import commentImg from "../../images/comment.png";
import editImage from "../../images/edit.png";
import deleteImage from "../../images/delete.png";
import commentActiveImg from "../../images/commentActive.png";
import up from "../../images/up.png";
import { useDispatch, useSelector } from "react-redux";
import CommentComp from "./Comment";
import ImageZoom from "./ImagesZoom/index";
import { addComment, editPostImage } from "../../slice/postSlice";
import moza1 from "../../images/moza1.png";
import btss from "../../images/pororo.jpeg";
import {
  addCommentServer,
  deletePostServer,
  postDeleteLikeServer,
  postLikeServer,
} from "../../actions/post";
import TextArea from "./TextArea";
import CommunityPostInput from "./CommunityPostInput";
import CommunityEditPostInput from "./CommunityEditPostInput";
import ConfirmModal from "../ConfirmModal";
const Layout = styled.div`
  position: relative;
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

const Body = styled.div`
  margin-top: 10px;
`;

const ImageWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 20px;
`;

const BodyImage = styled.img`
  width: calc(50% - 10px);
  object-fit: cover;
`;

const ExtraImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #8e8e8e;
  cursor: pointer;
  width: calc(50% - 10px);
  & > div:nth-child(1) {
    font-size: 30px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;
const Line = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  border-bottom: 2px solid #f8f8f8;
`;

const LikeAndComment = styled.div`
  display: flex;
  color: #8e8e8e;
  font-size: 12px;
  padding-left: 10px;
`;

const Like = styled.div`
  display: flex;
`;

const Comment = styled.div`
  display: flex;
  margin-left: 20px;
  cursor: pointer;
`;

const CommentImg = styled.img`
  width: 14px;
  margin-right: 5px;
  height: 14px;
  ${(props) =>
    props.comment
      ? null
      : "filter: invert(56%) sepia(0%) saturate(15%) hue-rotate(206deg);"}
`;

const EditImg = styled.img`
  width: 14px;
  cursor: pointer;
  margin-left: 20px;
  height: 14px;
  ${(props) =>
    props.edit
      ? "filter: invert(20%) sepia(72%) saturate(5364%) hue-rotate(249deg);"
      : "filter: invert(56%) sepia(0%) saturate(15%) hue-rotate(206deg);"}
`;

const MycontentWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const MyComment = styled.input`
  background-color: #f7f7f8;
  border-radius: 23px;
  font-size: 16px;
  box-sizing: border-box;
  border: none;
  flex-grow: 1;
  min-height: 46px;
  padding: 12px 18px;
  caret-color: rgb(95, 60, 250);
  &:focus {
    outline: none;
  }
`;

const MyContentButton = styled.img`
  align-self: center;
  width: 50px;
  height: 50px;
  margin-left: 10px;
  filter: invert(90%) sepia(27%) saturate(0%) hue-rotate(301deg);
`;

const MyContentActiveButton = styled.img`
  align-self: center;
  width: 50px;
  height: 50px;
  margin-left: 10px;
  filter: invert(21%) sepia(66%) saturate(5240%) hue-rotate(249deg);
`;

const Alert = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  top: calc(50% - 50px);
  left: calc(50% - 150px);
  border-radius: 10px;
  width: 300px;
  height: 50px;
  background: linear-gradient(
    90deg,
    rgb(254, 224, 255) 0%,
    rgb(218, 235, 255) 100%
  );
`;

const CommunityPost = ({ CatergoryType, like, post }) => {
  const userName = useSelector((state) => state.userData.userName);
  const userID = useSelector((state) => state.userData.userID);
  const CommunityState = useSelector((state) => state.posts.CommunityState);

  const dispatcher = useDispatch();
  const [heart, setHeart] = useState(false);
  const [comment, setComment] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deletePost, setDeletePost] = useState(false);
  const [myComment, setMyComment] = useState("");
  const [showImagesZome, setShowImagesZoom] = useState(false);
  useEffect(() => {
    post.Likers.map((el) => {
      if (el.Like.UserId === userID) {
        setHeart(true);
      }
    });
    return () => {};
  }, [userID]);

  const onChangeHeart = useCallback(() => {
    setHeart((prev) => !prev);
  }, []);

  const onChangeComment = useCallback(() => {
    setComment((prev) => !prev);
  }, []);

  const onChangeMyComment = useCallback((e) => {
    setMyComment(e.target.value);
  }, []);

  const myCommnetSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // dispatcher(
      //   addComment({ value: myComment, id: post.id, userName: userName }),
      // );
      dispatcher(
        addCommentServer({ id: post.id, res: { content: myComment } }),
      );
      setMyComment("");
    },
    [myComment, userName],
  );

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

  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);
  const ImageRender = (post) => {
    if (post.Images.length < 2) {
      return (
        <ImageWrapper>
          <BodyImage
            src={`http://localhost:3065/${post.Images[0]?.src}`}
            alt=""
            onClick={onZoom}
          />
          {showImagesZome && (
            <ImageZoom images={post.Images} onClose={onClose} />
          )}
        </ImageWrapper>
      );
    } else if (post.Images.length == 2) {
      return (
        <ImageWrapper>
          {post.Images[0]?.src && (
            <BodyImage
              src={`http://localhost:3065/${post.Images[0]?.src}`}
              alt=""
              onClick={onZoom}
            />
          )}
          {post.Images[1]?.src && (
            <BodyImage
              src={`http://localhost:3065/${post.Images[1]?.src}`}
              alt=""
              onClick={onZoom}
            />
          )}
          {showImagesZome && (
            <ImageZoom images={post.Images} onClose={onClose} />
          )}
        </ImageWrapper>
      );
    } else {
      return (
        <ImageWrapper>
          {post.Images[0]?.src && (
            <BodyImage
              src={`http://localhost:3065/${post.Images[0]?.src}`}
              alt=""
              onClick={onZoom}
            />
          )}
          <ExtraImage onClick={onZoom}>
            <div>+</div>
            <div>{post.Images.length - 1}개의 사진 더보기</div>
          </ExtraImage>
          {showImagesZome && (
            <ImageZoom images={post.Images} onClose={onClose} />
          )}
        </ImageWrapper>
      );
    }
  };
  if (
    CatergoryType === "INFLUENCER" &&
    post.Limiteduser?.status === "VIP" &&
    CommunityState === "NORMAL"
  )
    return (
      <Layout>
        <img style={{ width: "100%" }} src={moza1} alt="" />
        <Alert>VIP회원만 열람할 수 있는 글입니다.</Alert>
      </Layout>
    );
  return (
    <Layout>
      <Header>
        {/* <img src={post.User.profileImage} alt=""></img> */}
        <img src={btss} alt=""></img>
        <HeaderNameDate>
          <div>{post.User.nickname}</div>
          <div>{dayjs(post.createdAt).format("YYYY.MM.DD HH:mm")}</div>
        </HeaderNameDate>
      </Header>
      {edit ? (
        <CommunityEditPostInput
          setEdit={setEdit}
          postId={post.id}
          image={post.Images}
          text={post.content}
        ></CommunityEditPostInput>
      ) : (
        <Body>
          <Content>{post.content}</Content>
          {post.Images[0]?.src && ImageRender(post)}
        </Body>
      )}

      <Line></Line>
      <LikeAndComment>
        <Like>
          <div
            style={{
              marginTop: "2px",
              display: "flex",
              justifyontent: "center",
              alignItems: "center",
              position: "relative",
              marginRight: "7px",
            }}
          >
            <div
              onClick={() => {
                onChangeHeart();
                dispatcher(postLikeServer({ postId: post.id }));
              }}
              className="heart"
            ></div>
            <div
              onClick={() => {
                onChangeHeart();
                dispatcher(postDeleteLikeServer({ postId: post.id }));
              }}
              className={
                heart ? `animation-heart animation` : `animation-heart`
              }
            ></div>
          </div>
          <div
            onClick={() => {
              onChangeHeart();
              if (heart) {
                dispatcher(postDeleteLikeServer({ postId: post.id }));
              } else {
                dispatcher(postLikeServer({ postId: post.id }));
              }
            }}
            style={{ cursor: "pointer", color: heart && "#ff2727" }}
          >
            {like}
            {/* 응원하기 */}
          </div>
        </Like>
        <Comment>
          <CommentImg
            comment={comment}
            onClick={onChangeComment}
            src={comment ? commentActiveImg : commentImg}
            // src={commentActiveImg}
            alt=""
          />
          <div
            style={{ color: comment && "rgb(95, 60, 250)" }}
            onClick={onChangeComment}
          >
            댓글
          </div>
        </Comment>
        <EditImg
          onClick={() => setEdit((prev) => !prev)}
          edit={edit}
          src={editImage}
          alt=""
        />
        <div
          onClick={() => {
            setEdit((prev) => !prev);
            dispatcher(editPostImage({ value: post.Images }));
          }}
          style={{ marginLeft: "3px", color: edit && "rgb(95, 60, 250)" }}
        >
          수정
        </div>
        <EditImg
          onClick={() => {
            setDeletePost(true);
          }}
          src={deleteImage}
          alt=""
        />
        <div
          onClick={() => {
            setDeletePost(true);
          }}
          style={{
            marginLeft: "3px",
            cursor: "pointer",
          }}
        >
          삭제
        </div>
      </LikeAndComment>
      <Line></Line>
      {comment && (
        <MycontentWrapper>
          <MyComment
            value={myComment}
            onChange={onChangeMyComment}
            onKeyDown={onKeydownChat}
            placeholder="댓글을 입력하세요."
          />
          {myComment ? (
            <MyContentActiveButton onClick={myCommnetSubmit} src={up} alt="" />
          ) : (
            <MyContentButton src={up} alt="" />
          )}
        </MycontentWrapper>
      )}
      {comment &&
        post.Comments.length >= 1 &&
        post.Comments.map((el, index) => {
          return (
            <CommentComp
              key={index}
              postid={post.id}
              commentId={el.id}
              el={el}
              id={el.User.id}
            ></CommentComp>
          );
        })}
      {deletePost && (
        <ConfirmModal setDeletePost={setDeletePost} id={post.id}></ConfirmModal>
      )}
    </Layout>
  );
};

export default CommunityPost;
