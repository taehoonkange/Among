import React, { useState, useCallback } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import "./heart.css";
import commentImg from "../../images/comment.png";
import commentActiveImg from "../../images/commentActive.png";
import up from "../../images/up.png";
import thumbsUp from "../../images/thumbs-up.png";
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

const CommentLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
const CommunityPost = ({ post }) => {
  const [heart, setHeart] = useState(false);
  const [comment, setComment] = useState(false);
  const [myComment, setMyComment] = useState("");
  const onChangeHeart = useCallback(() => {
    setHeart((prev) => !prev);
  }, []);

  const onChangeComment = useCallback(() => {
    setComment((prev) => !prev);
  }, []);

  const onChangeMyComment = useCallback((e) => {
    setMyComment(e.target.value);
  }, []);

  const myCommnetSubmit = useCallback(() => {
    setMyComment("");
  }, []);

  return (
    <Layout>
      <Header>
        <img src={post.User.profileImage} alt=""></img>
        <HeaderNameDate>
          <div>{post.User.nickname}</div>
          <div>{dayjs(post.createdAt).format("YYYY.MM.DD HH:mm")}</div>
        </HeaderNameDate>
      </Header>
      <Body>
        <Content>{post.content}</Content>
        {post.Images[0]?.src && (
          <ImageWrapper>
            {post.Images[0]?.src && (
              <BodyImage src={post.Images[0].src} alt="" />
            )}
            {post.Images[1]?.src && (
              <BodyImage src={post.Images[1].src} alt="" />
            )}
          </ImageWrapper>
        )}
      </Body>
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
            <div onClick={onChangeHeart} class="heart"></div>
            <div
              onClick={onChangeHeart}
              class={heart ? `animation-heart animation` : `animation-heart`}
            ></div>
          </div>
          <div
            onClick={onChangeHeart}
            style={{ cursor: "pointer", color: heart && "#ff2727" }}
          >
            응원하기
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
      </LikeAndComment>
      <Line></Line>
      <MycontentWrapper>
        <MyComment
          value={myComment}
          onChange={onChangeMyComment}
          placeholder="댓글을 입력하세요."
        />
        {myComment ? (
          <MyContentActiveButton onClick={myCommnetSubmit} src={up} alt="" />
        ) : (
          <MyContentButton src={up} alt="" />
        )}
      </MycontentWrapper>
      {comment &&
        post.Comments.length > 1 &&
        post.Comments.map((el) => {
          return (
            <CommentLayout>
              <CommentProfileText>
                <img alt="" src={el.User.profileImage} />
                <CommentText>
                  <div>{el.User.nickname}</div>
                  <div>{el.content}</div>
                  <ThumbsUp>
                    <img src={thumbsUp} alt="" />
                    <div>1</div>
                  </ThumbsUp>
                </CommentText>
              </CommentProfileText>
              <CommentLikeReply>
                <div>좋아요</div>
                <div>답글달기</div>
              </CommentLikeReply>
              <Reply>
                <ReplyIcon></ReplyIcon>
                <div>답글 {2}개</div>
              </Reply>
            </CommentLayout>
          );
        })}
    </Layout>
  );
};

export default CommunityPost;
