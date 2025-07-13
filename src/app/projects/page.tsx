'use client'
import { useState } from "react";
import MenuBar from "../components/MenuBar/MenuBar";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import ProjectFilter from "../components/ProjectFilter/ProjectFilter";
import Image from "next/image";
import Acheik_Color from '/public/assets/acheik-color.png'
import styles from "./projects.module.css"

export default function Projects(){
    const [activeFilter, setActiveFilter] = useState("All");

    const projects = [
        {
            title: "MamaWell",
            description: "An IOS application that supports postpartnum mothers to simplify self-care practices.",
            technologies: ["React Native", "Javascript", "CSS Modules"],
            github: "https://github.com/yuwatidora/bwh_pookies",
            category: "Web/Mobile"
        },
        {
            title: "Fall Detector",
            description: "An IOS application that scrapes the accelorometer data from an iphone to alert whether user (senior) has fallen and alerts care givers.",
            technologies: ["React Native", "Javascript"],
            github: "https://github.com/yuwatidora/HackMIT_2024",
            category: "Web/Mobile"
        },
        {
            title: "American Sign Language Alphabet Reader",
            description: "Python GUI that translates signed alphabets in real-time",
            technologies: ["Python", "TensorFlow", "OpenCV", "Mediapipe"],
            github: "",
            category: "AI/ML"
        },
        {
            title: "Miniature Fire-fighting Robot",
            description: "Arduino robot that uses lane and distance sensors to reach a location, then uses light sensor to detect if there is a fire.",
            technologies: ["C++", "Arduino"],
            github: "",
            category: "Robotics"
        },
        {
            title: "Asteroids",
            description: "A clone of the asteroids arcade game: shoot asteroids to win.",
            technologies: ["Java", "JavaFX"],
            github: "",
            category: "Game"
        },
        {
            title: "HackHolyoke Website",
            description: "The Official Website for Mount Holyoke College's annual hackathon: HackHolyoke 2024.",
            technologies: ["Javascript", "NextJs"],
            github: "https://github.com/username/game",
            category: "Web/Mobile"
        },
        {
            title: "Robot Arm Manipulator",
            description: "A Mujoco Simulation to make a robot arm insert itself in a box using the Newton Raphson optmization method at different randomness levels.",
            technologies: ["Mujoco", "Python"],
            github: "",
            category: "Robotics"
        },
        {
            title: "Yu-Instagram",
            description: "An IOS instagram clone where user can post and see other's post",
            technologies: ["Swift"],
            github: "https://github.com/username/game",
            category: "Web/Mobile"
        },
        {
            title: "Yu-Twitter",
            description: "Twitter clone where user can follow others, have followers, view tweets, and create tweets",
            technologies: ["Swift"],
            github: "https://github.com/username/game",
            category: "Web/Mobile"
        },
        {
            title: "Yu-Flix",
            description: "Flix clone where user can view movies and descriptions",
            technologies: ["Swift"],
            github: "https://github.com/username/game",
            category: "Web/Mobile"
        },
        {
            title: "Mummy Frogger",
            description: "A python game that is a re-imagination of the arcade game frogger.",
            technologies: ["Python", "Pygame"],
            github: "https://github.com/username/game",
            category: "Game"
        },
        {
            title: "Wild Fire Detector",
            description: "A computer vision project that detects whether an image contains wildfire or not.",
            technologies: ["Python", "Tensorflow", "OpenCV"],
            github: "https://github.com/username/game",
            category: "AI/ML"
        },
        {
            title: "Sride: a ride-share app",
            description: "An IOS application for a college community to post requests to share rides and offers to split the cost of a ride.",
            technologies: [],
            github: "https://github.com/username/game",
            category: "Web/Mobile"
        },
        {
            title: "TrashMe",
            description: "An infographic website that informs the user whether the trash is recyclable or not. - TechTogether Boston 2023 Submission",
            technologies: ["Javascript", "Figma", "React"],
            github: "https://github.com/username/game",
            category: "Web/Mobile"
        }
    ];

    const filteredProjects = activeFilter === "All" 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    return(
        <div className={styles.bg}>
            <div className={styles.head}>
                projects
                <div className={styles.underline}>
                    <Image src={Acheik_Color} alt="acheik-underline" width={200} />
                </div>
            </div>
            
            <ProjectFilter 
                activeFilter={activeFilter} 
                onFilterChange={setActiveFilter} 
            />
            
            <div className={styles.projects_container}>
                {filteredProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        github={project.github}
                    />
                ))}
            </div>
            
            <MenuBar/>
        </div>
    );
}