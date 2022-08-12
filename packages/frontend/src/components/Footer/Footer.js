import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styled from "styled-components";

import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 12rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgb(24, 25, 29);
`;

// Left
const LeftArea = styled.div`
  width: 300px;
`;

const TitleCss = styled.div`
  font-family: "MaplestoryOTFBold";
  margin-left: 160px;
  margin-top: 40px;
  color: white;
  font-size: 22px;
`;

// Middle
const MiddleArea = styled.div`
  width: 700px;
`;

const MiddleTop = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 45px;
`;

const MiddleTopUnits = styled.div`
  margin-left: 20px;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const MiddleMid = styled.div`
  color: white;
  font-size: 16px;
  margin: 20px;
`;

const MiddleBot = styled.div`
  color: white;
  font-size: 16px;
  margin: 20px;
`;

// Right
const RightArea = styled.div`
  display: flex;
  justify-content: right;
  width: 300px;
  margin-top: 30px;
  margin-bottom: 140px;
  padding-right: 140px;
`;

const RightUnits = styled.div`
  margin: 20px;
  cursor: pointer;
`;

const Footer = () => {
  const navigate = useNavigate();
  return (
    <FooterContainer>
      <LeftArea>
        <TitleCss>Among</TitleCss>
      </LeftArea>
      <MiddleArea>
        <MiddleTop>
          <MiddleTopUnits
            onClick={() => {
              window.open("https://cse.pusan.ac.kr/cse/index.do");
            }}
          >
            PNU
          </MiddleTopUnits>
          <MiddleTopUnits onClick={() => navigate("/guide")}>
            자주하는 질문(FAQ)
          </MiddleTopUnits>
        </MiddleTop>
        <MiddleMid>
          Among는 2022 부산대학교 전기 졸업과제 중 제작된 NFT 기반의 티켓 거래
          플랫폼입니다.
          <br></br>해당 페이지 내에서 이루어지는 모든 거래는 가상으로 지급된
          토큰으로 진행되고 있습니다.
        </MiddleMid>
        <MiddleBot>
          copyright © 2022 Non Fungible Turtles. All rights reserved
        </MiddleBot>
      </MiddleArea>
      <RightArea>
        <RightUnits>
          <GitHubIcon
            style={{ color: "#FFFFFF" }}
            onClick={() => {
              window.open("https://github.com/PNU-SWEFI/Among-Front");
            }}
          ></GitHubIcon>
        </RightUnits>
        <RightUnits>
          <YouTubeIcon
            style={{ color: "#FFFFFF" }}
            onClick={() => {
              window.open("https://www.youtube.com/");
            }}
          ></YouTubeIcon>
        </RightUnits>
        <RightUnits></RightUnits>
      </RightArea>
    </FooterContainer>
  );
};

export default Footer;
