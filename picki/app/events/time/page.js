'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ArrowButton from '../../components/arrowButton/ArrowButton';
import { X } from 'lucide-react';
import CustomDatePicker from '../../components/datePicker/datePicker';
import SeparatedTimePicker from '../../components/timePicker/timePicker'; // Import the new component
import '../events.css';

export default function EventTimePage() {
  const [eventDate, setEventDate] = useState(new Date());
  const [eventTime, setEventTime] = useState(new Date()); // Time state

  // Optional: Function to combine date and time
  const getCombinedDateTime = () => {
    const combinedDate = new Date(eventDate);
    combinedDate.setHours(
      eventTime.getHours(),
      eventTime.getMinutes(),
      0,
      0
    );
    return combinedDate;
  };

  return (
    <div className="event-creator-container bg-gray-100 p-8 rounded-lg shadow-xl">
      <div className="mobile-frame max-w-lg mx-auto">
        <div className="event-page bg-white rounded-lg shadow-lg p-6">
          <div className="close-button-container flex justify-end">
            <X size={18} strokeWidth={3} className="close-icon cursor-pointer text-gray-600" />
          </div>
          
          <div className="create-event-form">
            <h1 className="text-2xl font-bold text-gray-800">Event Time</h1>
            <p className="subtitle text-sm text-gray-500 mb-6">Pick when your event will happen.</p>

            {/* Date Picker */}
            <div className="mb-6">
              <CustomDatePicker 
                selectedDate={eventDate}
                onChange={setEventDate}
                label="Select the date of the event"
              />
            </div>

            {/* Time Picker (Separated) */}
            <div className="mb-6">
              <SeparatedTimePicker
                selectedTime={eventTime}
                onChange={setEventTime}
                label="Select the time of the event"
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="event-nav mt-4 flex justify-between">
            <Link href='/events'>
              <ArrowButton direction="left" className="bg-indigo-500 text-white p-2 rounded-full" />
            </Link>
            <Link href="">
              <ArrowButton direction="right" className="bg-indigo-500 text-white p-2 rounded-full" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}