import { useState } from 'react';
import Image from "next/image";
import styles from "./HamburgerMenu.module.css";
import linkedin from "../../../../public/assets/icons8-linkedin.png";
import github from "../../../../public/assets/icons8-github-64.png";
import mail from "../../../../public/assets/icons8-email-50.png";

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Hamburger Button */}
            <button className={styles.hamburger_btn} onClick={toggleMenu}>
                <span className={`${styles.hamburger_line} ${isOpen ? styles.active : ''}`}></span>
                <span className={`${styles.hamburger_line} ${isOpen ? styles.active : ''}`}></span>
                <span className={`${styles.hamburger_line} ${isOpen ? styles.active : ''}`}></span>
            </button>

            {/* Modal Overlay */}
            {isOpen && (
                <div className={styles.modal_overlay} onClick={closeMenu}>
                    <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.close_btn} onClick={closeMenu}>
                            ×
                        </button>
                        
                        <div className={styles.profile_section}>
                            <h3 className={styles.name}>Yu Wati Nyi</h3>
                            <p className={styles.title}>Software Engineer</p>
                        </div>
                        
                        <div className={styles.contact_section}>
                            <a href="https://linkedin.com/in/yuwatinyi" target="_blank" rel="noopener noreferrer" className={styles.contact_link} onClick={closeMenu}>
                                <Image src={linkedin} alt="linkedin icon"/>
                                <span className={styles.link_label}>LinkedIn</span>
                            </a>
                            
                            <a href="https://github.com/yuwatidora" target="_blank" rel="noopener noreferrer" className={styles.contact_link} onClick={closeMenu}>
                                <Image src={github} alt="github icon"/>
                                <span className={styles.link_label}>GitHub</span>
                            </a>
                            
                            <a href="mailto:yuwatinyi003@gmail.com" className={styles.contact_link} onClick={closeMenu}>
                                <Image src={mail} alt="email icon"/>
                                <span className={styles.link_label}>Email</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
