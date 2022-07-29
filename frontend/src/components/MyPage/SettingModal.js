import React, { useCallback, useState } from "react";
import styled from "styled-components";
import xbutton from "../../images/close.png";
import { setOpen } from "../../slice/settingModalSlice";
import { setUserName } from "../../slice/userDataSlice";
import { useDispatch } from "react-redux";
import Kdy from "../../images/kdy.jpeg";

import axios from "../../api";

const SettingModal = () => {
  const [name, setName] = useState("");
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
  }, [name]);
  return (
    <SettingModalLayout>
      <img
        onClick={() => {
          dispatcher(setOpen({ value: false }));
        }}
        className="SettingModalImage"
        alt=""
        src={xbutton}
      ></img>
      <img className="SettingModalProfile" alt="" src={Kdy}></img>
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
