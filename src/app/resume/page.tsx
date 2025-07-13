'use client'
import MenuBar from "../components/MenuBar/MenuBar";
import Image from "next/image";
import Acheik_Color from '/public/assets/acheik-color.png'
import styles from "./resume.module.css"

export default function Resume(){
    const experienceData = [
        {
            title: "Contributor",
            organization: "Google Summer of Code, The Mifos Initiative",
            date: "June 2025 - September 2025",
            description: ""
        },
        {
            title: "Robotics Software Engineer Intern",
            organization: "Robotics, Simulation, and Education Lab (RoSE Lab).",
            date: "June 2024 - August 2024",
            description: ""
        },
        {
            title: "Software Engineer Intern (Volunteer) ",
            organization: "National Police Data Coalition, Develop For Good",
            date: "December 2023 - Febuary 2024",
            description: ""
        },
        {
            title: "Machine Learning Researcher Intern",
            organization: "Intelligent Medical Robotics Lab (iMero Lab) ",
            date: "May 2023 - August 2024",
            description: ""
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
            <div className={styles.head}>
                resume
                <div className={styles.underline}>
                    <Image src={Acheik_Color} alt="acheik-underline" width={200} />
                </div>
            </div>
            
            <div className={styles.resume_container}>
                {/* Experience Section */}
                <div className={styles.section}>
                    <h2 className={styles.section_title}>Experience</h2>
                    <div className={styles.timeline}>
                        {experienceData.map((item, index) => (
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

                {/* Leadership Section */}
                <div className={styles.section}>
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

                {/* Education Section */}
                <div className={styles.section}>
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
            </div>
            
            <MenuBar/>
        </div>
    );
}