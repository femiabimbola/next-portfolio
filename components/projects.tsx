"use client";

import {projectsData} from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from "./project";
import {useActiveSectionContext} from "@/context/active-section-context";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";

// You could have done  <Project title={project.title} />
const Projects = () => {
  const {ref, inView} = useInView({threshold: 0.3});
  const {activeSection, setActiveSection, timeOfLastClick} =
    useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  // ref means, this is what I'm talking about
  return (
    <section ref={ref} id="projects" className="scroll-mt-32">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
