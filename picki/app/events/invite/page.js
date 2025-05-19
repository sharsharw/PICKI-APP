'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import ArrowButton from '../../components/arrowButton/ArrowButton';
import { X, Plus, Search } from 'lucide-react';
import '../events.css';
import './invite.css';

export default function EventInvitePage() {
  const [showGroupsOverlay, setShowGroupsOverlay] = useState(false);
  const [showFriendsOverlay, setShowFriendsOverlay] = useState(false);
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [selectedFriends, setSelectedFriends] = useState([]);
  const searchInputRef = useRef(null);

  const groups = [
    { id: 1, name: 'Boba Babies', image: '/images/bobababies.png', color: '#FFE0EE' },
    { id: 2, name: 'Always Lost', image: '/images/alwayslost.png', color: '#D6D1EA' },
    { id: 3, name: 'Dean\'s favs', image: '/images/deansfav.png', color: '#FFE0EE' },
    { id: 4, name: 'Scoobygang', image: '/images/scoobygang.png', color: '#FFF3CF' },
  ];

  const friends = [
    { id: 1, username: '@jenn_kim', profilePic: '/images/jennkim.png', color: '#FFF3CF' },
    { id: 2, username: '@tiff_any', profilePic: '/images/tiffany.png', color: '#D7EDD2' },
    { id: 3, username: '@adamsmith', profilePic: '/images/adamsmith.png', color: '#D6D1EA' },
    { id: 4, username: '@soaphia', profilePic: '/images/soaphia.png', color: '#FFE0EE' },
    { id: 5, username: '@nick_m', profilePic: '/images/nickm.png', color: '#D7EDD2' },
    { id: 6, username: '@emnnem', profilePic: '/images/emnnem.png', color: '#D6D1EA' },
    { id: 7, username: '@njzzzzz', profilePic: '/images/njzzzzz.png', color: '#FFF3CF' },
  ];

  // Toggle overlay visibility
  const toggleOverlay = (type) => {
    if (type === 'groups') {
      setShowGroupsOverlay(!showGroupsOverlay);
      setShowFriendsOverlay(false);
    } else {
      setShowFriendsOverlay(!showFriendsOverlay);
      setShowGroupsOverlay(false);
    }
  };

  // Toggle selection
  const toggleSelection = (id, type) => {
    if (type === 'group') {
      const newSelected = selectedGroups.includes(id)
        ? selectedGroups.filter(groupId => groupId !== id)
        : [...selectedGroups, id];
      setSelectedGroups(newSelected);
    } else {
      setSelectedFriends(
        selectedFriends.includes(id)
          ? selectedFriends.filter(friendId => friendId !== id)
          : [...selectedFriends, id]
      );
    }
  };

  // Add selected groups and close overlay
  const addSelectedGroups = () => {
    setShowGroupsOverlay(false);
  };

  // Get selected items
  const getSelected = (type) => {
    return type === 'groups'
      ? groups.filter(group => selectedGroups.includes(group.id))
      : friends.filter(friend => selectedFriends.includes(friend.id));
  };

  return (
    <div className="event-creator-container">
      <div className="mobile-frame">
        <div className="event-page">
          <div className="close-button-container">
            <X size={18} strokeWidth={3} className="close-icon" />
          </div>
          
          <div className="create-event-form">
            <h1>Invite</h1>
            <p className="subtitle invite-subtitle">Invite your friends!</p>

            <div className="invite-options">
              <div className="invite-section">
                <h3 className="invite-section-title">Choose a group</h3>
                <p className="invite-section-subtitle">Click to add and remove.</p>
                
                <div className="group-selection-container">
                  {getSelected('groups').map(group => (
                    <div 
                      key={group.id} 
                      className="selected-group-card"
                      onClick={() => toggleSelection(group.id, 'group')}
                    >
                      <img 
                        src={group.image} 
                        alt={group.name} 
                        className="selected-group-image"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/images/groups/default.jpg';
                        }}
                      />
                      <div className="selected-group-name" style={{ backgroundColor: group.color }}>
                        {group.name}
                      </div>
                    </div>
                  ))}
                
                  <div 
                    className="add-group-card"
                    onClick={() => toggleOverlay('groups')}
                  >
                    <div className="add-group-placeholder">
                      <Plus size={20} strokeWidth={3} color="#333" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="invite-separator">OR</div>

              <div className="invite-section">
                <h3 className="invite-section-title">Select individual friends</h3>
                
                <div 
                  className="add-friend-button"
                  onClick={() => toggleOverlay('friends')}
                >
                  <Plus size={16} strokeWidth={3} />
                </div>

                {selectedFriends.length > 0 && (
                  <div className="selected-friends">
                    {getSelected('friends').map(friend => (
                      <div 
                        key={friend.id} 
                        className="selected-friend"
                        style={{ backgroundColor: friend.color }}
                      >
                        <img 
                          src={friend.profilePic} 
                          alt={friend.username} 
                          className="friend-image"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/images/profiles/default.jpg';
                          }}
                        />
                        <span className="friend-username">{friend.username}</span>
                        <button 
                          className="remove-friend"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSelection(friend.id, 'friend');
                          }}
                        >
                          <X size={20} strokeWidth={3}/>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="event-nav">
            <Link href='/events/cover'>
              <ArrowButton direction="left" />
            </Link>
            <Link href="/events/confirm">
              <ArrowButton direction="right" />
            </Link>
          </div>
        </div>

        {/* Groups Overlay */}
        {showGroupsOverlay && (
          <div className="invite-slide-overlay">
            <div className="invite-overlay-frame">
              <div className="invite-overlay-content">
                <div className="invite-overlay-header">
                  <button className="invite-close-button" onClick={() => toggleOverlay('groups')}>
                    <X size={18} strokeWidth={3} />
                  </button>
                  <h2 className="invite-overlay-title">Your Groups</h2>
                </div>
                
                <div className="groups-grid">
                  {groups.map(group => (
                    <div
                      key={group.id}
                      className={`group-card ${selectedGroups.includes(group.id) ? 'selected' : ''}`}
                      onClick={() => toggleSelection(group.id, 'group')}
                    >
                      <img 
                        src={group.image} 
                        alt={group.name} 
                        className="group-card-image"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/images/groups/default.jpg';
                        }}
                      />
                      <div className="group-card-name" style={{ backgroundColor: group.color }}>
                        {group.name}
                      </div>
                    </div>
                  ))}
                </div>
                
                <button 
                  className="add-groups-button"
                  onClick={addSelectedGroups}
                >
                  Add the group
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Friends Overlay */}
        {showFriendsOverlay && (
          <div className="friends-slide-overlay">
            <div className="friends-overlay-frame">
              <div className="friends-overlay-content">
                <div className="friends-overlay-header">
                  <button className="friends-close-button" onClick={() => toggleOverlay('friends')}>
                    <X size={18} strokeWidth={3} />
                  </button>
                  <h2 className="friends-overlay-title">Your Friends</h2>
                </div>

                <div className="search-container">
                  <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                    ref={searchInputRef}
                  />
                  <Search size={18} strokeWidth={3} className="search-icon" />
                </div>
                
                <div className="friends-list">
                  {friends.map(friend => (
                    <div
                      key={friend.id}
                      className="friend-item"
                      style={{ backgroundColor: friend.color }}
                    >
                      <img 
                        src={friend.profilePic} 
                        alt={friend.username} 
                        className="friend-profile-pic"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/images/profiles/default.jpg';
                        }}
                      />
                      <div className="friend-username">{friend.username}</div>
                      <button 
                        className={`add-friend-icon ${selectedFriends.includes(friend.id) ? 'selected' : ''}`}
                        onClick={() => toggleSelection(friend.id, 'friend')}
                      >
                        <Plus size={20} strokeWidth={3} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}