'use client';

import Image from "next/image";
import styles from "./sidemenu.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  {href: '/', label: 'about'},
  {href: '/curriculumvitae#experiences', label: 'experiences'},
  {href: '/curriculumvitae#research', label: 'research'},
  {href: '/curriculumvitae#projects', label: 'projects'},
  {href: '/writing', label:'writings'}
]

export default function SideMenu({ isOpen }: { isOpen?: boolean }) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('');
  
  useEffect(() => {
    if (pathname !== '/curriculumvitae') return;
    
    const handleScroll = () => {
      const sections = ['experiences', 'research', 'projects'];
      const scrollPosition = window.scrollY + 200; // offset for better UX
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    handleScroll(); // Check on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);
  
  const isActive = (href: string) => {
    const [basePath, hash] = href.split('#');
    
    // For home page
    if (basePath === '/') {
      return pathname === '/';
    }
    
    // For CV sections, check active section from scroll tracking
    if (basePath === '/curriculumvitae' && hash) {
      return pathname === basePath && activeSection === hash;
    }
    
    // For other pages
    return pathname.startsWith(basePath);
  };
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const [basePath, hash] = href.split('#');
    
    if (basePath === '/curriculumvitae' && hash && pathname === basePath) {
      e.preventDefault();
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveSection(hash);
      }
    }
  };
  
  return (
    <div className={`${styles.sidemenu} ${isOpen ? styles.open : ''}`}>
      <div className={styles.list}>
        {navItems.map((items) => (
          <li key={items.href}>
            <Link 
              href={items.href}
              className={isActive(items.href) ? styles.active : ''}
              onClick={(e) => handleClick(e, items.href)}
            >
              {items.label}
            </Link>
          </li>
        )
        )}
      </div>
      
      <div className={styles.copyright}>
        © yuwatidora 2025
      </div>
    </div>
  );
}
