import React from "react";
import { projectsData } from "../data/data";
import { BsGithub } from "react-icons/bs";
import { TbLivePhoto } from "react-icons/tb";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="dark:text-white text-blue-800 font-bold text-2xl dark:text-shadow my-5 underline">
        Project Showcase
      </h1>

      {projectsData.map((data) => (
        <div key={data.id} className="sm:w-3/6 mb-4 text-white">
          <div class="relative group flex flex-col items-center bg-slate-800  rounded-t-md">
            <img src={data.projectImage} className="w-80 h-80 rounded-t-md" />
            <a
              href={data.githubUrl}
              class="hidden absolute inset-0 items-center justify-center bg-white bg-opacity-80 text-center text-black group-hover:flex"
            >
              <p className="text-5xl">{React.createElement(BsGithub)}</p>
            </a>
          </div>
          <div className="flex justify-around py-3 bg-[#2f3963] items-center">
            <h2 className="w-2/3 text-l">{data.projectName}</h2>
            <Link to={data.url}>
              <button className="flex items-center">
                <p className="px-1">Live Demo</p>
                <p className="text-2xl">{React.createElement(TbLivePhoto)}</p>
              </button>
            </Link>
          </div>
          <hr className="w-1/6 m-auto bg-blue-500 h-1 border-0 rounded" />
        </div>
      ))}
    </div>
  );
};

export default Projects;
