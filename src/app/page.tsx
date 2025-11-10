//TODO: add some animation to slide in or somthing when it renders. 
'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import MenuBar from "./components/MenuBar/MenuBar";
import Heading from "./components/Heading/Heading";
import LoadingTransition from "./components/LoadingTransition/LoadingTransition";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if this is the first visit to the site
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      setIsLoading(true);
      sessionStorage.setItem('hasVisited', 'true');
    } else {
      // If returning from other pages, show content immediately
      setShowContent(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <div className={styles.page}>
      {/* {isLoading && <LoadingTransition onComplete={handleLoadingComplete} />} */}
      
      <main className={`${styles.main}`}>
        <Heading/>
      </main>
      
      <MenuBar/>
    </div>
  );
}
