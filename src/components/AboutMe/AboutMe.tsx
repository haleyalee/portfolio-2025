/* eslint-disable react/no-unescaped-entities */

"use client";

import React from 'react';
import styles from "./AboutMe.module.scss";
import Link from 'next/link';

const AboutMe = () => {
  return (
    <section className={styles.aboutMe} id="about-me">
      <div className={styles.main}>
        <h2>Hi, I'm Haley!</h2>
        <div className={styles.description}>
          <div>
            I'm a self-taught front-end developer with a passion for crafting accessible, efficient, and user-friendly  applications.
          </div>
          <div>
            Outside of coding, I climb rocks, sew clothes, and create YouTube content for casual home cooks. I’m always learning something new and love exploring new ideas to fuel my creativity and growth.
          </div>
          <div>
            You’ll probably find me at a local NYC coffee shop, tinkering with code or editing my latest video.
          </div>
        </div>
        <div className={styles.resume}>
          <Link href="https://docs.google.com/document/d/10E9dnxa2-JrBEP41xMyk0vtkEZWe7ox7AO4bz8HK1OY/edit?usp=sharing" target="_blank">
            <h4>My Resume</h4>
          </Link>
        </div>
      </div>
      <div className={styles.contact}>
        <h3>Let's get in touch...</h3>
        <h5><a href="mailto:haleyalee@gmail.com">haleyalee@gmail.com</a></h5>
      </div>
    </section>
  )
}

export default AboutMe;
