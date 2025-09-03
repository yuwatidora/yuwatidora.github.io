import styles from "./ResumeMenu.module.css"

export default function ResumeMenu() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className={styles.resume_menu}>   
            <div className={styles.menu_links}>
                <button 
                    onClick={() => scrollToSection('education')} 
                    className={styles.menu_link}
                >
                    Education
                </button>
                
                <button 
                    onClick={() => scrollToSection('skills')} 
                    className={styles.menu_link}
                >
                    Skills
                </button>
                
                <button 
                    onClick={() => scrollToSection('experience')} 
                    className={styles.menu_link}
                >
                    Experience
                </button>
                
                <button 
                    onClick={() => scrollToSection('leadership')} 
                    className={styles.menu_link}
                >
                    Leadership
                </button>
            </div>
        </div>
    );
}
