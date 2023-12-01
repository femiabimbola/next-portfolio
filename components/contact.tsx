"use client";

import {FaPaperPlane} from "react-icons/fa";
import SectionHeading from "./section-heading";
import {useSectionInView} from "@/lib/hooks";
import {motion} from "framer-motion";
import {sendEmail} from "@/actions/sendEmail";

const Contact = () => {
  // scroll-mt ensure it not behind the header
  const {ref} = useSectionInView("Contact", 0.75);

  return (
    <motion.section
      ref={ref}
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.5}}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center scroll-mt-28"
    >
      <SectionHeading> Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-4">
        Kindly contact me directly at{" "}
        <a className="italic" href="mailto:abimbola_mj@yahoo.com">
          abimbola_mj@yahoo.com
        </a>{" "}
        or through this form
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          console.log("running on client");
          console.log(formData.get("senderEmail"));
          await sendEmail(formData);
        }}
      >
        <input
          className="h-14 rounded-lg px-4  border border-black/10"
          type="email"
          name="senderEmail"
          required
          maxLength={300}
          placeholder="Enter your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-4"
          placeholder="Enter your message"
          name="message"
          required
          minLength={10}
          maxLength={600}
        />
        <button
          type="submit"
          className="group h-[3rem] w-[8rem] bg-gray-900 flex items-center justify-center gap-2 text-white rounded-full outline-none transition-all focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-95"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
