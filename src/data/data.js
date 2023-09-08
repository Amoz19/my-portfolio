import React from "react";
import { BiLogoReact, BiCodeAlt, BiLogoNodejs } from "react-icons/bi";
import { BsVectorPen } from "react-icons/bs";
import { MdComputer } from "react-icons/md";

export const experienceData = [
  {
    id: 1,
    title: "Computer Trainer",
    location: "Charity Organisation",
    description:
      "I have been worked as computer trainer voleenteer during COVID-19 pandemaic.",
    icon: React.createElement(MdComputer),
    date: "2021-2022",
  },
  {
    id: 2,
    title: "Learned Web-Development",
    location: "Self-Study",
    description: "I have been learing web-development over 2-years since 2021",
    icon: React.createElement(BiLogoReact),
    date: "2021",
  },

  {
    id: 3,
    title: "Learned React",
    location: "Self-Study",
    description:
      "After doing some projects and have confident in Javascript, I have learned React",
    icon: React.createElement(BiCodeAlt),
    date: "2022",
  },

  {
    id: 4,
    title: "Graphic Desinger",
    location: "Private School",
    description:
      "I worked as a Graphic Designer for 6 months using Figma,Ai and Ps.",
    icon: React.createElement(BsVectorPen),
    date: "2022",
  },

  {
    id: 5,
    title: "Study Advenced React",
    location: "Self-study",
    description:
      "Now, I am doing projects and done some you can check on Project Page. Also learning React Advenced Concept and studying Backend Technology.",
    icon: React.createElement(BiLogoNodejs),
    date: "2022 - present",
  },
];
