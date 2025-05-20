'use client';

import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import './TakeYourPick.css';

export default function HostingPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/events/confirm'); // Navigate to the Confirm page
  };

  const currentPicks = [
    {
      name: 'Dovetail',
      address: '1079 Mainland St, Vancouver, BC',
      pickedBy: 'Jen',
      image: '/images/dovetail.png',
      bgColor: '#FFE0E9', // light pink
    },
    {
      name: 'Sushi California',
      address: '388 W Broadway, Vancouver, BC',
      pickedBy: 'Emma',
      image: '/images/sushi.png',
      bgColor: '#FFF3CF', // light yellow
    },
    {
      name: 'The Keg',
      address: '688 Dunsmuir St, Vancouver, BC',
      pickedBy: 'Annie',
      image: '/images/thekeg.png',
      bgColor: '#E9FBE0', // light green
    },
  ];

  return (
    <div className="event-planner-container">
      {/* Header */}
      <div className="header">
        <button className="back-button" onClick={handleBack}>
          <ChevronLeft size={24} />
        </button>
        <h2 className="title">You're hosting</h2>
      </div>

      {/* Event Card */}
      <div
        className="event-card"
        style={{
          backgroundImage: "url('/images/girls-night-event.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '15px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      ></div>

      
      <div className="avatars-container">
        <div className="avatar"><img src="/images/girl1.png" alt="girl1" /></div>
        <div className="avatar"><img src="/images/girl2.png" alt="girl2" /></div>
        <div className="avatar"><img src="/images/girl3.png" alt="girl3" /></div>
        <div className="avatar"><img src="/images/girl4.png" alt="girl4" /></div>
      </div>

      
      <div className="event-type">
        <span className="type-label">Type</span>
        <div><span className="type-tag">Food</span></div>
      </div>

    
      <button
        className="pick-button"
        onClick={() => router.push('/PickInput')}
      >
        Take your pick!
      </button>
      <p className="deadline">Deadline April 2</p>

      
      <div className="help-section">
        Need help? <a href="#" className="quiz-link">Take the quiz</a>
      </div>

      
      <div className="current-picks-section">
        <h3 className="picks-title">Current Picks</h3>
        <p className="picks-subtitle">Checkout the suggestions!</p>

        <div className="picks-list">
          {currentPicks.map((pick, idx) => (
            <div
              key={idx}
              className="pick-card"
              style={{ backgroundColor: pick.bgColor }}
            >
              <div className="pick-image">
                <img src={pick.image} alt={pick.name} />
              </div>
              <div className="pick-details">
                <div className="pick-person">{pick.pickedBy} picked</div>
                <div className="pick-venue">{pick.name}</div>
                <div className="pick-address">{pick.address}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
