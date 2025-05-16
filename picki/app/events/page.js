'use client'; // Mark this as a client-side component

import { useState } from 'react';
import Link from 'next/link'; // Import Link component for navigation
import ArrowButton from '../components/arrowButton/ArrowButton';
import TypeFilter from '../components/TypeFilter/TypeFilter';
import { X } from 'lucide-react';
import BudgetSlider from '../components/budgetSlider/budgetSlider';
import './events.css';

export default function EventPage() {
  const [eventData, setEventData] = useState({
    name: '',
    budget: 25, // Default value for slider
    type: '',
    types: [],
    budgetRange: [10, 50],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeSelect = (type) => {
    setEventData((prev) => {
      if (prev.types.includes(type)) {
        return { 
          ...prev, 
          types: prev.types.filter((t) => t !== type),
          type: '', 
        };
      } else {
        return { 
          ...prev, 
          types: [...prev.types, type],
          type: type,
        };
      }
    });
  };

  return (
    <div className="event-creator-container">
      <div className="mobile-frame">
        <div className="event-page">
          <div className="close-button-container">
            <X size={18} strokeWidth={3} className="close-icon" />
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

            <div className="budget-slider-container">
              <label className="budget-slider-label">Budget</label>
              <BudgetSlider
                values={eventData.budgetRange}
                setValues={(range) =>
                  setEventData((prev) => ({ ...prev, budgetRange: range }))
                }
              />
            </div>

            <div className="type-filter-container">
              <label className="type-label">Type</label>
              <div className="filter-chip-container">
                <TypeFilter
                  label="Food"
                  selected={eventData.types.includes('Food')}
                  onClick={() => handleTypeSelect('Food')}
                  className="food-chip"
                />
                <TypeFilter
                  label="Activity"
                  selected={eventData.types.includes('Activity')}
                  onClick={() => handleTypeSelect('Activity')}
                  className="activity-chip"
                />
                <TypeFilter
                  label="Event"
                  selected={eventData.types.includes('Event')}
                  onClick={() => handleTypeSelect('Event')}
                  className="event-chip"
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
            <ArrowButton direction="left" onClick={() => window.history.back()} /> 
            <Link href="/events/time">
              <ArrowButton direction="right"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
