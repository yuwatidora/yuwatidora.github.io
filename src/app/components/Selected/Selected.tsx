import styles from "./selected.module.css"

export default function Selected(){
    type ExperienceItems = {
        title: string;
        date: string;
        organization: string;
        tech: string[];
        desc: string | React.ReactNode

    }

    const experienceData: ExperienceItems[]=[
        {
            title:"Open Source Developer",
            date: "Sep 2025 - Present",
            organization: "The Mifos Initiative",
            tech: ["Java", "Springboot"],
            desc:"Refactored Fineract’s command processing to use typed DTOs instead of JSON, improving type safety and maintainability. Extending the framework to add auditing, idempotency, and retry logic while keeping APIs backward compatible."
        },
        {
            title: "Google Summer of Code 2025 Participant",
            date: "Jun 2025 - Sep 2025",
            organization: "The Mifos Initiative",
            tech: ["Java", "Springboot", "Docker", "MariaDB"],
            desc: "Developed an end-to-end Credit Bureau Integration microservice for Mifos X, automating the loan check process and streamlining the loan processing workflow."
        }, 
        {
            date: "Dec 2023 - Feb 2024", 
            title: "Software Engineer",
            organization: "Develop for Good", 
            tech: ["Typescript", "Nextjs", "Python", "PostgreSql"],
            desc:"Contributed to the National Police Data Coalition through Develop for Good’s 2023 cohort. Developed admin tool frontends and connected them to a Python API for seamless data interaction."
        },
    ]
    return(
        <div>
            <p className={styles.heading}>select experiences</p>
            <div className={styles.content}>
                <div className={styles.work}>
                   {experienceData.map((items) => (
                        <div key={items.title} className={styles.experiences}>
                        <h2>{items.title}</h2>
                        <div className={styles.metadata}>
                            <p className={styles.organization}>{items.organization}</p>
                            <span className={styles.separator}>|</span>
                            <p className={styles.dates}>{items.date}</p>
                        </div>
                        <p className={styles.desc}>{items.desc}</p>
                        <hr className={styles.post_divider} />
                        </div>
                    )
                    )}

                </div>
            </div>
        </div>
    )
}