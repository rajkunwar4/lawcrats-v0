"use client";

import { BackgroundBeamsDemo } from "@/components/DemoBgBeams";
import { FloatingNavDemo } from "@/components/FloatNav";

export default function Home() {
  return (
    <main>
      <FloatingNavDemo/>
      <BackgroundBeamsDemo />
      <div className="h-[300vh]"></div>
    </main>
  );
}
