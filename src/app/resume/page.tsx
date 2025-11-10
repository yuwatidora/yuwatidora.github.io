'use client'
import MenuBar from "../components/MenuBar/MenuBar";
import SideMenu from "../components/SideMenu/SideMenu";
import ResumeMenu from "../components/ResumeMenu/ResumeMenu";
import Image from "next/image";
import Acheik_Color from '/public/assets/acheik-color.png'
import styles from "./resume.module.css"

export default function Resume(){
    type ExperienceItem = {
        title: string;
        organization: string;
        date: string;
        description: string | React.ReactNode;
    };

    const experienceData: ExperienceItem[] = [
        {
            title: "Open Source Developer",
            organization: "Google Summer of Code, The Mifos Initiative",
            date: "June 2025 - September 2025",
            description: <>
                {/* • Developed and owned an end-to-end <strong>credit bureau integration service</strong> in <strong>Java and Spring Boot</strong> for a fintech platform, resulting in a <strong>50% reduction</strong> in time to integrate with new credit reporting agencies.<br/>
                • Built secure <strong>RESTful APIs</strong> with <strong>Spring Boot, JAX-RS, and Spring Data JPA</strong>, achieving <strong>100% test coverage</strong> and supporting encrypted storage and dynamic request headers for multiple credit bureaus.<br/>
                • Automated database setup with <strong>Liquibase schema migrations</strong> and <strong>Docker Compose</strong>–containerized MariaDB, improving reliability and developer onboarding speed. */}
            </>
        },
        {
            title: "Robotics Software Engineer Intern",
            organization: "Robotics, Simulation, and Education Lab (RoSE Lab).",
            date: "June 2024 - August 2024",
            description: <>
                {/* • Led a team of 3 to build and automate a robotics software environment using NVIDIA Jetson, Python, ROS, and Docker, cutting deployment time by 50% through custom setup scripts.<br/>
                • Resolved critical dependency errors in Duckietown’s OpenGL-based simulator(used by 700+ users) by debugging Pyglet issues and collaborating with upstream maintainers.<br/>
                • Implemented and documented multi-robot path planning algorithms using OMPL and PPL libraries in XML, C++, and Python, enabling reproducible benchmarking for future researchers. */}
            </>
        },
        {
            title: "Software Engineer Intern",
            organization: "National Police Data Coalition, Develop For Good",
            date: "December 2023 - Febuary 2024",
            description: <>
                {/* • Built 2 responsive admin-facing dashboards for a non-profit impacting 70,000 people, with Next.js, TypeScript, and CSS, enabling admins to view, add, delete, select, and edit roles for multiple users across organizations.<br/>
                • Integrated RESTful APIs using Python and PostgreSQL to support secure role-based access control, onboarding logic, and membership actions.<br/>
                • Created 3 reusable UI components and 5 documented Storybook entries in collaboration with designers and engineers, increasing frontend velocity and reducing design-to-code time by 30%. */}
            </>
        },
        {
            title: "Machine Learning Researcher Intern",
            organization: "Intelligent Medical Robotics Lab (iMero Lab) ",
            date: "May 2023 - August 2024",
            description: <>
                {/* • Developed a force-to-vision deep learning model using CNNs and TensorFlow to deblur real-time surgical images, improving RAVEN robot precision and reducing hardware costs.<br/>
                • Optimized a dataset generation program in Python and OpenCV to process 57,600 blurred surgical images, reducing processing time by 50%.<br/>
                • Designed an Arduino-based sensor circuit to capture human-applied force on laparoscopic instruments, improving model training with accurate ground truth data. */}
            </>
        }
    ];

    const leadershipData = [
        {
            title: "President",
            organization: "Girls Who Code College Loops",
            date: "September 2024 - May 2025",
            description: ""
        },
        {
            title: "Web Development Team Lead",
            organization: "HackHolyoke Hackathon Organization Team",
            date: "June 2024 - November 2024",
            description: ""
        }
    ];

    const educationData = [
        {
            title: "Mount Holyoke College",
            organization: "Bachelor of Arts in Computer Science and Economics",
            date: "September 2021 - May 2025",
            description: ""
        }
    ];

    return(
        <div className={styles.bg}>
            <div className={styles.sidebar_container}>
                <SideMenu />
                <ResumeMenu />
            </div>
            <div className={styles.main_content}>
                <div className={styles.head}>
                    resume
                    <div className={styles.underline}>
                        <Image src={Acheik_Color} alt="acheik-underline" width={200} />
                    </div>
            </div>
            
            <div className={styles.resume_container}>
                {/* Education Section */}
                <div className={styles.section} id="education">
                    <h2 className={styles.section_title}>Education</h2>
                    <div className={styles.timeline}>
                        {educationData.map((item, index) => (
                            <div key={index} className={styles.timeline_item}>
                                <div className={styles.item_header}>
                                    <h3 className={styles.item_title}>{item.title}</h3>
                                    <p className={styles.item_organization}>{item.organization}</p>
                                    <p className={styles.item_date}>{item.date}</p>
                                </div>
                                <p className={styles.item_description}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.section} id="skills">
                    <h2 className={styles.section_title}>Skills</h2>
                    <div className={styles.skills_container}>
                        <div className={styles.skill_category}>
                            <h4 className={styles.skill_category_title}>Programming Languages:</h4>
                            <p className={styles.skill_list}>Python, Java, C++, JavaScript, TypeScript</p>
                        </div>
                        <div className={styles.skill_category}>
                            <h4 className={styles.skill_category_title}>Frameworks:</h4>
                            <p className={styles.skill_list}>PyTorch, TensorFlow, React.js, Next.js, Node.js, Jest, Spring Boot</p>
                        </div>
                        <div className={styles.skill_category}>
                            <h4 className={styles.skill_category_title}>Tools & Systems:</h4>
                            <p className={styles.skill_list}>REST APIs, MySQL, Docker, Bash, Linux, Git</p>
                        </div>
                        <div className={styles.skill_category}>
                            <h4 className={styles.skill_category_title}>Concepts:</h4>
                            <p className={styles.skill_list}>ML/AI, Backend Development, Frontend Development, SDLC, Agile, Unit/Integration Tests</p>
                        </div>
                    </div>
                </div>
                {/* Experience Section */}
                <div className={styles.section} id="experience">
                    <h2 className={styles.section_title}>Experience</h2>
                    <div className={styles.timeline}>
                        {experienceData.map((item, index) => (
                            <div key={index} className={styles.timeline_item}>
                                <div className={styles.item_header}>
                                    <h3 className={styles.item_title}>{item.title}</h3>
                                    <p className={styles.item_organization}>{item.organization}</p>
                                    <p className={styles.item_date}>{item.date}</p>
                                </div>
                                <div className={styles.item_description}>
                                    {typeof item.description === 'string' 
                                        ? item.description.split('\n').map((line: string, lineIndex: number) => (
                                            <p key={lineIndex}>{line}</p>
                                          ))
                                        : item.description
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Leadership Section */}
                <div className={styles.section} id="leadership">
                    <h2 className={styles.section_title}>Leadership</h2>
                    <div className={styles.timeline}>
                        {leadershipData.map((item, index) => (
                            <div key={index} className={styles.timeline_item}>
                                <div className={styles.item_header}>
                                    <h3 className={styles.item_title}>{item.title}</h3>
                                    <p className={styles.item_organization}>{item.organization}</p>
                                    <p className={styles.item_date}>{item.date}</p>
                                </div>
                                <p className={styles.item_description}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
            
            <MenuBar/>
        </div>
    );
}