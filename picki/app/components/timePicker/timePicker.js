'use client';

import React, { useState, useEffect, useRef } from 'react';
import './timePicker.css';

function SeparatedTimePicker({ selectedTime, onChange, label }) {
  // Initialize with provided time or defaults
  const initTime = selectedTime || new Date();
  const [hour, setHour] = useState(initTime.getHours() % 12 || 12);
  const [minute, setMinute] = useState(initTime.getMinutes());
  const [ampm, setAmpm] = useState(initTime.getHours() >= 12 ? 'PM' : 'AM');
  
  // Dropdown visibility states
  const [hourOpen, setHourOpen] = useState(false);
  const [minuteOpen, setMinuteOpen] = useState(false);
  const [ampmOpen, setAmpmOpen] = useState(false);

  // Refs for handling clicks outside
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const ampmRef = useRef(null);

  // Generate hour options (1-12)
  const hourOptions = [];
  for (let i = 1; i <= 12; i++) {
    hourOptions.push(i);
  }

  // Generate minute options (00-59)
  const minuteOptions = [];
  for (let i = 0; i < 60; i += 5) { // 5-minute intervals
    minuteOptions.push(i);
  }

  // AM/PM options
  const ampmOptions = ['AM', 'PM'];

  // Format the display time
  const formatTimeDisplay = () => {
    const hourStr = hour.toString();
    const minuteStr = minute.toString().padStart(2, '0');
    return `${hourStr}:${minuteStr} ${ampm}`;
  };

  // Handle time change and call onChange callback
  const updateTime = (h, m, period) => {
    // Convert hours to 24-hour format
    let hours24 = h;
    if (period === 'PM' && h < 12) hours24 = h + 12;
    if (period === 'AM' && h === 12) hours24 = 0;
    
    // Create new date object with selected time
    const newDate = new Date();
    newDate.setHours(hours24, m, 0, 0);
    
    if (onChange) {
      onChange(newDate);
    }
  };

  // Handle click outside to close dropdowns
  useEffect(() => {
    function handleClickOutside(event) {
      if (hourRef.current && !hourRef.current.contains(event.target)) {
        setHourOpen(false);
      }
      if (minuteRef.current && !minuteRef.current.contains(event.target)) {
        setMinuteOpen(false);
      }
      if (ampmRef.current && !ampmRef.current.contains(event.target)) {
        setAmpmOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle hour selection
  const handleHourSelect = (h) => {
    setHour(h);
    setHourOpen(false);
    updateTime(h, minute, ampm);
  };

  // Handle minute selection
  const handleMinuteSelect = (m) => {
    setMinute(m);
    setMinuteOpen(false);
    updateTime(hour, m, ampm);
  };

  // Handle AM/PM selection
  const handleAmPmSelect = (period) => {
    setAmpm(period);
    setAmpmOpen(false);
    updateTime(hour, minute, period);
  };

  return (
    <div className="separated-time-picker">
      <label className="time-label">{label || 'Select Time'}</label>
      
      <div className="time-selectors-container">
        {/* Hour Dropdown */}
        <div className="time-selector" ref={hourRef}>
          <button 
            className="time-selector-button"
            onClick={() => {
              setHourOpen(!hourOpen);
              setMinuteOpen(false);
              setAmpmOpen(false);
            }}
          >
            <span>{hour}</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="12" 
              height="12" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`dropdown-arrow ${hourOpen ? 'open' : ''}`}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          
          {hourOpen && (
            <div className="options-dropdown">
              {hourOptions.map((h) => (
                <div 
                  key={`hour-${h}`} 
                  className={`time-option ${h === hour ? 'selected' : ''}`}
                  onClick={() => handleHourSelect(h)}
                >
                  {h}
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="time-separator">:</div>
        
        {/* Minute Dropdown */}
        <div className="time-selector" ref={minuteRef}>
          <button 
            className="time-selector-button"
            onClick={() => {
              setMinuteOpen(!minuteOpen);
              setHourOpen(false);
              setAmpmOpen(false);
            }}
          >
            <span>{minute.toString().padStart(2, '0')}</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="12" 
              height="12" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`dropdown-arrow ${minuteOpen ? 'open' : ''}`}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          
          {minuteOpen && (
            <div className="options-dropdown minute-dropdown">
              {minuteOptions.map((m) => (
                <div 
                  key={`minute-${m}`} 
                  className={`time-option ${m === minute ? 'selected' : ''}`}
                  onClick={() => handleMinuteSelect(m)}
                >
                  {m.toString().padStart(2, '0')}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* AM/PM Dropdown */}
        <div className="time-selector ampm-selector" ref={ampmRef}>
          <button 
            className="time-selector-button"
            onClick={() => {
              setAmpmOpen(!ampmOpen);
              setHourOpen(false);
              setMinuteOpen(false);
            }}
          >
            <span>{ampm}</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="12" 
              height="12" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`dropdown-arrow ${ampmOpen ? 'open' : ''}`}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          
          {ampmOpen && (
            <div className="options-dropdown ampm-dropdown">
              {ampmOptions.map((period) => (
                <div 
                  key={`ampm-${period}`} 
                  className={`time-option ${period === ampm ? 'selected' : ''}`}
                  onClick={() => handleAmPmSelect(period)}
                >
                  {period}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <p className="time-display">
        Selected time: {formatTimeDisplay()}
      </p>
    </div>
  );
}

export default SeparatedTimePicker;