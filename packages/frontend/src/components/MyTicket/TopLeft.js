import React, { useState, useCallback, useEffect } from "react";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import ResellModal from "./ResellModal";
import { setReSellModalOpen } from "../../slice/settingModalSlice";
import QRCode from "qrcode";

const TopLeft = () => {
  const [imageUrl, setImageUrl] = useState(""); // qr 코드로 만들어진 이미지를 저장하는 State
  const ticketID = useSelector((state) => state.ticketBook.ticketID);
  const [decoActive, setDecoActive] = useState(false);
  const [resellActive, setResellActive] = useState(false);
  const dispatch = useDispatch();
  const performanceDetail = useSelector(
    (state) => state.performance.performanceDetail,
  );
  const reSellModalOpen = useSelector(
    (state) => state.settingModalOpen.reSellModalOpen,
  );
  const ticketStatusDetail = useSelector(
    (state) => state.ticketResell.ticketStatusDetail,
  );
  /**
   * qr 코드를 생성하는 함수입니다.
   */
  const generateQrCode = useCallback(async () => {
    try {
      const ticket = JSON.stringify(ticketID);
      const response = await QRCode.toDataURL(ticket); // response 로 return 된 url을 저장합니다.
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  }, [ticketID]);

  const DecorateAndResellActivateDetermine = useCallback(() => {
    switch (ticketStatusDetail.ticketType) {
      case "사용됨":
        setDecoActive(true);
        setResellActive(false);
        break;
      case "보유중":
        setDecoActive(false);
        setResellActive(true);
        break;
      case "리셀중":
        setDecoActive(false);
        setResellActive(false);
        break;
      default:
        break;
    }
  }, [ticketStatusDetail]);
  useEffect(() => {
    generateQrCode();
    DecorateAndResellActivateDetermine();
  }, []);
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
          <div style={{ display: "flex", marginTop: "100px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {decoActive ? (
                <DecoButton to="/Decorate">꾸미기</DecoButton>
              ) : (
                <DisableButton>꾸미기</DisableButton>
              )}
              {resellActive ? (
                <ResellButton
                  onClick={() => {
                    dispatch(setReSellModalOpen({ value: true }));
                  }}
                >
                  리셀하기
                </ResellButton>
              ) : (
                <DisableButton>리셀하기</DisableButton>
              )}
            </div>
            {/* qr 코드가 정상적으로 생성되었다면 렌더링합니다. */}
            {imageUrl ? (
              <a href={imageUrl} download>
                {/*다운로드를 할 수 있습니다*/}
                <img style={{ marginLeft: "20px" }} src={imageUrl} alt="img" />
              </a>
            ) : null}
          </div>
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
  /* margin-top: 100px; */
  background-color: rgb(95, 60, 250);
  ${(props) => props.margin && css``}
`;

const ResellButton = styled.div`
  ${buttonCss}
  background-color: #ef3f43;
  margin-top: 5px;
`;

const DisableButton = styled.div`
  ${buttonCss}
  background-color:#A2A2A2;
  margin-top: 5px;
`;
