"use client";

import {skillsData} from "@/lib/data";
import SectionHeading from "./section-heading";
import {useSectionInView} from "@/lib/hooks";
import {motion} from "framer-motion";

const fadeInAnimationsVariants = {
  initial: {opacity: 0, y: 100},
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index,
    },
  }),
};

const Skills = () => {
  const {ref} = useSectionInView("Skills", 0.75);
  return (
    <section
      ref={ref}
      id="skills"
      className=" mb-28 max-w-[55rem] scroll-mt-28 text-center sm:mb-50"
    >
      <SectionHeading> My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{once: false}}
            key={index}
            className="bg-white border border-black/[0.1] rounded-full px-5 py-2 dark:bg-white/10 dark:text-white/80"
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
