'use client';

import { useState } from 'react';
import SideMenu from '../SideMenu/SideMenu';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

export default function ResponsiveLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HamburgerMenu onToggle={setMenuOpen} />
      <SideMenu isOpen={menuOpen} />
      {children}
    </>
  );
}
