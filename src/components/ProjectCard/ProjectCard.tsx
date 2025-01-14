import React from 'react';
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  title: string,
  description: string,
  techStack: string[],
  url?: string
}
const ProjectCard = ({title = "Project Title", description = "Description", techStack = ["TechStack", "TechStack", "TechStack"]}: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.description}>
        <div className={styles.details}>
          <h3>{title}</h3>
          <h5>{description}</h5>
        </div>
        <div className={styles.techStack}>
          { techStack.map((tech, i) => 
            <div key={i}>{tech}</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
