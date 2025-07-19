'use client'
import MenuBar from "../../../components/MenuBar/MenuBar";
import Image from "next/image";
import pp from "/public/assets/port_image.png"
import Acheik_Color from '/public/assets/acheik-color.png'
import styles from "./about.module.css"
export default function About(){
    return(
        <div className={styles.bg}>
            {/* <div className={styles.acheik_color}>
                <Image src={Acheik_Color} alt="acheik-image" width={400} />
                <Image src={Acheik_Color} alt="acheik-image" width={400} />
                <Image src={Acheik_Color} alt="acheik-image" width={400} />
                <Image src={Acheik_Color} alt="acheik-image" width={400} />
            </div> */}
            <div className={styles.head}>
                about me
                <div className={styles.underline}>
                    <Image src={Acheik_Color} alt="acheik-underline" width={200} />
                </div>
            </div>
            <div className={styles.body}>
                <div className = {styles.p}>
                    <p>Hi!</p>
                    <p>My name is Yu Wati Nyi, but friends also call me Dora. I am from Myanmar. I graduated in May 2025 with a B.A. in Computer Science and Economics from Mount Holyoke College. </p>
                    <p>I really like problem-solving, which is why I majored in both Computer Science and Economics. I like programming, building software, and figuring out how to get a desired outcome. I also like to figure out why things are the way they are in the world. In Economics, I get to combine pieces of information and history and analyze the outcome of policies and actions.</p>
                    <p>In my leisure time, I like spending time and laughing together with my family and friends, taking walks, reading, watching good movies, and painting (although I haven’t done it much lately).
                    </p>
                </div>
                <div className={styles.image_wrapper}>
                    <Image src={pp} width ={300} alt="profile image" 
                    style={{ borderRadius: '40px' }}/>
                </div>
                
            </div>
            <MenuBar/>
        </div>

    );
}