import styles from "./SideMenu.module.css"
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"
import Image from "next/image";
import linkedin from "../../../../public/assets/icons8-linkedin.png";
import github from "../../../../public/assets/icons8-github-64.png";
import mail from "../../../../public/assets/icons8-email-50.png";

export default function SideMenu() {
    return (
        <>
            {/* Desktop Side Menu */}
            <div className={styles.side_menu}>
                <div className={styles.profile_section}>
                    <h3 className={styles.name}>Yu Wati Nyi</h3>
                    <p className={styles.title}>Software Engineer</p>
                </div>
                
                <div className={styles.contact_section}>
                    <a href="https://linkedin.com/in/yuwatinyi" target="_blank" rel="noopener noreferrer" className={styles.contact_link}>
                        <Image src ={linkedin} alt="linkedin icon"/>
                        <span className={styles.link_label}>LinkedIn</span>
                    </a>
                    
                    <a href="https://github.com/yuwatidora" target="_blank" rel="noopener noreferrer" className={styles.contact_link}>
                        <Image src={github} alt="github icon"/>
                        <span className={styles.link_label}>GitHub</span>
                    </a>
                    
                    <a href="mailto:yuwatinyi003@gmail.com" className={styles.contact_link}>
                        <Image src={mail} alt="email icon"/>
                        <span className={styles.link_label}>Email</span>
                    </a>
                </div>
            </div>
            
            {/* Mobile Hamburger Menu */}
            <HamburgerMenu />
        </>
    );
}
