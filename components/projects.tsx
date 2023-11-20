import {projectsData} from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from "./project";

// You could have done  <Project title={project.title} />
const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-32">
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
