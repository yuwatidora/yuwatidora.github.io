import styles from "./research.module.css"
export default function Research(){
    type ResearchItems = {
        lab: string;
        date: string;
        title: string;
        desc: string | React.ReactNode
    }

    const researchData: ResearchItems[]
    =[
        {
           lab: "Robotics, Simulation, and Education (Rose) Lab",
           date: "Jun - Dec 2024",
           title:"Undergraduate Researcher - Adaptive Motion Planning Algorithms for Dynamic Environments in Robotics ",
           desc:"Developed an end-to-end motion planning pipeline for Duckietown robots by integrating OMPL with SE(2), including A waypoint generation and PRM-based continuous planning. Built command translation interfaces, automated environment setup with tests, and presented results at the Mount Holyoke College Summer Research Symposium (2024)."
        },
        {
            lab: "Intelligent Medical Robotics (iMero) Lab",
            date: "May - Nov 2023",
            title:"Undergraduate Researcher - Generating Haptics in Telerobotics through Perception Complementarities during Physical Distancing",
            desc:"Contributed to an NSF-funded project on vision-based force estimation for robot-assisted minimally invasive surgery. Built force-sensor hardware, created a Python/OpenCV preprocessing pipeline for 57,600 images, and trained a CNN-based multimodal model in TensorFlow; presented results through the Mount Holyoke LEAP program (2023)."
        }
    ]
    return(
        <div>
            <p className={styles.heading}>undergrad research</p>
            <div className={styles.content}>
                <div className={styles.work}>
                   {researchData.map((items) => (
                        <div key={items.title} className={styles.experiences}>
                        <h2>{items.lab}</h2>
                        <div className={styles.metadata}>
                            <p className={styles.organization}>{items.title}</p>
                            <p className={styles.organization}>{items.date}</p>
                            
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