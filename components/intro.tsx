"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";

const Intro = () => {
  return (
    <section className="pt-28 md:pt-40 max-w-[52rem] mb-28 ">
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
      <motion.p
        className="pt-20 md:pt-20 mb-10 mt-4  text-2xl font-medium leading-[1.5] text-center"
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
      </motion.p>
      <div>
        <Link href={"#contact"}> Contact me here</Link>
      </div>
    </section>
  );
};

export default Intro;
