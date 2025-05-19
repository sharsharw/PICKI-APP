'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './eventNav.css';

const EventNav = ({ totalSteps = 6, currentStep = 1, onStepChange }) => {
  const [activeStep, setActiveStep] = useState(currentStep);

  const handlePrevious = () => {
    if (activeStep > 1) {
      const newStep = activeStep - 1;
      setActiveStep(newStep);
      if (onStepChange) onStepChange(newStep);
    }
  };

  const handleNext = () => {
    if (activeStep < totalSteps) {
      const newStep = activeStep + 1;
      setActiveStep(newStep);
      if (onStepChange) onStepChange(newStep);
    }
  };

  const goToStep = (step) => {
    setActiveStep(step);
    if (onStepChange) onStepChange(step);
  };

  return (
    <div className="event-nav-container">
      <button 
        className="event-nav-button"
        onClick={handlePrevious}
        disabled={activeStep === 1}
      >
        <ChevronLeft size={28} strokeWidth={3} />
      </button>

      <div className="event-nav-dots">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <button
            key={index}
            className={`event-nav-dot ${activeStep === index + 1 ? 'active' : ''}`}
            onClick={() => goToStep(index + 1)}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>

      <button 
        className="event-nav-button"
        onClick={handleNext}
        disabled={activeStep === totalSteps}
      >
        <ChevronRight size={28} strokeWidth={3} />
      </button>
    </div>
  );
};

export default EventNav;