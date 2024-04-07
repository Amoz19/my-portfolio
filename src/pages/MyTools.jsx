import React from "react";
import {
  FluentJavascript20Regular,
  TablerBrandTypescript,
  BxlReact,
  SimpleIconsReactquery,
  TeenyiconsNextjsOutline,
} from "../assets/icons/frontendIcon";

import {
  RiNodejsFill,
  SimpleIconsExpress,
  SimpleIconsMongodb,
  TeenyiconsFirebaseSolid,
} from "../assets/icons/backendIcon";

import {
  PhFigmaLogoDuotone,
  TablerBrandGithub,
  RiUbuntuLine,
} from "../assets/icons/otherTools";
import ToolsCards from "../components/ToolsCards";

const tools = [
  {
    title: "Frontend Development",
    titleColor: "text-blue-500",

    techs: [
      {
        icon: <FluentJavascript20Regular />,
        tech: "Javascript",
        color: "text-yellow-400",
      },
      {
        icon: <TablerBrandTypescript />,
        tech: "TailwindCSS",
        color: "text-blue-500",
      },
      {
        icon: <BxlReact />,
        tech: "ReactJS",
        color: "text-blue-400",
      },
      {
        icon: <SimpleIconsReactquery />,
        tech: "React query",
        color: "text-red-500",
      },
      {
        icon: <TeenyiconsNextjsOutline />,
        tech: "NextJS",
        color: "text-slate-600",
      },
    ],
  },
  {
    title: "Backend Development",
    titleColor: "text-blue-500/90",
    techs: [
      {
        icon: <RiNodejsFill />,
        tech: "NodeJS",
        color: "text-green-700",
      },
      {
        icon: <SimpleIconsExpress />,
        tech: "ExpressJS",
        color: "text-slate-700",
      },
      {
        icon: <SimpleIconsMongodb />,
        tech: "MongoDB",
        color: "text-green-600",
      },
      {
        icon: <TeenyiconsFirebaseSolid />,
        tech: "Firebase",
        color: "text-amber-400",
      },
    ],
  },
  {
    title: "Other Tools",
    titleColor: "text-blue-500/80",
    techs: [
      {
        icon: <PhFigmaLogoDuotone />,
        tech: "Figma",
        color: "text-red-500",
      },
      {
        icon: <TablerBrandGithub />,
        tech: "Github",
        color: "text-slate-800",
      },
      {
        icon: <RiUbuntuLine />,
        tech: "Ubuntu",
        color: "text-[#dd4814]",
      },
    ],
  },
];

//  SkillIconsGithubDark,

const MyTools = () => {
  return (
    <div className="my-16">
      <h1 className="flex justify-center text-3xl  font-black my-3 text-primary">
        My Tools<span className="text-4xl">✍️</span>
      </h1>
      <div className="mx-20">
        {tools.map((tool) => (
          <div key={tool.title} className="my-5">
            <h1 className={`text-xl font-semibold ${tool.titleColor}`}>
              {tool.title}
            </h1>
            <ToolsCards data={tool.techs} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTools;
