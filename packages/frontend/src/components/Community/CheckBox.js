import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CheckInput = styled.input.attrs({
  type: "checkbox",
})`
  appearance: none;
  -webkit-appearance: none;
`;

const CheckBoxFrame1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  background-color: ${(props) =>
    props.state === "NORMAL" ? "rgb(95, 60, 250)" : "#d5d5d5"};
  border-radius: 5px;
  cursor: pointer;
`;

const CheckBoxFrame2 = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  background-color: ${(props) =>
    props.state === "VIP" ? "rgb(95, 60, 250)" : "#d5d5d5"};
  border-radius: 5px;
  cursor: pointer;
`;

const FontAwesome = styled(FontAwesomeIcon)`
  font-size: 18px;
  color: white;
`;

const Label = styled.label`
  margin-left: 3px;
  color: #4c4c4c;
  font-size: 16px;
  cursor: pointer;
`;

export default function App({ check, setCheck }) {
  //   const [check, setCheck] = useState("");
  const [backgroundCheckBox1, setBackgroundCheckBox1] = useState(false);
  const [backgroundCheckBox2, setBackgroundCheckBox2] = useState(false);

  const onChangeNormal = (e) => {
    setCheck(e.target.value);
    console.log(e.target.value);
  };
  return (
    <CheckBoxWrapper>
      <CheckBoxFrame1
        onClick={() => {
          setCheck("NORMAL");
          setBackgroundCheckBox1(false);
        }}
        state={check}
        backgroundCheckBox={backgroundCheckBox1}
      >
        {check === "NORMAL" && <FontAwesome icon={faCheck}></FontAwesome>}
      </CheckBoxFrame1>
      <CheckInput
        value="NORMAL" // value 값 할당
        name="inputs"
        onChange={onChangeNormal} // onChange 함수 사용
        id="chk1"
      ></CheckInput>
      <Label
        onClick={() => {
          // setChecked(true);
          setBackgroundCheckBox1(false);
        }}
        htmlFor="chk1"
      >
        모든회원공개
      </Label>

      <CheckBoxFrame2
        onClick={() => {
          setCheck("VIP");
          setBackgroundCheckBox2(false);
        }}
        state={check}
        backgroundCheckBox={backgroundCheckBox2}
      >
        {check === "VIP" && <FontAwesome icon={faCheck}></FontAwesome>}
      </CheckBoxFrame2>
      <CheckInput
        value="VIP" // value 값 할당
        name="inputs"
        onChange={onChangeNormal} // onChange 함수 사용
        id="chk2"
      ></CheckInput>
      <Label
        onClick={() => {
          // setChecked(true);
          setBackgroundCheckBox2(false);
        }}
        htmlFor="chk2"
      >
        VIP회원만공개
      </Label>
    </CheckBoxWrapper>
  );
}
