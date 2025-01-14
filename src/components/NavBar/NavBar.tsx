"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Update active section
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null, 
      threshold: 0.2, 
    });

    sections.forEach(section => {
      observer.observe(section); // Start observing each section
    });

    return () => {
      observer.disconnect(); // Clean up on unmount
    };
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={activeSection === "" ? styles.active : ""}>
        <Link href="#">○</Link>
      </div>
      <div className={activeSection === "work" ? styles.active : ""}>
        <Link href="#work">Work</Link>
      </div>
      <div className={activeSection === "about-me" ? styles.active : ""}>
        <Link href="#about-me">About Me</Link>
      </div>
      <div>
        <Link href="https://docs.google.com/document/d/10E9dnxa2-JrBEP41xMyk0vtkEZWe7ox7AO4bz8HK1OY/edit?usp=sharing" target="_blank">Resume</Link>
      </div>
    </div>
  )
}

export default NavBar
