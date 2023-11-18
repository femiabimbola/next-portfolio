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
    <section className="bg-gray-100 max-w-[45rem] border border-black/5 overflow-hidden my-5 sm:pr-8">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2 leading-relaxed">{description}</p>
      <ul className="flex flex-wrap mt-4 gap-3">
        {tags.map((tag, index) => (
          <li
            key={index}
            className=" bg-black/70 text-white uppercase rounded-full px-3 py-1 text-[0.7rem]"
          >
            {tag}
          </li>
        ))}
      </ul>
      <Image alt={title} src={imageUrl} width={40} height={40} quality={90} />
    </section>
  );
};

export default Project;
