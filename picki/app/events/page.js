'use client';

import { useState } from 'react';
import ArrowButton from '../components/arrowButton/ArrowButton';
import TypeFilter from '../components/TypeFilter/TypeFilter';
import { X } from 'lucide-react';
import './events.css';


export default function EventPage() {
  // Add the types array to the initial state
  const [eventData, setEventData] = useState({
    name: '',
    budget: 25, // Default value for slider
    type: '',   // Keep this for backward compatibility if needed
    types: []   // Add this for multiple selection
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData(prev => ({ ...prev, [name]: value }));
  };

  const handleTypeSelect = (type) => {
    setEventData(prev => {
      // Check if the type is already selected
      if (prev.types.includes(type)) {
        // If selected, remove it from the array
        return { 
          ...prev, 
          types: prev.types.filter(t => t !== type),
          type: '' // Update single type for backward compatibility
        };
      } else {
        // If not selected, add it to the array
        return { 
          ...prev, 
          types: [...prev.types, type],
          type: type // Update single type for backward compatibility
        };
      }
    });
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
         
          
          <div className="close-button-container">
                <X size={18} strokeWidth={3} className="close-icon"/>
          </div>
          
          <div className="create-event-form">
            <h1>Create Event</h1>
            <p className="subtitle">What's the occasion?</p>
            
            <div className="event-name-input">
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
                    selected={eventData.types.includes('Food')}
                    onClick={() => handleTypeSelect('Food')} 
                    className='food-chip'
                  />
                  <TypeFilter 
                    label="Activity" 
                    selected={eventData.types.includes('Activity')}
                    onClick={() => handleTypeSelect('Activity')} 
                    className='activity-chip'
                  />
                  <TypeFilter 
                    label="Event" 
                    selected={eventData.types.includes('Event')}
                    onClick={() => handleTypeSelect('Event')} 
                    className='event-chip'
                  />
               
      
                  <TypeFilter 
                    label="Sight Seeing" 
                    selected={eventData.types.includes('Sight Seeing')}
                    onClick={() => handleTypeSelect('Sight Seeing')} 
                    className="sight-seeing-chip"
                  />
                  <TypeFilter 
                    label="Other" 
                    selected={eventData.types.includes('Other')}
                    onClick={() => handleTypeSelect('Other')} 
                    className="other-chip"
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