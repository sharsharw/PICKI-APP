'use client';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './datePicker.css';

const CustomDatePicker = ({ 
  selectedDate,
  onChange,
  label = 'Select Date',
  placeholder = 'Click to select date'
}) => {
  const [date, setDate] = useState(selectedDate || new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    if (onChange) {
      onChange(newDate);
    }
  };

  // Format date for display
  const formatDate = (date) => {
    if (!date) return '--';
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    }).format(date);
  };

  return (
    <div className="custom-date-picker">
      <label className="date-label">{label}</label>
      <div className="date-input-wrapper">
        <DatePicker
          selected={date}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
          placeholderText={placeholder}
          className="date-input"
          shouldCloseOnSelect={false} // This prevents closing when selecting a date
          // Add this prop to ensure it closes when clicking outside
          onClickOutside={() => document.activeElement.blur()}
        />
      </div>
      
      <p className="date-display">
        {formatDate(date)}
      </p>
    </div>
  );
};

export default CustomDatePicker;