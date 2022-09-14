import React from "react";
import styled, { css } from "styled-components";
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
            src={`data:image/png;base64,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`}
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
          <Button back="rgb(95, 60, 250)" ma>
            꾸미기
          </Button>
          <Button back="#ef3f43" margin>
            리셀하기
          </Button>
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

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 50px;
  border-radius: 10px;
  background-color: ${(props) => props.back};
  color: white;

  ${(props) =>
    props.margin &&
    css`
      margin-top: 5px;
    `}

  ${(props) =>
    props.ma &&
    css`
      margin-top: 100px;
    `}
`;
