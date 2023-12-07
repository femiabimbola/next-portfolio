"use client";

import {FaPaperPlane} from "react-icons/fa";
import SectionHeading from "./section-heading";
import {useSectionInView} from "@/lib/hooks";
import {motion} from "framer-motion";
import {sendEmail} from "@/actions/sendEmail";
import toast from "react-hot-toast";

import SubmitButton from "./submit-button";

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
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          console.log("running on client");
          console.log(formData.get("senderEmail"));
          const {data, error} = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
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
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
