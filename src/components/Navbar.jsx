import React from "react";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <nav className="px-5 py-3 flex justify-between items-center tracking-tight text-[#56575A] sticky top-4 backdrop-blur-sm  max-w-5xl   sm:mx-auto bg-[#F4F3F0]/60 rounded-full z-100">
      <div className="z-[100]">
        <img
          src="./lawcratslogo.png"
          alt=""
          width={"100px"}
          height={"30px"}
          className="    sm:w-[140px] sm:h-[40px] opacity-80"
        />
      </div>
      <div className=" md:hidden">
        <Link href={"/"}>
          <span className="border rounded-full px-3  py-2 tracking-tighter font-normal text-black border-black/30 ">
            Schedule a Demo <IconArrowUpRight className="inline" />
          </span>
        </Link>
      </div>
      <div className=" hidden font-light md:flex gap-6 md:gap-2 items-center ">
        <Link href={"/"}>
          <span className="hover:bg-yellow-500/30 px-4 py-1 rounded-full  ">About</span>
        </Link>
        <Link href={"/"}>
          <span className="hover:bg-purple-500/10 px-4 py-1 rounded-full  ">Work</span>
        </Link>
        <Link href={"/"}>
          <span className="hover:bg-red-500/10 px-4 py-1 rounded-full  ">Services</span>
        </Link>
        <Link href={"/"}>
          <span className="hover:bg-green-500/10 px-4 py-1 rounded-full  ">Team</span>
        </Link>
        <Link href={"/"}>
          {" "}
          <span className="hover:bg-blue-500/10 px-4 py-1 rounded-full  ">Blog</span>
        </Link>

        <Link href={"/"}>
          <span className="border rounded-full px-3  py-2 tracking-tighter font-normal text-black border-black/30">
            Schedule a Demo <IconArrowUpRight className="inline" />
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
