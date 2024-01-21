"use client";
import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { DiMongodb } from "react-icons/di";
import {
  FaCss3Alt,
  FaHtml5,
  FaLinux,
  FaNode,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiExpress,
  SiPug,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandOauth } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { FiFramer } from "react-icons/fi";
import { useSectionInView } from "@/lib/hooks";
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
        className="flex "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.div className="flex gap-4">
          <div className="bg-black p-4 grid grid-rows-5 text-center rounded-lg ">
            <div className="text-white flex mb-4 row-span-1 text-2xl items-center justify-center border-b-8 border-yellow-100">
              Frontend
            </div>
            <div className="row-span-4 grid grid-cols-1 gap-2 sm:grid-cols-2 pt-2  text-center ">
              <div className="flex flex-col items-center ">
                <FaReact className="text-blue-500 text-2xl" />
                <div className="text-white">React.js</div>
              </div>
              <div className="flex flex-col items-center ">
                <SiVite className="text-purple-500 text-2xl" />
                <span className="text-white">Vite</span>
              </div>
              <div className="flex flex-col items-center ">
                <SiTypescript className="text-blue-500 text-2xl" />
                <span className="text-white mb-4">TypeScript</span>
              </div>

              <div className="flex flex-col items-center ">
                <IoLogoJavascript className="text-yellow-500 text-2xl" />
                <span className="text-white mb-4">JavaScript</span>
              </div>

              <div className="flex flex-col items-center">
                <FaHtml5 className="text-orange-500 text-2xl" />
                <span className="text-white mb-4">HTML</span>
              </div>

              <div className="flex flex-col items-center ">
                <FaCss3Alt className="text-blue-500 text-2xl" />
                <span className="text-white mb-4">CSS</span>
              </div>

              <div className="flex flex-col items-center ">
                <FaSass className="text-pink-500 text-2xl" />
                <span className="text-white mb-4">Sass</span>
              </div>

              <div className="flex flex-col items-center">
                <SiTailwindcss className="text-blue-500 text-2xl" />
                <span className="text-white mb-4">Tailwind.css</span>
              </div>

              <div className="flex flex-col items-center ">
                <TbBrandNextjs className="text-green-500 text-2xl" />
                <span className="text-white mb-4">Next.js</span>
              </div>
              <div className="flex flex-col items-center ">
                <FiFramer className="text-green-500 text-2xl" />
                <span className="text-white mb-4">Framer</span>
              </div>
              <div className="flex flex-col items-center ">
                <SiPug className="text-red-500 text-2xl" />
                <span className="text-white">Pug.js</span>
              </div>
            </div>
          </div>

          <div className="bg-black p-4 grid grid-rows-4 text-center rounded-lg">
            <div className="text-white flex mb-6 row-span-1 text-2xl items-center justify-center border-b-8 border-yellow-100">
              Backend
            </div>

            <div className="row-span-3 gap-4 grid grid-cols-1">
              <div className="flex-col flex items-center">
                <SiExpress className="text-yellow-500 text-2xl" />
                <span className="text-white">Express</span>
              </div>
              <div className="flex-col flex items-center">
                <DiMongodb className="text-green-500 text-2xl" />
                <span className="text-white">Mongo.db</span>
              </div>
              <div className="flex-col flex items-center">
                <FaNode className="text-green-500 text-2xl" />
                <span className="text-white">Node.js/npm</span>
              </div>
              <div className="flex-col flex items-center">
                <TbBrandOauth className="text-yellow-500 text-2xl" />
                <span className="text-white">Oauth</span>
              </div>
            </div>

            <div className="bg-black p-4 grid grid-rows-4 text-center rounded-lg mt-4">
              <div className="text-white flex mb-6 row-span-1 text-2xl items-center justify-center border-b-8 border-yellow-100">
                Misc
              </div>
              <div className="row-span-3 grid grid-rows-2">
                <div className="row-span-1 flex flex-col items-center justify-center">
                  <FaLinux className="text-blue-500 text-2xl m-1" />
                  <div className="text-white">Linux</div>
                </div>
                <div className="row-span-1 flex flex-col items-center justify-center">
                  <IoLogoFirebase className="text-yellow-500 text-2xl m-1" />
                  <div className="text-white">Firebase</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </section>
  );
}
