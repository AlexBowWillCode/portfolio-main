import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import projecttemp1 from "@/public/projecttemp1.png";
import projecttemp2 from "@/public/projecttemp2.png";
import projecttemp3 from "@/public/projecttemp3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Just IT Software Developer bootcamp",
    location: "London",
    description:
      "A twelve-week intensive bootcamp covering the fundamentals of Web and Software development.",
    icon: React.createElement(FaReact),
    date: "Oct/2023-Present",
  },
  {
    title: "Junior Python and Excel Developer, GiPA UK",
    location: "London",
    description:
      " API and python data processing and management.VBA development in Excel to manage complex and large datasets of vehicle data.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul/2023-Present",
  },
  {
    title: "BEng General Engineering Second Class With Honors. ",
    location: "Durham University",
    description: "Fill Info",
    icon: React.createElement(LuGraduationCap),
    date: "Oct/2020-Jul/2023",
  },
] as const;

export const projectsData = [
  {
    title: "projecttemp1",
    description: "projecttemp1",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: projecttemp1,
  },
  {
    title: "projecttemp2",
    description: "projecttemp2",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: projecttemp2,
  },
  {
    title: "projecttemp3",
    description: "projecttemp3",
    tags: ["React", "Next.js", "SQL", "Tailwind"],
    imageUrl: projecttemp3,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Python",
] as const;
