import React from "react";
import styled from "styled-components";
import SelectSeatInfo from "../components/SelectSeat/SelectSeatInfo";
const SelectSeat = () => {
  return (
    <TopCss>
      <TopLeft>
        <TopLeftCss>
          <UpperTitleArea>좌석 선택</UpperTitleArea>
          <SelectSeatInfo></SelectSeatInfo>
          <SideBtnWrap2>
            <SideBtn2>결제하기</SideBtn2>
          </SideBtnWrap2>
        </TopLeftCss>
      </TopLeft>
    </TopCss>
  );
};

export default SelectSeat;

const TopCss = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
`;

const TopLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopLeftCss = styled.div`
  width: 780px;
  height: 680px;
`;

const UpperTitleArea = styled.div`
  margin: 40px 40px 20px 0px;
  font-size: 36px;
  font-weight: 700;
`;

const SideBtnWrap2 = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

const SideBtn2 = styled.button`
  display: flex;
  width: 170px;
  height: 55px;
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
  cursor: pointer;
`;
