"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { aboutMeInfo } from "@/lib/data";
export default function About() {
  const { ref } = useSectionInView("About", 0.6);

  const splitInfo = aboutMeInfo.split(" ");

  const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.01 * index,
      },
    }),
  };

  return (
    <section id="about" className="my-20 scroll-mt-10 text-center" ref={ref}>
      <SectionHeading>About Me</SectionHeading>
      <div className="flex flex-wrap gap-1.5 w-[20rem] sm:w-[40rem] h-auto">
        {splitInfo.map((word, index) => (
          <motion.div
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {word}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
