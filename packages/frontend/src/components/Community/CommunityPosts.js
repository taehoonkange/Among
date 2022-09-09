import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import CommunityPostInput from "./CommunityPostInput";
import Post from "./Post";
import { loadPosts } from "../../actions/post";
import { setUserID } from "../../slice/userDataSlice";
import moza2 from "../../images/moza2.png";
import moza1 from "../../images/moza1.png";
import moza from "../../images/moza.png";
import axios from "../../api";
import { ImagePixelated } from "react-pixelate";

const Layout = styled.div`
  width: 40%;
  padding: 10px;
`;

const MozaLayout = styled.div`
  margin-top: 10px;
  padding: 15px;
  background-color: white;
  border: 2px solid #f8f8f8;
  border-radius: 6px;
`;
const CommunityPosts = ({ CatergoryType }) => {
  console.log(CatergoryType);
  const CommunityState = useSelector((state) => state.posts.CommunityState);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPosts());
    async function fetchAndUser() {
      const res = await axios.get("/user");
      dispatch(setUserID({ value: res.data.id }));
    }
    fetchAndUser();
    return () => {};
  }, []);

  const mainPosts = useSelector((state) => state.posts);

  return (
    <Layout>
      <CommunityPostInput CatergoryType={CatergoryType}></CommunityPostInput>
      {mainPosts.mainPosts.map((post) => {
        return (
          <Post
            CatergoryType={CatergoryType}
            key={post.id}
            like={post.likeCount}
            post={post.post}
          ></Post>
        );
      })}
    </Layout>
  );
};

export default CommunityPosts;
