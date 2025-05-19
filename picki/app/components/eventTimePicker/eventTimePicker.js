'use client';

import React from 'react';

import './eventTimePicker.css';

export default function EventTimePicker({ selectedDate, setSelectedDate, setEventTime }) {
  const dates = [
    { day: 'Sun', date: 'Mar 16', time: '11:50' },
    { day: 'Mon', date: 'Mar 17', time: '12:55' },
    { day: 'Tue', date: 'Mar 18', time: '1:00 AM' },
    { day: 'Wed', date: 'Mar 19', time: '2:05' },
    { day: 'Thu', date: 'Mar 20', time: '3:10' },
  ];

  const handleClick = (date) => {
    setSelectedDate(date);
    setEventTime(`Saturday ${date}, 6:00 PM`);
  };

  return (
    <div className="time-picker">
      <table className="time-table">
        <thead>
          <tr>
            {dates.map((date, index) => (
              <th key={index}>{date.day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {dates.map((date, index) => (
              <td
                key={index}
                className={selectedDate === `${date.day} ${date.date}` ? "selected" : ""}
                onClick={() => handleClick(`${date.day} ${date.date}`)}
              >
                {date.date}
              </td>
            ))}
          </tr>
          <tr>
            {dates.map((date, index) => (
              <td key={index}>{date.time}</td>
            ))}
          </tr>
        </tbody>
      </table>
      <div className="event-time">
        <p>{selectedDate}</p>
      </div>
    </div>
  );
}
