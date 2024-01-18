"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Projects() {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

type ProjectProps = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const [isTapped, setIsTapped] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsTapped(false); // Reset isTapped if the window is less than 640px
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run the effect only on mount and unmount

  const handleTap = () => {
    if (window.innerWidth <= 640) {
      setIsTapped(!isTapped);
    }
  };

  return (
    <section
      onClick={handleTap}
      className={`relative ${
        isTapped ? "bg-slate-900 text-white" : ""
      }sm:bg-gray-100 group max-w-[65rem] border min-h-[34rem] sm:min-h-[18rem] border-black/5 overflow-hidden relative flex mb-3 sm:mb-8 last:mb-1 transition sm:hover:bg-gray-200 sm:even:pl-8`}
    >
      <div className="py-2 px-5 sm:pr-2 sm:pt-5 sm:max-w-[50%] sm:group-even:ml-[32rem] flex flex-col h-full">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 h-auto w-[90%] leading-relaxed text-gray-700">
          {description}
        </p>
        <ul className="flex flex-wrap max-w-[60%] sm:max-w-[100%] mt-4 gap-2">
          {tags.map((tag, index) => (
            <li
              className="bg-black/[.3] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white max-w-[75%] rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="sm:hidden absolute bottom-2 right-12  text-center">
        Preview <br />→{" "}
      </div>
      <div className="absolute invisible sm:visible flex self-center group  sm:group-odd:right-8">
        Hover Over Me!
      </div>
      <Image
        className={`absolute ${
          isTapped
            ? "object-contain scale-[175%] w-[100%] transform rotate-90 h-[100%]"
            : ""
        }  w-11 h-11 bottom-0 right-0 sm:bottom-auto sm:-right-[32rem] transition sm:w-[33.25rem] sm:hover:-translate-x-[32rem] sm:group-even:hover:translate-x-[32rem] sm:flex sm:self-center sm:h-auto rounded-lg shadow-2xl sm:group-even:right-[initial] sm:group-even:-left-[32rem]`}
        src={imageUrl}
        alt={title}
        quality={95}
      />
    </section>
  );
}