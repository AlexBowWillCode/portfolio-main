"use client";

import { useRef } from "react";
import { experiencesData } from "@/lib/data";

type ExperienceProps = (typeof experiencesData)[number];

export default function Exp({
  title,
  location,
  description,
  icon,
}: ExperienceProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[100%] flex flex-col h-full sm:group-even:ml-[18rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-l font-semibold">{icon}</p>
        <h4 className="text-l font-semibold">{location}</h4>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
          {description}
        </p>
      </div>
    </section>
  );
}
