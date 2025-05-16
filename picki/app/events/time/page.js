'use client'; // Mark this as a client-side component

import { useState } from 'react';
import Link from 'next/link'; // Import Link component for navigation
import ArrowButton from '../../components/arrowButton/ArrowButton';
import EventTimePicker from '../../components/eventTimePicker/eventTimePicker';
import { X } from 'lucide-react';
import '../events.css';


export default function EventTimePage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [eventTime, setEventTime] = useState('');

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

           
            <EventTimePicker
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              setEventTime={setEventTime}
            />
          </div>

         {/* Navigation Buttons */}
          <div className="event-nav">
            <Link href='/events'>
              <ArrowButton direction="left" /> {/* Navigate back to EventPage */}
            </Link>
            <Link href="">
              <ArrowButton direction="right" /> {/* Navigate to Event Summary page */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
