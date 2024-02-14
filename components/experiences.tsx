"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import Exp from "./exp";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="mb-15 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
      <div className="md:flex">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <Exp {...experience} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
