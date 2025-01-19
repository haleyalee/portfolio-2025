"use client";

import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import SunIcon from '@/components/Icons/SunIcon';
import MoonIcon from '@/components/Icons/MoonIcon';
import styles from './ThemeToggleBtn.module.scss';

const ThemeToggleBtn = () => {
  const { theme, toggleTheme } = useTheme();
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    setIsSpinning(true);
    toggleTheme();

    // Remove the spinning class after the animation completes
    setTimeout(() => {
      setIsSpinning(false);
    }, 500); 
  };

  return (
    <button className={styles.toggle} onClick={handleClick} aria-label="Toggle Theme">
      <div className={`${styles.icon} ${isSpinning ? styles.spin : ''}`}>
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </div>
    </button>
  );
}

export default ThemeToggleBtn;
