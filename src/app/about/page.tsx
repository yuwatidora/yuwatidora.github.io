'use client'
import MenuBar from "../components/MenuBar/MenuBar";
import SideMenu from "../components/SideMenu/SideMenu";
import Image from "next/image";
import pp from "/public/assets/port_image.png"
import Acheik_Color from '/public/assets/acheik-color.png'
import styles from "./about.module.css"
export default function About(){
    return(
        <div className={styles.bg}>
            <SideMenu />
            <div className={styles.main_content}>

            <div className={styles.head}>
                about me
                <div className={styles.underline}>
                    <Image src={Acheik_Color} alt="acheik-underline" width={200} />
                </div>
            </div>
            <div className={styles.body}>
                <div className = {styles.p}>
                    <p>Welcome!</p>
                    <p>My name is Yu Wati Nyi, but friends also call me Dora. I graduated in May 2025 with a B.A. in Computer Science and Economics from Mount Holyoke College, and currently looking for fulltime SWE opportunities.</p>
                    <p>As an undergrad, I have worked with robotics, machine learning, computer vision, and full-stack development. I've discovered I enjoy building programs that are interactive and meaningful, and hope to continue doing so!</p>
                    <p>In my leisure time, I like spending time with my family and friends, taking walks, reading, watching good movies, and painting (although I haven’t done it much lately).
                    </p>
                </div>
                <div className={styles.image_wrapper}>
                    <Image src={pp} width ={260} alt="profile image" 
                    style={{ borderRadius: '300px' }}/>
                </div>
                
            </div>
            </div>
            <MenuBar/>
        </div>

    );
}