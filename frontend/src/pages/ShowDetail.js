import React from "react";
import styled from "styled-components";
import Middle from "../components/ShowDetail/Middle";
import TopLeft from "../components/ShowDetail/TopLeft";

const ShowDetail = () => {
  return (
    <>
      <TopCss>
        <TopLeftCss>
          <TopLeft></TopLeft>
        </TopLeftCss>
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
  height: 580px;
  justify-content: center;
  margin-top: 50px;
`;

const TopLeftCss = styled.div`
  width: 1300px;
  height: 630px;
`;

const MiddleCss = styled.div`
  width: 1300px;
  margin-left: auto;
  margin-right: auto;
`;
