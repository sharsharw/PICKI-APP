'use client';

import { useState } from 'react';
import './groups.css';
import GroupButtonLarge from '../components/arrowButton/GroupButtonLarge/GroupButtonLarge';
import GroupCardSmall from '../components/arrowButton/GroupCardSmall/GroupCardSmall';
import { Plus, Search, ChevronRight, ArrowDownUp } from 'lucide-react';
import SwitchBar from '../components/arrowButton/SwitchBar/SwitchBar';
import GroupInviteButton from '../components/arrowButton/GroupInviteButton/GroupInviteButton';

export default function GroupsPage() {
  const [search, setSearch] = useState('');
  const [featuredGroupIndex] = useState(0); 

  const groups = [
    { name: 'BobRossFans', imageUrl: '/images/Bobross.png', bg: '#d1fae5' },
    { name: 'Boba Babies', imageUrl: '/images/group-default.png', bg: '#fce7f3' },
    { name: 'Always Lost', imageUrl: '/images/hiker.png', bg: '#e4e4f0' },
    { name: "Dean's favs", imageUrl: '/images/asianpeople.png', bg: '#fce7f3' },
    { name: 'ScoobyGang', imageUrl: '/images/scoobydoo.png', bg: '#fef08a' },
  ];

  return (
    <div className="groups-wrapper">
      <div className="groups-page">
        <SwitchBar />

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search size={20} className="search-icon" />
        </div>

        <h2 className="section-title">Your groups</h2>

        <GroupInviteButton />

        {/* Featured group as LARGE card */}
        <div className="group-featured">
          <GroupButtonLarge
            name={groups[featuredGroupIndex].name}
            imageUrl={groups[featuredGroupIndex].imageUrl}
            bgColor={groups[featuredGroupIndex].bg}
          />
        </div>

        {/* Rest of the groups as SMALL cards */}
        <div className="group-grid-small">
          {groups.map((group, idx) =>
            idx !== featuredGroupIndex ? (
              <GroupCardSmall
                key={idx}
                name={group.name}
                imageUrl={group.imageUrl}
                bgColor={group.bg}
              />
            ) : null
          )}
        </div>

        <button className="new-group-btn">
          New group <Plus size={16} />
        </button>
      </div>
    </div>
  );
}
