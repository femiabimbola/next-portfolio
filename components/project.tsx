import Image, {StaticImageData} from "next/image";
import {projectsData} from "@/lib/data";

interface ProjectProp {
  title: string;
  description?: string;
  tags?: string[];
  imageUrl: StaticImageData;
}

type ProjectProp2 = (typeof projectsData)[number];

const Project = ({title, description, tags, imageUrl}: ProjectProp2) => {
  return (
    <div>
      <h1>{title}</h1>
      <Image alt="project image" src={imageUrl} width={40} height={40} />
    </div>
  );
};

export default Project;
