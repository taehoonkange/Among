import React, { useState, useCallback } from "react";
import styled from "styled-components";
import TextArea from "./TextArea";
import { useSelector, useDispatch } from "react-redux";
import communityImage from "../../images/communityImage.png";
import { addPost } from "../../slice/postSlice";
import { useRef } from "react";
const Layout = styled.div`
  padding: 15px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  border-radius: 6px;
`;
const Form = styled.form``;
const Title = styled.div`
  font-weight: 700;
`;
const TextInputImageWrapper = styled.div`
  border-bottom: 2px solid #f8f8f8;
  padding-bottom: 15px;
  margin-bottom: 15px;
`;
const TextInputImage = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 95%;
  cursor: pointer;
`;

const TextButton = styled.button`
  font-weight: 700;
  border-radius: 20px;
  padding: 6px 20px;
  font-size: 14px;
  line-height: 20px;
  background: rgb(95, 60, 250);
  color: white;
  border: none;
  cursor: pointer;
  margin-left: calc(95% - 40px);
`;
const CommunityPostInput = () => {
  const imagePaths = useSelector((state) => state.posts.imagePaths);
  const dispatcher = useDispatch();
  const [value, setValue] = useState("");
  const imageInput = useRef();
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatcher(addPost());
    setValue("");
  }, []);
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);
  return (
    <Layout>
      <Form encType="multipart/form-date" onSubmit={onSubmit}>
        <Title>포스트 쓰기</Title>
        <TextArea value={value} onChange={onChange}></TextArea>
        <TextInputImageWrapper>
          <TextInputImage
            onClick={onClickImageUpload}
            src={communityImage}
            alt=""
          />
        </TextInputImageWrapper>

        <div>
          <input type="file" multiple hidden ref={imageInput} />
          <TextButton htmlFor="submit">완료</TextButton>
        </div>
        <div>
          {imagePaths.map((v) => {
            return <img src={v} alt=""></img>;
          })}
        </div>
      </Form>
    </Layout>
  );
};

export default CommunityPostInput;
