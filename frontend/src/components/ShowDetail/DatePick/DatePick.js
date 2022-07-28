import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePick.css";
import { ko } from "date-fns/esm/locale";

const DatePick = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  return (
    <DatePicker
      startDate={startDate}
      endDate={endDate}
      inline
      locale={ko}
    ></DatePicker>
  );
};

export default DatePick;
