import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import Kdy from "../images/kdy.jpeg";
import needImg from "../images/needImg.png";
import ether from "../images/ethereum.png";
import SettingModal from "../components/MyPage/SettingModal";
import { setOpen } from "../slice/settingModalSlice";
import { setUserName, setUserProfile } from "../slice/userDataSlice";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import fetcher from "../fetcher";
import useSWR from "swr";

const MyPage = () => {
  const { data: Nick } = useSWR("/user/profile/nickname", fetcher);
  const { data: ImgSrc } = useSWR("/user/image", fetcher);

  const [dummy, setDummy] = useState([1, 2, 3, 4, 5]);
  const dispatcher = useDispatch();
  const settingModalOpen = useSelector((store) => store.settingModalOpen.open);
  const userProfile = useSelector((store) => store.userData.userProfile);
  const name = useSelector((store) => store.userData.userName);
  useEffect(() => {
    dispatcher(setUserName({ value: Nick?.nickname }));
    dispatcher(setUserProfile({ value: ImgSrc?.img_src }));
  }, [Nick, ImgSrc]);

  return (
    <>
      <ConnectedContainer>
        {/* 배경 */}
        <img
          className="backgroundImg"
          src={`https://image.kmib.co.kr/online_image/2022/0101/2021123118131057409_1640941990_0924225097.jpg`}
          alt=""
        />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div className="profileImgLocation" style={{}}>
              <img
                className="profileSize"
                src={
                  userProfile ? `http://localhost:3065/${userProfile}` : needImg
                }
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = "images/MetaMask_Fox.svg.png";
                }}
                alt=""
                onClick={() => {
                  dispatcher(setOpen({ value: true }));
                }}
              />
            </div>
          </Grid>
        </Grid>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "0.5rem",
          }}
        >
          {/* 닉네임 */}
          <UserInfo>
            <h1>{name}</h1>
          </UserInfo>
          {/* 지갑 주소 */}
          <div className="dappAddressWrapper">
            <img className="etherSize" src={ether} alt="eth" />
            <div className="dappAddressLength">
              {window.ethereum.selectedAddress}
            </div>
          </div>
          <ShowRegister to="/ShowPublish">공연 등록</ShowRegister>
        </div>
      </ConnectedContainer>
      <>
        <MyPageContainer>
          <h2>나의 티켓</h2>
          <div>
            {dummy.map((el) => {
              return (
                <div>
                  <img
                    className="myPage_ticket_image"
                    alt=""
                    src={`http://ticketimage.interpark.com/TCMS4/Main/201903/TicketTodayNew_TicketTodayDrama_5c9237a5-782b-4c0d-8beb-2e70ebe260a0.jpg`}
                  ></img>
                  <div className="myPage_ticket_date">2022.07.16</div>
                  <div className="myPage_ticket_desc">
                    2022 10년 연속 1위 연극 옥탑방고양이-틴틴홀
                  </div>
                </div>
              );
            })}
          </div>
        </MyPageContainer>
        <MyPageContainer>
          <h2>판매 티켓</h2>
          <div>
            {dummy.map((el) => {
              return (
                <div>
                  <img
                    className="myPage_ticket_image"
                    alt=""
                    src={`http://ticketimage.interpark.com/TCMS4/Main/201903/TicketTodayNew_TicketTodayDrama_5c9237a5-782b-4c0d-8beb-2e70ebe260a0.jpg`}
                  ></img>
                  <div className="myPage_ticket_date">2022.07.16</div>
                  <div className="myPage_ticket_desc">
                    2022 10년 연속 1위 연극 옥탑방고양이-틴틴홀
                  </div>
                </div>
              );
            })}
          </div>
        </MyPageContainer>
      </>
      {settingModalOpen && <SettingModal></SettingModal>}
    </>
  );
};

export default MyPage;

const ConnectedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem;
  padding-bottom: 40px;
  border-bottom: 2px solid #e9e9f0;

  & .backgroundImg {
    height: 300px;
    width: 100%;
    object-fit: cover;
  }

  & .profileImgLocation {
    display: flex;
    position: absolute;
    top: 370px;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & .profileSize {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    background: grey;
    cursor: pointer;
  }

  & .dappAddressWrapper {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border: 1px solid grey;
    border-radius: 20px;
    padding: 0.5rem;
    margin-top: 10px;
    display: flex;
  }

  & .etherSize {
    width: 20px;
    height: 20px;
  }

  & .dappAddressLength {
    width: 180px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const UserInfo = styled.div`
  border: none;
  margin-top: 50px;
`;

const MyPageContainer = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  height: 500px;
  border-bottom: 2px solid #e9e9f0;

  & > h2 {
    margin-top: 20px;
    padding-left: 4%;
  }

  & > div {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  }

  & > div > div {
    width: 300px;
    height: 400px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
  }

  & .myPage_ticket_image {
    width: 200px;
    height: 300px;
  }

  & .myPage_ticket_date {
    width: 200px;
    font-weight: 700;
    margin-top: 15px;
  }

  & .myPage_ticket_desc {
    width: 200px;
    margin-top: 15px;
  }
`;

const ShowRegister = styled(Link)`
  background: rgb(95, 60, 250);
  margin-top: 20px;
  padding: 10px 20px 10px 20px;
  color: white;
  border-radius: 10px;
`;
