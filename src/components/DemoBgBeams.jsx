"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md  relative flex flex-col items-center  antialiased font-normal">
      <div className="max-w-2xl mx-auto p-10 z-10 flex flex-col gap-4">
        <h2 className="text-4xl font-semibold text-[#525359] tracking-tight">
          Our Belief.
        </h2>
        <p className="text-[#525359]">
          We bridge the gap between technology and law, ensuring ethical
          compliance, data privacy, and innovative solutions.
        </p>
        <p className="text-[#525359]">
          At LawCrats, we firmly believe in the intersection of technology and
          law. Our core principles guide our work, ensuring that we provide
          innovative legal solutions to our clients.
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
