import React, { useState, useRef } from "react";
import styled from "styled-components";
import needImg from "../../images/needImg.png";
import backLeft from "../../images/dateLeftArrow.png";
import backRight from "../../images/dateRightArrow.png";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import DatePicker from "react-datepicker";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";

import { addDays, getYear, getMonth } from "date-fns";
import { ko } from "date-fns/esm/locale";

import "./ShowPublic.css";
import InputEditor from "../../components/ShowPublish/InputEditor";
import InputList from "../../components/ShowPublish/InputList";
const ShowPublish = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [img, setImg] = useState("");
  const [apiData, setApiData] = useState({
    name: "",
    stageName: "",
    runningTime: "",
    ageLimit: "",
    description: "",
  });

  const dataId = useRef(0);
  const [seatData, setSeatData] = useState([]);

  const handleApiChange = (e) => {
    setApiData({ ...apiData, [e.target.name]: e.target.value });
  };

  const captureFile = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const file = e.target.files[0];
    setImg(file);
  };

  const onCreate = (grade, price, seats) => {
    const newItem = { grade, price, seats, id: dataId.current };
    dataId.current++;
    console.log(newItem);
    setSeatData([newItem, ...seatData]);
  };

  return (
    <div className="ShowPublic">
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
                  <InfoDiv>
                    <span>장소</span>
                    <StyledTextField
                      name="stageName"
                      type="text"
                      label="장소"
                      variant="standard"
                      value={apiData.stageName}
                      onChange={handleApiChange}
                    />
                  </InfoDiv>

                  <InfoDiv>
                    <span>공연 시간</span>
                    {!isNaN(apiData.runningTime) ? (
                      <StyledTextField
                        name="runningTime"
                        type="text"
                        label="공연시간(분)"
                        variant="standard"
                        value={apiData.runningTime}
                        onChange={handleApiChange}
                      />
                    ) : (
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <TextField
                          error
                          name="runningTime"
                          type="text"
                          label="공연시간(분)"
                          variant="standard"
                          value={apiData.runningTime}
                          onChange={handleApiChange}
                        />
                        <Alert severity="error">숫자를 입력해주세요.</Alert>
                      </div>
                    )}
                  </InfoDiv>
                  <InfoDiv>
                    <span>관람 연령</span>
                    {!isNaN(apiData.ageLimit) ? (
                      <StyledTextField
                        name="ageLimit"
                        type="text"
                        label="관람연령"
                        variant="standard"
                        value={apiData.ageLimit}
                        onChange={handleApiChange}
                      />
                    ) : (
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <TextField
                          error
                          name="ageLimit"
                          type="text"
                          label="관람연령"
                          variant="standard"
                          value={apiData.ageLimit}
                          onChange={handleApiChange}
                        />
                        <Alert severity="error">숫자를 입력해주세요.</Alert>
                      </div>
                    )}
                  </InfoDiv>
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
        <TopRightCss>
          <CoverBox>
            <SmallTitleCss style={{ marginTop: "20px", paddingTop: "4px" }}>
              판매 기간 선택
            </SmallTitleCss>
            <DatePickerBox>
              <MyDatePickerStart
                renderCustomHeader={({
                  date,
                  decreaseMonth,
                  increaseMonth,
                  prevMonthButtonDisabled,
                  nextMonthButtonDisabled,
                }) => {
                  let month = (getMonth(date) + 1).toString().padStart(2, "0");
                  return (
                    <div
                      style={{
                        margin: 10,
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: "20px",
                      }}
                    >
                      <div
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}
                      >
                        <img className="back" src={backLeft} alt="" />
                      </div>
                      {getYear(date)}. {month}
                      <div
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}
                      >
                        <img className="back" src={backRight} alt="" />
                      </div>
                    </div>
                  );
                }}
                selected={startDate}
                locale={ko}
                onChange={(date) => setStartDate(date)}
                showTimeSelect // 시간 나오게 하기
                timeFormat="HH:mm" //시간 포맷
                timeIntervals={30} // 30분 단위로 선택 가능한 box가 나옴
                timeCaption="time"
                dateFormat="yyyy-MM-dd h:mm aa"
                minDate={addDays(new Date(), 1)}
              />
              <p style={{ paddingLeft: "2px" }}>~</p>
              <MyDatePickerFinish
                renderCustomHeader={({
                  date,
                  decreaseMonth,
                  increaseMonth,
                  prevMonthButtonDisabled,
                  nextMonthButtonDisabled,
                }) => {
                  let month = (getMonth(date) + 1).toString().padStart(2, "0");
                  return (
                    <div
                      style={{
                        margin: 10,
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: "20px",
                      }}
                    >
                      <div
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}
                      >
                        <img className="back" src={backLeft} alt="" />
                      </div>
                      {getYear(date)}. {month}
                      <div
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}
                      >
                        <img className="back" src={backRight} alt="" />
                      </div>
                    </div>
                  );
                }}
                selected={endDate}
                locale={ko}
                onChange={(date) => setEndDate(date)}
                showTimeSelect // 시간 나오게 하기
                timeFormat="HH:mm" //시간 포맷
                timeIntervals={30} // 30분 단위로 선택 가능한 box가 나옴
                timeCaption="time"
                dateFormat="yyyy-MM-dd h:mm aa"
                minDate={startDate}
              />
            </DatePickerBox>
            <ColorHr></ColorHr>
            <SmallTitleCss>좌석</SmallTitleCss>
            <div>
              <InputEditor onCreate={onCreate} />
              <InputList inputList={seatData} />
            </div>
            <ColorHr style={{ marginTop: "20px" }}></ColorHr>
          </CoverBox>
          <SideBtnWrap>
            <SideBtn>공연 등록</SideBtn>
          </SideBtnWrap>
        </TopRightCss>
      </TopCss>
    </div>
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
    flex-direction: column;
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

const TopRightCss = styled.div`
  width: 330px;
  height: 700px;
  margin-top: 180px;
`;

const SmallTitleCss = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-top: 16px;
  margin-left: 18px;
  margin-bottom: 18px;
`;

const CoverBox = styled.div`
  width: 380px;
  height: 500px;
  border: 0.1rem solid #b6bdc7;
  border-radius: 15px;
`;

const DatePickerBox = styled.div`
  width: 380px;
  display: flex;
  justify-content: center;
`;

const MyDatePickerStart = styled(DatePicker)`
  width: 75%;
  margin-left: 25px;
  margin-bottom: 10px;
`;

const MyDatePickerFinish = styled(DatePicker)`
  width: 70%;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const ColorHr = styled.hr`
  margin-top: 10px;
  border: 0.5px solid #dadee2;
`;

const SideBtnWrap = styled.div`
  margin-top: 20px;
  width: 380px;
`;

const SideBtn = styled.div`
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
  cursor: pointer;
`;

const InfoDiv = styled.div`
  display: flex;
  margin-top: 20px;
  & > span {
    margin-top: 22px;
    margin-left: 5px;
    width: 80px;
    font-weight: 700;
  }
`;
