import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
const ShowPublish = () => {
  const [apiData, setApiData] = useState({
    name: "",
  });
  const handleApiChange = (e) => {
    setApiData({ ...apiData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <TopCss>
        <TopLeft>
          <TopLeftCss>
            <UpperTitleArea>공연 등록</UpperTitleArea>
            <TicketTitle>
              <TextField
                name="name"
                type="text"
                label="공연 제목"
                placeholder="공연 제목을 적어주세요"
                variant="standard"
                value={apiData.name}
                onChange={handleApiChange}
                style={{ width: 600 }}
                inputProps={{
                  style: { fontSize: 36, fontWeight: "bold" },
                }} // font size of input text
                InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
              />
            </TicketTitle>
          </TopLeftCss>
        </TopLeft>
      </TopCss>
    </>
  );
};

export default ShowPublish;

const TopCss = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
`;

const TopLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopLeftCss = styled.div`
  width: 670px;
  height: 680px;
`;

const UpperTitleArea = styled.div`
  margin: 40px 40px 20px 0px;
  font-size: 36px;
  font-weight: 700;
`;

const TicketTitle = styled.h1`
  margin-left: 0px;
`;
