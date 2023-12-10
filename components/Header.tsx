"use client";

import {motion} from "framer-motion";
import {links} from "@/lib/data";
import Link from "next/link";
import {useContext, useState} from "react";
import clsx from "clsx";
import {useActiveSectionContext} from "@/context/active-section-context";

const Header = () => {
  /**
   * 1 - The relative class makes z index works better
   */
  // const [activeSection, setActiveSection] = useState("Home");

  /**
   * const context = useContext(ActiveSectionContext);
    if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
   */
  const {activeSection, setActiveSection, setTimeOfLastClick} =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="header-container"
        initial={{y: -100, x: "-50%", opacity: 0}}
        animate={{y: 0, x: "-50%", opacity: 1}}
      ></motion.div>
      {/* It should have been inside the nav, but becuase framer is used, it is not */}
      <nav className="flex fixed left-[3rem] sm:left-[31rem] sm:top-[1.8rem] h-10 sm:py-0 justify-center ">
        {/* Mine was gap-x-6 mt-3 */}
        <ul className="flex w-[22rem]  items-center justify-center flex-wrap gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 flex items-center justify-center relative"
              initial={{y: -100, opacity: 0}}
              animate={{y: 0, opacity: 1}}
            >
              <Link
                href={link.hash}
                // We can do cosnt handleclick = () => setActiveSection(link.name)
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-white":
                      activeSection === link.name,
                  }
                )}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
