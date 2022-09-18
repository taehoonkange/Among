import React from "react";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import ResellModal from "./ResellModal";
import { setReSellModalOpen } from "../../slice/settingModalSlice";
const TopLeft = () => {
  const dispatch = useDispatch();
  const performanceDetail = useSelector(
    (state) => state.performance.performanceDetail,
  );
  const reSellModalOpen = useSelector(
    (state) => state.settingModalOpen.reSellModalOpen,
  );
  return (
    <>
      <TicketTitle>{performanceDetail.title}</TicketTitle>
      <UnderTitle>
        <PosterArea>
          <Poster
            src={`http://localhost:3065/${performanceDetail?.Image?.src}`}
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
          {/* <Link to="/Decorate">dd</Link> */}
          <DecoButton to="/Decorate">꾸미기</DecoButton>
          <ResellButton
            onClick={() => {
              dispatch(setReSellModalOpen({ value: true }));
            }}
          >
            리셀하기
          </ResellButton>
          {reSellModalOpen && <ResellModal></ResellModal>}
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

const buttonCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 50px;
  border-radius: 10px;
  color: white;
`;

const DecoButton = styled(Link)`
  ${buttonCss}
  margin-top: 100px;
  background-color: rgb(95, 60, 250);
  ${(props) => props.margin && css``}
`;

const ResellButton = styled.div`
  ${buttonCss}
  background-color: #ef3f43;
  margin-top: 5px;
  cursor: pointer;
`;
