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
        <Link href="https://docs.google.com/document/d/10E9dnxa2-JrBEP41xMyk0vtkEZWe7ox7AO4bz8HK1OY/edit?usp=sharing" target="_blank">Resume</Link>
      </div>
    </div>
  )
}

export default NavBar
