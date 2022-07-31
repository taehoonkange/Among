import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import xbutton from "../../images/close.png";
import { setOpen } from "../../slice/settingModalSlice";
import { setUserName, setUserProfile } from "../../slice/userDataSlice";
import { useDispatch, useSelector } from "react-redux";
import Kdy from "../../images/kdy.jpeg";
import needImg from "../../images/needImg.png";

import axios from "../../api";

const SettingModal = () => {
  const userName = useSelector((store) => store.userData.userName);
  const userProfile = useSelector((store) => store.userData.userProfile);
  const [img, setImg] = useState("");
  const [test, setTest] = useState("");
  const [name, setName] = useState(userName);
  const dispatcher = useDispatch();
  const onChangeName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const submitImgAndName = useCallback(() => {
    axios
      .patch(
        "/user/profile/nickname",
        {
          nickname: name,
        },
        { withCredentials: true },
      )
      .then((res) => {
        console.log(res);
      });
    console.log(img);
    axios
      .patch(
        "/user/profile/image",
        {
          image: userProfile,
        },
        { withCredentials: true },
      )
      .then((res) => {
        console.log(res);
        dispatcher(setUserProfile({ value: test }));
        setImg("");
      });
  }, [name, img, test]);

  const captureFile = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    let file = e.target.files[0];
    setImg(file);
    const formData = new FormData();
    formData.append("image", file);
    await axios({
      method: "post",
      url: "/user/image",
      data: formData,
      withCredentials: true,
    })
      .then((res) => {
        setTest(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <SettingModalLayout>
      <img
        onClick={() => {
          dispatcher(setOpen({ value: false }));
          setImg("");
        }}
        className="SettingModalImage"
        alt=""
        src={xbutton}
      ></img>
      <input
        id="image"
        type="file"
        accept="image/*"
        onChange={captureFile}
        hidden
      />
      <label style={{ cursor: "pointer" }} htmlFor="image">
        <img
          className="SettingModalProfile"
          alt=""
          src={(function () {
            if (img && userProfile) {
              return URL.createObjectURL(img);
            } else if (userProfile && !img) {
              return `http://localhost:3065/${userProfile}`;
            } else if (!userProfile && img) {
              return URL.createObjectURL(img);
            } else {
              return needImg;
            }
          })()}
        ></img>
      </label>

      <div className="SettingModalName">이름</div>
      <input
        className="SettingModalInput"
        name="name"
        value={name}
        onChange={onChangeName}
      ></input>
      <div
        onClick={() => {
          submitImgAndName();
          dispatcher(setUserName({ value: name }));
          dispatcher(setOpen({ value: false }));
        }}
        className="SettingModalButton"
      >
        변경사항 저장
      </div>
    </SettingModalLayout>
  );
};

export default SettingModal;

const SettingModalLayout = styled.div`
  width: 400px;
  height: 450px;
  background-color: white;
  position: absolute;
  top: 25%;
  left: 50%;
  border-radius: 20px;
  transform: translate(-50%, -50%);
  box-shadow: 10px 20px 20px 0px rgb(92 95 112 / 20%);

  & .SettingModalImage {
    width: 25px;
    height: 25px;
    margin-left: 357px;
    margin-top: 12px;
    cursor: pointer;
  }

  & .SettingModalProfile {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 3px solid #e9e9f0;
    object-fit: cover;
    background: grey;
    margin-left: 98px;
  }

  & .SettingModalName {
    font-size: 24px;
    font-weight: 700;
    margin-top: 30px;
    margin-left: 10px;
  }

  & .SettingModalInput {
    width: 90%;
    height: 45px;
    border: 2px solid #e9e9f0;
    background-color: #f8f8f8;
    margin-left: 12px;
    margin-top: 6px;
    border-radius: 5px;
    font-size: 20px;
    padding-left: 5px;
  }

  & .SettingModalButton {
    height: 53px;
    width: 145px;
    background-color: rgb(149, 148, 148);
    border-radius: 5px;
    color: white;
    font-size: 22px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 11px;
    margin-top: 15px;
    cursor: pointer;
  }
`;
