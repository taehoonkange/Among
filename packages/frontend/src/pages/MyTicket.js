import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";
import { getPerformanceDetail } from "../actions/performance";
import { ticketInfo } from "../actions/ticketResell";
import TopLeft from "../components/MyTicket/TopLeft";

import Middle from "../components/ShowDetail/Middle";
import { setPerformanceId } from "../slice/performanceSlice";

const MyTicket = () => {
  const performanceId = useSelector((state) => state.performance.performanceId);
  const getPerformanceDetailLoading = useSelector(
    (state) => state.performance.getPerformanceDetailLoading,
  );
  const ticketStatusDetail = useSelector(
    (state) => state.ticketResell.ticketStatusDetail,
  );
  const ticketID = useSelector((state) => state.ticketBook.ticketID);
  console.log(ticketID);
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const mounted = useRef(false);
  const ticketInfoRef = useRef(false);
  useEffect(() => {
    const regex = /[^0-9]/g;
    const result = path.replace(regex, "");
    const number = parseInt(result);
    console.log(number);
    dispatch(setPerformanceId({ value: number }));
  }, [path]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      dispatch(getPerformanceDetail(performanceId));
    }
  }, [performanceId]);

  useEffect(() => {
    dispatch(ticketInfo(ticketID)); // 티켓에 대한 정보를 받아옵니다.
  }, [ticketID]);

  const renderStatusLabel = (status) => {
    switch (status) {
      case "사용됨":
        return (
          <StatusLabel
            color="rgb(95, 60, 250)"
            background="linear-gradient(90deg, rgb(254, 224, 255) 0%, rgb(218, 235, 255) 100%)"
          >
            사용됨
          </StatusLabel>
        );
      case "보유중":
        return (
          <StatusLabel color="white" background="rgb(95, 60, 250)">
            보유중
          </StatusLabel>
        );
      case "리셀중":
        return (
          <StatusLabel color="white" background="#ef3f43">
            리셀중
          </StatusLabel>
        );
      default:
    }
  };
  if (getPerformanceDetailLoading) {
    return (
      <Layout>
        <ClipLoader color="rgb(95, 60, 250)" />
      </Layout>
    );
  }

  return (
    <>
      <TopCss>
        <CategoryWrapper>
          <Category>나의 티켓</Category>
          {renderStatusLabel(ticketStatusDetail.ticketType)}
        </CategoryWrapper>
        <TopLeftCss>
          <TopLeft></TopLeft>
        </TopLeftCss>
        <Middle></Middle>
        <MiddleRightCss></MiddleRightCss>
      </TopCss>
    </>
  );
};

export default MyTicket;
const CategoryWrapper = styled.div`
  display: flex;
  padding-left: 40px;
  width: 830px;
  height: 10px;
  margin-top: 100px;
  margin-bottom: 50px;
`;

const Category = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const Title = styled.div`
  margin-top: 10px;
  font-size: 20px;
  margin-bottom: 40px;
`;
const TopCss = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 630px;
  margin-top: 50px;
  margin-bottom: 350px;
`;

const TopLeftCss = styled.div`
  width: 830px;
  height: 630px;
`;

const MiddleRightCss = styled.div`
  width: 330px;
  height: 630px;
`;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StatusLabel = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 80px;
  height: 35px;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
`;
