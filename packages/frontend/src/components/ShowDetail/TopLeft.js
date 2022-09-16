import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
const TopLeft = () => {
  const performanceDetail = useSelector(
    (state) => state.performance.performanceDetail,
  );
  return (
    <>
      <TicketTitle>{performanceDetail.title}</TicketTitle>
      <UnderTitle>
        <PosterArea>
          <Poster
            src={`http://localhost:3065/${performanceDetail.Image?.src}`}
            alt="poster img"
          ></Poster>
        </PosterArea>
        <TicketInfoArea>
          <ul>
            <li>
              <strong>장소</strong>
              <div>{performanceDetail.place}</div>
            </li>
            <li>
              <strong>공연기간</strong>
              <div>
                {dayjs(performanceDetail.term_start_at).format("YYYY-MM-DD")}{" "}
                {" ~ "}
                {dayjs(performanceDetail.term_end_at).format("YYYY-MM-DD")}
              </div>
            </li>
            <li>
              <strong>공연시간</strong>
              <div>{performanceDetail.time}</div>
            </li>
            <li>
              <strong>관람연령</strong>
              <div>{performanceDetail.limitedAge}</div>
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
  font-size: 30px;
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
