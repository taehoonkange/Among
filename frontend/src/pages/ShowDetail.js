import React from "react";
import styled from "styled-components";
import TopLeft from "../components/ShowDetail/TopLeft";

const TopCss = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const TopLeftCss = styled.div`
  width: 1300px;
  height: 630px;
`;

const ShowDetail = () => {
  return (
    <TopCss>
      <TopLeftCss>
        <TopLeft></TopLeft>
      </TopLeftCss>
    </TopCss>
  );
};

export default ShowDetail;
