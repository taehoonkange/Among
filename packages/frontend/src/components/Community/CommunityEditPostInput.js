import React, { useState, useCallback } from "react";
import styled from "styled-components";
import TextArea from "./TextArea";
import { useSelector, useDispatch } from "react-redux";
import communityImage from "../../images/communityImage.png";
import { deleteEditImage } from "../../slice/postSlice";
import { editPostServer, uploadEditImages } from "../../actions/post";
import { useRef } from "react";
const Layout = styled.div`
  background-color: white;
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

const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 20px;
`;

const BodyImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const BodyImageWrapper = styled.div`
  position: relative;
  width: calc(50% - 10px);
`;

const Delete = styled.div`
  color: white;
  display: flex;
  top: 0px;
  left: calc(100% - 20px);
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: black;
  position: absolute;
`;
const CommunityPostInput = ({ setEdit, postId, image, text }) => {
  const editImagePaths = useSelector((state) => state.posts.editImagePaths);
  const userName = useSelector((state) => state.userData.userName);

  const dispatcher = useDispatch();
  const [value, setValue] = useState(text);
  const imageInput = useRef();
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData();
      editImagePaths.forEach((image) => {
        formData.append("image", image);
      });
      formData.append("content", value);
      dispatcher(editPostServer({ formData: formData, postId: postId }));
      setValue("");
      setEdit(false);
    },
    [value, userName, editImagePaths],
  );
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback((e) => {
    console.log("images", e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (image) => {
      imageFormData.append("image", image);
    });
    dispatcher(uploadEditImages(imageFormData));
  }, []);

  const deleteImageInput = useCallback(
    (v) => {
      dispatcher(deleteEditImage({ value: v }));
    },
    [editImagePaths],
  );
  return (
    <Layout>
      <Form encType="multipart/form-date" onSubmit={onSubmit}>
        <TextArea Edit value={value} onChange={onChange}></TextArea>
        <TextInputImageWrapper>
          <TextInputImage
            onClick={onClickImageUpload}
            src={communityImage}
            alt=""
          />
        </TextInputImageWrapper>

        <div>
          <input
            type="file"
            multiple
            hidden
            ref={imageInput}
            onChange={onChangeImages}
          />
          <TextButton htmlFor="submit">완료</TextButton>
        </div>
        <div>
          <ImageWrapper>
            {editImagePaths.map((v) => {
              return (
                <BodyImageWrapper>
                  <Delete onClick={() => deleteImageInput(v)}>✕</Delete>
                  <BodyImage src={`http://localhost:3065/${v}`} alt="" />
                </BodyImageWrapper>
              );
            })}
          </ImageWrapper>
        </div>
      </Form>
    </Layout>
  );
};

export default CommunityPostInput;
