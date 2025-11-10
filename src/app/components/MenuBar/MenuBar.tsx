'use client'
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './Menubar.module.css'
//TODO: Make background blur

const navItems = [
    { href: '/', label: 'home'},
    { href: '/about', label: 'about'}, 
    { href: '/projects', label: 'projects'},
    { href: '/resume', label: 'resume'}, 
    { href: '/blog', label:'blog'},
]

const phoneNavItems = [
    { href: '/', label: 'h'},
    { href: '/about', label: 'a'}, 
    { href: '/projects', label: 'p'},
    { href: '/resume', label: 'r'}, 
    { href: '/blog', label:'b'},
]

export default function MenuBar(){
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setMounted(true); // only render after client hydration
    }, []);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 460);

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 460)
        }; 

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, []); 

    if (!mounted) return null; // avoid hydration mismatch

    const currNavItems = isMobile ? phoneNavItems : navItems;

    return (
        <nav className = {styles.menu}>
            {currNavItems.map((item) => (
                <Link
                    style={{ fontSize: '1.4rem', padding: '0.8rem'}}
                    key ={item.href}
                    href = {item.href}
                    className={`${styles.link} ${pathname === item.href ? styles.active: ''}`}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
    )
}