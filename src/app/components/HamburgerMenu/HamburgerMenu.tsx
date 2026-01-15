'use client';

import { useState } from 'react';
import styles from './HamburgerMenu.module.css';

export default function HamburgerMenu({ onToggle }: { onToggle: (isOpen: boolean) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle(newState);
  };

  return (
    <button 
      className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
      onClick={handleClick}
      aria-label="Toggle menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
