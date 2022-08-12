import React, { useState } from "react";
import styled from "styled-components";
import Alert from "@mui/material/Alert";

const ContainDiv = styled.div`
  display: flex;
  justify-content: left;
  margin-left: 10px;
`;

const StyledInput = styled.input`
  width: 75px;
  height: 30px;
  margin-left: 10px;
`;

const StlyedButton = styled.button`
  height: 44px;
  padding: 5px;
  margin-left: 10px;
`;

const WarningArea = styled.div`
  margin: 10px;
`;

function InputEditor({ onCreate }) {
  const [warning, setWarning] = useState(false);
  const [state, setState] = useState({ grade: "", price: "", seats: "" });

  const handleChangeState = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (state.grade === "" || state.price === "" || state.seats === "") {
      setWarning(true);
    } else {
      setWarning(false);
      onCreate(state.grade, parseInt(state.price), parseInt(state.seats));
      // 초기화
      setState({
        grade: "",
        price: "",
        seats: "",
      });
    }
  };

  return (
    <>
      <div>
        <ContainDiv>
          <StyledInput
            type="text"
            name="grade"
            placeholder="등급"
            value={state.grade}
            onChange={handleChangeState}
          />
          <StyledInput
            type="number"
            name="price"
            placeholder="가격(ETH)"
            value={state.price}
            onChange={handleChangeState}
          />
          <StyledInput
            type="number"
            name="seats"
            placeholder="좌석 수"
            value={state.seats}
            onChange={handleChangeState}
          />
          <StlyedButton onClick={handleSubmit}>추가</StlyedButton>
        </ContainDiv>
        <WarningArea>
          {warning && (
            <Alert
              sx={{ width: "305px", marginLeft: "10px" }}
              severity="warning"
            >
              좌석 정보를 모두 입력해주세요.
            </Alert>
          )}
        </WarningArea>
      </div>
    </>
  );
}

export default InputEditor;
