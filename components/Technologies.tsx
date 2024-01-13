"use client";
import React from "react";
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
import { SiExpress, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs, TbBrandOauth } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { FiFramer } from "react-icons/fi";
export default function Technologies() {
  return (
    <section>
      <SectionHeading>
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Technologies
        </motion.div>
      </SectionHeading>
      <motion.section
        className="flex "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.div className="flex gap-4 grid-cols-3">
          <div className="bg-black p-4 grid grid-rows-4 text-center rounded-lg ">
            <div className="text-white flex mb-6 row-span-1 text-2xl items-center justify-center border-b-8 border-yellow-100">
              Frontend
            </div>
            <div className="row-span-3 grid grid-cols-1 sm:grid-cols-2">
              <div className="flex flex-col items-center m-1">
                <FaReact className="text-blue-500 text-2xl" />
                <div className="text-white">React.js</div>
              </div>

              <div className="flex flex-col items-center m-1">
                <SiTypescript className="text-blue-500 text-2xl" />
                <span className="text-white mb-4">TypeScript</span>
              </div>

              <div className="flex flex-col items-center m-1">
                <IoLogoJavascript className="text-yellow-500 text-2xl" />
                <span className="text-white mb-4">JavaScript</span>
              </div>

              <div className="flex flex-col items-center m-1">
                <FaHtml5 className="text-orange-500 text-2xl" />
                <span className="text-white mb-4">HTML</span>
              </div>

              <div className="flex flex-col items-center m-1">
                <FaCss3Alt className="text-blue-500 text-2xl" />
                <span className="text-white mb-4">CSS</span>
              </div>

              <div className="flex flex-col items-center m-1">
                <FaSass className="text-pink-500 text-2xl" />
                <span className="text-white mb-4">Sass</span>
              </div>

              <div className="flex flex-col items-center m-1">
                <SiTailwindcss className="text-blue-500 text-2xl" />
                <span className="text-white mb-4">Tailwind.css</span>
              </div>

              <div className="flex flex-col items-center m-1">
                <TbBrandNextjs className="text-green-500 text-2xl" />
                <span className="text-white mb-4">Next.js</span>
              </div>
              <div className="flex flex-col items-center m-1">
                <FiFramer className="text-green-500 text-2xl" />
                <span className="text-white mb-4">Framer</span>
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
                <span className="text-white">Node/npm</span>
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
                  <span className="text-white">Linux</span>
                </div>
                <div className="row-span-1 flex flex-col items-center justify-center">
                  <IoLogoFirebase className="text-yellow-500 text-2xl m-1" />
                  <span className="text-white">Firebase</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </section>
  );
}
