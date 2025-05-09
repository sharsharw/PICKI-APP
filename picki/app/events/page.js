'use client';

import { useState } from 'react';
import ArrowButton from '../components/arrowButton/ArrowButton';
import TypeFilter from '../components/TypeFilter/TypeFilter';
import './events.css';
import { Type } from 'lucide-react';


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
         
          
          <div className="back-button">
            <span>×</span>
          </div>
          
          <div className="create-event-form">
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
              <div className="filter-chip-container">
                <TypeFilter 
                  label="Food" 
                  selected={eventData.type === 'Food'} 
                  onClick={() => handleTypeSelect('Food')} 
                />
                <TypeFilter 
                  label="Activity" 
                  selected={eventData.type === 'Activity'} 
                  onClick={() => handleTypeSelect('Activity')} 
                />
                <TypeFilter 
                  label="Event" 
                  selected={eventData.type === 'Event'} 
                  onClick={() => handleTypeSelect('Event')} 
                />
                <TypeFilter 
                  label="Sight Seeing" 
                  selected={eventData.type === 'Sight Seeing'} 
                  onClick={() => handleTypeSelect('Sight Seeing')} 
                />
                <TypeFilter 
                  label="Other" 
                  selected={eventData.type === 'Other'} 
                  onClick={() => handleTypeSelect('Other')} 
                />
              </div>
            </div>
          </div>
        

          
           <div className="event-nav">
            <ArrowButton 
                direction="left" 
                onClick={handleNext} />
            <ArrowButton
                direction="right"
                onClick={handleNext} />
          </div>

          </div>
        </div>
      </div>

  );
}