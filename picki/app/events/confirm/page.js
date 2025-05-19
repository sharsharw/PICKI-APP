'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import '../events.css';
import './confirm.css';

export default function EventConfirmationPage() {
  const eventData = {
    title: "Girl's Night",
    type: "Food",
    date: "April 12, 2025",
    rsvpDeadline: "April 2nd 2025"
  };

  const selectedGroup = {
    name: 'Boba Babies',
    image: '/images/bobababies-large.png',
    color: '#FFE0EE',
    members: [
      { id: 1, profilePic: '/images/user1.png' },
      { id: 2, profilePic: '/images/user2.png' },
      { id: 3, profilePic: '/images/user3.png' },
      { id: 4, profilePic: '/images/user4.png' },
    ]
  };

  return (
      <div className="event-creator-container">
      <div className="mobile-frame">
        <div className="event-page">
          {/* Header */}
          <div className="confirmation-header">
            <Link href="/events/invite" className="back-button">
              <ChevronLeft size={20} strokeWidth={3} />
            </Link>
          </div>
          <div className="confirmation-content">
            <h1 className="confirmation-title">Confirm</h1>
            <p className="confirmation-subtitle">Review your choices!</p>
    
            
            {/* Event Details */}
            <div className="event-details">
              <h2 className="event-title">{eventData.title}</h2>
              
              <div className="event-info-row">
                <span className="event-info-label">Type:</span>
                <span className="event-info-value">{eventData.type}</span>
              </div>
              
              <div className="event-info-row">
                <span className="event-info-label">Date:</span>
                <span className="event-info-value">{eventData.date}</span>
              </div>
              
              <div className="event-info-row">
                <span className="event-info-label">RSVP deadline:</span>
                <span className="event-info-value">{eventData.rsvpDeadline}</span>
              </div>
            </div>
            
            {/* Group Information */}
            <div className="group-section">
              <h3 className="group-section-title">Group Name</h3>
              
              <div className="group-preview">
                <div className="group-image-container">
                  <img 
                    src={selectedGroup.image} 
                    alt={selectedGroup.name} 
                    className="group-preview-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/groups/default.jpg';
                    }}
                  />
                  <div className="group-preview-name" style={{ backgroundColor: selectedGroup.color }}>
                    {selectedGroup.name}
                  </div>
                </div>
                
                <div className="group-members">
                  {selectedGroup.members.map(member => (
                    <div key={member.id} className="member-avatar">
                      <img 
                        src={member.profilePic} 
                        alt="Group member" 
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/images/profiles/default.jpg';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Confirm Button */}
            <button className="confirm-button">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}