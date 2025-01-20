import React from 'react';
import styles from "./ProjectCard.module.scss";
import Image from 'next/image';
import GithubIcon from '../Icons/Github';
import ExternalIcon from '../Icons/External';

interface ProjectCardProps {
  title: string,
  description: string,
  techStack: string[],
  url?: string,
  github?: string,
  img: string
}
const ProjectCard = ({
  title = "Project Title", 
  description = "Description", 
  techStack = ["TechStack", "TechStack", "TechStack"], 
  url,
  github, 
  img
}: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image 
          src={img} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
          unoptimized
        />
      </div>
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
        <div className={styles.urls}>
          { url && <a href={url}><ExternalIcon /></a>}
          { github && <a href={github}><GithubIcon /></a>}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
