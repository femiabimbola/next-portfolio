"use client";

import SectionHeading from "@/components/section-heading";
import {useActiveSectionContext} from "@/context/active-section-context";
import {motion} from "framer-motion";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";

const About = () => {
  const {ref, inView} = useInView({threshold: 0.75});
  // In view tell us what is displays
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext();

  // if (inView) setActiveSection("About"); !Not recommended to do that during rendering
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      //figure out this logic
      setActiveSection("About");
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section
      ref={ref}
      className="mb-20 max-w-[45rem] leading-6 sm:mb-32 scroll-mt-32"
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.18}}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I have a bachelor's degree in{" "}
        <span className="font-medium">
          Agriculture and Enviornmental Engineering
        </span>{" "}
        and a master's degree in{" "}
        <span className="font-medium"> Structural Engineering</span>, I decided
        to pursue my passion for programming. I enrolled in a coding bootcamp
        and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">a remote position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">business and human pyschology</span>. I'm
        also learning how to play the guitar.
      </p>
    </motion.section>
  );
};

export default About;
