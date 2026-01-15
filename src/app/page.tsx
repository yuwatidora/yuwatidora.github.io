import Image from "next/image";
import styles from "./page.module.css";
import ResponsiveLayout from "./components/ResponsiveLayout/ResponsiveLayout";


export default function Home() {
  return (
    <ResponsiveLayout>
    <div className={styles.viewpage}>
      <div className={styles.homepage}>

        <div className={styles.headers}>
          <div className={styles.hero_image}>

          </div>
          <div className={styles.name_heading}>
            <h1>yu wati nyi</h1>

            <div className={styles.acheik_banner}>
            <Image
              src="/assets/acheik-color.png"
              alt="acheik banner"
              width={1200}  
              height={160}   
              className={styles.acheikImage}
              />
            </div>

            <div className={styles.icons}>
              <a href="mailto:yuwatinyi003@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.contact_link}>
                <Image src="/assets/email.png" alt="email image" width={40}height={40}/>
              </a>

              <a href="https://linkedin.com/in/yuwatinyi" target="_blank" rel="noopener noreferrer" className={styles.contact_link}>
                <Image src="/assets/business.png"alt="email image"width={40}height={40}/>
              </a>

              <a href="https://github.com/yuwatidora" target="_blank" rel="noopener noreferrer" className={styles.contact_link}>
                <Image src="/assets/github.png"alt="email image"width={40}height={40}/>
              </a>

            </div>

          </div>

        </div>

        <div className={styles.intro}>
          <p>Hey there!</p>

          <p> I’m Yu Wati Nyi (Dora), an early-career software engineer. I build and deploy production-level APIs, machine learning pipelines, and scalable software systems. My experience spans fintech development and undergraduate research in robotics and motion planning. </p>

          <p> I recently graduated with a B.A in Computer Science and Economics from Mount Holyoke College and currently contribute to The Mifos Initiative — a UN-recognized Digital Public Good advancing open-source fintech solutions for global financial inclusion.</p>
            
          <p>P.S. the patterns you see here are called ‘acheik’, they are often found on burmese clothing. </p>
        </div>        
      </div>
    </div>    </ResponsiveLayout>  );
}
