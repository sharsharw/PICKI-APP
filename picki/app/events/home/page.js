'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';  
import './home.css';
import { ChevronRight } from 'lucide-react';

export default function HomePage() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const today = new Date();
  const currentDay = today.getDate();
  
  const userData = {
    name: 'Amy',
  };
  
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
    const days = [];
 
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
  
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div 
          key={day} 
          className={`calendar-day ${day === currentDay && month === today.getMonth() ? 'today' : ''}`}
        >
          {day}
        </div>
      );
    }
    
    return days;
  };
  
  // Event card component
  const EventCard = ({ event }) => {
    return (
      <div className="event-card">
        <div className="event-card-content">
          <h3 className="event-title">{event.title}</h3>
          <div className="event-details">
            <div className="event-date-time">{event.date} {event.time}</div>
            <div className="event-host">Host: <span className="host-name">{event.host}</span></div>
          </div>
        </div>
        <div className="event-arrow">
          <ChevronRight size={24} color="#000" />
        </div>
      </div>
    );
  };

  return (
    <div className="event-creator-container">
      <div className="mobile-frame">
        <div className="home-content">
          {/* Greeting Section */}
          <div className="greeting-section">
            <h1 className="greeting-title">Hey {userData.name},</h1>
            <p className="greeting-subtitle">Here's your plan.</p>
          </div>
          
          {/* Calendar Section */}
          <div className="calendar-section">
            <div className="calendar-header">
              <div className="calendar-day-header">Sun</div>
              <div className="calendar-day-header">Mon</div>
              <div className="calendar-day-header">Tue</div>
              <div className="calendar-day-header">Wed</div>
              <div className="calendar-day-header">Thu</div>
              <div className="calendar-day-header">Fri</div>
              <div className="calendar-day-header">Sat</div>
            </div>
            <div className="calendar-days">
              {generateCalendarDays()}
            </div>
          </div>
          
          {/* Upcoming Events Section */}
          <div className="section">
            <h2 className="section-title">Upcoming</h2>
            <div className="empty-state">
             <div className="sad-face">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="38" stroke="#391E99" strokeWidth="5"/>
                    <circle cx="27" cy="32" r="3" fill="#391E99"/>
                    <circle cx="53" cy="32" r="3" fill="#391E99"/>
                    <path d="M30 52C35 46 45 46 50 52" stroke="#391E99" strokeWidth="5" strokeLinecap="round"/>
                </svg>
                </div>
              <p className="empty-text">No upcoming events yet</p>
            </div>
          </div>
          
          {/* Invited Events Section */}
            <div className="section">
            <h2 className="section-title">You're invited to...</h2>
            <div className="empty-state">
                <div className="sad-face">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="38" stroke="#FF82BC" strokeWidth="5"/>
                    <circle cx="27" cy="32" r="3" fill="#FF82BC"/>
                    <circle cx="53" cy="32" r="3" fill="#FF82BC"/>
                    <path d="M30 52C35 46 45 46 50 52" stroke="#FF82BC" strokeWidth="5" strokeLinecap="round"/>
                </svg>
                </div>
                <p className="empty-text">Not invited to any events yet.</p>
            </div>
            </div>
            </div>
        
        <div className="event-nav-bottom-bar">
          <Navbar />
        </div>
      </div>
    </div>
  );
}