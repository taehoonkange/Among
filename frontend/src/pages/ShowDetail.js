import React from "react";
import styled from "styled-components";
import Middle from "../components/ShowDetail/Middle";
import TopLeft from "../components/ShowDetail/TopLeft";
import TopRight from "../components/ShowDetail/TopRight";

const ShowDetail = () => {
  return (
    <>
      <TopCss>
        <TopLeftCss>
          <TopLeft></TopLeft>
        </TopLeftCss>
        <TopRightCss>
          <TopRightFixed>
            <TopRight></TopRight>
            <SideBtnWrap>
              <SideBtn>예매하기</SideBtn>
            </SideBtnWrap>
          </TopRightFixed>
        </TopRightCss>
      </TopCss>
      <MiddleCss>
        <Middle></Middle>
      </MiddleCss>
    </>
  );
};

export default ShowDetail;

const TopCss = styled.div`
  display: flex;
  justify-content: center;
  height: 580px;
  margin-top: 50px;
`;

const TopLeftCss = styled.div`
  width: 830px;
  height: 630px;
`;

const MiddleCss = styled.div`
  width: 830px;
  margin-left: auto;
  margin-right: auto;
`;

const TopRightCss = styled.div`
  width: 330px;
  height: 630px;
`;

const TopRightFixed = styled.div`
  width: 370px;
  height: 630px;
  position: fixed;
  margin-left: 50px;
  background-color: white;
`;

const SideBtnWrap = styled.div`
  margin-top: 20px;
`;

const SideBtn = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 58px;
  padding: 0 1rem;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background-color: rgb(95, 60, 250);
  border: 0.1rem solid rgb(95, 60, 250);
  border-radius: 1rem;
  text-align: center;
  box-sizing: border-box;
`;
