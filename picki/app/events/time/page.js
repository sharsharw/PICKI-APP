'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ArrowButton from '../../components/arrowButton/ArrowButton';
import { X } from 'lucide-react';
import CustomDatePicker from '../../components/datePicker/datePicker';
import SeparatedTimePicker from '../../components/timePicker/timePicker'; 
import '../events.css';

export default function EventTimePage() {
  // State for date and time
  const [eventDate, setEventDate] = useState(new Date());
  const [eventTime, setEventTime] = useState(new Date());

  // Utility function to combine date and time
  const getCombinedDateTime = () => {
    const combinedDate = new Date(eventDate);
    combinedDate.setHours(eventTime.getHours(), eventTime.getMinutes(), 0, 0);
    return combinedDate;
  };

  return (
    <div className="event-creator-container">
      <div className="mobile-frame">
        <div className="event-page">
          <div className="close-button-container">
            <X size={18} strokeWidth={3} className="close-icon" />
          </div>
          
          <div className="create-event-form">
            <h1>Event Time</h1>
            <p className="subtitle">Pick when your event will happen.</p>

            <div className="date-picker-container">
              <CustomDatePicker 
                selectedDate={eventDate}
                onChange={setEventDate}
                label="Select the date of the event"
              />
            </div>

            <div className="time-picker-container">
              <SeparatedTimePicker
                selectedTime={eventTime}
                onChange={setEventTime}
                label="Select the time of the event"
              />
            </div>
          </div>
          
          <div className="event-nav">
            <Link href='/events'>
              <ArrowButton direction="left" />
            </Link>
            <Link href="/events/rsvp">
              <ArrowButton direction="right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}