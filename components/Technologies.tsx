"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";
import { TechData } from "@/lib/data";
import { IconType } from "react-icons";

interface Technology {
  icons: IconType;
  fill: string;
  stroke: string | "none";
  text: string;
}

export default function Technologies() {
  const { ref } = useSectionInView("Technologies", 0.8);

  return (
    <section ref={ref}>
      <SectionHeading>
        <motion.div
          className="text-center scroll-mt-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          id="technologies"
        >
          Technologies
        </motion.div>
      </SectionHeading>
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
          {TechData.map((title) => (
            <div
              key={title.title}
              className="bg-black p-4 grid text-center rounded-lg"
            >
              <div className="text-white flex mb-4 row-span-1 text-2xl items-center justify-center border-b-8 border-yellow-400">
                {title.title}
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 pt-2 text-center">
                {title.technologies.map((tech?: Technology) => (
                  <div key={tech?.text} className="flex flex-col items-center">
                    {tech &&
                      React.createElement(tech.icons, {
                        className: `text-2xl`,
                        fill: tech.fill,
                        stroke: tech.stroke,
                      })}
                    <span className="text-white mb-4">{tech?.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </section>
  );
}
