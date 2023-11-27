import React from "react";
import SectionHeading from "@/components/section-heading";
import {experiencesData} from "@/lib/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experince = () => {
  return (
    <section>
      <SectionHeading> My Experience</SectionHeading>
      <VerticalTimeline>
        {/* Dont use key on third party component */}
        {experiencesData.map((experienceItem, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement>
              <h3>{experienceItem.title}</h3>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experince;
