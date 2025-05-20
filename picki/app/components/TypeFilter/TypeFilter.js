'use client';

import React from 'react';
import './TypeFilter.css';
import { Plus } from 'lucide-react';

export default function TypeFilter({ label, selected, onClick, style={}, className='' }) {

    return (
    <button 
      className={`filter-chip ${selected ? 'selected' : ''} ${className}`} 
      onClick={onClick}
      style={style}
    >
      {label} 
      <Plus size={16} className="plus-icon" />
    </button>
  );
}