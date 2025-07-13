import styles from "./ProjectCard.module.css"

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    github: string;
}

export default function ProjectCard({ title, description, technologies, github }: ProjectCardProps) {
    return (
        <div className={styles.project_item}>
            <a href={github} target="_blank" rel="noopener noreferrer" className={styles.project_image_link}>
                <div className={styles.project_image_placeholder}>
                    {/* Image will go here */}
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
