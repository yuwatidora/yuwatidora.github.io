import styles from "./project.module.css"
import Image from "next/image"
import cashew from "../../../../public/assets/cashew.png"
import hh24 from "../../../../public/assets/hh24.png"
import roboarm from "../../../../public/assets/roboarm.png"
import { StaticImageData } from "next/image"

export default function Projects(){
    type ProjectItem = {
        title: string;
        description: string;
        technologies: string[];
        github: string;
        category: string;
        image?: string | StaticImageData;
    }

    const projectsData: ProjectItem[] = [
        {
            title: "Fall Detector",
            description: "An iOS application that scrapes the accelerometer data from an iPhone to alert whether user (senior) has fallen and alerts care givers.",
            technologies: ["React Native", "Javascript"],
            github: "https://github.com/KhanhKhuat1504/Cashew",
            category: "Web/Mobile",
            image: cashew
        },
        {
            title: "American Sign Language Alphabet Reader",
            description: "Python GUI that translates signed alphabets in real-time",
            technologies: ["Python", "TensorFlow", "OpenCV", "Mediapipe"],
            github: "https://github.com/yuwatidora/asl_live_detection/blob/main/ASL%20Recognition%20using%20Computer%20Vision.pdf",
            category: "AI/ML"
        },
        {
            title: "HackHolyoke Website",
            description: "The Official Website for Mount Holyoke College's annual hackathon: HackHolyoke 2024.",
            technologies: ["Javascript", "NextJs"],
            github: "https://github.com/yuwatidora/HH24",
            category: "Web/Mobile",
            image: hh24
        },
        {
            title: "Sride: a ride-share app",
            description: "An iOS application for a college community to post requests to share rides and offers to split the cost of a ride.",
            technologies: ["Swift"],
            github: "https://github.com/AuYuRa/sride",
            category: "Web/Mobile"
        },
        {
            title: "Robot Arm Manipulator",
            description: "A Mujoco Simulation to make a robot arm insert itself in a box using the Newton Raphson optimization method at different randomness levels.",
            technologies: ["Mujoco", "Python"],
            github: "https://github.com/yuwatidora/CS403_BoxControlCompetition/blob/main/CS403_Final_Report.pdf",
            category: "Robotics",
            image: roboarm
        },
        {
            title: "Miniature Fire-fighting Robot",
            description: "Arduino robot that uses lane and distance sensors to reach a location, then uses light sensor to detect if there is a fire.",
            technologies: ["C++", "Arduino"],
            github: "https://github.com/yuwatidora/fire-fighting-robot-arduino/blob/main/FireFighting_Mission.pdf",
            category: "Robotics"
        },

    ];
    
    return(
        <div>
            <p className={styles.heading}> select projects</p>
            <div className={styles.projects_grid}>
                {projectsData.map((project) => (
                    <a 
                        key={project.title}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.project_card} ${project.image ? styles.has_image : ''}`}
                    >
                        {project.image && (
                            <div className={styles.background_image}>
                                <Image 
                                    src={project.image} 
                                    alt={project.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        )}
                        <div className={styles.project_overlay}>
                            <div className={styles.project_content}>
                                <h3 className={styles.project_title}>{project.title}</h3>
                                <p className={styles.project_description}>{project.description}</p>
                                <div className={styles.technologies}>
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className={styles.tech_tag}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}