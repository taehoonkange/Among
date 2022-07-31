import React from "react";
import styled from "styled-components";
import DatePick from "./DatePick/DatePick";

const TopRight = () => {
  return (
    <>
      <CoverBox>
        <ContainerTop>
          <SideHeader>{/* <h4>관람일</h4> */}</SideHeader>
          <SideContent>
            <SideCalendar>
              <DatePick></DatePick>
            </SideCalendar>
            <ColorHr></ColorHr>
            <SideTime>
              <h4>회차</h4>
              <SideTimeTable>
                <ul>
                  <li>
                    <span>1회</span>
                    <span>13:00</span>
                  </li>
                </ul>
              </SideTimeTable>
              <div>잔여석 안내 서비스를 제공하지 않습니다.</div>
            </SideTime>
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
  height: 570px;
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
  width: 370px;
  height: 265px;
  padding-right: 20px;
`;

const SideCalendar = styled.div`
  margin: 0px 0px 20px 23px;
`;

const ColorHr = styled.hr`
  width: 99%;
  border: 0.5px solid #dadee2;
`;

const SideTime = styled.div`
  padding: 15px 0px 0px 20px;

  & > div {
    margin-top: 10px;
    font-size: 14px;
  }
`;

const SideTimeTable = styled.div`
  overflow: hidden;
  margin-top: 10px;

  & > ul {
    display: table;
    vertical-align: middle;
    text-align: center;
    list-style: none;
    font-size: 16px;
    font-weight: 700;
  }

  & > ul > li {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    border: 2px solid rgb(95, 60, 250);
    border-radius: 5px;
    height: 50px;
  }

  & > ul > li > a {
    z-index: 1;
    font-weight: bold;
    color: rgb(95, 60, 250);
    border-color: rgb(95, 60, 250);
  }
  & > ul > li > span {
    z-index: 1;
    font-weight: bold;
    color: rgb(95, 60, 250);
    border-color: rgb(95, 60, 250);
  }
  & > ul > li > span:nth-child(2) {
    z-index: 1;
    font-weight: bold;
    color: rgb(95, 60, 250);
    border-color: rgb(95, 60, 250);
    margin-left: 5px;
    margin-bottom: 2px;
  }
`;
