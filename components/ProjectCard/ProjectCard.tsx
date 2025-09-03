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
        <div className={styles.project_item}>
            <a href={github} target="_blank" rel="noopener noreferrer" className={styles.project_image_link}>
                <div className={styles.project_image_placeholder}>
                    {image ? (
                        <Image src={image} 
                        alt = "project image"
                        className="cardPic"
                        priority/>
                    ) : (
                        <div className={styles.no_image_placeholder}>
                            <span>No Image Available</span>
                        </div>
                    )}
                </div>
            </a>
            
            <div className={styles.project_content}>
                <div className={styles.project_title}>{title}</div>
                <div className={styles.project_description}>{description}</div>
                
                <div className={styles.project_tech}>
                    {technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={styles.tech_tag}>{tech}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}
