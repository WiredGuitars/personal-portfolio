import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};
export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div>
      <h2 className="text-3xl text-center font-medium capitalize py-8">
        {children}
      </h2>
    </div>
  );
}
