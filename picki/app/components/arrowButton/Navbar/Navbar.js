import React from 'react';

import { Home, Search, Plus, Users, User } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <Home className="navbar-icon" size={24} />
      <Search className="navbar-icon spaced-icon-left" size={24} />
      
      <div className="plus-button">
        <Plus size={28} strokeWidth={3} stroke="black" />
      </div>

      <Users className="navbar-icon spaced-icon-right" size={24} />
      <User className="navbar-icon" size={24} />
    </div>
  );
}
