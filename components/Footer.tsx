import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs block">
        &copy; 2024 Daniel Laschanzky. All Rights Reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">
          This website was built with React & Next.js, TypeScript, Tailwind CSS,
          Framer Motion, Nodemailer for email sharing, & Vercel hosting.
        </span>
      </p>
    </footer>
  );
}
