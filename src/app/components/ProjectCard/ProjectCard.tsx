import styles from "./ProjectCard.module.css"
import Image from "next/image";

import { StaticImageData } from "next/image";
import type { ImageProps } from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    github: string;
    image?: string | StaticImageData;  // Made optional
}

export default function ProjectCard({ title, description, technologies, github, image}: ProjectCardProps) {
    return (
        <a href={github} target="_blank" rel="noopener noreferrer" className={styles.project_item}>
            {image && (
                <div className={styles.project_image_background}>
                    <Image 
                        src={image} 
                        alt="project image"
                        className="cardPic"
                        priority
                        fill
                    />
                </div>
            )}
            
            <div className={styles.project_content}>
                <div className={styles.project_title}>{title}</div>
                <div className={styles.project_description}>{description}</div>
                
                <div className={styles.project_tech}>
                    {technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={styles.tech_tag}>{tech}</span>
                    ))}
                </div>
            </div>
        </a>
    );
}
