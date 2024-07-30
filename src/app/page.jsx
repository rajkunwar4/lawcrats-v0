"use client";

import Belief from "@/components/Belief";
import { BackgroundBeamsDemo } from "@/components/DemoBgBeams";
import { FloatingNavDemo } from "@/components/FloatNav";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <main className="bg-[#FFFEFE] h-[300vh] relative">
      {/* <FloatingNavDemo /> */}

      <Navbar />
      <Hero />
      <Belief />
    
    </main>
  );
}

/* 
primary colors: 
white: #FFFEFE
off-white: #FBF9F8


  background colors: 1)bg-zinc-200/20   2)bg-white
  card-bg: #F4F3F0

*/
