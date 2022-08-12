import React, { useState } from "react";
import styled from "styled-components";

const MiddleLeft = () => {
  const [pageNum, setPageNum] = useState(1);

  const handlePageNum = (page) => {
    setPageNum(page);
  };

  return (
    <>
      <NavList>
        {pageNum === 1 ? (
          <NavListItemSelected onClick={() => handlePageNum(1)}>
            공연 정보
          </NavListItemSelected>
        ) : (
          <NavListItem onClick={() => handlePageNum(1)}>공연 정보</NavListItem>
        )}
        {pageNum === 2 ? (
          <NavListItemSelected onClick={() => handlePageNum(2)}>
            인플루언서 정보
          </NavListItemSelected>
        ) : (
          <NavListItem onClick={() => handlePageNum(2)}>
            인플루언서 정보
          </NavListItem>
        )}
      </NavList>
      {pageNum === 1 && (
        <div>
          <TitleText>공연시간 정보</TitleText>
          <DescriptionDiv>
            예매가능시간: 전일17시(월~토 관람 시)까지/전일 11시(일요일 관람
            시)까지
          </DescriptionDiv>
        </div>
      )}
      {pageNum === 2 && (
        <div>
          <TitleText>캐스팅 정보</TitleText>
          <DescriptionDiv>캐스팅 캐스팅</DescriptionDiv>
        </div>
      )}
    </>
  );
};

export default MiddleLeft;

const NavList = styled.div`
  display: flex;
  border-bottom: 0.1rem solid #b6bdc7;
`;

const NavListItem = styled.div`
  font-size: 18px;
  margin: 12px;
  margin-left: 0px;
  margin-right: 40px;
  font-weight: 700;
  color: #666666;
  cursor: pointer;
`;

const NavListItemSelected = styled.div`
  font-size: 18px;
  position: relative;
  margin: 12px;
  margin-left: 0px;
  margin-right: 40px;
  cursor: pointer;
  font-weight: 900;

  &:before {
    content: "";
    position: absolute;
    bottom: -13px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #333;
  }
`;

const TitleText = styled.h2`
  margin-top: 80px;
  margin-bottom: 20px;
`;

const DescriptionDiv = styled.div`
  margin-bottom: 20px;
`;
