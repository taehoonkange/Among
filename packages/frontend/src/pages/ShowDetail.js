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
import ClipLoader from "react-spinners/ClipLoader";
const ShowDetail = () => {
  const dispatch = useDispatch();
  const performanceId = useSelector((state) => state.performance.performanceId);
  const getPerformanceDetailLoading = useSelector(
    (state) => state.performance.getPerformanceDetailLoading,
  );
  const performanceDetail = useSelector(
    (state) => state.performance.performanceDetail,
  );
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
  }, [performanceId, userID]);
  useEffect(() => {
    return () => {
      dispatch(setPerformanceId({ value: 0 }));
    };
  }, []);

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
        <TopLeftCss>
          <TopLeft></TopLeft>
        </TopLeftCss>
        <TopRightCss>
          <TopRightFixed ref={detectScroll}>
            <TopRight></TopRight>
            {performanceDetail.UserId === userID ? (
              <>
                <SideBtnWrap>
                  <SideBtn to="/Show/Statistics">통계보기</SideBtn>
                </SideBtnWrap>
                <SideBtnWrap2>
                  <SideBtn2 to="/Show/QRcodeReader">QR코드 인식</SideBtn2>
                </SideBtnWrap2>
              </>
            ) : (
              <SideBtnWrap>
                <SideBtn to="/Show/SelectSeat">예매하기</SideBtn>
              </SideBtnWrap>
            )}
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
  z-index: 100;
  margin-top: 20px;
`;

const SideBtnWrap2 = styled.div`
  cursor: pointer;
  z-index: 100;
  margin-top: 10px;
`;
const SideBtn = styled(Link)`
  z-index: 100;
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

const SideBtn2 = styled(Link)`
  z-index: 100;
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
  background-color: #ef3f43;
  border: 0.1rem solid #ef3f43;
  border-radius: 1rem;
  text-align: center;
  box-sizing: border-box;
`;

const MiddleRightCss = styled.div`
  margin-top: 150px;
  width: 330px;
  height: 480px;
`;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
