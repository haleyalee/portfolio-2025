import React from 'react';
import styles from "./SideBar.module.scss";
import Link from 'next/link';
import SunIcon from '@/components/Icons/SunIcon';

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.other}>
        <span>©2025</span>
        <div>
          <SunIcon />
        </div>
      </div>
      <div className={styles.socials}>
        <Link href="https://www.linkedin.com/in/haleyalee">LI</Link>
        <Link href="https://github.com/haleyalee">GH</Link>
        <Link href="https://www.youtube.com/@hhaleylee">YT</Link>
      </div>
    </div>
  )
}

export default SideBar
