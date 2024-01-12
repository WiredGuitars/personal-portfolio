"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:0">
      <motion.div
        initial={{ rotate: -30, x: -50, y: -20, opacity: 0 }}
        animate={{ rotate: 0, x: 0, y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 10, stiffness: 70, delay: 0.5 }}
        className="relative flex items-center justify-center"
      >
        <div className="relative">
          <Image
            src="/cartoon-wired.png"
            alt="cartoon picture of Daniel"
            width={192}
            height={192}
            quality={95}
            priority={true}
            className="h-24 w-24 rounded-full object-cover border-[.35rem] border-white shadow-xl"
          />
          <motion.span
            className="absolute -bottom-3 -left-2 text-4xl"
            animate={{
              rotate: [0, -10, 0, 10, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          >
            👋
          </motion.span>
        </div>
      </motion.div>
      <motion.p
        className="mb-10 mt-4 px-4 test-2xl font-medium !leading-[1.5]"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <span className="font-bold">Howdy, I'm Daniel!</span> I've been teaching
        myself web-development since January, 2023. I'm a{" "}
        <span className="font-bold">full-stack developer</span> trained
        primarily in the
        <span className="font-bold"> M.E.R.N.</span> stack. I'm passionate about
        learning, and my focus right now is{" "}
        <span className="font-bold underline">Next.js</span> (React framework).
        My focus is front-end design.
      </motion.p>
      <motion.div
      initial= {{ opacity: 0, x:-100}}
      animate= {{ opacity: 1, x:0}}
      transition={{delay: .5}}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium">
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition shadow-md"
        >
          Contact me here
          <BsArrowRight
          className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a href="/Daniel_Laschanzky.pdf" download={true}  className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full  outline-none focus:scale-110 hover:scale-110  active:scale-105 transition shadow-md border border-black/10">
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
        </a>
        <a href="https://www.linkedin.com/in/daniellaschanzky/" className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.15rem]  outline-none focus:scale-110 hover:scale-[1.15] active:scale-[1.05] transition shadow-md border border-black/10">
          <BsLinkedin />
        </a>
        <a href="https://github.com/WiredGuitars" className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem]  outline-none focus:scale-110   hover:scale-[1.15] active:scale-[1.05] transition shadow-md border border-black/10">
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
