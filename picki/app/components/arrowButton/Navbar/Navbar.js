import React, { useState } from 'react';
import { Home, Search, Plus, Users, User } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      {showPopup && (
        <div className="fab-popup">
          <button className="popup-btn event-btn">Create new event</button>
          <button className="popup-btn group-btn">Create new group</button>
        </div>
      )}

      <div className="navbar">
        <Home className="navbar-icon" size={24} />
        <Search className="navbar-icon spaced-icon-left" size={24} />

        <div className="plus-button" onClick={togglePopup}>
          <Plus
            className={`icon-transition ${showPopup ? 'rotated' : ''}`}
            size={28}
            strokeWidth={3}
            stroke="black"
          />
        </div>

        <Users className="navbar-icon spaced-icon-right" size={24} />
        <User className="navbar-icon" size={24} />
      </div>
    </>
  );
}
