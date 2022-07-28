import React from "react";
import styled from "styled-components";
import DatePick from "./DatePick/DatePick";

const TopRight = () => {
  return (
    <>
      <CoverBox>
        <ContainerTop>
          <SideHeader>
            <h4>관람일</h4>
          </SideHeader>
          <SideContent>
            <SideCalendar>
              <DatePick></DatePick>
            </SideCalendar>
          </SideContent>
        </ContainerTop>
      </CoverBox>
    </>
  );
};

export default TopRight;

const CoverBox = styled.div`
  border: 0.1rem solid #b6bdc7;
  border-radius: 1.5rem;
  height: 450px;
  box-sizing: border-box;
  width: 100%;
`;

const ContainerTop = styled.div`
  padding: 5px 0px 14px 0px;
`;

const SideHeader = styled.div`
  padding: 15px 0px 0px 20px;
`;

const SideContent = styled.div`
  width: 290px;
  height: 265px;
  padding-left: 20px;
  padding-right: 20px;
`;

const SideCalendar = styled.div`
  margin: 18px 0px 10px 0px;
`;

const DatePicker = styled.div`
  width: 290px;
  height: 237px;
`;
