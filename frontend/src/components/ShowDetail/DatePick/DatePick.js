import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePick.css";
import { ko } from "date-fns/esm/locale";
import { addDays, subDays, getYear, getMonth } from "date-fns";
import backLeft from "../../../images/dateLeftArrow.png";
import backRight from "../../../images/dateRightArrow.png";
const DatePick = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  return (
    <DatePicker
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
              fontSize: "18px",
            }}
          >
            <div onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              <img className="back" src={backLeft} alt="" />
            </div>
            {getYear(date)}. {month}
            <div onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              <img className="back" src={backRight} alt="" />
            </div>
          </div>
        );
      }}
      startDate={startDate}
      endDate={endDate}
      inline
      locale={ko}
      includeDateIntervals={[
        { start: subDays(new Date(), 5), end: addDays(new Date(), 5) },
      ]}
    ></DatePicker>
  );
};

export default DatePick;
