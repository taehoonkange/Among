import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import Kdy from "../images/kdy.jpeg";
import ether from "../images/ethereum.png";

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

const MyPage = () => {
  return (
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
              src={Kdy}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "images/MetaMask_Fox.svg.png";
              }}
              alt=""
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
          <h1>김동영</h1>
        </UserInfo>
        {/* 지갑 주소 */}
        <div className="dappAddressWrapper">
          <img className="etherSize" src={ether} alt="eth" />
          <div className="dappAddressLength">
            {window.ethereum.selectedAddress}
          </div>
        </div>
      </div>
    </ConnectedContainer>
  );
};

export default MyPage;
