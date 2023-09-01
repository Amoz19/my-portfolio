import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "../data/data";
const ExperienceComponent = () => {
  return experienceData.map((data) => (
    <React.Fragment key={data.id}>
      <VerticalTimelineElement
        icon={data.icon}
        contentStyle={{
          background: "#2f3963",
          color: "#FAFAFA",
          borderRadius: "20px",
        }}
      >
        <h3>{data.title}</h3>
        <p>{data.location}</p>
        <p>{data.description}</p>
      </VerticalTimelineElement>
    </React.Fragment>
  ));
};
const Experience = () => {
  return (
    <VerticalTimeline>
      <ExperienceComponent />
    </VerticalTimeline>
  );
};

export default Experience;
