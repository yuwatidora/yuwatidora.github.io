'use client'
import Image from "next/image";
import styles from "./page.module.css";
import MenuBar from "./components/MenuBar/MenuBar";
import Heading from "./components/Heading/Heading"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Heading/>
        <MenuBar/>

      </main>
    </div>
  );
}
