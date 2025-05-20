'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { X } from 'lucide-react';
import CustomDatePicker from '../../components/datePicker/datePicker';
import SeparatedTimePicker from '../../components/timePicker/timePicker'; 
import EventNav from '../../components/eventNav/eventNav'; 
import '../events.css';

export default function EventTimePage() {
  const router = useRouter(); 
  
  
  const [eventDate, setEventDate] = useState(new Date());
  const [eventTime, setEventTime] = useState(new Date());

  
  const getCombinedDateTime = () => {
    const combinedDate = new Date(eventDate);
    combinedDate.setHours(eventTime.getHours(), eventTime.getMinutes(), 0, 0);
    return combinedDate;
  };
  
   const handleClose = () => {
    router.push('/events/home');
  };
  
  const handleStepChange = (step) => {
    switch(step) {
      case 1:
        router.push('/events');
        break;
      case 2:
        break;
      case 3:
        router.push('/events/rsvp');
        break;
      case 4:
        router.push('/events/cover');
        break;
      case 5:
        router.push('/events/invite');
        break;
      case 6:
        router.push('/events/confirm');
        break;
      default:
        break;
    }
  };

  return (
    <div className="event-creator-container">
      <div className="mobile-frame">
        <div className="event-page">
           <div className="close-button-container">
            <X 
              size={18} 
              strokeWidth={3} 
              className="close-icon" 
              onClick={handleClose} // Add onClick handler here
              style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
            />
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
          
          <div className="event-nav-bottom-bar">
            <EventNav 
              totalSteps={6} 
              currentStep={2} 
              onStepChange={handleStepChange} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}