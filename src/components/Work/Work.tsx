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
    url: "",
    github: "https://github.com/haleyalee/recipes",
    img: "/recipes.gif"
  },
  {
    title: "Radiant Design System UI Library",
    description: "private web component UI library used internally at Discover",
    techStack: ["React", "TypeScript", "MaterialUI", "Storybook"],
    url: "https://labs.discover.com/storybook/next/?path=/docs/getting-started-intro--docs",
    github: "",
    img: "/discover.png"
  },
  {
    title: "Notion API Expense Tracker",
    description: "a quick data visualization tool for manually tracked expenses in Notion",
    techStack: ["React", "TypeScript", "Express"],
    url: "",
    github: "https://github.com/haleyalee/expenses-visualization",
    img: "/notion-expenses.gif"
  },
  {
    title: "Plantome",
    description: "ecommerce website to buy plants",
    techStack: ["React", "TypeScript", "Bootstrap", "AWS"],
    url: "",
    github: "https://github.com/haleyalee/plantome",
    img: "/plantome.gif"
  },
  {
    title: "Max Portfolio",
    description: "personal website for Maxwell Lee",
    techStack: ["HTML/CSS", "JavaScript"],
    url: "https://haleyalee.github.io/max-website/",
    github: "https://github.com/haleyalee/max-website",
    img: "/max.webp"
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
            github={proj.github}
            img={proj.img}
          />
        </motion.div>
      )}
    </section>
  )
}

export default Work;
