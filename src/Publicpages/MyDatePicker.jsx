// src/Components/Common/MyDatePicker.jsx
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function MyDatePicker({ selectedDate, onChange, placeholder }) {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      placeholderText={placeholder}
      style={{
        padding: "10px 15px",
        borderRadius: 6,
        border: "1px solid #ccc",
        width: "100%",
      }}
    />
  );
}
