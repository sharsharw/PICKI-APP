'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation'; 
import { X, Plus, Pencil } from 'lucide-react';
import EventNav from '../../components/eventNav/eventNav'; 
import '../events.css';
import './cover.css';

export default function EventCoverImagePage() {
  const router = useRouter(); 
  const [coverImage, setCoverImage] = useState(null);
  const [coverColor, setCoverColor] = useState('#391E99'); 
  const [showOverlay, setShowOverlay] = useState(false);
  const fileInputRef = useRef(null);
  
  const eventDetails = {
    name: "Girl's Night",
    date: "APR",
    day: "12",
    time: "6:00PM"
  };

  const colorOptions = [
    { color: '#278700', name: 'green', textColor: 'white' },
    { color: '#391E99', name: 'purple', textColor: 'white' },
    { color: '#FF82BC', name: 'pink', textColor: '#391E99' }, 
    { color: '#FFD147', name: 'yellow', textColor: '#391E99' } 
  ];
  
  const handleClose = () => {
  router.push('/events/home');
};

  const handleStepChange = (step) => {
    switch(step) {
      case 1:
        router.push('/events');
        break;
      case 2:
        router.push('/events/time');
        break;
      case 3:
        router.push('/events/rsvp');
        break;
      case 4:
        // Current page 
        break;
      case 5:
        router.push('/events/invite');
        break;
      case 6:
        router.push('/events/confirm');
        break;
      default:
        break;
    }
  };
  
  const getTextColor = () => {
    if (!coverColor) return 'white'; 
    const selectedOption = colorOptions.find(opt => opt.color === coverColor);
    return selectedOption ? selectedOption.textColor : 'white';
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCoverImage(event.target.result);
        setCoverColor(null); 
        setShowOverlay(false); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleColorSelect = (color) => {
    setCoverColor(color);
    setCoverImage(null); 
  };

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  const handleUploadPhoto = () => {
    fileInputRef.current.click();
  };

  const saveChanges = () => {
    setShowOverlay(false);
  };

  const textColor = getTextColor();

  return (
    <div className="event-creator-container">
      <div className="mobile-frame">
        <div className="event-page">
       <div className="close-button-container">
            <X 
              size={18} 
              strokeWidth={3} 
              className="close-icon" 
              onClick={handleClose} 
              style={{ cursor: 'pointer' }} 
            />
          </div>
          <div className="create-event-form">
            <h1>Add an image</h1>
            <p className="subtitle">
                Choose a cover photo for the event. <br />
                This part is optional!</p>
            
            {/* Event Preview Card */}
            <div 
              className="event-preview-card" 
              onClick={toggleOverlay}
              style={{ 
                backgroundColor: coverColor || 'transparent',
                backgroundImage: coverImage ? `url(${coverImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: textColor 
              }}
            >
              <div className="event-preview-content">
                <h2 className="event-name">{eventDetails.name}</h2>
                <div className="event-date-time">
                  <div className="event-date">
                    <span className="event-month">{eventDetails.date}</span>
                    <span className="event-day">{eventDetails.day}</span>
                  </div>
                  <span className="event-time">{eventDetails.time}</span>
                </div>
              </div>
              <button className="edit-cover-button">
                <Pencil size={40} color={coverColor || '#363636'}/> 
              </button>
            </div>
            
            <div className="preview-label">Preview</div>
          </div>
          
          {!showOverlay && (
            <div className="event-nav-bottom-bar">
              <EventNav 
                totalSteps={6} 
                currentStep={4}
                onStepChange={handleStepChange} 
              />
            </div>
          )}
        </div>
      </div>
      
      {/* Overlay */}
      {showOverlay && (
        <div className="slide-up-overlay">
          <div className="mobile-frame overlay-frame">
            <div className="slide-up-overlay-content">
              <div className="overlay-header">
                <button className="overlay-close-button" onClick={toggleOverlay}>
                  <X size={18} strokeWidth={3}/>
                </button>
                <h2 className="overlay-title">Choose event cover</h2>
              </div>
              
              <div className="cover-options-container">
                <div className="upload-section">
                  <h3 className="upload-title">Upload a photo</h3>
                  <div className="upload-button-container" onClick={handleUploadPhoto}>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*"
                      className="file-input"
                      style={{ display: 'none' }}
                    />
                    <div className="upload-placeholder">
                      <Plus size={20} strokeWidth={3}/>
                    </div>
                  </div>
                </div>
                
                <div className="default-colors-section">
                  <h3 className="colors-title">Choose from default</h3>
                  <div className="color-options">
                    {colorOptions.map((option) => (
                      <div 
                        key={option.name}
                        className={`color-option ${coverColor === option.color ? 'selected' : ''}`}
                        style={{ 
                          backgroundColor: option.color,
                          
                          ...(coverColor === option.color ? {
                            boxShadow: `0 0 0 3px white, 0 0 0 6px ${option.color}`
                          } : {})
                        }}
                        onClick={() => handleColorSelect(option.color)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <button className="save-changes-button" onClick={saveChanges}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}