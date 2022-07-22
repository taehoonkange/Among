import React, { useState } from "react";
import styled from "styled-components";
import Fox from "../images/MetaMask_Fox.png";

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

const MyPage = () => {
  const [account, setAccount] = useState("");

  const onC = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } else {
        // metamask가 설치되어있지 않은 경우 alert
        alert("Install Metamask!");
      }
    } catch (err) {
      console.error(err);
    }
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
