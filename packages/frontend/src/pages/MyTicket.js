import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";
import { getPerformanceDetail } from "../actions/performance";
import TopLeft from "../components/MyTicket/TopLeft";

import Middle from "../components/ShowDetail/Middle";
import { setPerformanceId } from "../slice/performanceSlice";

const MyTicket = () => {
  const performanceId = useSelector((state) => state.performance.performanceId);
  const getPerformanceDetailLoading = useSelector(
    (state) => state.performance.getPerformanceDetailLoading,
  );
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const mounted = useRef(false);

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
          {/* <Title>2022 송가인 전국투어 콘서트 - 일산</Title> */}
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
  margin-top: 150px;
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
