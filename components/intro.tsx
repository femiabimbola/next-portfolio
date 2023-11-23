"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";
import {BsArrowRight, BsGithub, BsLinkedin} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import {useActiveSectionContext} from "@/context/active-section-context";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";

const Intro = () => {
  const {ref, inView} = useInView({threshold: 0.3});
  const {activeSection, setActiveSection} = useActiveSectionContext();
  useEffect(() => {
    if (inView) setActiveSection("Home");
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      id="home"
      className="pt-28 md:pt-40 max-w-[52rem] mb-14 scroll-mt-32 "
    >
      <div className="flex items-center justify-center">
        <div className="absolute">
          <motion.div
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{type: "tween", duration: 0.3}}
          >
            <Image
              src={`/image.png`}
              alt="Femi Portrait"
              height={204}
              width={204}
              quality={90}
              className="h-32 w-32 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.2,
              duration: 1.0,
            }}
            className="text-4xl absolute bottom-0 right-0 "
          >
            🤞
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="pt-20 md:pt-20 mb-10 mt-4  md:text-2xl font-medium leading-[1.5] text-center"
        initial={{opacity: 0, y: 200}}
        animate={{opacity: 1, y: 0}}
        transition={{type: "tween", duration: 0.3}}
      >
        <span className="font-bold"> Hi, I'm Femi.</span> I'm a
        <span className="font-bold"> full-stack developer </span>
        with over 4 years experience. I love{" "}
        <span className="italic">
          building solutions that helps individuals and companies
        </span>
        . I focus on Javascript technologies ranging from{" "}
        <span className="font-bold">ReactJs, NextJs, NodeJs etc.</span>
      </motion.h1>

      <motion.div
        className="flex flex-wrap gap-4 items-center justify-center px-4 font-medium text-lg"
        initial={{opacity: 0, y: 200}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.2}}
      >
        <Link
          href={"#contact"}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center align-middle gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-95"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center align-middle gap-2 rounded-full cursor-pointer outline-none focus:scale-105 hover:scale-105  active:scale-95 transition border border-black/10"
          href="/femi-abimbola-CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className=" bg-white px-3 text-gray-700 py-3 flex items-center align-middle gap-2 rounded-full text-[1.35rem] focus:scale-105 hover:scale-105 hover:text-gray-950 active:scale-95 transition border border-black/10 cursor-pointer"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className=" bg-white px-3 text-gray-700 py-3 flex items-center align-middle gap-2 rounded-full text-[1.35rem] focus:scale-105 hover:scale-105 hover:text-gray-950 active:scale-95 transition border border-black/10 cursor-pointer"
          href="https:/github.com"
          target="_blank"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
