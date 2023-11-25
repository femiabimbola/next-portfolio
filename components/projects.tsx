"use client";

import {projectsData} from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from "./project";
import {useSectionInView} from "@/lib/hooks";

// You could have done  <Project title={project.title} />
const Projects = () => {
  const {ref} = useSectionInView("Projects", 0.3);

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
