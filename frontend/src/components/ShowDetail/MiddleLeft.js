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
    </>
  );
};

export default MiddleLeft;

const NavList = styled.div`
  display: flex;
  border-bottom: 1px solid #939393;
`;

const NavListItem = styled.div`
  font-size: 18px;
  margin: 12px;
  margin-left: 30px;
  margin-right: 30px;
  font-weight: 700;
  color: #666666;
  cursor: pointer;
`;

const NavListItemSelected = styled.div`
  font-size: 18px;
  margin: 12px;
  margin-left: 30px;
  margin-right: 30px;
  cursor: pointer;
  font-weight: bold;
`;
