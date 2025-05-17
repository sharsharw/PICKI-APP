import React from 'react';
import './BobaBabies.css';
import { Plus } from 'lucide-react';

function App() {
  const users = [
    { id: 1, username: '@clarriffaaa', imageUrl: '/images/clarissa.png', bgColor: 'bg-green-100' },
    { id: 2, username: '@d0m1n1c', imageUrl: '/images/dominic.png', bgColor: 'bg-purple-100' },
    { id: 3, username: '@jenn_kim', imageUrl: '/images/jen.png', bgColor: 'bg-yellow-100' },
    { id: 4, username: '@sooya_97', imageUrl: '/images/sooya.png', bgColor: 'bg-pink-100' },
    { id: 5, username: '@kevinluvssoup', imageUrl: '/images/kevin.png', bgColor: 'bg-blue-100' }
  ];

  return (
    <div className="app-container">
      <header className="header">
        <div className="nav-arrow">&lt;</div>
        <div className="header-content">
          <h2 className="header-welcome">WELCOME TO</h2>
          <div className="title-container">
            <div className="title-background"></div>
            <h1 className="header-title">Boba Babies</h1>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="section">
          <h2 className="section-title">Events</h2>
          <div className="no-events">
            <div className="sad-face">
              <div className="circle">
                <div className="eyes">
                  <div className="eye"></div>
                  <div className="eye"></div>
                </div>
                <div className="mouth"></div>
              </div>
            </div>
            <p className="no-events-text">No upcoming events yet</p>
          </div>
          <button className="action-button">
            <span>New Event</span>
            <Plus size={20} />
          </button>
        </section>

        <section className="section">
          <h2 className="section-title">People</h2>
          <div className="people-list">
            {users.map(user => (
              <div key={user.id} className={`person-item ${user.bgColor}`}>
                <div className="person-avatar">
                  <img
                    src={user.imageUrl || '/images/default-avatar.jpg'}
                    alt={user.username}
                    className="avatar-img"
                  />
                </div>
                <div className="person-username">{user.username}</div>
                {user.username === '@d0m1n1c' && (
                  <div className="add-icon">
                    <Plus size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <button className="action-button">
            <span>Add Friend</span>
            <Plus size={20} />
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;
