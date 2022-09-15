import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { getPerformanceDetail, getSeatsData } from "../actions/performance";
import Middle from "../components/ShowDetail/Middle";
import TopLeft from "../components/ShowDetail/TopLeft";
import TopRight from "../components/ShowDetail/TopRight";
import { setPerformanceId } from "../slice/performanceSlice";
import { Link } from "react-router-dom";
const ShowDetail = () => {
  const dispatch = useDispatch();
  const performanceId = useSelector((state) => state.performance.performanceId);
  const userID = useSelector((state) => state.userData.userID);
  const detectScroll = useRef();
  const path = useLocation().pathname;
  const mounted = useRef(false);
  const listener = () => {
    // if (window.pageYOffset + 1300 > document.body.scrollHeight)
    //   detectScroll.current.style.top = "0px";
    // else {
    // detectScroll.current.style.top = "150px";
    // }
  };

  useEffect(() => {
    const regex = /[^0-9]/g;
    const result = path.replace(regex, "");
    const number = parseInt(result);
    dispatch(setPerformanceId({ value: number }));
  }, [path]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      dispatch(getPerformanceDetail(performanceId));
      dispatch(getSeatsData(performanceId));
    }
    return () => dispatch(setPerformanceId({ value: 0 }));
  }, [performanceId, userID]);
  return (
    <>
      <TopCss>
        <TopLeftCss>
          <TopLeft></TopLeft>
        </TopLeftCss>
        <TopRightCss>
          <TopRightFixed ref={detectScroll}>
            <TopRight></TopRight>
            <SideBtnWrap>
              <SideBtn to="/Show/SelectSeat">예매하기</SideBtn>
            </SideBtnWrap>
          </TopRightFixed>
        </TopRightCss>
      </TopCss>
      <MiddleCss>
        <Middle></Middle>
        <MiddleRightCss></MiddleRightCss>
      </MiddleCss>
    </>
  );
};

export default ShowDetail;

const TopCss = styled.div`
  display: flex;
  justify-content: center;
  height: 630px;
  margin-top: 50px;
`;

const TopLeftCss = styled.div`
  width: 830px;
  height: 630px;
`;

const MiddleCss = styled.div`
  display: flex;
  justify-content: center;
`;

const TopRightCss = styled.div`
  width: 330px;
  height: 630px;
`;

const TopRightFixed = styled.div`
  width: 370px;
  height: 630px;
  /* position: fixed; */
  top: 0px;
  margin-left: 50px;
  background-color: white;
`;

const SideBtnWrap = styled.div`
  margin-top: 20px;
`;

const SideBtn = styled(Link)`
  cursor: pointer;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  min-height: 58px;
  padding: 0 1rem;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background-color: rgb(95, 60, 250);
  border: 0.1rem solid rgb(95, 60, 250);
  border-radius: 1rem;
  text-align: center;
  box-sizing: border-box;
`;

const MiddleRightCss = styled.div`
  width: 330px;
  height: 630px;
`;
