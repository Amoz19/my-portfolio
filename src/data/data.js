import React from "react";
import { BiLogoReact, BiCodeAlt } from "react-icons/bi";
import { BsVectorPen, BsGithub, BsLinkedin, BsVoicemail } from "react-icons/bs";
import { MdComputer } from "react-icons/md";

import blogPostShowcase from "/blog.png";
import staticSite from "/happyLine.png";
import baydin from "/bayDin.png";
import habitTracker from "/habitTracker.png";

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
    icon: React.createElement(BiCodeAlt),
    date: "2021",
  },

  {
    id: 3,
    title: "Learned React",
    location: "Self-Study",
    description:
      "After doing some projects and have confident in Javascript, I have learned React",

    icon: React.createElement(BiLogoReact),
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
    icon: React.createElement(BiLogoReact),
    date: "2022 - present",
  },
];

export const projectsData = [
  {
    id: 3,
    projectName: "Habit Tracker",
    projectDescription: {
      title: "Web application that help to consisstant with  your habits",
      features: [
        { id: 1, feature: "User can create habits" },
        { id: 2, feature: "Make it done your habits from habit calendar" },
        { id: 3, feature: "Easily track your  progress" },
        { id: 4, feature: "Fully responsive and flowless user experience" },
      ],
    },
    projectImage: habitTracker,
    url: "https://bay-din-app.vercel.app/",
    githubUrl: "https://github.com/Amoz19/BayDinApp",
    stack: [
      "React",
      "TailwindCSS",
      "React Query",
      "ExpressJS",
      "MongoDB",
      "JWT",
    ],
  },
  {
    id: 1,
    projectName: "Responsive website with Vanila JS and Css",
    projectDescription: {
      title: "My first client project developed by Nanospace",
      features: [
        { id: 1, feature: "Beautiful UI" },
        {
          id: 2,
          feature: "Most of them are implemented by vanlina JS and Css",
        },
      ],
    },
    projectImage: staticSite,
    url: "https://amoz19.github.io/happylineprojectUpdate",
    githubUrl: "https://github.com/Amoz19/happylineprojectUpdate",
    stack: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 2,
    projectName: "Burmese Fortune Teller",
    projectDescription: {
      title: "This is a responsive website with vanila JS and CSS",
      features: [
        { id: 1, feature: "Pagination" },
        { id: 2, feature: "React router as a replacement of useState hook" },
      ],
    },
    projectImage: baydin,
    url: "https://bay-din-app.vercel.app/",
    githubUrl: "https://github.com/Amoz19/BayDinApp",
    stack: ["React", "TailwindCSS", "React Router"],
  },

  {
    id: 4,
    projectName: "Blog Post",
    projectDescription: {
      title: "This is a responsive website with vanila JS and CSS",
      features: [
        { id: 1, feature: "UnAuthenticated users can read the blog posts" },
        { id: 2, feature: "Admin CRUD" },
        { id: 2, feature: "Firebase Auth for authentication." },
      ],
    },
    projectImage: blogPostShowcase,
    url: "https://blog-post-omega.vercel.app/",
    githubUrl: "https://github.com/Amoz19/BlogPost",
    stack: ["NextJS", "TailwindCSS", "Firebase", "Firebase Auth"],
  },
];

export const contactData = [
  {
    id: 1,
    url: "",
    icon: React.createElement(BsGithub),
  },
  {
    id: 2,
    url: "",
    icon: React.createElement(BsLinkedin),
  },
  {
    id: 3,
    url: "",
    icon: React.createElement(BsVoicemail),
  },
];
