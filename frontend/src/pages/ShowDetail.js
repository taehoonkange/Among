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
