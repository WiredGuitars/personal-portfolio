// "use server";

// import React from "react";
// import nodemailer from "nodemailer";
// import { getErrorMessage, validateString } from "@/lib/utils";
// import contactFormEmail from "@/email/contactFormEmail";

// export default async function sendNodeMailer(formData: FormData) {
//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465, // Replace with your SMTP port
//     secure: true, // Set to true if your SMTP server requires a secure connection
//     auth: {
//       user: "wiredgtars@gmail.com", // Replace with your email
//       pass: process.env.GMAIL_PASSWORD, // Replace with your email password
//     },
//   });

//   const message = formData.get("senderMessage");
//   const email = formData.get("senderEmail");

//   if (!validateString(email, 500)) {
//     return { error: "Invalid sender-email" };
//   }
//   if (!validateString(message, 5000)) {
//     return { error: "Invalid message" };
//   }

//   const mailOptions = {
//     from: "https://daniellaschanzky.vercel.app/", // Replace with your domain
//     to: "wiredgtars@gmail.com",
//     subject: "Message from contact form",
//     replyTo: email as string,
//     html: React.createElement(contactFormEmail, {
//       message: message as string,
//       senderEmail: email as string,
//     }),
//   };
//   try {
//     await transporter.sendMail(mailOptions);
//     return { success: true };
//   } catch (error: unknown) {
//     return {
//       error: getErrorMessage(error),
//     };
//   }
// }
