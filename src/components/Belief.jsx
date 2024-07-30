import React from "react";
import { IconGavel } from "@tabler/icons-react";
import { BackgroundBeamsDemo } from "./DemoBgBeams";
import { BackgroundBeams } from "./ui/background-beams";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Belief = () => {
  return (
    <div className="flex flex-col gap-10 items-center w-screen bg-blue-600/10 py-20">
      <div className=" p-10 flex flex-col gap-4 justify-center items-center">
        <h2 className="text-5xl font-semibold text-[#525359] tracking-tight">
          Our Belief.
        </h2>

        <p className="text-[#525359] max-w-2xl">
          We bridge the gap between technology and law, ensuring ethical
          compliance, data privacy, and innovative solutions.
        </p>
        <p className="text-[#525359] max-w-2xl">
          At LawCrats, we firmly believe in the intersection of technology and
          law. Our core principles guide our work, ensuring that we provide
          innovative legal solutions to our clients.
        </p>
      </div>
      <div className="flex flex-col items-center gap-10 ">
        <HoverBorderGradient>Product</HoverBorderGradient>
        <img
          src="./ss.png"
          alt=""
          className="  sm:w-[60vw] rounded"
        />
      </div>
    </div>
  );
};

export default Belief;
