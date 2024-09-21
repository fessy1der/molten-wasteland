"use client";

import { FloatingNav } from "@/components/FloatingNav";
import { navItems } from "@/data";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { Broadcast } from "@/components/ui/Broadcast";
import { Phases } from "@/components/ui/Phases";
import { NavbarMain } from "@/components/ui/NavBar";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems}/> */}
        <NavbarMain/>
        <Hero></Hero>
        <Grid/>
        <Phases/>
        <Broadcast/>
      </div>
    </main>
  );
}
