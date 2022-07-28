import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DatePick = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  return (
    <DatePicker startDate={startDate} endDate={endDate} inline></DatePicker>
  );
};

export default DatePick;
