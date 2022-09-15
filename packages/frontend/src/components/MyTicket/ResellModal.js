import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
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
  padding: 5px 20px 5px 20px;
  & > input {
    margin-left: 10px;
  }
  margin-bottom: 20px;
`;
const ResellModal = () => {
  const dispatch = useDispatch();
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
          <input></input>
        </InputWrapper>
        <ButtonWrapper>
          <ResellButton>거래 발급</ResellButton>
        </ButtonWrapper>
      </Layout>
    </ModalBackground>
  );
};

export default ResellModal;
