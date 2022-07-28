import React from "react";
import styled from "styled-components";

const TopLeft = () => {
  return (
    <>
      <TicketTitle>HIPHOPPLAYA FESTIVAL 2022</TicketTitle>
      <UnderTitle>
        <PosterArea>
          <Poster
            src={`https://ticketimage.interpark.com/Play/image/large/22/22008692_p.gif`}
            alt="poster img"
          ></Poster>
        </PosterArea>
        <TicketInfoArea>
          <ul>
            <li>
              <strong>장소</strong>
              <div>서울 난지 한강공원</div>
            </li>
            <li>
              <strong>공연기간</strong>
              <div>2022.09.17 ~ 2022.09.18</div>
            </li>
            <li>
              <strong>공연시간</strong>
              <div>960분</div>
            </li>
            <li>
              <strong>관람연령</strong>
              <div>만 7세이상</div>
            </li>
            <li>
              <strong>가격</strong>
              <div>0.01ETH</div>
            </li>
          </ul>
        </TicketInfoArea>
      </UnderTitle>
    </>
  );
};

export default TopLeft;

const TicketTitle = styled.h1`
  margin-left: 20px;
  font-size: 26px;
  margin-bottom: 20px;
`;

const UnderTitle = styled.div`
  display: flex;
`;

const PosterArea = styled.div`
  width: 300px;
  height: 400px;
  margin-left: 20px;
  margin-top: 10px;
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
`;

const TicketInfoArea = styled.div`
  width: 505px;
  margin-left: 60px;

  & > ul > li:nth-child(1) {
    margin-top: 20px;
  }

  & > ul > li {
    display: flex;
    font-size: 18px;
    margin-bottom: 20px;
  }

  & > ul > li > strong {
    width: 90px;
  }
`;
