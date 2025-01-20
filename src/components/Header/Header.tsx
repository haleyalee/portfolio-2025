import React from 'react';
import styles from "./Header.module.scss";
import NavBar from '@/components/NavBar/NavBar';
import SideBar from '@/components/SideBar/SideBar';

const Header = () => {
  return (
    <header className={styles.header}>
      <SideBar />
      <div className={styles.main}>
        <h1>Haley Lee</h1>
        <NavBar />
      </div>
    </header>
  )
}

export default Header
