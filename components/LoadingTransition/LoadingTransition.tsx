import { useEffect, useState } from 'react';
import styles from './LoadingTransition.module.css';

interface LoadingTransitionProps {
    onComplete: () => void;
}

export default function LoadingTransition({ onComplete }: LoadingTransitionProps) {
    const [progress, setProgress] = useState(0);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setShowContent(true);
                        setTimeout(() => {
                            onComplete();
                        }, 500);
                    }, 200);
                    return 100;
                }
                return prev + 2;
            });
        }, 50);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className={`${styles.loading_container} ${showContent ? styles.fade_out : ''}`}>
            <div className={styles.loading_content}>
                <div className={styles.logo_container}>
                    <div className={styles.logo_text}>YU WATI NYI</div>
                    <div className={styles.subtitle}>Portfolio</div>
                </div>
                
                <div className={styles.progress_container}>
                    <div className={styles.progress_bar}>
                        <div 
                            className={styles.progress_fill}
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <div className={styles.progress_text}>{progress}%</div>
                </div>
                
                <div className={styles.loading_dots}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}
