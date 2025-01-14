import React from 'react';
import Link from 'next/link';
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Link href="#">○</Link>
      </div>
      <div>
        <Link href="#work">Work</Link>
      </div>
      <div>
        <Link href="#about-me">About Me</Link>
      </div>
      <div>
        <Link href="#">Resume</Link>
      </div>
    </div>
  )
}

export default NavBar
