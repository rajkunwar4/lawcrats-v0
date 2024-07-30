import React from "react";
import { IconArrowDown } from "@tabler/icons-react";
import { IconArrowDownRight } from "@tabler/icons-react";
import { InfiniteMovingCardsDemo } from "./InfiniteScroll";

const Features = () => {
  return (
    <div className="flex flex-col items-center py-20 gap-10 relative">
      <div className="text-5xl font-semibold text-[#525359] text-center tracking-tight">
        <h2 className="">Anything Legal ?</h2>
        <h2 className=" text-gray-600/70 text-3xl pt-4 tracking-tighter">
          {" "}
          We got your back 🫂
        </h2>
      </div>
      <span className="border rounded-full tracking-tighter px-6 py-3 text-[#FFFEFE] bg-[#27272A] mr-5 ">
        Features <IconArrowDownRight className="inline" width={20} />
      </span>
      <div className="px-20 flex flex-col gap-6 text-[#525359] font-light">
        <div className="flex gap-4">
          <div className=" p-4 rounded-lg bg-[#F4F3F0] shadow-md">
            <h2 className="font-medium text-lg">Technology Competence</h2>
            <p className="text-[#52535A]">
              Our Lawyers have a technology competence. They are informed about
              changes in technology and understand the benefits and risks
              associated with legal tech.
            </p>
          </div>
          <div className=" p-4 rounded-lg bg-[#F4F3F0] shadow-md">
            <h2 className="font-medium text-lg">
              Automated Research and Case Management
            </h2>
            <p className="text-[#52535A]">
              Utilize legal research databases, AI-powered tools, and case
              management software to streamline research, analyze cases, and
              efficiently manage documents.
            </p>
          </div>
          <div className=" p-4 rounded-lg bg-[#F4F3F0] shadow-md">
            <h2 className="font-medium text-lg">Legal Expertise</h2>
            <p className="text-[#52535A]">
              we recognize that our success hinges on the expertise of our
              lawyers. Their deep knowledge and skill in their respective
              practice areas form the foundation of trust with our clients and
              contribute to favorable outcomes.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className=" p-4 rounded-lg bg-[#F4F3F0] shadow-md">
            <h2 className="font-medium text-lg">Technology Competence</h2>
            <p className="text-[#52535A]">
              Our Lawyers have a technology competence. They are informed about
              changes in technology and understand the benefits and risks
              associated with legal tech.
            </p>
          </div>
          <div className=" p-4 rounded-lg bg-[#F4F3F0] shadow-md">
            <h2 className="font-medium text-lg">
              Automated Research and Case Management
            </h2>
            <p className="text-[#52535A]">
              Utilize legal research databases, AI-powered tools, and case
              management software to streamline research, analyze cases, and
              efficiently manage documents.
            </p>
          </div>
          <div className=" p-4 rounded-lg bg-[#F4F3F0] shadow-md">
            <h2 className="font-medium text-lg">Legal Expertise</h2>
            <p className="text-[#52535A]">
              we recognize that our success hinges on the expertise of our
              lawyers. Their deep knowledge and skill in their respective
              practice areas form the foundation of trust with our clients and
              contribute to favorable outcomes.
            </p>
          </div>
        </div>
      </div>
      <InfiniteMovingCardsDemo/>
    </div>
  );
};

export default Features;
