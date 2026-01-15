import Image from "next/image";
import styles from "./sidemenu.module.css";
import Link from "next/link";

const navItems = [
  {href: '/', label: 'about'},
  {href: '/curriculumvitae#experiences', label: 'experiences'},
  {href: '/curriculumvitae#research', label: 'research'},
  {href: '/curriculumvitae#projects', label: 'projects'},
  {href: '/writing', label:'writings'}
]
export default function SideMenu() {
  return (
    <div className={styles.sidemenu}>
      <div className={styles.list}>
        {navItems.map((items) => (
          <li key={items.href}>
            <Link href={items.href}>
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
