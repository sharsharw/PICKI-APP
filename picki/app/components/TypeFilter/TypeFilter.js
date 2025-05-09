'use client';

import React from 'react';
import './TypeFilter.css';
import { Plus } from 'lucide-react';

export default function TypeFilter({ label, selected, onClick }) {
  return (
    <button 
      className={`filter-chip ${selected ? 'selected' : ''}`} 
      onClick={onClick}
    >
      {label} 
      <Plus size={16} className="plus-icon" />
    </button>
  );
}