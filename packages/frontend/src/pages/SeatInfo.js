import React, { useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

import DatePicker from "react-datepicker";

import { useDispatch } from "react-redux";
// import { performanceUploadImages } from "../../actions/performance";
import dayjs from "dayjs";
import SeatInfomation from "../components/ShowPublish/SeatInfomation";

const ShowPublish = () => {
  const dispatch = useDispatch();
  const imageInput = useRef();
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

  return (
    <div className="ShowPublic">
      <TopCss>
        <TopLeft>
          <TopLeftCss>
            <UpperTitleArea>공연 등록</UpperTitleArea>
            <SeatInfomation></SeatInfomation>
          </TopLeftCss>
        </TopLeft>
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
  margin: 40px 40px 40px 0px;
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
  cursor: pointer;
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

const SideBtn = styled(Link)`
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
