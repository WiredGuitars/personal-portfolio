"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.section>
      <SectionHeading>About</SectionHeading>
      <p className=" mb-28 max-w-[45rem] text-center leading-8"></p>
    </motion.section>
  );
}
