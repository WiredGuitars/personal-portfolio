"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.6);

  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 text-center w-[min(100%,38rem)]"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 text-sm -mt-6">
        Contact me directly at{" "}
        <a className="underline" href="mailto:dlaschanzky2@huskers.unl.edu">
          dlaschanzky2@huskers.unl.edu
        </a>{" "}
        or through the form below
      </p>

      <form
        action={async (formData) => {
          await sendEmail(formData);
        }}
        className="mt-10 flex flex-col"
      >
        <input
          className="h-14 rounded-lg px-4 border borderBlack"
          placeholder="Your e-mail"
          type="email"
          required
          name="senderEmail"
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg p-4 borderBlack"
          placeholder="Your Message"
          required
          name="senderMessage"
          maxLength={5000}
        />
        <button
          type="submit"
          className="h-[3rem] group w-[8rem] text-white rounded-full outline-none transition-all bg-gray-900 flex items-center justify-center gap-2 focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </button>
      </form>
    </motion.section>
  );
}
