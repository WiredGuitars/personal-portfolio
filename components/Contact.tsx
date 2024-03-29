"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SubmitButton from "./SubmitButton";
import { useForm } from "react-hook-form";
import sendEmail from "@/actions/sendEmail";
export type FormData = {
  email: string;
  message: string;
};

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.6);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    await sendEmail(data);
  };

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

      <p className="text-gray-700 text-sm -mt-6 dark:text-white/75">
        Contact me directly at{" "}
        <a className="underline" href="mailto:dlaschanzky2@huskers.unl.edu">
          dlaschanzky2@huskers.unl.edu
        </a>{" "}
        or through the form below
      </p>

      <form className="mt-10 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="h-14 rounded-lg px-4 border borderBlack dark:bg-white/10"
          placeholder="Your e-mail"
          type="email"
          required
          {...register("email", { required: true, maxLength: 500 })}
          autoComplete="off"
        />
        <textarea
          className="h-52 my-3 rounded-lg p-4 borderBlack dark:bg-white/10"
          placeholder="Your Message"
          required
          maxLength={5000}
          {...register("message")}
        />
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </motion.section>
  );
}
