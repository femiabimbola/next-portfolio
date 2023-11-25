import {useActiveSectionContext} from "@/context/active-section-context";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import { SectionName } from "@/lib/types";


// export const  useSectionInView = ({sectionName}: {sectionName: SectionName})

export const  useSectionInView = (sectionName:  SectionName, threshold = 0.6 ) => {
  const {ref, inView} = useInView({threshold});
  const {activeSection, setActiveSection, timeOfLastClick} =
    useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref, inView }
}

