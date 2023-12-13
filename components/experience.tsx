"use client";

import React, {useContext} from "react";
import SectionHeading from "@/components/section-heading";
import {experiencesData} from "@/lib/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {useSectionInView} from "@/lib/hooks";
import {ThemeContext, useTheme} from "@/context/theme-context";

const Experience = () => {
  const {ref} = useSectionInView("Experience", 0.75);

  // const {theme, toggle }= useContext(ThemeContext);
  const {theme} = useTheme();

  return (
    <section id="experience" ref={ref} className="sm:mb-28 scroll-mt-28">
      <SectionHeading> My Experience</SectionHeading>
      <VerticalTimeline lineColor="" animate={true}>
        {/* Dont use key as index on third party component */}
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255 255 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255 255 255, 0.2)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-bold capitalize">{item.title}</h3>
              <p className=" !mt-0">{item.location}</p>
              <p className="!mt-1 text-gray-700 dark:text-white/60">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
