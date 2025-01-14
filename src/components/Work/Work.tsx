import React from 'react';
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
]

const Work = () => {
  return (
    <section className={styles.work} id="work">
      {myWork.map((proj, i) => 
        <ProjectCard 
          key={i} 
          title={proj.title}
          description={proj.description}
          techStack={proj.techStack}
          url={proj.url}
        />
      )}
    </section>
  )
}

export default Work;
