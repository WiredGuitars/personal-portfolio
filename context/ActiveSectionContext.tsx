"use client";
import { links } from "@/lib/data";
import type {
  ActiveSectionContextProps,
  ActiveSectionContextType,
  SectionName,
} from "@/lib/types";
import React, { createContext, useContext, useState } from "react";

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionProvider({
  children,
}: ActiveSectionContextProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        setTimeOfLastClick,
        timeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext not available without ActiveSectionContextProvider"
    );
  }

  return context;
}
