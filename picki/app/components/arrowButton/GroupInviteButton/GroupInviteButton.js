
import React from 'react';
import './GroupInviteButton.css';
import { ChevronRight } from 'lucide-react';

const GroupButton = ({ onClick }) => {
  return (
    <div className="group-button-container">
      <div className="group-button" onClick={onClick}>
        <div className="text-container">
          <p className="button-title">We picked for you!</p>
          <p className="button-subtitle">Check out the plan</p>
        </div>
        <div className="arrow-container">
          <ChevronRight color="white" size={24} />
        </div>
      </div>
    </div>
  );
};

export default GroupButton;