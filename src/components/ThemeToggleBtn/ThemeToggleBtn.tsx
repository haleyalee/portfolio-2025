"use client";

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import SunIcon from '@/components/Icons/SunIcon';
import MoonIcon from '@/components/Icons/MoonIcon';
import styles from './ThemeToggleBtn.module.scss';

const ThemeToggleBtn = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.toggle} onClick={toggleTheme} aria-label="Toggle Theme">
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

export default ThemeToggleBtn;
