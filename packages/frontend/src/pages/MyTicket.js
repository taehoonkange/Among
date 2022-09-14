import React from "react";
import styled from "styled-components";
import TopLeft from "../components/MyTicket/TopLeft";

import Middle from "../components/ShowDetail/Middle";

const MyTicket = () => {
  return (
    <>
      <TopCss>
        <CategoryWrapper>
          <Category>나의 티켓</Category>
          <Title>2022 송가인 전국투어 콘서트 - 일산</Title>
        </CategoryWrapper>
        <TopLeftCss>
          <TopLeft></TopLeft>
        </TopLeftCss>
        <Middle></Middle>
        <MiddleRightCss></MiddleRightCss>
      </TopCss>
    </>
  );
};

export default MyTicket;
const CategoryWrapper = styled.div`
  padding-left: 40px;
  width: 830px;
  height: 10px;
  margin-top: 40px;
  margin-bottom: 50px;
`;

const Category = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const Title = styled.div`
  margin-top: 10px;
  font-size: 20px;
  margin-bottom: 40px;
`;
const TopCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 630px;
  margin-top: 50px;
  margin-bottom: 200px;
`;

const TopLeftCss = styled.div`
  width: 830px;
  height: 630px;
`;

const MiddleRightCss = styled.div`
  width: 330px;
  height: 630px;
`;
