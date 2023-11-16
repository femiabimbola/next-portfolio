import Image, {StaticImageData} from "next/image";

interface ProjectProp {
  title: string;
  description?: string;
  tag?: string[];
  imageUrl: StaticImageData;
}

const Project = ({title, description, tag, imageUrl}: ProjectProp) => {
  return (
    <div>
      <h1>{title}</h1>
      <Image alt="project image" src={imageUrl} width={40} height={40} />
    </div>
  );
};

export default Project;
