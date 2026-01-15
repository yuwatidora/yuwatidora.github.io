import Image from "next/image";
import styles from "./page.module.css";
import ResponsiveLayout from "../components/ResponsiveLayout/ResponsiveLayout";
import Selected from "../components/Selected/Selected";
import Research from "../components/Research/Research";
import Projects from "../components/Projects/Projects";

export default function CV() {
  return (
    <ResponsiveLayout>
    <div>
      <div className={styles.side_menu_space}>
      </div>
      <div className={styles.cv_page}>
        <div className='container' id='experiences'>
          <Selected/>
        </div>

        <div className='container' id='research'>
          <Research/>
        </div>

        <div className='container' id='projects'>
          <Projects/>
        </div>

      </div>
    </div>
    </ResponsiveLayout>
  );
}