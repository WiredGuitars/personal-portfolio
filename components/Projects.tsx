"use client";

import React from "react";
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
  return (
    <section className="bg-gray-100 max-w-[55rem] border border-black/5 overflow-hidden relative h-auto mb-3 sm:mb-8 last:mb-1">
      <div className="py-2 px-5  sm:pr-2 sm:pt-5 sm:max-w-[50%] flex flex-col h-full">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 h-auto leading-relaxed text-gray-700">
          {description}
        </p>
        <ul className="flex flex-wrap max-w-[60%] mt-4 gap-2">
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
        Touch <br />→{" "}
      </div>
      <motion.div>
        <Image
          className="visible absolute w-11 h-11 bottom-0 sm:-bottom-5 sm:-right-14 right-0 sm:w-[33.25rem] sm:h-auto rounded-t-lg shadow-2xl"
          src={imageUrl}
          alt={title}
          quality={95}
        />
      </motion.div>
    </section>
  );
}
