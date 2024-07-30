import React from "react";
import Link from "next/link";
import { GridBackgroundDemo } from "./GridBackground";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { IconArrowUpRight } from "@tabler/icons-react";
import { IconCalendar } from "@tabler/icons-react";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center  py-24 text-[#52535A] text-md px-10 gap-16">
      <div className="text-4xl font-light ">
        {" "}
        <span className="font-bold text-5xl"> LawCrats</span> NextGen
        Techno-Lawyers.
      </div>
      {/* first part */}
      <div className="max-w-xl flex flex-col gap-10 ">
        <p>
          LawCrats is a forward-thinking firm that combines traditional legal
          expertise with cutting-edge technology to provide comprehensive legal
          services. Our team of seasoned lawyers is not only well-versed in the
          law but also possesses a deep understanding of technology, which
          enables us to offer innovative solutions to our clients.
        </p>
        <div className="text-sm flex sm:flex-row flex-col gap-10  sm:gap-0">
          <Link href={"/"}>
            <span className="border rounded-full tracking-tighter px-4 py-3 text-[#FFFEFE] bg-[#27272A] mr-5">
              {" "}
              Lawcrafts AI assistant <IconArrowUpRight className="inline" />
            </span>
          </Link>
          <Link href={"/"}>
            <span className="border rounded-full tracking-tighter px-4 py-3">
              Schedule an Intro <IconCalendar className="inline" />
            </span>
          </Link>
        </div>
      </div>
      {/* second part grids */}
      <div className="max-w-xl  flex flex-col gap-2 mb-16">
        <div className="flex gap-2">
          <div className="bg-[#F4F3F0] p-3 rounded-tl-lg">
            <h2 className="text-2xl text-black">$1b+</h2>
            <p className="text-sm">
              Combined VC startup valuations in partners that we’ve designed
              for.
            </p>
          </div>
          <div className="bg-[#F4F3F0] p-3 rounded-tr-lg">
            <h2 className="text-2xl text-black">93%</h2>
            <p className="text-sm">
              {" "}
              of clients retain a partnership with us for 3 months or more.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-[#F4F3F0] rounded-b-lg p-3 flex flex-col items-center">
            <p className="tracking-tight">
              Our mission is to deliver unparalleled legal solutions through a
              seamless integration of traditional legal acumen and modern
              technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
