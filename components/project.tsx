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
    <section className="group bg-gray-100 max-w-[45rem] border border-black/5 overflow-hidden my-6 sm:pr-8 relative sm:h-[20rem]">
      <div className="py-4 px-5 sm:pl-8 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[20rem] ">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2 leading-relaxed">{description}</p>
        <ul className="flex flex-wrap mt-10 gap-3">
          {tags.map((tag, index) => (
            <li
              key={index}
              className=" bg-black/70 text-white uppercase rounded-full px-3 py-1 text-[0.7rem]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        className="absolute top-8 -right-32 w-[28rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40"
        alt={title}
        src={imageUrl}
        quality={90}
      />
    </section>
  );
};

export default Project;
