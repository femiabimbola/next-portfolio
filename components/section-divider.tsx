"use client";

import {motion} from "framer-motion";

const Divider = () => {
  return (
    <motion.div
      className="bg-gray-300 my-24 h-16 w-0.5 rounded-full hidden sm:block"
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.125}}
    ></motion.div>
  );
};

export default Divider;
