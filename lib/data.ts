import corpcommentImg from "@/public/projecttemp1.jpg";
import wordanalyticsImg from "@/public/projecttemp3.jpg";
import gameIMG from "@/public/game.jpg";
import peomIMG from "@/public/capture2.jpg";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
] as const;

export const experiencesData = [
  {
    title: "Just IT Skills Bootcamp: Software Development",
    location: "London",
    description:
      "A twelve-week intensive bootcamp covering the fundamentals of Web and Software development.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Junior Python and Excel Developer",
    location: "London",
    description:
      "API and python data processing and management.VBA development in Excel to manage complex and large datasets of vehicle data.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul/2023-Present",
  },
] as const;

export const projectsData = [
  {
    title: "Advanced Game Lookup App",
    description:
      "Sleek designed video game lookup website with filtering and search and skeleton loading.",
    link: "https://game-hub-mu-two.vercel.app/",
    tags: ["React", "Typescript", "Chakra UI"],
    imageUrl: gameIMG,
  },
  {
    title: "Peom App",
    description: "Peom App with Error handling, caching, and Api lookup.",
    link: "https://mypoemapp.vercel.app/",
    tags: ["React", "Typescript", "Chakra UI", "React Query", "Caching"],
    imageUrl: peomIMG,
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
  "Framer Motion",
] as const;
