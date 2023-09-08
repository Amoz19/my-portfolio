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
        iconStyle={{
          background: "#fff",
          color: "#000",
        }}
        contentArrowStyle={{
          borderRight: "7px solid  #2f3963",
        }}
        contentStyle={{
          background: "#2f3963",
          color: "#FAFAFA",
        }}
      >
        <div className="space-y-2">
          <h3 className="lg:text-xl bg-slate-300 inline rounded-xl px-2 py-1 text-slate-700">
            {data.title}
          </h3>
          <p className="text-slate-300">{data.location}</p>
          <p>{data.description}</p>
          <p className="border-b-2 inline-block">{data.date}</p>
        </div>
      </VerticalTimelineElement>
    </React.Fragment>
  ));
};
const Experience = () => {
  return (
    <VerticalTimeline lineColor={"darkblue"}>
      <ExperienceComponent />
    </VerticalTimeline>
  );
};

export default Experience;
