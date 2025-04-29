'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ArrowButton({ direction = 'right', onClick, disabled = false }) {
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;

  return (
    <button className="nav-button" onClick={onClick} disabled={disabled}>
      <Icon size={45} strokeWidth={3} />
    </button>
  );
}
