import React, { useState, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { ru } from "date-fns/locale";

registerLocale("ru", ru);

const DatePickerStyles = createGlobalStyle`
  .react-datepicker {
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .react-datepicker__loop {
    display: flex;
    justify-content: center;
  }

  .react-datepicker__portal {
    width: 27%;
    left: 35%;
    background-color: transparent;
  }
`;

const Container = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  width: fit-content;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  padding: 10px;
  text-align: center;
  width: 84px;
  font-size: 16px;
  background-color: transparent;
  color: white;
  &:not(:last-child) {
    border-right: 1px solid #ccc;
  }
  &:focus {
    outline: none;
  }
  cursor: pointer;
`;

export const DateInput = ({theme}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const datePickerRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDay(date.getDate().toString().padStart(2, "0"));
    setMonth(date.toLocaleString("ru", { month: "long" }));
    setYear(date.getFullYear().toString());
  };

  const openDatePicker = () => {
    datePickerRef.current.setOpen(true);
  };

  return (
    <Container style={{ borderColor: theme === "light" ? "black" : "#6F7580" }}>
      <DatePickerStyles/>
      <Input
        type="text"
        value={day}
        onClick={openDatePicker}
        readOnly
        placeholder="DD"
        style={{
          textAlign: "right",
          color: theme === "light" ? "black" : "white",
          borderColor: theme === "light" ? "black" : "#6F7580",
        }}
      />
      <Input
        type="text"
        value={month}
        onClick={openDatePicker}
        readOnly
        placeholder="MMMM"
        style={{
          color: theme === "light" ? "black" : "white",
          borderColor: theme === "light" ? "black" : "#6F7580",
        }}
      />
      <Input
        type="text"
        value={year}
        onClick={openDatePicker}
        readOnly
        placeholder="YYYY"
        style={{
          textAlign: "left",
          color: theme === "light" ? "black" : "white",
          borderColor: theme === "light" ? "black" : "#ccc",
        }}
      />
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd MMMM yyyy"
        ref={datePickerRef}
        customInput={<></>}
        withPortal
        locale="ru"
      />
    </Container>
  );
};
