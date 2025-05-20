import React from 'react';
import './GroupInviteButton.css';
import { ArrowRight } from 'lucide-react';

const GroupButton = ({ groupName = "BobRossFans" }) => {
    return (
      <div className="group-button-container">
        <div className="group-button">
          <div className="button-content">
            <p className="added-text">You've been added to:</p>
            <h2 className="group-invire-name">{groupName}</h2>
          </div>
          <div className="arrow-container">
            <ArrowRight color="white" size={32} strokeWidth={3} />
          </div>
        </div>
      </div>
    );
  };
  
  export default GroupButton;