'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import './PickInput.css';

export default function PickInput() {
  const router = useRouter();

  const [googleLink, setGoogleLink] = useState('');
  const [embedUrl, setEmbedUrl] = useState('');

  const handleLinkChange = (e) => {
    const input = e.target.value;
    setGoogleLink(input);

    if (input.includes('google.com/maps')) {
      const embedBase = 'https://www.google.com/maps/embed/v1/place';
      const apiKey = 'AIzaSyDtq8AJBCIBvaksW7n2CfV3BIH-46I5qWQ'; // (API key must be valid)
      const encoded = encodeURIComponent(input);
      setEmbedUrl(`${embedBase}?key=${apiKey}&q=${encoded}`);
    } else {
      setEmbedUrl('');
    }
  };

  const handleConfirm = () => {
    router.push('/TakeYourPick');
  };

  const handleBack = () => {
    router.push('/TakeYourPick');
  };

  return (
    <div className="phone-frame">
      <button className="back-arrow" onClick={handleBack}>
        <ChevronLeft size={24} />
        </button>

      <div className="suggest-form">
        <h1 className="page-title">Suggest your pick!</h1>
        <p className="page-subtitle">Where do you want to go?</p>

        <label className="input-label">My Pick</label>
        <input className="text-input" type="text" placeholder="Name" />

        <label className="input-label">Link to website <span style={{ color: '#aaa' }}>(Optional)</span></label>
        <input className="text-input" type="text" placeholder="https://..." />

        <label className="input-label">Link to Google <span style={{ color: '#aaa' }}>(Optional)</span></label>
        <input
          className="text-input"
          type="text"
          value={googleLink}
          onChange={handleLinkChange}
          placeholder="Paste Google Maps link"
        />

        {embedUrl && (
          <div className="map-preview">
            <iframe
              src={embedUrl}
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Preview"
            ></iframe>
          </div>
        )}

        <button className="confirm-button" onClick={handleConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
}
