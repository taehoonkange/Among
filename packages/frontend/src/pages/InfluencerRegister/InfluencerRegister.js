import React, { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import needImg from "../../images/needImg.png";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "./ShowPublic.module.css";
import { influencerRegister, uploadInfluencerImages } from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const InfluencerRegister = () => {
  const navigate = useNavigate();
  const imagePaths = useSelector((state) => state.userData.imagePaths);
  const dispatch = useDispatch();
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const imageInput = useRef(null);
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeDesc = useCallback((e) => {
    setDesc(e.target.value);
  }, []);
  const captureFile = useCallback((e) => {
    // e.stopPropagation();
    // e.preventDefault();
    const file = e.target.files[0];
    setImg(file);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (image) => {
      imageFormData.append("image", image);
    });
    dispatch(uploadInfluencerImages(imageFormData));
  }, []);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("image", imagePaths[0]);
      formData.append("description", desc);
      formData.append("name", name);
      dispatch(influencerRegister(formData)).then(() => {
        navigate("/MyPage");
      });
      setName("");
      setDesc("");
    },
    [name, desc, imagePaths],
  );

  return (
    <div className="ShowPublic">
      <TopCss>
        <TopLeft>
          <form encType="multipart/form-date" onSubmit={onSubmit}>
            <TopLeftCss>
              <UpperTitleArea>인플루언서 등록</UpperTitleArea>
              <UnderTitle>
                <PosterArea>
                  <Poster
                    onClick={onClickImageUpload}
                    src={img ? URL.createObjectURL(img) : needImg}
                    alt="등록 버튼을 눌러주세요."
                  ></Poster>
                </PosterArea>
                <InfoWrapper>
                  <div>
                    <InfoDiv>
                      <span>이름</span>
                      <StyledTextField
                        name="stageName"
                        type="text"
                        label="이름"
                        variant="standard"
                        value={name}
                        sx={{ width: "260px" }}
                        onChange={onChangeName}
                      />
                    </InfoDiv>
                    <InfoDiv>
                      <span>소개글</span>
                      <StyledTextField
                        name="description"
                        type="text"
                        label="인플루언서 소개"
                        rows={4}
                        multiline
                        value={desc}
                        sx={{ width: "260px", marginTop: "20px" }}
                        onChange={onChangeDesc}
                      ></StyledTextField>
                    </InfoDiv>

                    <SubmitButtonArea>
                      <div>
                        <Button
                          sx={{
                            color: "black",
                            borderColor: "#D3D3D3",
                            backgroundColor: "#D3D3D3",
                            borderRadius: 3,
                            py: 0.5,
                            mr: 2,
                            "&:hover": {
                              backgroundColor: "#808080",
                            },
                          }}
                          component="label" // 이거 안해주면 작동을 안하네요..
                        >
                          이미지 선택
                          <input
                            type="file"
                            multiple
                            ref={imageInput}
                            onChange={captureFile}
                            hidden
                          />
                        </Button>
                      </div>
                    </SubmitButtonArea>
                  </div>
                </InfoWrapper>
              </UnderTitle>
              <RegisterButtonWrapper>
                <RegisterButton htmlFor="submit">등록하기</RegisterButton>
              </RegisterButtonWrapper>
            </TopLeftCss>
          </form>
        </TopLeft>
      </TopCss>
    </div>
  );
};

export default InfluencerRegister;

const TopCss = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
`;

const TopLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopLeftCss = styled.div`
  width: 670px;
  height: 680px;
`;

const UpperTitleArea = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 40px 0px 0px;
  font-size: 36px;
  font-weight: 700;
`;

const UnderTitle = styled.div`
  display: flex;
  justify-content: center;
`;

const PosterArea = styled.div`
  width: 300px;
  height: 400px;
  margin-top: 40px;
  background-color: #d5d8dc;
  border-radius: 15px;
`;

const Poster = styled.img`
  cursor: pointer;
  width: 296px;
  height: 396px;
  margin-left: 2px;
  margin-top: 2px;
  border-radius: 12px;
  margin-right: 20px;
`;

const SubmitButtonArea = styled.div`
  margin-top: 30px;

  & > div {
    display: flex;
    justify-content: center;
  }
`;

const InfoWrapper = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 70px;

  & > div {
    display: flex;
    flex-direction: column;
  }
`;

const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    color: rgb(95, 60, 250);
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: rgb(95, 60, 250);
    }
    & fieldset {
      border: 2px solid #ced4da;
    }
  }
  & .MuiInput-underline::after {
    border-bottom: 2px solid rgb(95, 60, 250);
  }
`;

const InfoDiv = styled.div`
  display: flex;
  margin-top: 20px;
  & > span {
    margin-top: 22px;
    margin-left: 5px;
    width: 80px;
    font-weight: 700;
  }
`;

const RegisterButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const RegisterButton = styled.button`
  cursor: pointer;
  background-color: rgb(95, 60, 250);
  padding: 0px 10px;
  width: 700px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 10px;
  border: none;
`;
