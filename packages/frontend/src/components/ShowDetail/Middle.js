import React from "react";
import styled from "styled-components";
import MiddleLeft from "./MiddleLeft";

const Middle = () => {
  return (
    <>
      <ContainMiddle>
        <MiddleLeftCss>
          <MiddleLeft></MiddleLeft>
        </MiddleLeftCss>
      </ContainMiddle>
    </>
  );
};

export default Middle;

const ContainMiddle = styled.div`
  margin-left: 40px;
  margin-top: 20px;
  display: flex;
`;

const MiddleLeftCss = styled.div`
  width: 830px;
`;
