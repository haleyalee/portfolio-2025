"use client";

import React, { useRef } from 'react';
import * as motion from "motion/react-client";
import styles from "./Work.module.scss";
import ProjectCard from '@/components/ProjectCard/ProjectCard';

const myWork = [
  {
    title: "Recipes",
    description: "website to save and search personal recipes",
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    url: ""
  },
  {
    title: "Radiant Design System UI Library",
    description: "private web component UI library used internally at Discover",
    techStack: ["React", "TypeScript", "MaterialUI"],
    url: ""
  },
  {
    title: "Notion API Expense Tracker",
    description: "data visualization tool for manually tracked expenses in Notion",
    techStack: ["React", "TypeScript", "Express"],
    url: ""
  },
  {
    title: "Plantome",
    description: "ecommerce website to buy plants",
    techStack: ["React", "TypeScript", "Bootstrap", "AWS"],
    url: ""
  },
  {
    title: "Max Portfolio",
    description: "personal website for Maxwell Lee",
    techStack: ["HTML/CSS", "JavaScript"],
    url: ""
  },
];

const Work = () => {
  const scrollRef = useRef(null);

  return (
    <section className={styles.work} id="work" ref={scrollRef} >
      {myWork.map((proj, i) => 
        <motion.div
          key={i} 
          className="box"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ root: scrollRef }}
          layout
        >
          <ProjectCard 
            title={proj.title}
            description={proj.description}
            techStack={proj.techStack}
            url={proj.url}
          />
        </motion.div>
      )}
    </section>
  )
}

export default Work;
