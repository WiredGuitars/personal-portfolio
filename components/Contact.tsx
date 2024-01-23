"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./SubmitButton";
import toast from "react-hot-toast";
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
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully");
        }}
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
        <SubmitButton />
      </form>
    </motion.section>
  );
}
