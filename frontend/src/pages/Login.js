import React from "react";
import styled from "styled-components";
import Fox from "../images/MetaMask_Fox.png";
import { useNavigate } from "react-router-dom";
import axios from "../api";

const MyPage = () => {
  const navigate = useNavigate();

  const onC = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts[0]);
        window.localStorage.setItem("isConnect", "true");
        try {
          const resRegister = await axios.post("/user", {
            wallet_address: accounts[0],
          });
          console.log(resRegister);
        } catch (err) {
          console.log(err);
        } finally {
          const resLogin = await axios.post(
            "/user/login",
            {
              wallet_address: accounts[0],
              nickname: "dd",
            },
            { withCredentials: true },
          );
          console.log(resLogin);
        }
      } else {
        // metamask가 설치되어있지 않은 경우 alert
        alert("Install Metamask!");
      }
    } catch (err) {
      // console.error(err.code);
      if (err.code === -32002) {
        window.alert("메타마스크 로그인이 이미 실행중입니다.");
      }
    }

    navigate("/MyPage");
    // window.location.reload(false);
  };

  return (
    <UnconnectedContainer>
      <h1 style={{ marginTop: "5%", fontSize: "50px" }}>
        아래 버튼을 눌러 지갑을 연결해주세요.
      </h1>
      <LogInButton variant="contained" onClick={onC}>
        <img
          src={Fox}
          alt="foxie"
          style={{ width: "100px", height: "100px" }}
        />
        Metamask
      </LogInButton>
    </UnconnectedContainer>
  );
};

export default MyPage;
const UnconnectedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  margin-top: 5rem;
`;

const LogInButton = styled.button`
  font-family: "MaplestoryOTFBold";
  background: white;
  color: black;
  border-radius: 7px;
  border: 1px solid #e5e5e5;
  padding: 1.5rem 14rem;
  margin-top: 48px;
  box-sizing: border-box;
  font-size: 30px;
  font-weight: 500;
  cursor: pointer;
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: rgba(229, 229, 229, 0.8);
  }
`;
