"use client";

import { FloatingNav } from "@/components/FloatingNav";
import { navItems } from "@/data";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import HeroElement19 from "@/components/HeroElement19";

export default function Page() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <HeroElement19></HeroElement19>
      </div>
    </main>
  );
}
