"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./FixedNav";
import { cn } from "@/utils/cn";

export function NavbarMain() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Marketplace">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Useful Links">
        <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Post Molten</HoveredLink>
            <HoveredLink href="/interface-design">Ecosystem</HoveredLink>
            <HoveredLink href="/seo">IP/Licensing</HoveredLink>
            <HoveredLink href="/branding">Element 19</HoveredLink>
          </div>
        </MenuItem>
        
      </Menu>
    </div>
  );
}
