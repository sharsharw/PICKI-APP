'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { X } from 'lucide-react';
import CustomDatePicker from '../../components/datePicker/datePicker';
import EventNav from '../../components/eventNav/eventNav'; 
import '../events.css';

export default function EventRSVPPage() {
  const router = useRouter(); 
  const [eventDate, setEventDate] = useState(new Date());

  const datePickerStyle = {
    '--date-primary-color': '#278700',
    '--date-border-color': '#278700',
    '--date-selected-color': '#278700',
    '--date-hover-bg': 'rgba(39, 135, 0, 0.2)',
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
        router.push('/events/time');
        break;
      case 3:
        // Current page
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
              onClick={handleClose} 
              style={{ cursor: 'pointer' }} 
            />
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
          
          <div className="event-nav-bottom-bar">
            <EventNav 
              totalSteps={6} 
              currentStep={3} 
              onStepChange={handleStepChange} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}