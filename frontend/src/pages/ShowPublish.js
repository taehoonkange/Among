import React, { useState } from "react";
import styled from "styled-components";
import needImg from "../images/needImg.png";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ShowPublish = () => {
  const [img, setImg] = useState("");
  const [apiData, setApiData] = useState({
    name: "",
    stageName: "",
    runningTime: "",
    ageLimit: "",
  });
  const handleApiChange = (e) => {
    setApiData({ ...apiData, [e.target.name]: e.target.value });
  };

  const captureFile = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const file = e.target.files[0];
    setImg(file);
  };

  return (
    <>
      <TopCss>
        <TopLeft>
          <TopLeftCss>
            <UpperTitleArea>공연 등록</UpperTitleArea>
            <TicketTitle>
              <StyledTextField
                name="name"
                type="text"
                label="공연 제목"
                placeholder="공연 제목을 적어주세요"
                variant="standard"
                value={apiData.name}
                onChange={handleApiChange}
                style={{ width: 600 }}
                inputProps={{
                  style: { fontSize: 24, fontWeight: "bold" },
                }} // font size of input text
                InputLabelProps={{ style: { fontSize: 20 } }} // font size of input label
              />
            </TicketTitle>
            <UnderTitle>
              <PosterArea>
                <Poster
                  src={img ? URL.createObjectURL(img) : needImg}
                  alt="등록 버튼을 눌러주세요."
                ></Poster>
              </PosterArea>
              <InfoWrapper>
                <div>
                  <div className="infoHeader">
                    <th>장소</th>
                    <th>공연 시간</th>
                    <th>관람 연령</th>
                  </div>
                  <div className="infoBody">
                    <td>
                      <StyledTextField
                        name="stageName"
                        type="text"
                        label="장소"
                        variant="standard"
                        value={apiData.stageName}
                        onChange={handleApiChange}
                      />
                    </td>
                    <td>
                      <StyledTextField
                        name="runningTime"
                        type="number"
                        label="공연시간(분)"
                        variant="standard"
                        value={apiData.runningTime}
                        onChange={handleApiChange}
                      />
                    </td>
                    <td>
                      <StyledTextField
                        name="ageLimit"
                        type="number"
                        label="관람연령"
                        variant="standard"
                        value={apiData.ageLimit}
                        onChange={handleApiChange}
                      />
                    </td>
                    <SubmitButtonArea>
                      <div>
                        <Button
                          sx={{
                            color: "white",
                            borderColor: "rgb(95, 60, 250)",
                            backgroundColor: "rgb(95, 60, 250)",
                            borderRadius: 3,
                            py: 0.5,
                            mr: 2,
                            "&:hover": {
                              backgroundColor: "rgb(53, 15, 224)",
                            },
                          }}
                          variant="outlined"
                          component="label" // 이거 안해주면 작동을 안하네요..
                        >
                          파일 선택
                          <input
                            type="file"
                            accept="image/*"
                            onChange={captureFile}
                            hidden
                          />
                        </Button>
                      </div>
                    </SubmitButtonArea>
                  </div>
                </div>
              </InfoWrapper>
            </UnderTitle>
          </TopLeftCss>
          <TicketTitle2>상세 정보</TicketTitle2>
          <StyledTextField
            name="description"
            type="text"
            label="공연 정보"
            rows={4}
            multiline
            value={apiData.description}
            sx={{ width: "600px" }}
            onChange={handleApiChange}
          ></StyledTextField>
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

const UnderTitle = styled.div`
  display: flex;
  justify-content: start;
`;

const PosterArea = styled.div`
  width: 300px;
  height: 400px;
  margin-top: 40px;
  background-color: #d5d8dc;
  border-radius: 15px;
`;

const Poster = styled.img`
  width: 296px;
  height: 396px;
  margin-left: 2px;
  margin-top: 2px;
  border-radius: 12px;
  margin-right: 20px;
`;

const SubmitButtonArea = styled.div`
  margin-top: 30px;

  & > div {
    display: flex;
    justify-content: center;
  }
`;

const InfoWrapper = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 100px;

  & > div {
    display: flex;
  }

  & > div > .infoHeader {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 20px;
  }

  th {
    margin-bottom: 28px;
  }

  th,
  td {
    padding: 10px;
  }

  & > div > .infoBody {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;

const TicketTitle2 = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
`;

const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    color: rgb(95, 60, 250);
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: rgb(95, 60, 250);
    }
    & fieldset {
      border: 2px solid #ced4da;
    }
  }
  & .MuiInput-underline::after {
    border-bottom: 2px solid rgb(95, 60, 250);
  }
`;
