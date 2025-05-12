import { useState, useRef, useEffect } from 'react';
import './SwitchBar.css';

export default function SwitchButton() {
  const [activeTab, setActiveTab] = useState('Groups');
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabRefs = useRef({});
  
  const tabs = ['Groups', 'Friends', 'Find'];
  
  // Update the indicator position when active tab changes
  useEffect(() => {
    if (tabRefs.current[activeTab]) {
      const activeTabElement = tabRefs.current[activeTab];
      setIndicatorStyle({
        width: `${activeTabElement.offsetWidth}px`,
        height: `${activeTabElement.offsetHeight}px`,
        transform: `translateX(${activeTabElement.offsetLeft}px)`,
      });
    }
  }, [activeTab]);

  return (
    <div className="switch-container">
      <div className="switch-wrapper">
        {/* Moving indicator */}
        <div 
          className="switch-indicator"
          style={indicatorStyle}
        />
        
        {/* Tabs */}
        {tabs.map((tab) => (
          <button
            key={tab}
            ref={(el) => (tabRefs.current[tab] = el)}
            onClick={() => setActiveTab(tab)}
            className={`switch-tab ${activeTab === tab ? 'active' : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}