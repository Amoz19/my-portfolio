import React from "react";
import {
  SkillIconsReactDark,
  SkillIconsTailwindcssDark,
  SkillIconsJavascript,
  SkillIconsTypescript,
  LogosNextjsIcon,
} from "../assets/icons/frontendIcon";

import {
  SkillIconsNodejsDark,
  SkillIconsMongodb,
  SkillIconsExpressjsLight,
  VscodeIconsFileTypeFirebase,
  VscodeIconsFileTypeMysql,
} from "../assets/icons/backendIcon";

import {
  SkillIconsFigmaDark,
  SkillIconsGithubDark,
  SkillIconsLinuxLight,
} from "../assets/icons/otherTools";
import ToolsCards from "../components/ToolsCards";

const tools = [
  {
    title: "Frontend Development",

    techs: [
      {
        icon: <SkillIconsReactDark />,
        tech: "ReactJS",
        level: 80,
        color: "text-blue-900",
      },
      {
        icon: <SkillIconsTailwindcssDark />,
        tech: "TailwindCSS",
        level: 90,
        color: "text-blue-800",
      },
      {
        icon: <SkillIconsJavascript />,
        tech: "Javascript",
        level: 80,
        color: "text-yellow-800",
      },
      {
        icon: <SkillIconsTypescript />,
        tech: "Typescript",
        level: 50,
        color: "text-blue-900",
      },
      {
        icon: <LogosNextjsIcon />,
        tech: "NextJS",
        level: 50,
        color: "text-black",
      },
    ],
  },
  {
    title: "Backend Development",
    techs: [
      {
        icon: <SkillIconsNodejsDark />,
        tech: "NodeJS",
        level: 50,
        color: "text-green-900",
      },
      {
        icon: <SkillIconsExpressjsLight />,
        tech: "ExpressJS",
        level: 50,
        color: "text-slate-900",
      },
      {
        icon: <SkillIconsMongodb />,
        tech: "MongoDB",
        level: 40,
        color: "text-green-600",
      },
      {
        icon: <VscodeIconsFileTypeFirebase />,
        tech: "Firebase",
        level: 40,
        color: "text-yellow-800",
      },
      {
        icon: <VscodeIconsFileTypeMysql />,
        tech: "Mysql",
        level: 30,
        color: "text-blue-400",
      },
    ],
  },
  {
    title: "Other Tools",
    techs: [
      {
        icon: <SkillIconsFigmaDark />,
        tech: "Figma",
        level: 50,
        color: "text-red-800",
      },
      {
        icon: <SkillIconsGithubDark />,
        tech: "Github",
        level: 50,
        color: "text-slate-800",
      },
      {
        icon: <SkillIconsLinuxLight />,
        tech: "Linux",
        level: 40,
        color: "text-yellow-600",
      },
    ],
  },
];

//  SkillIconsGithubDark,

const MyTools = () => {
  return (
    <div className="my-5">
      <h1 className="flex justify-center text-3xl  font-black my-3 text-blue-600">
        My Tools<span className="text-4xl">✍️</span>
      </h1>
      <div className="mx-20">
        {tools.map((tool) => (
          <div key={tool.title} className="my-5 text-blue-600">
            <h1 className={`text-xl font-semibold`}>{tool.title}</h1>
            <ToolsCards data={tool.techs} />
          </div>
        ))}
      </div>
    </div>
  );
};

{
  /* <div>
          <h1 className="text-xl mb-3 text-green-500 font-bold underline-white">
            Back-end Development
          </h1>
          <div className="flex justify-around w-2/3">
            {backendIcons.map(([IconComponent, name], i) => (
              <div
                key={i}
                className="flex flex-col items-center bg-blue-200 px-10 py-2 rounded-md ml-3"
              >
                <IconComponent className="text-5xl" />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div> */
}

{
  /* {/* <SkillIconsTailwindcssDark />
          <SkillIconsJavascript />
          <SkillIconsTypescript />
//           <SkillIconsReactDark /> */
}
//       </div>
//     </div> */}
//   );
// };

export default MyTools;
