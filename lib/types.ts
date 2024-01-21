import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ActiveSectionContextProps = {
    children: React.ReactNode;
  };

export type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
    timeOfLastClick: number;
  };

export type useSectionInViewProps = {
    sectionName: SectionName
}