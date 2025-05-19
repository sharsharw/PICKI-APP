'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ArrowButton from '../../components/arrowButton/ArrowButton';
import { X } from 'lucide-react';
import CustomDatePicker from '../../components/datePicker/datePicker';
import '../events.css';

export default function EventRSVPPage() {
  const [eventDate, setEventDate] = useState(new Date());

  const datePickerStyle = {
    '--date-primary-color': '#278700',
    '--date-border-color': '#278700',
    '--date-selected-color': '#278700',
    '--date-hover-bg': 'rgba(39, 135, 0, 0.2)',
  };

  return (
    <div className="event-creator-container">
      <div className="mobile-frame">
        <div className="event-page">
          <div className="close-button-container">
            <X size={18} strokeWidth={3} className="close-icon" />
          </div>
          
          <div className="create-event-form">
            <h1>RSVP Deadline</h1>
            <p className="subtitle">Choose when members must RSVP and submit their picks.</p>

            <div className="date-picker-container" style={datePickerStyle}>
              <CustomDatePicker 
                selectedDate={eventDate}
                onChange={setEventDate}
                label="Select the last day to RSVP"
              />
            </div>
          </div>
          
          <div className="event-nav">
            <Link href='/events/time'>
              <ArrowButton direction="left" />
            </Link>
            <Link href='/events/cover'>
              <ArrowButton direction="right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}