'use client';

import { useState } from 'react';
import './events.css';

export default function EventPage() {
  const [eventData, setEventData] = useState({
    name: '',
    budget: 25, // Default value for slider
    type: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData(prev => ({ ...prev, [name]: value }));
  };

  const handleTypeSelect = (type) => {
    setEventData(prev => ({ ...prev, type }));
  };

  const handleNext = () => {
    // Here you would navigate to the next page or step
    console.log('Event data:', eventData);
    // This would typically use router.push('/next-step') or similar
  };

  return (
    <div className="event-creator-container">
      <div className="mobile-frame">
        <div className="event-page">
          <div className="status-bar">
            <div className="time">11:30</div>
            <div className="status-icons">
              <div className="signal"></div>
              <div className="wifi"></div>
              <div className="battery"></div>
            </div>
          </div>
          
          <div className="back-button">
            <span>×</span>
          </div>
          
          <div className="content">
            <h1>Create Event</h1>
            <p className="subtitle">What's the occasion?</p>
            
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={eventData.name}
                onChange={handleInputChange}
                placeholder="Event name"
                className="event-input"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Budget</label>
              <div className="budget-indicator">
                <div className="budget-icon">$</div>
              </div>
              <input
                type="range"
                name="budget"
                min="0"
                max="100"
                value={eventData.budget}
                onChange={handleInputChange}
                className="budget-slider"
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Type</label>
              <div className="type-buttons">
                <button 
                  className={`type-btn ${eventData.type === 'Food' ? 'active' : ''}`}
                  onClick={() => handleTypeSelect('Food')}
                >
                  Food <span className="plus-icon">+</span>
                </button>
                <button 
                  className={`type-btn ${eventData.type === 'Activity' ? 'active' : ''}`}
                  onClick={() => handleTypeSelect('Activity')}
                >
                  Activity <span className="plus-icon">+</span>
                </button>
                <button 
                  className={`type-btn ${eventData.type === 'Event' ? 'active' : ''}`}
                  onClick={() => handleTypeSelect('Event')}
                >
                  Event <span className="plus-icon">+</span>
                </button>
                <button 
                  className={`type-btn ${eventData.type === 'Sight Seeing' ? 'active' : ''}`}
                  onClick={() => handleTypeSelect('Sight Seeing')}
                >
                  Sight Seeing <span className="plus-icon">+</span>
                </button>
                <button 
                  className={`type-btn ${eventData.type === 'Other' ? 'active' : ''}`}
                  onClick={() => handleTypeSelect('Other')}
                >
                  Other <span className="plus-icon">+</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="footer">
            <div className="pagination">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <button className="next-btn" onClick={handleNext}>
              <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}