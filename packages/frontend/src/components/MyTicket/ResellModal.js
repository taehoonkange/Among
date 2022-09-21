import { Button } from "@mui/material";
import React, { useRef, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { patchResellTicket } from "../../actions/ticketResell";
import close from "../../images/close.png";
import { setReSellModalOpen } from "../../slice/settingModalSlice";
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.8);
`;

const Layout = styled.div`
  position: absolute;
  background-color: white;
  width: 300px;
  height: 230px;
  z-index: 10001;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;

  & img {
    position: absolute;
    top: 20px;
    left: calc(100% - 40px);
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-size: 26px;
  font-weight: 700;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const buttonCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  color: white;
`;

const ResellButton = styled.div`
  ${buttonCss}
  background-color: #ef3f43;
  margin-top: 5px;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px 20px 5px 5px;
  & > input {
    margin-left: 10px;
    width: 100px;
  }
  margin-bottom: 20px;
`;

const ResellModal = () => {
  const navigate = useNavigate();
  const [priceSetByUser, setPriceSetByUser] = useState("");
  const ticketDetailInfo = useSelector(
    (state) => state.ticketResell.ticketDetailInfo,
  );
  const ticketID = useSelector((state) => state.ticketBook.ticketID);
  console.log(ticketID);
  const price = useRef(Number(ticketDetailInfo.originalPrice)); // 티켓의 인플루언서가 처음 등록한 가격을 할당합니다.
  const dispatch = useDispatch();

  const onChangeText = (e) => {
    setPriceSetByUser(e.target.value);
  };

  /**
   * 사용자가 입력한 금액이 알맞은 형식인지 체크하여 api 요청을 보내는 함수 입니다.
   * @param {String} priceSetByUser 유저가 입력한 가격
   * @param {RefObject} price 인플루언서가 등록가 원래의 가격 useRef값
   */
  const checkTextAndRequest = useCallback(
    (priceSetByUser, price) => {
      console.log(typeof price);
      const regex = new RegExp(`^[0-9]+.{0,1}[0-9]*$`, "g"); // 첫시작이 무조건 숫자이도록 + 를 사용했으며 .{0,1}로 .이 0번 또는 1번이 오도록하였다. 그리고 그 뒤에 숫자는 입력되어도 되고 안되어도 된다.
      const judgment = regex.test(priceSetByUser);
      if (judgment && priceSetByUser[priceSetByUser.length - 1] !== ".") {
        // 위 정규식을 통과했을때 예외가 생길부분이 ex) 13. 과 같은 .이 맨마지막에 올때이다. 이 경우를 체크하여준다.

        if (
          0 <= parseFloat(Number(priceSetByUser)) &&
          parseFloat(Number(priceSetByUser)) <= price.current * 1.3
        ) {
          // 사용자가 입력한 금액이 0 이상 (인플루언서가 등록한 금액의*1.3) 이하이면 통과합니다.

          dispatch(
            patchResellTicket({
              price: String(priceSetByUser),
              ticketID: ticketID,
            }),
          );
          navigate("/MyPage");
          dispatch(setReSellModalOpen({ value: false }));
        } else {
          window.alert(price.current * 1.3);
          window.alert(parseFloat(Number(priceSetByUser)));
        }
      } else {
        window.alert("올바른 형식이 아닙니다. 입력하신가격을 확인해주세요.");
      }
    },
    [ticketID],
  );

  return (
    <ModalBackground>
      <Layout>
        <TitleWrapper>
          <Title>TradeTicket</Title>
        </TitleWrapper>
        <img
          onClick={() => {
            dispatch(setReSellModalOpen({ value: false }));
          }}
          src={close}
          alt=""
        />
        {/* <InputWrapper>
          <div>사용자 한마디</div>
          <input></input>
        </InputWrapper> */}
        <InputWrapper>
          <div>가격</div>
          <input
            value={priceSetByUser}
            onChange={onChangeText}
            type="text"
            pattern="[0-9]+"
            max={price.current * 1.3}
            min={0}
          ></input>
        </InputWrapper>
        <ButtonWrapper>
          <ResellButton
            onClick={() => checkTextAndRequest(priceSetByUser, price)}
          >
            거래 발급
          </ResellButton>
        </ButtonWrapper>
      </Layout>
    </ModalBackground>
  );
};

export default ResellModal;
